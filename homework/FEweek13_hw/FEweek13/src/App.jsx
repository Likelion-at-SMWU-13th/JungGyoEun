import "./App.css";
import useBookStore from "./store/store";
import WishItem from "./components/WishItem";
import BookList from "./components/BookList";
import { BOOKS } from "./data/books";

const App = () => {
  const addBook = useBookStore((state) => state.addBook);
  const wishlist = useBookStore((state) => state.wishlist);

  const handleAddWishList = (book) => {
    addBook(book);
  };

  return (
    <div>
      <WishItem wishItem={wishlist} />
      <BookList books={BOOKS} onWishListClick={handleAddWishList} />{" "}
    </div>
  );
};

export default App;
