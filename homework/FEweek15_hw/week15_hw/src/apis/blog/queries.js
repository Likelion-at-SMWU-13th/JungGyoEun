import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createUser, readUser, updateUser, deleteUser } from "./axios";

// 회원가입
export const useCreateUser = () => {
  return useMutation({
    mutationFn: ({ username, password }) => createUser({ username, password }),
    onSuccess: () => {
      alert("환영합니다");
    },
  });
};

// 개인정보 수정
// 사용자 ID와 수정하려는 사용자의 정보를 받아 PUT 요청
// 수정 후 자동으로 사용자의 마이페이지 데이터를 새로고침해야하므로
// invalidateQueries를 사용해 myPage 데이터를 새로고침
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, username }) => updateUser({ userId, username }),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["myPage", variables.userId] });
    },
  });
};

// 마이페이지 조회
// 사용자 ID를 받아 GET 요청
// 데이터를 30초동안 신선한 상태로 유지하고, 그 이후에 다시 요청을 보내도록 설정
// 데이터 가져오기에 실패하면 최대 3번까지 재시도
export const useReadUser = (userId) => {
  return useQuery({
    queryKey: ["myPage", userId],
    queryFn: () => readUser(userId),
    staleTime: 30 * 1000,
    gcTime: 10 * 60 * 1000, // 10분 동안 캐시 보관 (회원 정보 삭제)
    retry: 3,
  });
};

// 회원 정보 삭제
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId) => deleteUser(userId),
    onSuccess: (_data, variables) => {
      alert("성공적으로 삭제되었습니다");
      queryClient.invalidateQueries({ queryKey: ["myPage", variables.userId] });
    },
  });
};
