import { create } from "zustand";

const useBookStore = create((set) => ({
  // 위시리스트에 담긴 책들의 배열
  wishlist: [],

  // 책 추가
  addBook: (book) => {
    const title = book.title.trim();
    const author = book.author.trim();
    const price = book.price.trim();
    const imageUrl = book.imageUrl.trim();

    if (title && author && price && imageUrl) {
      set((state) => {
        // 이미 wishlist에 있는 책인지 확인
        const existingItem = state.wishlist.find(
          (wishItem) => wishItem.id === book.id
        );

        if (existingItem) {
          // 이미 있으면 수량만 증가
          const updatedList = state.wishlist.map((wishItem) =>
            wishItem.id === book.id
              ? { ...wishItem, quantity: (wishItem.quantity ?? 1) + 1 }
              : wishItem
          );
          return { wishlist: updatedList };
        } else {
          // 없으면 새로 추가
          return {
            wishlist: [
              ...state.wishlist,
              {
                id: Date.now(), // 고유 ID 생성
                title,
                author,
                price,
                imageUrl,
                isFavorite: false,
                quantity: 1, // 기본 수량 1
              },
            ],
          };
        }
      });
    }
  },

  // 책 삭제
  removeBook: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((wishItem) => wishItem.id !== id),
    })),

  // 수량 증가
  increaseQuantity: (id) =>
    set((state) => ({
      wishlist: state.wishlist.map((wishItem) =>
        wishItem.id === id
          ? { ...wishItem, quantity: (wishItem.quantity ?? 1) + 1 }
          : wishItem
      ),
    })),

  // 수량 감소
  decreaseQuantity: (id) =>
    set((state) => ({
      wishlist: state.wishlist.map((wishItem) =>
        wishItem.id === id
          ? {
              ...wishItem,
              quantity: Math.max(1, (wishItem.quantity ?? 1) - 1), // 최소 수량 1
            }
          : wishItem
      ),
    })),
}));

export default useBookStore;
