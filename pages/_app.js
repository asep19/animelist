import '@/styles/globals.css'
// import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  //v.1
  // return <Component {...pageProps} />;

  //v.2 --- ini settingan kalo semuanya mau layout yang sama
  // return (
  //   <Layout>
  //     <Component {...pageProps} />
  //   </Layout>
  // );

  //v.3 ---- settingan kalo mau page tertentu
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
