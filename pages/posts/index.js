import Link from "next/link";
// import { fetchApi } from "../../utils/fetchApi";

export default function Posts({ posts }) {
  return (
    <div>
      <h2>Posts API</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  // console.log(posts);

  return {
    props: { posts },
  };
}
