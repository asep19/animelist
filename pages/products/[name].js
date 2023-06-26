import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <h1>Product:</h1>
      {router.query.name}
    </>
  );
}
