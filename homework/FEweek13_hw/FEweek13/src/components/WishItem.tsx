import * as S from "../styles/WishItem.styles";
import useBookStore from "../store/store";
import type { WishlistItem } from "../store/store";

interface WishItemProps {
  wishItem: WishlistItem[];
}

function WishItem({ wishItem }: WishItemProps) {
  const removeBook = useBookStore((state) => state.removeBook);
  const increaseQuantity = useBookStore((state) => state.increaseQuantity);
  const decreaseQuantity = useBookStore((state) => state.decreaseQuantity);

  if (!wishItem || wishItem.length === 0) {
    return <S.Empty>아직 위시리스트에 담긴 책이 없어요!</S.Empty>;
  }

  // 총 금액 계산
  const totalPrice = wishItem.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <S.WishListContainer>
      <S.MainTitle>my wishlist 📚</S.MainTitle>
      {wishItem.map((wishItem) => (
        <S.WishItemContainer>
          {/* 책 사진 */}
          <S.Img src={wishItem.imageUrl} alt={wishItem.title} />

          {/* 책 정보 (제목, 저자, 가격) */}
          <S.Info>
            <S.Title>{wishItem.title}</S.Title>
            <S.Author>{wishItem.author}</S.Author>
            <S.Price>{wishItem.price}원</S.Price>
          </S.Info>

          {/* 수량 */}
          <S.QuantityControls>
            <S.IncreaseBtn onClick={() => increaseQuantity(wishItem.id)}>
              +
            </S.IncreaseBtn>
            <S.Quantity>{wishItem.quantity}</S.Quantity>
            <S.DecreaseBtn onClick={() => decreaseQuantity(wishItem.id)}>
              -
            </S.DecreaseBtn>
            <S.DeleteBtn onClick={() => removeBook(wishItem.id)}>
              삭제
            </S.DeleteBtn>
          </S.QuantityControls>
        </S.WishItemContainer>
      ))}
      <S.TotalPrice>총 금액: {totalPrice.toLocaleString()}원</S.TotalPrice>
    </S.WishListContainer>
  );
}
export default WishItem;
