import { BiUpArrow, BiX } from 'react-icons/bi'
import type { ProjectDetailsProps } from '../../../types'
import { motion } from 'motion/react'

const ProjectDetails = (props: ProjectDetailsProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      {props.closeModal && (
        <motion.div
          key="project-details-modal"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="relative max-w-2xl border shadow-sm rounded-2xl bg-linear-to-l from-midnight to-navy border-white/10"
        >
          <button
            onClick={props.closeModal}
            className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
          >
            <BiX />
          </button>
          {props.image && (
            <img src={props.image} alt={props.title} className="w-full rounded-t-2xl" />
          )}
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold text-white">{props.title}</h5>
            <p className="mb-3 font-normal text-neutral-400">{props.description}</p>
            {props.subDescription.map((subDesc) => (
              <p key={subDesc} className="mb-3 font-normal text-neutral-400">
                {subDesc}
              </p>
            ))}
            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-3">
                {props.tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ))}
              </div>
              <div className="flex flex-col md:flex-row items-end md:items-start md:gap-6">
                <a
                  aria-label="View Code"
                  href={props.href.github}
                  target="_blank"
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                >
                  View Code <BiUpArrow />
                </a>

                {props.href.site && (
                  <a
                    aria-label="View Project"
                    href={props.href.site}
                    target="_blank"
                    className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                  >
                    View Project <BiUpArrow />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
export default ProjectDetails
