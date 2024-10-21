import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-auto overflow-clip">
      <div className="max-w-7xl w-full">
        <h1 className="flex justify-center items-center">Resume Builder</h1>
        <Footer />
      </div>
    </main>
  );
}
