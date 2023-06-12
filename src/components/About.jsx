import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index,title,icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring",0.5*index,0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div options={{
          max:45,
          scale:1,
          speed:450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>

      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
      I am Prajay V K, a Computer Science Engineering student at PES University with a strong passion for software development. 
      I am proficient in programming languages such as Java, Python, and C.
      In addition to my coursework, I have also worked on several personal and academic 
      projects that demonstrate my skills and interests. 
      I am particularly proud of my contribution to a project called Emotion Detection, 
      which won a hackathon from IBM conducted by Shooting Stars Foundation.
      I aspire to become a full stack developer and a developer who is good with Machine Learning.  
      <a href="https://www.linkedin.com/in/prajayvk/" className='mt-4 text-grey-700 text-[17px] max-w-3xl leading-[30px] underline' target='_blank'> <br/>My LinkedIn Profile </a>
      <a href="https://github.com/PrajayVK/" className='mt-4 text-grey-700 text-[17px] max-w-3xl leading-[30px] underline' target='_blank'> <br/>Github </a>
      </motion.p>
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,"about")