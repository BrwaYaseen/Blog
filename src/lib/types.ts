import { z } from "zod";

export const postsSchema = z.object({
  title: z.string().min(1, "Project name is required"),
  thumbnail: z.string().url("Invalid URL"),
  content: z.string().min(1, "Content is required"),
  category: z.enum(["sport", "science", "story", "sidebar"]),
});

export type TPostsSchema = z.infer<typeof postsSchema>;
