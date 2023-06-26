export default function post({ post }) {
  return (
    <div>
      <h1>Post Id: {post.id} </h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}


export async function getStaticPaths() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
  const posts = await res.json()
  const paths = posts.map((post) => `/posts/${post.id}`)

  return {
    paths,
    fallback: false
  }

}

//Note ternyata parameter getServerSideProps() harus wajib pake "params"
//jangan yang lain karena bakalan undefined
export async function getStaticProps({ params }) {
  const id = params.post;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  //Note redirect ke 404 ketika user mengakses data yang tidak ada 
  if (!Object.keys(post).length) {
    return {
      notFound: true,
    }
  }
  return {
    props: { post },
  };
}
