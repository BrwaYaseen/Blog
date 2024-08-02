import {
  pgTable,
  serial,
  text,
  varchar,
  timestamp,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["admin", "editor", "user"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  role: roleEnum("role").notNull().default("user"),
});

export const postsTable = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  thumbnail: varchar("thumbnail", { length: 255 }),
  content: text("content").notNull(),
  userId: integer("user_id")
    .references(() => users.id)
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
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
  content: text("content").notNull(),
  status: commentStatusEnum("status").notNull().default("pending"),
  postId: integer("post_id")
    .references(() => postsTable.id)
    .notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export type InsertComment = typeof commentsTable.$inferInsert;
export type SelectComment = typeof commentsTable.$inferSelect;
