import { useRouter } from "next/router";

export default function ProductGpu() {
  const router = useRouter();
  const { name, gpu } = router.query;
  return (
    <>
      <h3>Viewing product: {name} </h3>
      <p>with {gpu}</p>
    </>
  );
}
