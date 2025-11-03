import * as S from "../styles/BookList.styles";

function BookList({ books, onWishListClick }) {
  return (
    <S.BookListContainer>
      <S.MainTitle>교보문고 종합 월간 베스트 TOP 10</S.MainTitle>
      {books.map((item) => (
        <S.BookItem key={item.id}>
          <S.BookImage src={item.imageUrl} alt={item.title} />

          <S.BookInfo>
            <S.BookTitle>{item.title}</S.BookTitle>
            <S.BookAuthor>{item.author}</S.BookAuthor>
            <S.BookPublisher>{item.publisher}</S.BookPublisher>
            <S.BookDate>{item.date}</S.BookDate>
            <S.BookPrice>{item.price}원</S.BookPrice>
          </S.BookInfo>

          <S.AddWishListBtn onClick={() => onWishListClick(item)}>
            add wishlist
          </S.AddWishListBtn>
        </S.BookItem>
      ))}
    </S.BookListContainer>
  );
}

export default BookList;
