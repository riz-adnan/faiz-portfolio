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
           <div className="mt-4 space-y-4">
  <div>
    <span className="text-blue-400 font-bold">Revenue Growth:</span> Analyzed and expanded business operations across multiple markets, contributing to measurable revenue increases through strategic market evaluation and competitive positioning
  </div>
  <div>
    <span className="text-blue-400 font-bold">Strategic Planning:</span> Developed comprehensive sales, marketing, and branding strategies that improved market share and customer acquisition rates
  </div>
  <div>
    <span className="text-blue-400 font-bold">Client Portfolio Management:</span> Built and maintained strategic relationships with 50+ key clients, achieving 95% customer retention rate and enhancing long-term partnership value
  </div>
  <div>
    <span className="text-blue-400 font-bold">Financial Analysis:</span> Monitored organizational budgets exceeding $2M+ and multiple revenue streams, providing executive leadership with data-driven insights for strategic decision-making
  </div>
  <div>
    <span className="text-blue-400 font-bold">HR Strategy Development:</span> Created and implemented comprehensive HR policies for 100+ employee organization, forecasted hiring needs, and optimized organizational structure
  </div>
</div>
        </div>
        </a>

    <a href="https://www.linkedin.com/company/smart-source_2/" target='_blank'>
        <div className="ml-auto sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="ml-auto mr-10 rounded-full border-white border-2 border-solid" alt="tcc logo" src="/media/images/smartsource.jpeg" height={200} width={200}style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Smart Source</div>
            <div className="text-xl mt-4">Human Resource Executive | Sep' 23 - Aug' 24 </div>
            <div className="mt-4 space-y-4">
  <div>
    <span className="text-blue-400 font-bold">Policy Implementation:</span> Designed and executed comprehensive HR policies ensuring 100% compliance with Indian labor laws and international best practices
  </div>
  <div>
    <span className="text-blue-400 font-bold">Talent Acquisition Excellence:</span> Led full-cycle recruitment process, successfully hiring and onboarding 50+ high-quality professionals across technical, management, and operational roles
  </div>
  <div>
    <span className="text-blue-400 font-bold">Performance Management:</span> Conducted systematic performance evaluations for 75+ employees, implemented professional development programs, and managed comprehensive benefits administration
  </div>
  <div>
    <span className="text-blue-400 font-bold">Employee Relations:</span> Resolved complex workplace issues, conducted disciplinary procedures, and created employee referral programs that improved retention rates by 25%
  </div>
</div>
</div>
        </a>

    <a href="https://www.linkedin.com/company/artechllc/" target='_blank'>
        <div className=" sm1:p-6 md:p-20 lg:w-4/5 xl:w-3/5">
        <Image className="mr-10 rounded-full border-white border-2 border-solid "  src="/media/images/artech.jpeg" alt="chegg logo" height={200} width={200}style={{ transform: "scale(1)", transition: "transform 0.3s ease-in-out" }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}></Image>
        
        <div className="text-5xl font-bold text-blue-400">Artech LLC</div>
            <div className="text-xl mt-4">Associate Recruiter | Jan' 22 - Jan' 23 </div>
            <div className="mt-4 space-y-4">
  <div>
    <span className="text-blue-400 font-bold">International Recruitment:</span> Managed full-cycle technical recruitment for US-based clients, sourcing top-tier candidates for software engineering and IT consulting roles
  </div>
  <div>
    <span className="text-blue-400 font-bold">Client Partnership:</span> Developed strong relationships with Fortune 500 clients, understanding complex technical requirements and delivering tailored recruitment solutions
  </div>
  <div>
    <span className="text-blue-400 font-bold">Talent Pipeline Development:</span> Built robust candidate databases, conducted 200+ technical interviews, and achieved 85% successful placement rate for matched candidates
  </div>
</div>

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
