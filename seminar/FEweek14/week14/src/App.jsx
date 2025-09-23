import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  async function getPosts() {
    await fetch(`https://jsonplaceholder.typicode.com/posts`);
    // return await response.json();
    throw new Error("error test");
  }
  const {
    data: postsData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  // console.log("postsResult", postsData);
  if (isPending) return "로딩 중입니다...";
  if (isError) return "에러가 발생했습니다.";

  const posts = postsData ?? [];

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
