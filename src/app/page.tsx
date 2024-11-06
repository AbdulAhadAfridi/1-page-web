'use client'

import indoor from "@/app/public/indoor.jpg";
import frame4 from "@/app/public/frame4.jpeg";
import back from "@/app/public/back.jpg";
import Image from "next/image";
import Typewriter from "typewriter-effect"; 
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      {/* Header Section */}

      <Header/>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden max-w-screen-xl mx-auto px-6 xl:px-0 flex flex-col lg:flex-row">
  {/* Image on the left */}
  <div className="flex justify-center lg:w-1/2">
    <Image 
      className="w-full max-w-screen-xl" 
      width={1248}  
      height={512}  
      src={back}
      alt="Plant indoor background image"
    />
  </div>

  {/* Content on the right */}
  <div className="flex-col justify-center items-start p-6 text-white bg-black bg-opacity-40 lg:w-1/2 lg:items-end ">
    <h1 className=" text-2xl sm:text-4xl font-extrabold text-right sm:mr-12 mt-6 sm:mt-24 ">Transform Your Space with</h1>
    <h1 className="text-2xl sm:text-4xl font-extrabold text-right mr-20 sm:mr-40 sm:mt-4"> Indoor Plants</h1>


    <p className="mt-10 sm:mt-20 text-lg  text-center sm:text-right sm:mr-16 ">Explore a world of greenery and bring nature indoors.</p>
    <Link href="/">
      <button className=" mt-16 sm:mt-20 ml-28 sm:ml-56 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
        Shop Now
      </button>
    </Link>
  </div>
</section>

      
      {/* Benefits Section */}
      <section className="p-6 max-w-screen-xl mx-auto px-6 xl:px-0 mt-20">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
          {/* Left Side: Text about Plants */}
          <div className="lg:w-1/2">
            <h2 className="text-center lg:text-left font-extrabold text-3xl md:text-6xl  mr-4">
              Benefits of Indoor Plants
            </h2>
            <p className=" text-sm md:text-lg text-gray-700 mt-8 ml-2 lg:ml-0 text-center lg:text-left">
              Indoor plants are not only beautiful but also offer a range of
              health and environmental benefits. They help purify the air, reduce
              stress, and can improve your overall well-being. Whether you have a
              small apartment or a large house, adding a touch of greenery can
              enhance your living space.Indoor plants are a valuable addition to any home or office, enhancing aesthetic appeal while providing numerous health benefits. They improve air quality by filtering toxins and releasing oxygen, which creates a fresher environment. Furthermore, being surrounded by greenery can reduce stress and anxiety, promote mental well-being, and even boost productivity. Popular indoor plants like the Snake Plant, Peace Lily, and Spider Plant are not only low-maintenance but also adaptable to various lighting conditions. Proper care, including adequate lighting, appropriate watering, and occasional fertilization, is essential for their health and growth. Ultimately, indoor plants foster a vibrant, inviting atmosphere that connects people with nature, making them a worthwhile investment for any living space.
            </p>
          </div>
          {/* Right Side: Image */}
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <Image src={frame4} alt="Indoor plants" className="rounded-lg shadow-md" />
          </div>
        </div>
         
        {/* About Section */}
        <section className='flex max-w-screen-xl mx-auto text-center mt-10'>

        {/* Text Section */}
        <div className='w-full pl-5'>

          <h2 className=' text-3xl md:text-7xl font-semibold mt-6 md:mt-20'>About Plants</h2>
          
          <p className='text-gray-700  text-sm md:text-2xl  mt-8 md:mt-16 '>
          Indoor plants are nature is gift, bringing life and vibrancy to our homes and offices. They transform dull spaces into lush retreats, creating a serene atmosphere that promotes relaxation and well-being. With their diverse shapes, sizes, and colors, indoor plants like the elegant Peace Lily and the resilient Snake Plant add visual interest to any decor. Beyond aesthetics, these green companions purify the air, filtering out toxins and improving overall air quality. Research shows that simply being around plants can reduce stress and enhance mood, making them perfect allies for busy lives.

          The gentle presence of indoor plants can foster a sense of responsibility and care, as nurturing them becomes a rewarding and calming experience. Their ability to increase humidity also benefits our skin and respiratory health, especially in dry indoor environments. Low-maintenance options like Pothos and ZZ Plants are ideal for beginners, while more adventurous gardeners may enjoy the challenge of caring for Fiddle Leaf Figs or Monstera Deliciosa.

          Whether you have a sunny windowsill or a cozy corner with indirect light, there is an indoor plant suited to your space. Embracing indoor gardening can also promote mindfulness, encouraging us to slow down and appreciate the beauty of nature. With the right care and attention, indoor plants can thrive, enriching our lives with their beauty and benefits. In a world that often feels chaotic, indoor plants remind us of the tranquility and joy that nature can bring into our everyday lives.

          </p>
        </div>
      </section>
      <hr></hr>
        {/* Typewriter Effect */}
        <h1 className="font-extrabold text-center text-blue-900 shadow-sm mt-20 text-2xl sm:text-6xl">
          <Typewriter
            options={{
              strings: ["Dream Collection of Indoor Plants By,", "Abdul Ahad Afridi"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        {/* Center Image */}
        <div className="flex justify-center mt-20">
          <Image
            className="rounded-lg shadow-lg object-cover"
            src={indoor}
            alt="Indoor plants"
            width={1248}
            height={512}
          />
        </div>
      </section>

      {/* Gallery Section */}
     <section className="text-center py-8">
  <h2 className="text-2xl md:text-5xl font-semibold mb-8">Gallery</h2>
  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <img className="w-full h-96 object-cover rounded-md" src="https://hips.hearstapps.com/hmg-prod/images/potted-snake-plants-inside-a-beautiful-new-flat-or-royalty-free-image-1659026388.jpg" alt="Plant 1" />
    <img className="w-full h-96 object-cover rounded-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYO_YtQf6sJAQ9pixKBUbSFLwUG58_o3CRQ&s" alt="Plant 2" />
    <img className="w-full h-96 object-cover rounded-md" src="https://www.bhg.com/thmb/rfvOeq-Wnyp1oJoc_IrdZbWzMDI=/1427x0/filters:no_upscale():strip_icc()/african-violets-850943e3-19ef38afba92428eba6947370e11b0f4.jpg" alt="Plant 3" />
  </div>
</section>



      {/* Contact Section */}
      <Contact />
    </div>
  );
}

function Contact() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {/* Column 1: About Us */}
        <div>
          <h3 className="text-xl font-bold mb-4">About CHEAMIND</h3>
          <p className="text-lg mb-4">
            Indoor plants are living decorations that bring a touch of nature indoors, transforming any space into a serene, beautiful, and vibrant environment.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400">Contacts</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg">Email: <a href="mailto:hafizabdulahadkhanafridi@gmail.com" className="hover:text-blue-400">hafizabdulahadkhanafridi@gmail.com</a></p>
          <p className="text-lg">Phone: <a href="tel:+1234567890" className="hover:text-blue-400">03483992004</a></p>
          <div className="mt-4">
            <h4 className="font-semibold">Follow Us:</h4>
            <a href="#" className="hover:text-blue-400">Facebook</a> | 
            <a href="#" className="hover:text-blue-400 ml-2">Instagram</a> | 
            <a href="#" className="hover:text-blue-400 ml-2">Twitter</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 border-t border-gray-600 pt-4">
        <p className="text-sm">© 2024 Abdul All rights reserved.</p>
      </div>
    </footer>
  );
}
