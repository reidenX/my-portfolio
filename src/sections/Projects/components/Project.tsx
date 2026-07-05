import { BsArrowRight } from 'react-icons/bs'
import ProjectDetails from './ProjectDetails'
import type { ProjectProps } from '../../../types'
import { useState } from 'react'
import { AnimatePresence } from 'motion/react'

const Project = (props: ProjectProps) => {
  const [isProjectDetailsHidden, setIsProjectDetailsHidden] = useState(true)
  return (
    <div className="relative">
      <p className="absolute text-sm font-thin text-slate-500 bottom-5 italic">
        {props.isOnFreeTier
          ? 'Note: Hosted on a free tier; Please allow 1 minute for the initial spin-up.'
          : ''}
      </p>
      <div className="flex-wrap items-center py-10 justify-between space-y-14 sm:flex sm:p-y-0">
        <div>
          <p className="text-2xl">{props.title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {props.tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsProjectDetailsHidden(false)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          See More
          <BsArrowRight />
        </button>
      </div>
      <div className="bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      <AnimatePresence>
        {!isProjectDetailsHidden && (
          <ProjectDetails
            title={props.title}
            description={props.description}
            subDescription={props.subDescription}
            image={props.image}
            tags={props.tags}
            href={props.href}
            isOnFreeTier={props.isOnFreeTier}
            closeModal={() => setIsProjectDetailsHidden(true)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
export default Project
