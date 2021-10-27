import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Clone</title>
      </Head>

      <h1>Hello there</h1>

      {/* Header */}
      <Header />

    </div>
  );
}
