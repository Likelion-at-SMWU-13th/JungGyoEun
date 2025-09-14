import useBookStore from "../store/store";
import * as S from "../styles/styled";

function WishItem({ wishItem }) {
  const removeBook = useBookStore((state) => state.removeBook);
  const increaseQuantity = useBookStore((state) => state.increaseQuantity);
  const decreaseQuantity = useBookStore((state) => state.decreaseQuantity);

  return (
    <S.WishItemContainer>
      {/* 책 사진 */}
      <S.Img src={wishItem.imageUrl} alt={wishItem.title} />

      {/* 책 정보 (제목, 저자, 가격) */}
      <S.Info>
        <S.Title>{wishItem.title}</S.Title>
        <S.Author>{wishItem.author}</S.Author>
        <S.Price>{Number(wishItem.price).toLocaleString()}원</S.Price>
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
        <S.DeleteBtn onClick={() => removeBook(wishItem.id)}>삭제</S.DeleteBtn>
      </S.QuantityControls>
    </S.WishItemContainer>
  );
}

export default WishItem;
