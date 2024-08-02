import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = () => {
  console.log("Running handleAuth");
  try {
    const { userId } = auth();
    if (!userId) {
      console.error("Unauthorized access attempt");
      throw new Error("Unauthorized");
    }
    console.log("User authenticated:", userId);
    return { userId };
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {
      console.log("Upload complete");
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
