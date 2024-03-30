import HomePage from "@/app/components/HomePage";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}
