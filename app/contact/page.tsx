'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You would typically send this data to your backend
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Let&apos;s Connect
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Ready to transform your leadership and organization? We&apos;re here to help you begin your journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                We&apos;re excited to hear from you and explore how we can support your goals.
                Reach out through any of the channels below or fill out the contact form.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                    <Mail className="h-6 w-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@omegafabric.com</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <Phone className="h-6 w-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9am-6pm PST</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                    <MapPin className="h-6 w-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">123 Business Ave, Suite 100</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <Clock className="h-6 w-6 text-[#2C3E50]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                    <p className="text-gray-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12 rounded-2xl bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900">Frequently Contacted For:</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>• Executive Coaching Programs</li>
                  <li>• Team Development Workshops</li>
                  <li>• Strategic Consulting Engagements</li>
                  <li>• Speaking Opportunities</li>
                  <li>• Partnership Inquiries</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                    >
                      <option value="">Select a subject</option>
                      <option value="executive-coaching">Executive Coaching</option>
                      <option value="consulting">Strategic Consulting</option>
                      <option value="workshops">Workshops & Training</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                      placeholder="Tell us about your needs and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#2C3E50] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#34495e] transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-slate-100 to-gray-100 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto h-12 w-12 text-[#2C3E50]" />
              <p className="mt-4 text-lg font-semibold text-gray-900">San Francisco, California</p>
              <p className="text-gray-600">123 Business Ave, Suite 100</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}