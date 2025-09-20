'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    service: '',
    challenge: '',
    timeline: '',
    budget: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you within 24 hours.')
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Start Your Transformation Journey
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Tell us about your goals and challenges. We&apos;ll create a customized solution to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why Choose Omega Fabric?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Partner with us to unlock your organization&apos;s full potential.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Proven Track Record</h3>
                    <p className="text-gray-600">Over 500 successful transformations across industries</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Team</h3>
                    <p className="text-gray-600">Industry-leading consultants with decades of experience</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Customized Solutions</h3>
                    <p className="text-gray-600">Tailored approaches to meet your unique needs</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Measurable Results</h3>
                    <p className="text-gray-600">Data-driven approach with clear ROI metrics</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-600">Continuous guidance throughout your journey</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">What Happens Next?</h3>
                <ol className="space-y-3 text-sm text-gray-600">
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#2C3E50]">1.</span>
                    We&apos;ll review your submission within 24 hours
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#2C3E50]">2.</span>
                    Schedule a complimentary consultation call
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#2C3E50]">3.</span>
                    Receive a customized proposal
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-[#2C3E50]">4.</span>
                    Begin your transformation journey
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div>
              <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Needs</h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                      />
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Role *
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                    >
                      <option value="">Select a service</option>
                      <option value="executive-coaching">Executive Coaching</option>
                      <option value="professional-mentoring">Professional Mentoring</option>
                      <option value="personal-consultancy">Personal Consultancy</option>
                      <option value="strategic-consulting">Strategic Consulting</option>
                      <option value="workshops">Workshops & Training</option>
                      <option value="multiple">Multiple Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-1">
                      Primary Challenge or Goal *
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={4}
                      value={formData.challenge}
                      onChange={handleChange}
                      required
                      className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                      placeholder="Describe your main challenge or what you hope to achieve..."
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
                        Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (within 1 month)</option>
                        <option value="short">1-3 months</option>
                        <option value="medium">3-6 months</option>
                        <option value="long">6+ months</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
                      >
                        <option value="">Select budget</option>
                        <option value="10-25k">$10,000 - $25,000</option>
                        <option value="25-50k">$25,000 - $50,000</option>
                        <option value="50-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#2C3E50] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#34495e] transition-colors"
                  >
                    Submit Your Request
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy" className="text-[#2C3E50] hover:underline">
                      Privacy Policy
                    </Link>{' '}
                    and{' '}
                    <Link href="/terms" className="text-[#2C3E50] hover:underline">
                      Terms of Service
                    </Link>
                    .
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}