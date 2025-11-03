import useBookStore from "./store/store";
import WishItem from "./components/WishItem";
import BookList from "./components/BookList";
import { BOOKS } from "./data/books";
import type { Book } from "./store/store";

const App = () => {
  const addBook = useBookStore((state) => state.addBook);
  const wishlist = useBookStore((state) => state.wishlist);

  const handleAddWishList = (book: Book) => {
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
