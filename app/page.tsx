import Link from 'next/link'
import { ArrowRight, Target, Users, Lightbulb, TrendingUp, Award } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Transform Your
              <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Business Potential
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Omega Fabric weaves together executive coaching, strategic consulting, and transformative
              mentoring to help leaders and organizations reach unprecedented heights of success.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/get-started"
                className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity"
              >
                Start Your Journey
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-purple-600 transition-colors flex items-center gap-1"
              >
                Explore Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-200 to-blue-200 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Solutions for Every Challenge
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our integrated approach combines expertise across multiple disciplines to deliver lasting transformation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative rounded-2xl border border-gray-200 p-8 hover:border-purple-400 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Executive Coaching</h3>
              <p className="mt-2 text-sm text-gray-600">
                Personalized leadership development to unlock your full potential and drive organizational success.
              </p>
              <Link
                href="/services/executive-coaching"
                className="mt-4 inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 p-8 hover:border-purple-400 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Professional Mentoring</h3>
              <p className="mt-2 text-sm text-gray-600">
                Expert guidance to navigate career transitions and accelerate professional growth.
              </p>
              <Link
                href="/services/professional-mentoring"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 p-8 hover:border-purple-400 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 group-hover:bg-purple-200 transition-colors">
                <Lightbulb className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Personal Consultancy</h3>
              <p className="mt-2 text-sm text-gray-600">
                Tailored strategies for personal excellence and work-life integration.
              </p>
              <Link
                href="/services/personal-consultancy"
                className="mt-4 inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="group relative rounded-2xl border border-gray-200 p-8 hover:border-purple-400 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Strategic Consulting</h3>
              <p className="mt-2 text-sm text-gray-600">
                Data-driven insights and innovative strategies to transform your business.
              </p>
              <Link
                href="/services/strategic-consulting"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="mt-2 text-purple-100">Leaders Transformed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">95%</p>
              <p className="mt-2 text-purple-100">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">20+</p>
              <p className="mt-2 text-purple-100">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Real stories of transformation and success from leaders we&apos;ve partnered with.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">
                &quot;Omega Fabric&apos;s executive coaching transformed my leadership approach. The insights
                and strategies I gained have been invaluable for both my personal growth and my company&apos;s success.&quot;
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-sm text-gray-600">CEO, Tech Innovations Inc.</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">
                &quot;The strategic consulting services helped us navigate a critical transformation.
                Their expertise and guidance were instrumental in our successful market expansion.&quot;
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-600">COO, Global Retail Solutions</p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Award key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600">
                &quot;The professional mentoring program exceeded my expectations. I gained clarity on my
                career path and the confidence to pursue my ambitious goals.&quot;
              </p>
              <div className="mt-6">
                <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                <p className="text-sm text-gray-600">VP of Marketing, Creative Agency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-16 text-center shadow-2xl sm:px-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Transform Your Future?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-purple-100">
              Join hundreds of successful leaders who have unlocked their potential with Omega Fabric.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-purple-600 shadow-sm hover:bg-gray-100 transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/workshops"
                className="rounded-lg border border-white px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                View Upcoming Workshops
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}