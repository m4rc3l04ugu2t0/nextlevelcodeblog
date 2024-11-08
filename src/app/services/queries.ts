import { useQuery } from "@tanstack/react-query";
import { fetchPostImage, fetchPosts } from "./api";

export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      let posts = fetchPosts();
      return posts
    },
  })
}

export function usePostImage(postName: string) {
  return useQuery({
    queryKey: ['post_images', postName],
    queryFn: () => fetchPostImage(postName)
  })
}