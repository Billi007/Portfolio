import React from 'react'

const Chat_project = () => {
  return (
   <>
    <div className='text-black md:max-w-4xl px-5 max-w-2xl py-10 space-y-3 flex flex-col justify-center m-auto text-left'>
    <h1 className='font-bold text-3xl'>MERN Chat app</h1>
    <p className='text-xs text-gray-700'>2 minute read</p>
    <p className='text-slate-800 text-sm md:text-[17px]'>Developed a feature-rich real-time chat application enabling users send/receive instant messages.
The app ensures seamless communication through a responsive and user-friendly with modern styling
interface.
User Authentication: Implemented secure login and registration using JWT authentication with cookies.</p>

<div className='flex justify-evenly mt-10'>
  <div>
  <h1 className='font-bold text-lg'>Type</h1>
  <ul className='text-[13px] my-2'>
  <li>Financial services</li>
  </ul>
  </div>

  <div>
    <h1  className='font-bold text-lg'>Stack</h1>
  <ul  className='text-[13px] my-2' >
    <li>Javascript</li>
    <li>React.js</li>
    <li>MongoDB</li>
    <li>Express.js</li>
    <li>Socket.io</li>
    <li>TailwindCSS</li>
    <li>DaisyUI</li>
    <li>Redux</li>
  </ul>
  </div>

  <div>
    <h1 className='font-bold text-lg'>Code</h1>
    <ul className=' my-1'>
      <li><a className='text-[#ed6955] font-bold text-xs' href="https://github.com/Billi007/MERN-Chat-App">Github</a></li>
    </ul>
  </div>

  <div>
  <h2  className='font-bold text-lg'>Live</h2>
   <ul  className='text-[15px] my-2'>
    <li className='text-[#f6654f] font-bold cursor-pointer text-xs'>Site</li>
   </ul>
  </div>
</div>
<div className='flex flex-col gap-10 my-10'>
   <img 
   className='w-3xl'
      src="https://img.freepik.com/free-vector/log-landing-page-with-flat-design_23-2148281412.jpg" 
      alt="" />
      <img 
       className='w-3xl h-[500px]'
      src="https://img.freepik.com/free-vector/colorful-creative-login-form_23-2147727235.jpg?semt=ais_hybrid" 
      alt="" />
  <img 
  className='w-3xl'
  src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/04/WhatsApp-generic-hero-app-interface.jpg" 
  alt="img" />
</div>

  <h1 className='font-bold text-2xl'>Web Stack and Explanation</h1>
  <p className='text-slate-800 text-[14px] md:text-[14.7px] pb-10'>
Built the project using Next.js because of its powerful server-side rendering and dynamic routing. The backend is fully serverless, it handles automated magic link emails 
(Postmark), auithentication using JWT and Passport, Airtable CRM, and connects to the propietary credit-score and property-estimation 
microservices (Elastic Beanstalk / Google Maps / TensorFlow).
For the databse I used PostgreSQL and Prisma ORM. I generated the GraphQL schema using Nexus.
To ensure code/platform stability, I Implemented a CI/CD pipeline with Jest for unit testing, 
Cypress for End to End, Typescript type-checking, database migration, code linting and preview deploys. Finally, I deployed the site to Vercel
</p>
    </div>
   </>
  )
}

export default Chat_project