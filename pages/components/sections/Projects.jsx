import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import { FaGithub , FaLink} from 'react-icons/fa';

const Projects = () => {
  const [view, setView] = useState(false);
  const numRef = useRef(null);

  const toggleAnimation = (entries) => {
    if (entries[0]?.isIntersecting) {
      setView(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (numRef.current) {
      observer.observe(numRef.current);
    }

    return () => {
      if (numRef.current) {
        observer.unobserve(numRef.current);
      }
    };
  }, []);

  const { scrollYProgress } = useScroll();
  const toRight = useTransform(scrollYProgress, [0, 1], [-200, 200]);
  const toLeft = useTransform(scrollYProgress, [0, 1], [-100, -2000]);

  const NumberFloat = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0.1 },
      number: n,
      delay: 0,
      config: { mass: 1, tension: 30, friction: 10 },
    });
    return (
      view && (
        <animated.div className="md:text-8xl sm1:text-6xl sm2:text-7xl">
          {number.to((n) => n.toFixed(1))}
        </animated.div>
      )
    );
  };

  const NumberInt = ({ n }) => {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 0,
      config: { mass: 1, tension: 30, friction: 10 },
    });
    return (
      view && (
        <animated.div className="md:text-8xl sm1:text-6xl sm2:text-7xl">
          {number.to((n) => n.toFixed(0))}
        </animated.div>
      )
    );
  };

  return (
    <div className="text-white bg-black">
      {/* Section Header */}
      <motion.div
        className="font-extrabold tracking-tighter text-white font-mine2 md:text-10xl sm1:text-8xl"
        style={{ x: toRight }}
      >
        <span className="font-mine2">
          FEATURED FEATURED FEATURED FEATURED
        </span>
      </motion.div>

      <motion.div
        style={{ x: toLeft }}
        className="tracking-tighter text-white sm1:mt-0 md:mt-4 md:text-10xl sm1:text-8xl"
      >
        <span className="font-mine2">
          WORK WORK WORK WORK
        </span>
      </motion.div>

      {/* Project List */}
      <div className="m-auto mt-4 font-bold md:text-lg sm1:w-3/5 md:w-2/5 lg:w-1/5 sm1:text-md">
        <div className="text-xl text-center text-blue-400">Projects</div>
      </div>

      {/* Project 1 */}
      <div className="relative mt-20">
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <Image
              src="/media/projects/portfolio/portfolio2.png"
              alt="Portfolio 2"
              width={600}
              height={1800}
              className="relative z-30 transition duration-300 ease-in-out transform -translate-x-1/2 cursor-pointer left-1/2 lg:hover:opacity-0"
            />
            <Image
              src="/media/projects/portfolio/portfolio3.png"
              alt="Portfolio 3"
              width={600}
              height={1800}
              className="absolute top-0 z-20 transform -translate-x-1/2 sm1:hidden lg:block left-1/2"
            />
          </div>
          <div className="whitespace-nowrap font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter">
            01.
          </div>
        </div>

        <div className="relative flex mt-0 sm1:flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pt-16 pl-16">
  <div className="relative w-full pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/z7LEfSPAE5o?si=NNX6Uhn7bq4q0SIB"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>

          <div className="bg-cover sm1:w-full lg:w-1/2">
            <div className="m-auto mt-16 mb-16 text-white sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm">
              <div className="flex justify-between">
                <a href="https://chimerical-pastelito-a94a3f.netlify.app/" target="_blank"><p className="text-5xl font-extrabold underline underline-offset-8">
                  GamETHa <span className="text-blue-400">Gaming Platform</span>
                </p>
                </a>
                <a
                  href="https://github.com/riz-adnan/GamETHa"
                  target="_blank"
                  className="hover:scale-[1.2] transition ease-in-out duration-300"
                >
                  <FaGithub className="text-4xl" />
                </a>
              </div>
              <p className="mt-12">
              GamETHa is a Web 3 gaming platform where developers can upload both single-player and multiplayer games. Users can buy, play, and stream games, all while leveraging the power of blockchain and decentralized technologies.
               </p>
               <p className="mt-10 text-2xl font-extrabold text-blue-400">Links</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <a href="https://github.com/riz-adnan/GamETHa"><p className="p-2 mt-4 ml-2 text-blue-400 bg-white/20 rounded-xl">Github</p></a>
                <a href="https://chimerical-pastelito-a94a3f.netlify.app/"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Live Link</p></a>
                <a href="https://devpost.com/software/gametha-yk4ln7"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Devpost</p></a>
                {/* Add other tech stacks here */}
              </div>
              <p className="mt-10 text-2xl font-extrabold text-blue-400">Tech stack used:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Solidity</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Theta Edge</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">React</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Python</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Stability Diffusion</p>
                {/* Add other tech stacks here */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="relative mt-20">
        <div className="relative flex items-center justify-center">
        
          <div className="relative">
            <Image
              src="/media/images/Trade1.png"
              alt="Portfolio 2"
              width={600}
              height={1800}
              className="relative z-30 transition duration-300 ease-in-out transform -translate-x-1/2 cursor-pointer left-1/2 lg:hover:opacity-0"
            />
            <Image
              src="/media/images/Trade3.png"
              alt="Portfolio 3"
              width={600}
              height={1800}
              className="absolute top-0 z-20 transform -translate-x-1/2 sm1:hidden lg:block left-1/2"
            />
          </div>
          <div className="whitespace-nowrap font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter">
            02.
          </div>
          
        </div>

        <div className="relative flex mt-0 sm1:flex-col lg:flex-row">
          
          <div className="bg-cover sm1:w-full lg:w-1/2">
            <div className="m-auto mt-16 mb-16 text-white sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm">
              <div className="flex justify-between">
                <a href="https://free-trade-bot.netlify.app/" target='_blank'><p className="text-5xl font-extrabold underline underline-offset-8">
                  High Frequency <span className="text-blue-400">Trade Bot</span>
                </p>
                </a>
                <a
                  href="https://github.com/riz-adnan/TradeBot"
                  target="_blank"
                  className="hover:scale-[1.2] transition ease-in-out duration-300"
                >
                  <FaGithub className="text-4xl" />
                </a>
              </div>
              <p className="mt-12">
              Our Trade Bot is a powerful, real-time trading tool that leverages cutting-edge algorithms and machine learning to analyze market trends, identify potential opportunities, and execute trades with precision. Designed for both novice and experienced traders, the bot aims to maximize profits while minimizing risks. This README will guide you through the setup, features, and usage, helping you harness the full potential of our advanced trading system. The Trade bot generates ROI as high as 25% in 4 months. The project won 1st prize with award prize of 500$(43k INR) in Machine Learning Hackathon by Blaze.ai</p>
              <p className="mt-10 text-2xl font-extrabold text-blue-400">Links:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <a href="https://github.com/riz-adnan/TradeBot"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Github</p></a>
                <a href="https://free-trade-bot.netlify.app/"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Live Link</p></a>
                

                {/* Add other tech stacks here */}
              </div>
              <p className="mt-10 text-2xl font-extrabold text-blue-400">Tech stack used:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Python</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Next.js</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Machine Learning</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Hugging Face</p>

                {/* Add other tech stacks here */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-16 pr-16">
  <div className="relative w-full pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/SzJ85-m_bYw?si=5wKfhu0ODOla4ywL"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="relative mt-20">
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <Image
              src="/media/images/meta1.jpeg"
              alt="Portfolio 2"
              width={600}
              height={1800}
              className="relative z-30 transition duration-300 ease-in-out transform -translate-x-1/2 cursor-pointer left-1/2 lg:hover:opacity-0"
            />
            <Image
              src="/media/images/meta2.jpeg"
              alt="Portfolio 3"
              width={600}
              height={1800}
              className="absolute top-0 z-20 transform -translate-x-1/2 sm1:hidden lg:block left-1/2"
            />
          </div>
          <div className="whitespace-nowrap font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter">
            03.
          </div>
        </div>

        <div className="relative flex mt-0 sm1:flex-col lg:flex-row">
          <div className="sm1:w-full lg:w-1/2 pt-16 pl-32">
          <img src="/media/images/tiru.jpg" alt="..." className='h-100' style={{ width: '600px' }} />

          </div>
          <div className="bg-cover sm1:w-full lg:w-1/2">
            <div className="m-auto mt-16 mb-16 text-white sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm">
              <div className="flex justify-between">
                <a href="https://tirutsava.com" target='_blank'><p className="text-5xl font-extrabold underline underline-offset-8">
                  Metaverse <span className="text-blue-400">Website</span>
                </p>
                </a>
                
              </div>
              <p className="mt-12">
               As the Head of Web Development team of Tirutsava, annual technocultural fest of IIT Tirupati, delivered a fest website for registrations, purchase and promotions. Along with that developed a metaverse replica of IIT Tirupati campus in fest themes. Got mentions in 6+ daily Indian Newspapers.</p>
               <p className="mt-10 text-2xl font-extrabold text-blue-400">Links:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <a href="tirutsava.com"><p className="p-2 mt-4 ml-2 text-blue-400 bg-white/20 rounded-xl">Fest Website</p></a>
                <a href="3d.tirutsava.com"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Metaverse</p></a>
                <a href="https://linktr.ee/metaverse_tirutsava"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Newspaper Links</p></a>
               
                {/* Add other tech stacks here */}
              </div>
              <p className="mt-10 text-2xl font-extrabold text-blue-400">Tech stack used:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Next.js</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">ThreeJs</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">React Three Fiber</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">fastAPI</p>
                {/* Add other tech stacks here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20">
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <Image
              src="/media/images/chain1.png"
              alt="Portfolio 2"
              width={600}
              height={1800}
              className="relative z-30 transition duration-300 ease-in-out transform -translate-x-1/2 cursor-pointer left-1/2 lg:hover:opacity-0"
            />
            <Image
              src="/media/images/chain2.png"
              alt="Portfolio 3"
              width={600}
              height={1800}
              className="absolute top-0 z-20 transform -translate-x-1/2 sm1:hidden lg:block left-1/2"
            />
          </div>
          <div className="whitespace-nowrap font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter">
            04.
          </div>
        </div>

        <div className="relative flex mt-0 sm1:flex-col lg:flex-row">
         
          <div className="bg-cover sm1:w-full lg:w-1/2">
            <div className="m-auto mt-16 mb-16 text-white sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm">
              <div className="flex justify-between">
               <a href="https://prakharmosesok.github.io/ChainSphere/" target="_blank"> <p className="text-5xl font-extrabold underline underline-offset-8">
                  ChainSphere <span className="text-blue-400">News Portal</span>
                </p>
                </a>
                <a
                  href="https://github.com/riz-adnan/ChainSphere"
                  target="_blank"
                  className="hover:scale-[1.2] transition ease-in-out duration-300"
                >
                  <FaGithub className="text-4xl" />
                </a>
              </div>
              <p className="mt-12">
              Chain Sphere is an innovative e-commerce/e-marketplace leveraging Web 3 technology, MetaMask, Rootstock, and the Gemini API. This platform allows users to buy and sell news or inside information. It aims to provide a secure, transparent, and reliable marketplace where information is not only traded but also verified and rated by both users and AI. </p>
              <p className="mt-10 text-2xl font-extrabold text-blue-400">Links:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <a href="https://github.com/riz-adnan/ChainSphere"><p className="p-2 mt-4 ml-2 text-blue-400 bg-white/20 rounded-xl">Github</p></a>
                <a href="https://prakharmosesok.github.io/ChainSphere/"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Live Link</p></a>
                <a href="https://devpost.com/software/chainsphere-nbwpxg"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Devpost</p></a>
                
                {/* Add other tech stacks here */}
              </div>
              <p className="mt-10 text-2xl font-extrabold text-blue-400">Tech stack used:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Next.js</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Solidity</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">RootStock</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Express</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Python</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">GenAI</p>
                {/* Add other tech stacks here */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-16 pr-16">
  <div className="relative w-full pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/awPF2BdwetM?si=Sn6ebMWxlKHNirDH"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>
        </div>
      </div>
      <div className="relative mt-20">
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <Image
              src="/media/images/therapify1.png"
              alt="Portfolio 2"
              width={600}
              height={1800}
              className="relative z-30 transition duration-300 ease-in-out transform -translate-x-1/2 cursor-pointer left-1/2 lg:hover:opacity-0"
            />
            <Image
              src="/media/images/therapify2.png"
              alt="Portfolio 3"
              width={600}
              height={1800}
              className="absolute top-0 z-20 transform -translate-x-1/2 sm1:hidden lg:block left-1/2"
            />
          </div>
          <div className="whitespace-nowrap font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter">
            05.
          </div>
        </div>

        <div className="relative flex mt-0 sm1:flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 pt-16 pl-16">
  <div className="relative w-full pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/aYinIRS1Vf8?si=V_iY86tl8qkuwJnK"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>

          <div className="bg-cover sm1:w-full lg:w-1/2">
            <div className="m-auto mt-16 mb-16 text-white sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm">
              <div className="flex justify-between">
               <a href="https://therapify-free.netlify.app/" target="_blank"> <p className="text-5xl font-extrabold underline underline-offset-8">
                  Therapify <br/><span className="text-blue-400">Free Therapy Session</span>
                </p>
                </a>
                <a
                  href="https://github.com/riz-adnan/Therapify"
                  target="_blank"
                  className="hover:scale-[1.2] transition ease-in-out duration-300"
                >
                  <FaGithub className="text-4xl" />
                </a>
              </div>
              <p className="mt-12">
              A cutting-edge therapeutic experience combining the power of a fine-tuned LLM (Language Learning Model) with immersive 3D interaction. Users can engage in meaningful conversations with an AI therapist through text or enjoy an interactive experience with a 3D therapist model.</p>
              <p className="mt-10 text-2xl font-extrabold text-blue-400">Tech stack used:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <a href="https://github.com/riz-adnan/Therapify"><p className="p-2 mt-4 ml-2 text-white bg-white/20 rounded-xl">Github</p></a>
                <a href="https://therapify-free.netlify.app/"><p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Live Link</p></a>
                
               {/* Add other tech stacks here */}
              </div>
              <p className="mt-10 text-2xl font-extrabold text-blue-400">Tech stack used:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">React</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Python</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">AI Finetuning</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">ThreeJs</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">React Three Fiber</p>
                {/* Add other tech stacks here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-20">
        <div className="relative flex items-center justify-center">
          <div className="relative">
            <Image
              src="/media/images/RoadWise1.png"
              alt="Portfolio 2"
              width={600}
              height={1800}
              className="relative z-30 transition duration-300 ease-in-out transform -translate-x-1/2 cursor-pointer left-1/2 lg:hover:opacity-0"
            />
            <Image
              src="/media/images/RoadWise2.png"
              alt="Portfolio 3"
              width={600}
              height={1800}
              className="absolute top-0 z-20 transform -translate-x-1/2 sm1:hidden lg:block left-1/2"
            />
          </div>
          <div className="whitespace-nowrap font-extrabold text-center sm1:text-[20rem] md:text-[30rem] lowercase text-white tracking-tighter">
            06.
          </div>
        </div>

        <div className="relative flex mt-0 sm1:flex-col lg:flex-row">
          
          <div className="bg-cover sm1:w-full lg:w-1/2">
            <div className="m-auto mt-16 mb-16 text-white sm1:p-8 md:p-20 lg:p-4 xl:p-20 sm1:w-full lg:w-4/5 rounded-3xl bg-black/20 backdrop-filter backdrop-blur-sm">
              <div className="flex justify-between">
                <a href="https://github.com/riz-adnan/RoadWise" target="_blank"><p className="text-5xl font-extrabold underline underline-offset-8">
                  RoadWise <br/> <span className="text-blue-400">Road Route Planner</span>
                </p>
                </a>
                <a
                  href="https://github.com/riz-adnan/RoadWise"
                  target="_blank"
                  className="hover:scale-[1.2] transition ease-in-out duration-300"
                >
                  <FaGithub className="text-4xl" />
                </a>
              </div>
              <p className="mt-12">
              A powerful tool for road route planning and optimization, built with cutting-edge technologies like GeoServer WMS, Dijkstra's algorithm, and the Haversine formula. Roadwise allows users to map out roads, mark restricted areas, and find the most efficient route between key points on a custom map. Upcoming features include AI and machine learning integration for automated point detection.
               </p>
               <p className="mt-10 text-2xl font-extrabold text-blue-400">Link:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <a href="https://github.com/riz-adnan/RoadWise"><p className="p-2 mt-4 ml-2 text-blue-400 bg-white/20 rounded-xl">Github</p></a>
                <a href="https://drive.google.com/file/d/1wsoqvmhNkwZfAJGvp5iui5ZWHChsJ7-m/view?usp=sharing"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Report</p></a>
                <a href="https://docs.google.com/presentation/d/1RKJL6TuJo0t_PGusnXo_NRzyydhy7HKm/edit?usp=sharing&ouid=109693586806775075371&rtpof=true&sd=true"><p className="p-2 mt-2 ml-2 text-blue-400 bg-white/20 rounded-xl">Presentation</p></a>
                {/* Add other tech stacks here */}
              </div>
              <p className="mt-10 text-2xl font-extrabold text-blue-400">Tech stack used:</p>
              <div className="flex flex-wrap mt-4 -ml-2 space-x-2 space-y-2">
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">React</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">GeoServer WMS</p>
                <p className="p-2 mt-2 ml-2 text-white bg-white/20 rounded-xl">Algorithms</p>
                {/* Add other tech stacks here */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 pt-16 pr-16">
  <div className="relative w-full pb-[56.25%] h-0"> {/* 16:9 aspect ratio */}
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      src="https://www.youtube.com/embed/VyvUpMrRNwg?si=GT6ycsyUY4RqRpuN"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>

        </div>
      </div>
      <div className='flex justify-center mb-10'>
        <h1 className="text-4xl text-blue-500 font-extrabold"> Minor Projects</h1>
       </div>
       <div className='pl-20 justify-items-center'>
        <h1 className='mb-5'> <a href="https://github.com/riz-adnan/Landslide-Mapping-Using-Deep-Learning" className='text-white text-2xl underline'>Landslide Mapping in Multispectral Satellite Image using Deep Learning <FaLink/></a> </h1> 
        <h1 className='mb-5'> <a href="https://github.com/riz-adnan/LawGPT" className='text-2xl underline'>Free Legal help with use of RAG <FaLink/></a> </h1>
        <h1 className='mb-5'> <a href="https://github.com/riz-adnan/Navigation-System" className='text-2xl underline'>WMS based Navigation System <FaLink/></a> </h1>
        <h1 className='mb-5'> <a href="https://github.com/riz-adnan/Web-TIF-File-Meta-Data-Extractor" className='text-2xl underline'> TIF File Meta Data Extractor <FaLink/></a> </h1>
        <h1 className='mb-5'> <a href="https://github.com/riz-adnan/BlueGold" className='text-2xl underline'> Decentralized Case-Battle Game <FaLink/></a>  <a href=""></a></h1>
        
        <h1 className='mb-5'> <a href="https://github.com/riz-adnan/.dwgFileAnalyzer" className='text-2xl underline'> .dwg File Analyzer <FaLink/></a> </h1>

      </div>

    </div>
  );
};

export default Projects;
