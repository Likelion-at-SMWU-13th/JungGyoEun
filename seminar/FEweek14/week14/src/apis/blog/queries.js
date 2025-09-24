import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createPost, getPosts, deletePost, putPost } from "./axios";

export const useCreatePost = () => {
  return useMutation({
    mutationFn: ({ title, content }) => createPost({ title, content }),
  });
};

export const useGetPosts = (postId) => {
  return useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPosts(postId),
    enabled: !!postId,
    staleTime: 10 * 1000,
    gcTime: 60 * 1000,
  });
};

export const usePutPost = () => {
  return useMutation({
    mutationFn: ({ postId, title, content }) => {
      if (!postId) throw new Error("postId가 없습니다.");
      return putPost(postId, { title, content });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postId) => deletePost(postId),
    onSuccess: () => {
      alert("삭제가 완료되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["postList"] });
    },
  });
};
