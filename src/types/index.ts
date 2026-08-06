import type { IconType } from 'react-icons/lib'

export type Sections = 'hero' | 'about' | 'projects' | 'education' | 'contact'

export type ProjectProps = {
  title: string
  description: string
  subDescription: string[]
  href: {
    site: string | undefined
    github: string
  }
  image: string
  tags: {
    id: number
    name: string
    path: string
  }[]
  isOnFreeTier: boolean
}

export type ProjectDetailsProps = ProjectProps & {
  closeModal: () => void
}

export type ContactForm = {
  fullname: string
  email: string
  message: string
  country: string | null
}

export type FormInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  label: string
  type: 'text' | 'email' | 'textarea'
  placeholder: string
  value: string
}

export type Countries = {
  names: { common: string; official: string }
}[]

export type FormDropdownProps = {
  countries: Countries
  setValue: (value: string | null) => void
  value: string | null
}

export type EducationListProps = {
  title: string
  year: string
  description: string
  achievements: {
    icon: IconType
    title: string
  }[]
}[]

export type InfoCardProps = {
  educationInfo: EducationListProps[number]
}
