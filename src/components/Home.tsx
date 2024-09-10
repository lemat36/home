import Image from "next/image";
import { FaTree } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import { GrShieldSecurity } from "react-icons/gr";
import { TbHomeHeart } from "react-icons/tb";

export default function () {
  return (
    <div className=" bg-white relative  h-screen grid-cols-2 py-24 grid">
      <div className="px-28">
        <div className=" bg-white shadow-slate-500 shadow-2xl rounded-xl p-4 ">
          <Image
            src="/imgs/63.jpg"
            width={200}
            height={200}
            alt="img"
            className="w-[100vh] h-[80vh]  rounded-xl"
          />
        </div>
      </div>
      <div>
        <button className="px-3 py-2 mb-4 bg-red-200 rounded-3xl text-red-500">
          {" "}
          about us
        </button>
        <p className="text-5xl text-start font-bold  ">
          The Leading Real Estate <br />
          Rental Marketplace <span className="text-red-500">.</span>
        </p>
        <p className="text-gray-400 text-start mt-8">
          Over 39,000 people work for us in more than 70 countries all over
          <br /> the This breadth of global coverage, combined with specialist
          <br /> services
        </p>
        <div className="grid-cols-2 grid">
          <div className="flex flex-col">
            <div className="flex flex-row mt-4 items-center">
              <button className="bg-red-100 rounded-full text-2xl px-4 py-4 w-14 text-red-500">
                <TbHomeHeart />
              </button>
              <h1 className="text-gray-400 ml-4">Smart Home Design</h1>
            </div>
            <div className="flex flex-row mt-4 items-center">
              <button className="bg-red-100 rounded-full text-2xl px-4 py-4 w-14 text-red-500">
                <GiLifeSupport />
              </button>
              <h1 className="text-gray-400 ml-4">Exceptional Lifestyle</h1>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row mt-4 items-center">
              <button className="bg-red-100 rounded-full text-2xl px-4 py-4 w-14 text-red-500">
                <FaTree />
              </button>
              <h1 className="text-gray-400 ml-4">Beautiful Scene Around</h1>
            </div>
            <div className="flex flex-row mt-4 items-center">
              <button className="bg-red-100 rounded-full text-2xl px-4 py-4 w-14 text-red-500">
                <GrShieldSecurity />
              </button>
              <h1 className="text-gray-400 ml-4">Complete 24/7 Security</h1>
            </div>
          </div>
        </div>
        <div className="py-6 bg-red-200 border-l-4 border-red-500 text-start mt-4 ">
          <p className="ml-4">
            "Enimad minim veniam quis nostrud exercitation
            <br />
            llamco laboris. Lorem ipsum dolor sit amet"{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
