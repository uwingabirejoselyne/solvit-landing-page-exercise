"use client"

import { useState } from "react"
import { MapPin, Mail, Phone } from "lucide-react"
import { ContactInfo } from "./ContactInfo"
import { FormInput } from "./FormInput"
import { FormTextarea } from "./FormTextarea"

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form on success
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    alert("Message sent successfully!")
  }

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 sm:space-y-12">
            <div>
              <h3 className="text-teal-600 font-semibold text-lg sm:text-xl mb-2">Contact Us</h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Say Hello</h2>
            </div>

            <div className="space-y-8 sm:space-y-12">
              <ContactInfo icon={MapPin} title="Address" content="Location KG 9 Ave, Kigali" />

              <ContactInfo icon={Mail} title="Email" content="businesscafe@info.com" />

              <ContactInfo icon={Phone} title="Phone" content="+250788183828" />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-teal-600 font-semibold text-lg sm:text-xl mb-2">Have Question ?</h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                placeholder="Name"
                value={formData.name}
                onChange={handleChange("name")}
                error={errors.name}
                required
              />

              <FormInput
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange("email")}
                error={errors.email}
                required
              />

              <FormInput
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange("subject")}
                error={errors.subject}
                required
              />

              <FormTextarea
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange("message")}
                error={errors.message}
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
