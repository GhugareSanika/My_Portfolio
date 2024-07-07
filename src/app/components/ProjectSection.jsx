import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id:1,
        title:"Next JS Portfolio Website",
        description:"Personal portfolio site using Next.js and Tailwind CSS.",
        image:"/images/projects/1.jpg",
        tag:["All","Web"],
        gitUrl:"/",
        previewUrl:"/"
    },
    {
        id:2,
        title:"Realtime whiteboard Sharing App",
        description:"Collaborative drawing app using Socket.io and TypeScript.",
        image:"/images/projects/2.jpg",
        tag:["All","Web"],
        gitUrl:"https://github.com/GhugareSanika/Realtime-WhiteBoard.git",
        previewUrl:"https://realtime-whiteboard-sharing-app11.netlify.app/"
    },
    {
        id:3,
        title:"Admin Dashboard",
        description:"Dashboard for managing data with Next.js and MongoDB.",
        image:"/images/projects/3.jpg",
        tag:["All","Web"],
        gitUrl:"https://github.com/GhugareSanika/Admin_Dashboard.git",
        previewUrl:"https://admin-dashboard-ebai.vercel.app/login"
    },
    {
        id:4,
        title:"CoinSwitch",
        description:"Crypto tracking app using React and various APIs.",
        image:"/images/projects/4.avif",
        tag:["All","Web"],
        gitUrl:"https://github.com/GhugareSanika/ReduxReactJs_CoinSwitch.git",
        previewUrl:"/"
    },
    {
        id:5,
        title:"INotebook",
        description:"Digital notebook app with MongoDB and REST APIs.",
        image:"/images/projects/5.avif",
        tag:["All","Web"],
        gitUrl:"https://github.com/GhugareSanika/React_iNotebook.git",
        previewUrl:"/"
    },
    {
        id:6,
        title:"NewsApp",
        description:"News aggregation app using React and News APIs.",
        image:"/images/projects/6.jpg",
        tag:["All","Web"],
        gitUrl:"https://github.com/GhugareSanika/React_NewsApp.git",
        previewUrl:"/"
    },
]
const ProjectSection = () => {
  return (
    <>
    <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 mb:mb-12">
        My Projects
    </h2>
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project)=>(
            <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.image} 
                tags={project}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
        ))}</div>
    </>
  )
}

export default ProjectSection
