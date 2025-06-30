import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import ItemCard from "./ItemCard";

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
          <ItemCard key={item.id} {...item} />
        ))}
      </ItemGrid>
    </Container>
  );
};

export default Wishlist;
