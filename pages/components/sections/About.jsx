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
        <span className="text-blue-400 font-bold">Strategic Marketing and Business Development Professional</span> with 
        <span className="text-blue-400 font-bold"> 4+ years</span> of progressive experience across 
        <span className="text-blue-400 font-bold"> human resources</span>, 
        <span className="text-blue-400 font-bold"> project management</span>, and 
        <span className="text-blue-400 font-bold"> business operations</span>.  
        Currently pursuing <span className="text-blue-400 font-bold">dual Master’s degrees</span> in 
        <span className="text-blue-400 font-bold"> Commerce</span> and 
        <span className="text-blue-400 font-bold"> Marketing</span> at 
        <span className="text-blue-400 font-bold"> Macquarie University</span> with specialization in 
        <span className="text-blue-400 font-bold"> International Business</span>.  
      </div>
      <div>
        Proven track record of <span className="text-blue-400 font-bold">expanding business operations</span>, 
        managing <span className="text-blue-400 font-bold">15+ high-impact projects</span>, and driving 
        <span className="text-blue-400 font-bold"> revenue growth</span> through 
        <span className="text-blue-400 font-bold"> data-driven strategic initiatives</span>.  
        Strong academic performer with demonstrated 
        <span className="text-blue-400 font-bold"> leadership capabilities</span> and 
        <span className="text-blue-400 font-bold"> cross-cultural business experience</span>.
      </div>
      <div>
        <span className="text-blue-400 font-bold">Key Value Proposition:</span> Combining advanced academic training in 
        <span className="text-blue-400 font-bold"> marketing</span> and 
        <span className="text-blue-400 font-bold"> commerce</span> with practical business experience to deliver 
        <span className="text-blue-400 font-bold"> innovative solutions</span> and drive 
        <span className="text-blue-400 font-bold"> organizational growth</span> in dynamic 
        <span className="text-blue-400 font-bold"> global markets</span>.
      </div>

      {/* Technical Proficiencies */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-blue-400 mb-4">Technical Proficiencies</h2>
        <div className="space-y-4">
          <div>
            <span className="text-blue-400 font-bold">Microsoft Office:</span> Advanced Excel (Pivot Tables, VBA, Financial Modeling), PowerPoint (Executive Presentations), Word (Professional Documentation)
          </div>
          <div>
            <span className="text-blue-400 font-bold">Analytics Tools:</span> Google Analytics, Social Media Analytics, CRM Systems
          </div>
          <div>
            <span className="text-blue-400 font-bold">Project Management:</span> Asana, Trello, MS Project
          </div>
          <div>
            <span className="text-blue-400 font-bold">Design & Presentation:</span> Canva, Adobe Creative Suite (Basic)
          </div>
        </div>
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
