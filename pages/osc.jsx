import React from 'react'
import { OpenSourceContributions } from '../public/data/Contributions'
import { LuExternalLink } from "react-icons/lu";
import { IoGitPullRequestSharp } from "react-icons/io5";

import Image from 'next/image'
const Description = ({ title,status,description,link }) => {
    return (
        <div className="mt-16">
            <div className="justify-between text-white border-0 border-red-500 md:flex">
                <div className="flex font-bold text-blue-400 sm1:text-lg md:text-xl"><span>{title}</span><span className="mt-1 ml-8"><a href={link} target="_blank"><LuExternalLink /></a></span></div>
                <div className={`p-2 w-fit md:ml-2 text-sm text-white ${status === 'Merged' ? 'bg-[#8957E5]' : 'bg-[#238636]'} rounded-xl flex`}><span className="mt-1 mr-2 text-sm"><IoGitPullRequestSharp /></span><span>{status}</span></div>
            </div>
            <div className="mt-2">{description}</div>
        </div>
    )
}

const Contributions = () => {
  return (
    <div className="mb-20 text-white">
        <div className="font-extrabold tracking-tighter text-center text-blue-400 sm1:text-xl sm1:p-6 md:pl-20 md:text-6xl">
            Experience
        </div>
        
       <a href="https://www.linkedin.com/company/canistelindia/" target='_blank'> <div className="sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="mt-2 mb-2 ml-10 rounded-full border-white border-2 border-solid " alt="lgcy logo" src="/media/images/canistel.jpeg" height={200} width={200}style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Canistel</div>
            <div className="text-xl mt-4">
Human Resources Specialist & Business Development Specialist | Sep' 24 - Mar' 25 </div>
            <div className="mt-4">
           At Canistel, a premium online gourmet grocery store in India, I contributed across multiple verticals including business development, strategic planning, and human resource management. I was actively involved in analyzing and expanding operational capabilities to drive sustained growth, identifying new business lines aligned with consumer behavior, and enhancing revenue streams through strategic sales and marketing improvements. I conducted detailed market and competitor analysis to increase market share and forged key client relationships to strengthen industry partnerships. On the HR front, I led recruitment initiatives by shortlisting candidates from various sources, managing onboarding, and overseeing policy implementation. I also forecasted hiring needs, developed detailed job roles, and ensured smooth execution of referral and recruitment programs. My responsibilities further included maintaining organizational charts, handling budget monitoring by department, and presenting HR forecasting through professional presentations. This multifaceted role sharpened my skills in project management, strategic decision-making, market research, collaborative problem-solving, and talent acquisition — enabling me to grow as a versatile and impact-driven business professional.</div>
        </div>
        </a>

    <a href="https://www.linkedin.com/company/smart-source_2/" target='_blank'>
        <div className="ml-auto sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="ml-auto mr-10 rounded-full border-white border-2 border-solid" alt="tcc logo" src="/media/images/smartsource.jpeg" height={200} width={200}style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Smart Source</div>
            <div className="text-xl mt-4">Human Resource Executive | Sep' 23 - Aug' 24 </div>
            <div className="mt-4">
            A dedicated HR professional with hands-on expertise in full-cycle recruitment, including sourcing, screening, interviewing, and placing IT professionals in high-demand contract roles with quick turnaround times. I have successfully developed and implemented HR policies and procedures, while overseeing the end-to-end recruitment and onboarding process. My responsibilities extended to managing employee relations, addressing grievances, and facilitating conflict resolution. I have conducted performance evaluations, offered constructive feedback, and ensured alignment with organizational goals. With strong knowledge of labor law compliance, I’ve managed employee compensation, benefits, and recordkeeping, while also maintaining accurate HR databases. Additionally, I designed and led referral programs and streamlined hiring operations to build effective, high-performing teams.</div>
        </div>
        </a>

    <a href="https://www.linkedin.com/company/artechllc/" target='_blank'>
        <div className=" sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="mr-10 rounded-full border-white border-2 border-solid "  src="/media/images/artech.jpeg" alt="chegg logo" height={200} width={200}style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Artech LLC</div>
            <div className="text-xl mt-4">Associate Recruiter | Jan' 22 - Jan' 23 </div>
            <div className="mt-4">
            A dedicated and results-driven professional with proven expertise in full-cycle IT recruitment across the United States, specializing in sourcing, screening, interviewing, and placing candidates in contract positions with quick turnaround times. Adept at using platforms like LinkedIn, CareerBuilder, Monster, Dice, and JobDiva to identify top talent across diverse IT skill sets. Skilled in matching candidate profiles with job descriptions, conducting telephonic interviews, and coordinating closely with clients to meet specific requirements. I bring a collaborative approach to strategic recruiting, supporting both candidate experience and client success. My strengths lie in technical recruiting, proactive talent pipeline development, and team coordination, ensuring optimal staffing solutions while maintaining strong relationships with clients and stakeholders.</div>
        
        
    </div>
    </a>
    
     <div className='flex justify-center mb-10'>
            <h1 className="text-4xl lg:text-6xl text-blue-500 font-extrabold"> Freelance/Volunteer Work</h1>
           </div>
           <div className='pl-20 justify-items-center text-2xl'>

  <h1 className='mb-5'>
    <span className='font-bold'>Ali's Foundation (NGO):</span> Serving as Senior Project Coordinator since 2016, managed 15+ high-pressure projects focusing on financial and social support for the underprivileged. Responsibilities included project planning, budgeting, stakeholder coordination, and ensuring timely delivery.
  </h1>

  <h1 className='mb-5'>
    <span className='font-bold'>The Dropouts Media:</span> Worked as Human Resource Coordinator, recruited the majority of the startup’s workforce, conducted interviews, managed hiring policies, evaluated employee performance, and created HR forecasting presentations using MS PowerPoint.
  </h1>

  <h1 className='mb-5'>
    <span className='font-bold'>TalentOla:</span> Interned as a Recruitment Specialist, handling IT recruitment, pre-screening candidates, scheduling interviews, developing pipelines, and maintaining structured contact databases in MS Excel. Assisted onboarding and supported senior recruiters.
  </h1>

  <h1 className='mb-5'>
    <span className='font-bold'>Webware.io:</span> As an HR Intern, handled end-to-end recruitment tasks including posting/removing job ads, screening resumes, organizing interviews, database updates, and assisting in event planning and offer rollouts. Gained exposure to tools like MS Excel and PowerPoint, along with SEO and email marketing.
  </h1>

  <h1 className='mb-5'>
    <span className='font-bold'>Core HR & Recruitment Expertise:</span> Specialized in full-cycle recruitment across U.S. markets, using platforms like LinkedIn, Dice, JobDiva, and CareerBuilder. Skilled in screening, technical hiring, team coordination, grievance resolution, employee performance management, policy development, and proactive talent pipeline building.
  </h1>

</div>
    </div>
  )
}

export default Contributions
