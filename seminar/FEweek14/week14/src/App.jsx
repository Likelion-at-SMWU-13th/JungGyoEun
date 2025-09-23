import { useQuery } from "@tanstack/react-query";
import "./App.css";

function App() {
  async function getPosts() {
    const reponse = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return await reponse.json();
  }
  const { data: postsData, isPending } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  // console.log("postsResult", postsData);
  if (isPending) return "로딩 중입니다...";

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
