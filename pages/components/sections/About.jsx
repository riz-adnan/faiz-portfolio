import React,{ useRef } from 'react'
import { motion,useTransform,useScroll} from "framer-motion"

import Scroll from './Scroll';

const boxVariants = {
    initial:{
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
    },
    animate:{
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
        transition: { duration:0.7,delay:1,type:'tween',ease:'linear'}
    }
}
const About = () => {
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll()
    const toRight = useTransform(scrollYProgress,[0,1],[-200,200])
    const toLeft = useTransform(scrollYProgress,[0,1],[0,-2000])  
    const toRight1 = useTransform(scrollYProgress,[0,1],[-1000,100])
    const toRight2 = useTransform(scrollYProgress,[0,1],[100,-1000])
    const toUp = useTransform(scrollYProgress,[0,1],[10,-800])
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;
    const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;
    return (
        <div className='bg-[#000] text-white'>
            
            <motion.div 
                className="font-extrabold leading-[4rem] tracking-tighter text-10xl text-white mt-10 whitespace-nowrap uppercase"
                style={{x:toRight}}
            >   
                <span className='font-mine sm1:text-7xl md:text-10xl'>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                    <span>about </span>
                    <span className="font-stencil-scroll">about </span>
                </span>
            </motion.div>
            <motion.div 
                style={{x:toLeft}}
                className="relative z-20 font-extrabold tracking-tighter text-white uppercase md:-mt-10 text-10xl whitespace-nowrap sm1:-mt-4"
            >
                <span className='font-mine sm1:text-7xl md:text-10xl'>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>
                    <span>myself </span>
                    <span className="font-stencil-scroll">myself </span>—
                    <span>myself </span>
                </span>
            </motion.div>
            
            <div className="mt-24">
  <div className="relative z-10 m-auto border-0 md:grid md:grid-cols-1 xl:w-3/5 mt-28">
    <div className="text-lg leading-relaxed space-y-8">
      <div>
        🌏✨ I’m <span className="text-blue-400 font-bold">Ali Faiz Rizvi</span>, currently based in <span className="text-blue-400 font-bold">Sydney, Australia</span>.  
        🎓 I’m pursuing a dual Master’s degree in <span className="text-blue-400 font-bold">Commerce</span> and 
        <span className="text-blue-400 font-bold"> Marketing (International Business & Marketing)</span> from 
        <span className="text-blue-400 font-bold"> Macquarie University</span>.
      </div>
      <div>
        🌐 My passion lies in understanding global markets, driving cross-cultural strategies, and building sustainable 
        <span className="text-blue-400 font-bold"> international business solutions</span>.  
        🚀 I thrive in dynamic environments where creativity meets commerce, and where ideas turn into impactful campaigns.
      </div>
      <div>
        🤝 With a strong foundation in business development and marketing strategy, I aim to create value by bridging 
        <span className="text-blue-400 font-bold"> diverse consumer insights</span> with meaningful brand storytelling.  
        📈 I’m driven by results, but grounded in empathy and global perspective.
      </div>
      <div>
        💡 Whether it’s crafting go-to-market plans, developing international partnerships, or understanding cultural nuances in branding, I bring a 
        <span className="text-blue-400 font-bold"> strategic yet human-centered approach</span>.  
        🌟 Let’s connect and build something globally impactful — together!
      </div>
    </div>
  </div>
</div>


            <div className='lg:pb-80'>
                <Scroll />      
            </div>
        </div>
  )
}
export default About
