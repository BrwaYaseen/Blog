import { SelectPost } from "@/db/schema";

export class ApiError extends Error {
  public status?: number;
  public details?: any;

  constructor(message: string, status?: number, details?: any) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

export const isApiError = (error: unknown): error is ApiError => {
  return error instanceof ApiError;
};

export const fetchWithRetry = async (
  url: string,
  options: RequestInit,
  retries = 3
): Promise<Response> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new ApiError(response.statusText, response.status);
    }
    return response;
  } catch (error) {
    if (retries > 0) {
      return fetchWithRetry(url, options, retries - 1);
    } else {
      if (isApiError(error)) {
        throw new ApiError(
          "Failed after multiple retries",
          error.status,
          error.details
        );
      }
      throw new ApiError("Failed after multiple retries");
    }
  }
};

export const fetchPosts = async (category?: string): Promise<SelectPost[]> => {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/api/posts${category ? `?category=${category}` : ""}`;

  try {
    const response = await fetchWithRetry(url, { cache: "no-cache" });
    return await response.json();
  } catch (error) {
    if (isApiError(error)) {
      throw new ApiError("Error Fetching Posts", error.status, error.details);
    } else {
      throw new Error("Error Fetching posts due to unknown reasons");
    }
  }
};
