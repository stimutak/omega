import Link from 'next/link'
import { Target, Users, Lightbulb, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    name: 'Executive Coaching',
    href: '/services/executive-coaching',
    icon: Target,
    color: 'purple',
    description: 'Transform your leadership style and unlock your full potential with personalized one-on-one coaching.',
    benefits: [
      'Enhanced decision-making capabilities',
      'Improved communication and influence',
      'Strategic thinking development',
      'Work-life balance optimization'
    ]
  },
  {
    name: 'Professional Mentoring',
    href: '/services/professional-mentoring',
    icon: Users,
    color: 'blue',
    description: 'Navigate career transitions and accelerate professional growth with expert guidance and support.',
    benefits: [
      'Career path clarification',
      'Skill gap identification and development',
      'Network expansion strategies',
      'Personal brand building'
    ]
  },
  {
    name: 'Personal Consultancy',
    href: '/services/personal-consultancy',
    icon: Lightbulb,
    color: 'purple',
    description: 'Achieve personal excellence and create meaningful work-life integration with tailored strategies.',
    benefits: [
      'Personal goal alignment',
      'Stress management techniques',
      'Productivity optimization',
      'Wellness and resilience building'
    ]
  },
  {
    name: 'Strategic Consulting',
    href: '/services/strategic-consulting',
    icon: TrendingUp,
    color: 'blue',
    description: 'Drive organizational transformation with data-driven insights and innovative business strategies.',
    benefits: [
      'Market opportunity analysis',
      'Digital transformation roadmaps',
      'Operational excellence frameworks',
      'Change management strategies'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Comprehensive solutions designed to elevate leaders, teams, and organizations
              to their highest potential through proven methodologies and personalized approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              const bgColor = 'bg-gray-50'
              const iconBg = service.color === 'purple' ? 'bg-slate-100' : 'bg-gray-100'
              const iconColor = 'text-[#2C3E50]'
              const linkColor = 'text-[#2C3E50] hover:text-[#34495e]'

              return (
                <div key={service.name} className={`rounded-2xl ${bgColor} p-8`}>
                  <div className="flex items-start gap-6">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconBg} flex-shrink-0`}>
                      <Icon className={`h-7 w-7 ${iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                      <p className="mt-3 text-gray-600">{service.description}</p>

                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                              <CheckCircle className={`h-5 w-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link
                        href={service.href}
                        className={`mt-6 inline-flex items-center text-sm font-semibold ${linkColor} transition-colors`}
                      >
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Proven Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              A systematic approach to transformation that delivers measurable results.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C3E50] text-white font-bold">
                1
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Discovery</h3>
              <p className="mt-2 text-sm text-gray-600">
                We begin with a comprehensive assessment to understand your unique challenges, goals, and aspirations.
              </p>
            </div>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C3E50] text-white font-bold">
                2
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Strategy</h3>
              <p className="mt-2 text-sm text-gray-600">
                Together, we develop a customized roadmap with clear milestones and actionable steps.
              </p>
            </div>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C3E50] text-white font-bold">
                3
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Implementation</h3>
              <p className="mt-2 text-sm text-gray-600">
                We work alongside you to execute the strategy, providing guidance and support throughout.
              </p>
            </div>

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C3E50] text-white font-bold">
                4
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Optimization</h3>
              <p className="mt-2 text-sm text-gray-600">
                We continuously monitor progress, refine approaches, and ensure sustainable long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#2C3E50] px-8 py-16 text-center shadow-2xl sm:px-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Future?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
              Take the first step toward extraordinary results. Schedule a consultation to explore how we can help you achieve your goals.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#2C3E50] shadow-sm hover:bg-gray-50 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/workshops"
                className="rounded-lg border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Explore Workshops
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}