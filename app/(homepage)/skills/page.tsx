import React from 'react'
import Skills from '@/components/Skills'
import { client } from '@/app/lib/sanity';
import { Skill as SkillType } from '@/app/lib/getSocials';
import { groq } from 'next-sanity';

type Props = {}

async function getData() {
    const query = groq`
  *[_type == "skill"]{
    _id,
   title,
      progress,
      image

  }
     `;
    const skill = await client.fetch(query);
  
    return skill;
  }

export default async function page() {
    const skill: SkillType[] = await getData();
  return (
    <div   
    className='h-screen
    flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0
    mx-auto items-center'
    >
        <h3 className=' absolute 
        lg:top-24
        md:top-14
        top-7 
        scroll-smooth
        uppercase tracking-[20px]
         text-gray-500 text-2xl md:text-3xl lg:text-4xl'>
            Skills
        </h3>

        <h3 className=' absolute lg:top-36 md:top-24 top-16 
        uppercase tracking-[3px] text-gray-500 text-sm'>
            hover over a skill for current profieciency
        </h3>

        <div className='grid grid-cols-4 gap-5'>
            {skill.map((skill) => (
            <Skills 
            key={skill._id} 
            skill={skill} />
          ))}
        </div>
    </div>
  );
}
