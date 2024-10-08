import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required").max(255, "Title is too long"),
  thumbnail: z.string().url("Invalid URL").min(1, "Thumbnail is required"),
  content: z.string().min(1, "Content is required"),
  category: z.enum(["sport", "science", "story", "sidebar"]),
});

export type TPostsSchema = z.infer<typeof postSchema>;
