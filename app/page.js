import Head from "next/head";
import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Schedule from "./_components/Schedule";
import RegistrationForm from "./_components/Registrastion";
import Footer from "./_components/Foooter";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          GWECCC 2025 - Global Water, Energy and Climate Change Congress
        </title>
        <meta
          name="description"
          content="Official site for the GWECCC 2025 event."
        />
      </Head>

      <Header />
      <main>
        <Banner />
         <About />
        <Schedule />
        <RegistrationForm /> 
        <Footer />
      </main>
    </>
  );
}
