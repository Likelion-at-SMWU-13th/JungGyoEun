import { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      <h3>🛒 위시리스트</h3>

      <div>
        <button onClick={() => setCategory("전체")}>전체</button>
        <button onClick={() => setCategory("상의")}>상의</button>
        <button onClick={() => setCategory("하의")}>하의</button>
        <button onClick={() => setCategory("가방")}>가방</button>
        <button onClick={() => setCategory("악세서리")}>악세서리</button>
        <button onClick={() => setCategory("신발")}>신발</button>
      </div>

      <div>
        {filteredList.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.itemName} width="100" />
            <h4>{item.itemName}</h4>
            <p>{item.brand}</p>
            <p>{item.price}원</p>
            <p>{item.memo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
