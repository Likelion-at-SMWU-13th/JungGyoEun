import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fdfcfc;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  border-bottom: 3px solid #222;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
`;

const FilterButtons = styled.div`
  margin-bottom: 2rem;

  button {
    background-color: #ffe6e6;
    border: none;
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    margin: 0 0.5rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #ffcaca;
    }
  }
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.07);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.015);
  }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: 1rem;
`;

const ItemName = styled.h3`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  color: #333;
`;

const ItemBrand = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #e67e22;
`;

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [category, setCategory] = useState("전체");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/wishlist")
      .then((res) => {
        setWishlist(res.data);
        setFilteredList(res.data);
      })
      .catch((err) => {
        console.error("에러 발생:", err);
      });
  }, []);

  useEffect(() => {
    if (category === "전체") {
      setFilteredList(wishlist);
    } else {
      const filtered = wishlist.filter((item) => item.category === category);
      setFilteredList(filtered);
    }
  }, [category, wishlist]);

  return (
    <Container>
      <Title>🛒 위시리스트 🪽</Title>

      <FilterButtons>
        <button onClick={() => setCategory("전체")}>전체</button>
        <button onClick={() => setCategory("상의")}>상의</button>
        <button onClick={() => setCategory("하의")}>하의</button>
        <button onClick={() => setCategory("가방")}>가방</button>
        <button onClick={() => setCategory("악세서리")}>악세서리</button>
        <button onClick={() => setCategory("신발")}>신발</button>
      </FilterButtons>

      <ItemGrid>
        {filteredList.map((item) => (
          <Card key={item.id}>
            <ItemImage src={item.imageUrl} alt={item.itemName} />
            <CardBody>
              <ItemName>{item.itemName}</ItemName>
              <ItemBrand>{item.brand}</ItemBrand>
              <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
            </CardBody>
          </Card>
        ))}
      </ItemGrid>
    </Container>
  );
};

export default Wishlist;
