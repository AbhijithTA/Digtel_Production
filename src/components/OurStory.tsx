"use client";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="relatvie flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white px-6 lg:px-20">
      {/* left side text */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-5xl font-semibold">Our Story</h2>
        <p className="text-lg leading-relaxed">
          In a world brimming with possibilities, we sprouted, seizing our
          destiny to create an extraordinary narrative - a tale that
          encapsulates laughter, tears, challenges, and triumphs.
        </p>
        <button className="border border-white px-6 py-3 text-lg mt-4 rounded-lg hover:bg-white transition">
          About Us →
        </button>
      </div>

      {/* right side */}
      <div className="relative lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        {/* video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[300px] md:w-[400px] lg:w-[500px] h-auto"
        >
          <source src="/rotatingGlobe.mp4" type="video/mp4" />
        </video>
        {/* floating stats */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute top-[15%] right-[10%] bg-gray-800/70 px-4 py-2 rounded-md text-center"
        >
          <h3 className="text-2xl font-semibold">100+</h3>
          <p className="text-lg">High-Impact Projects</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
          className="absolute bottom-[15%] left-[10%] bg-gray-800/70 px-4 py-2 rounded-md text-center"
        >
          <h3 className="text-xl font-semibold">200+</h3>
          <p className="text-sm">International Clients</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.4 }}
          className="absolute top-[60%] right-[5%] bg-gray-800/70 px-4 py-2 rounded-md text-center"
        >
          <h3 className="text-xl font-semibold">450+</h3>
          <p className="text-sm">Dedicated Experts</p>
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
          className="absolute bottom-[60%] left-[5%] bg-gray-800/70 px-4 py-2 rounded-md text-center"
        >
          <h3 className="text-xl font-semibold">100+</h3>
          <p className="text-sm">Brand Connections</p>
        </motion.div>
      </div>
    </section>
  );
}
