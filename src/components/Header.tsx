import Link from "next/link";
import { MdOutlineEmail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoLocationSharp } from "react-icons/io5";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GrYoutube } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header>
        <div className="relative z-10 bg-gray-900 text-white px-10 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex flex-row space-x-2">
              <MdOutlineEmail className="text-red-500" />
              <span>info@webmail.com</span>
            </div>
            <div className="flex space-x-2">
              <IoLocationSharp className="text-red-500" />
              <span>15/A, Nest Tower, NYC</span>
            </div>
          </div>
          <div className="flex space-x-6">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faDribbble} />
              </a>
            </div>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Add Listing
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white p-8 justify-between items-center grid grid-cols-4 gap-36 shadow">
          <div>
            <Image
              src="/imgs/logo.png"
              alt="Quarter Logo"
              className="h-8"
              width={150}
              height={100}
            />
          </div>
          <div className="space-x-4 col-span-2">
            <Link href="/" className="text-black font-medium">
              Home +
            </Link>
            <Link href="/about" className="text-black">
              About +
            </Link>
            <Link href="/shop" className="text-black">
              Shop +
            </Link>
            <Link href="/news" className="text-black">
              News +
            </Link>
            <Link href="/pages" className="text-black">
              Pages +
            </Link>
            <Link href="/contact" className="text-black">
              Contact
            </Link>
          </div>
          <div className="space-x-3 right-">
            <button className="px-4 py-4 text-lg shadow-2xl">
              <CiSearch />
            </button>
            <button className="px-4 py-4 text-lg shadow-2xl">
              <CiUser />
            </button>
            <button className="px-4 py-4 text-lg shadow-2xl">
              <IoCartOutline />
            </button>
          </div>
        </div>
      </header>
      <main className="relative bg-gray-100 min-h-screen justify-start text-start py-32 gap-10 grid grid-cols-2">
        <div className="text-center whitespace-pre-line ml-10">
          <div className="flex-row flex space-x-4 leading-3">
            <div className="pb-5">
              <FaHome className="text-red-500" />
            </div>
            <div>
              <p>Real Estate Agency</p>
            </div>
          </div>
          <h1 className="text-6xl text-start font-bold mb-8 whitespace-pre-line mr-24">
            Find Your Dream
            <br />
            House By Us
          </h1>
          <div className="grid">
            <div>
              <p className="text-gray-700 mb-8 text-start mr-44">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                <br /> sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            <button className="bg-red-500 text-white px-6 py-4 hover:bg-white hover:text-black">
              Make An Enquiry
            </button>
            <button className="bg-white shadow-2xl text-red-500 text-3xl border rounded-full py-5 px-5">
              <GrYoutube />
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/imgs/21.png"
            alt="House Illustration"
            className="mx-auto"
            width={500}
            height={500}
          />
        </div>
        <div className="absolute inset-0 shadow-slate-500 z-0 bg-black mt-[90vh] mx-10  py-6 px-24"></div>
      </main>
    </div>
  );
}
