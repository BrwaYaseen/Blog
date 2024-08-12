"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { SelectPost, InsertPost } from "@/db/schema";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FileUpload from "@/components/file-upload";
import { useUser } from "@clerk/nextjs";
import toast from "react-hot-toast";
import { postSchema } from "@/lib/types";
import {
  createPost,
  deletePost,
  fetchPost,
  fetchPosts,
  updatePost,
} from "@/app/api/posts";
import Editor from "@/components/editor";

const PostPage = () => {
  const [posts, setPosts] = useState<SelectPost[]>([]);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const { user, isLoaded } = useUser();
  const [isAdmin, setIsAdmin] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    control,
  } = useForm<InsertPost>({
    resolver: zodResolver(postSchema),
  });

  useEffect(() => {
    const syncUserRole = async () => {
      try {
        const response = await fetch("/api/sync-user-role");
        const data = await response.json();
        if (data.role === "admin") {
          setIsAdmin(true);
          loadPosts();
        } else {
          setIsAdmin(false);
        }
      } catch (error) {
        console.error("Error syncing user role:", error);
        setIsAdmin(false);
      }
    };

    if (isLoaded && user) {
      const userRole = user.publicMetadata.role as string | undefined;
      if (userRole === "admin") {
        setIsAdmin(true);
        loadPosts();
      } else {
        syncUserRole();
      }
    }
  }, [isLoaded, user]);

  const loadPosts = async () => {
    try {
      const data = await fetchPosts();
      setPosts(data);
    } catch (error) {
      console.error("Error loading posts:", error);
      toast.error("Failed to load posts");
    }
  };

  const onSubmit = async (data: InsertPost) => {
    try {
      const postData = {
        ...data,
        content:
          typeof data.content === "string"
            ? data.content
            : JSON.stringify(data.content),
      };

      if (editingPostId !== null) {
        await updatePost(editingPostId, postData);
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post.id === editingPostId ? { ...post, ...postData } : post
          )
        );
        toast.success("Post updated successfully");
      } else {
        const newPost = await createPost(postData);
        if (newPost) {
          setPosts((prevPosts) => [newPost, ...prevPosts]);
          toast.success("Post created successfully");
        }
      }
      reset();
      setEditingPostId(null);
    } catch (error) {
      console.error("Error submitting post:", error);
      toast.error("Failed to submit post");
    }
  };

  const handleEdit = async (id: number) => {
    try {
      const post = await fetchPost(id);
      if (!post) throw new Error("Post not found");

      setValue("title", post.title);
      setValue("content", post.content);
      setValue("thumbnail", post.thumbnail);
      setValue("category", post.category);
      setEditingPostId(id);
    } catch (error) {
      console.error("Error fetching post:", error);
      toast.error("Failed to fetch post for editing. Please try again.");
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deletePost(id);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
      toast.success("Post deleted successfully");
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Failed to delete post");
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <div>Unauthorized. Admin access required.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold flex justify-center mb-6">
        {editingPostId ? "Edit Post" : "Create Post"}
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          {...register("title")}
          placeholder="Post Title"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.title && <span>{errors.title.message}</span>}

        <Controller
          name="content"
          control={control}
          render={({ field }) => <Editor onChange={field.onChange} />}
        />
        {errors.content && <span>{errors.content.message}</span>}

        <div>
          <FileUpload
            endpoint="imageUploader"
            onChange={(url) => {
              setValue("thumbnail", url || "");
            }}
          />
          {errors.thumbnail && <span>{errors.thumbnail.message}</span>}
          {control._formValues.thumbnail && (
            <Image
              src={control._formValues.thumbnail}
              alt="Thumbnail preview"
              width={100}
              height={100}
              className="mt-2 rounded-md"
            />
          )}
        </div>
        <div>
          <label htmlFor="category" className="block mb-2 font-semibold">
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="sport">Sport</option>
            <option value="science">Science</option>
            <option value="story">Story</option>
            <option value="sidebar">Sidebar</option>
          </select>
          {errors.category && <span>{errors.category.message}</span>}
        </div>
        <Button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          {editingPostId ? "Update Post" : "Create Post"}
        </Button>
      </form>

      <ul className="mt-8 space-y-6">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-6 border border-gray-200 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            {post.thumbnail && (
              <Image
                src={post.thumbnail}
                alt="Thumbnail"
                width={50}
                height={50}
                className="w-24 h-24 object-cover rounded-lg shadow-sm"
              />
            )}
            <div className="flex items-center gap-3 mt-6">
              <Button
                onClick={() => handleEdit(post.id)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-150 ease-in-out"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(post.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-150 ease-in-out"
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostPage;
