import Header from "@/components/Header";
import Home from "@/components/Home";
import Home1 from "@/components/Home1";
export default function Homme() {
  return (
    <div>
      {" "}
      <Header />
      {/* <main className="bg-white min-h-screen p-8">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">
            Find Your Dream House By Us
          </h1>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-lg">
            Make An Enquiry
          </button>
        </section>
        <section>
          <img src="/house.png" alt="House Illustration" className="mx-auto" />
        </section>
      </main> */}
      <Home />
      <Home1 />
    </div>
  );
}
