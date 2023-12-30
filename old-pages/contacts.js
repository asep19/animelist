import Link from "next/link";

export default function TopAnime() {
  return (
    <>
      <h2>My contact is aseprendi488@gmail.com</h2>
      <Link href="/">Go back to homepage</Link>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
