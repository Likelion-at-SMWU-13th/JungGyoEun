import styled from "styled-components";

export const MainTitle = styled.h2`
  text-align: center;
  font-weight: 700;
  margin: 20px 0;
`;

export const BookListContainer = styled.div`
  width: 70%;
  margin: 30px auto;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
`;

export const BookItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const BookImage = styled.img`
  width: 90px;
  height: auto;
  border-radius: 4px;
  object-fit: cover;
  margin-right: 20px;
`;

export const BookInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BookTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 20px;
  font-weight: bold;
`;

export const BookAuthor = styled.p`
  margin: 0 0 6px 0;
  font-size: 16px;
  font-weight: 600;
  color: #555;
`;
export const BookPublisher = styled.p`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #777;
`;
export const BookDate = styled.p`
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 400;
  color: #888;
`;

export const BookPrice = styled.p`
  margin: 0;
  font-size: 15px;
  color: rgb(23, 14, 128);
  font-weight: 600;
`;

export const AddWishListBtn = styled.button`
  padding: 8px 12px;
  background-color: #0e8044;
  color: #fff;
  border: 1px solid #0e8044;
  border-radius: 4px;
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: rgb(224, 253, 238);
    color: #0e8044;
  }
`;
