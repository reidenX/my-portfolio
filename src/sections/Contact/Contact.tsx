import FormHeader from './components/FormHeader'
import FormInput from './components/FormInput'
import emailjs from '@emailjs/browser'

import type { ContactForm } from '../../types'
import { useState } from 'react'
import FormDropdown from './components/FormDropdown'
import { toast } from 'sonner'
import { LightRays } from '../../components/ui/light-rays'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<ContactForm>({
    fullname: '',
    email: '',
    message: '',
    country: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoading) return

    const honeypotValue = new FormData(e.target)
    if (honeypotValue.get('honeypot')) return

    try {
      setIsLoading(true)

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullname,
          to_name: 'Alradenn',
          from_email: formData.email,
          to_email: 'alradennibno@gmail.com',
          message: formData.message,
          country: formData.country,
        },
        EMAILJS_PUBLIC_KEY,
      )

      setIsLoading(false)
      toast.success('Email sent', { position: 'top-center' })
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      toast.error('Failed to send email', { position: 'top-center' })
    }

    setFormData({
      fullname: '',
      email: '',
      message: '',
      country: null,
    })
  }

  return (
    <section id="contact-section" className="relative flex items-center scroll-mt-20 pt-20">
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <FormHeader />
        <form className="w-full" onSubmit={handleSubmit}>
          <FormInput
            onChange={handleChange}
            label="Full Name"
            type="text"
            placeholder="John Doe"
            value={formData.fullname}
          />
          <FormInput
            onChange={handleChange}
            label="Email"
            type="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
          />

          <FormDropdown
            setValue={(value: string | null) => setFormData({ ...formData, country: value })}
            value={formData.country}
          />

          <FormInput
            onChange={handleChange}
            label="Message"
            type="textarea"
            placeholder="What kind of project are you working on? How can I help your team succeed?"
            value={formData.message}
          />

          <input name="honeypot" type="text" className="hidden opacity-0 absolute" />

          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
        <p className="mt-5 text-xs text-neutral-400">
          <b>Note:</b> I'm typically available for a chat within 24 hours, regardless of your time
          zone.
        </p>
      </div>
      <LightRays />
    </section>
  )
}
export default Contact
