import {
  pgTable,
  serial,
  varchar,
  timestamp,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "editor", "user"]);

export const usersTable = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  role: roleEnum("role").notNull().default("user"),
});

export const categoryEnum = pgEnum("category", [
  "sport",
  "science",
  "story",
  "sidebar",
]);

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  thumbnail: varchar("thumbnail", { length: 1000 }).notNull(),
  content: varchar("content").notNull(),
  category: categoryEnum("category").notNull().default("story"),
  userId: integer("user_id")
    .references(() => usersTable.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});

export type InsertPost = typeof postsTable.$inferInsert;
export type SelectPost = typeof postsTable.$inferSelect;

export const commentStatusEnum = pgEnum("comment_status", [
  "approved",
  "pending",
]);

export const commentsTable = pgTable("comments", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull(),
  content: varchar("content").notNull(),
  status: commentStatusEnum("status").notNull().default("pending"),
  postId: integer("post_id")
    .references(() => postsTable.id)
    .notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export type InsertComment = typeof commentsTable.$inferInsert;
export type SelectComment = typeof commentsTable.$inferSelect;
