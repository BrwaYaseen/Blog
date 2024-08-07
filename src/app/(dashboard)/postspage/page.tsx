/* "use client";

import FileUpload from "@/components/file-upload";
import QuillEditor from "@/components/QuillEditor";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const postsSchema = z.object({
  title: z.string().min(1, "Project name is required"),
  thumbnail: z.string().url("Invalid URL"),
  content: z.string().min(1, "Content is required"),
  category: z.enum(["sport", "science", "story", "sidebar"]),
});

type TPostsSchema = z.infer<typeof postsSchema>;

export default function PostsPage() {
  const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
    setError,
  } = useForm<TPostsSchema>({
    resolver: zodResolver(postsSchema),
  });

  const onSubmit = async (data: TPostsSchema) => {
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("title")}
        placeholder="Project name"
        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {errors.title && <p>{errors.title.message}</p>}

      <div>
        <FileUpload
          endpoint="imageUploader"
          onChange={(url) => {
            if (url) {
              setValue("thumbnail", url);
              setThumbnailUrl(url);
            }
          }}
        />
        {thumbnailUrl && (
          <Image
            src={thumbnailUrl}
            alt="Thumbnail preview"
            width={100}
            height={100}
            className="mt-2 rounded-md"
          />
        )}
        {errors.thumbnail && <p>{errors.thumbnail.message}</p>}
      </div>

      <QuillEditor value="" onChange={(value) => setValue("content", value)} />
      {errors.content && <p>{errors.content.message}</p>}

      <div className="flex items-center space-x-2">
        <span>Category:</span>
        <Select
          onValueChange={(value) =>
            setValue("category", value as TPostsSchema["category"])
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sport">Sport</SelectItem>
            <SelectItem value="science">Science</SelectItem>
            <SelectItem value="story">Story</SelectItem>
            <SelectItem value="sidebar">Sidebar</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {errors.category && <p>{errors.category.message}</p>}

      <Button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Create Post
      </Button>
    </form>
  );
}
 */
