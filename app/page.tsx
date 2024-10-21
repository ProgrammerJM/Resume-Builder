import Footer from "../components/Footer";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col mx-20 my-20 overflow-clip">
      <div className="max-w-7xl w-full">
        <h1>
          <span className="text-5xl font-bold">Resume Builder</span>
        </h1>
        <p>
          Create your resume based on Harvard Template. Generate resume in PDF
          format in just a few clicks.
        </p>
        {/* <Personal /> */}

        <Layout />
        <Footer />
      </div>
    </main>
  );
}
