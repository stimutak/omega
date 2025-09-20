import Link from 'next/link'
import { CheckCircle, Users, Target, Globe, Award } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              About Omega Fabric
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              For over two decades, we&apos;ve been weaving together expertise, innovation, and compassion
              to help leaders and organizations transform their potential into exceptional performance.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                To empower leaders and organizations to achieve extraordinary results through
                transformative coaching, strategic consulting, and innovative solutions that
                unlock human potential and drive sustainable growth.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <span className="text-gray-700">Deliver measurable, lasting impact</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <span className="text-gray-700">Foster authentic leadership development</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <span className="text-gray-700">Build resilient, adaptive organizations</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-4 text-lg text-gray-600">
                To be the global catalyst for transformative change, creating a world where
                every leader and organization operates at their highest potential, driving
                positive impact across industries and communities.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <span className="text-gray-700">Shape the future of leadership</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <span className="text-gray-700">Drive innovation across industries</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="h-6 w-6 text-[#2C3E50] flex-shrink-0" />
                  <span className="text-gray-700">Create lasting positive change</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              The principles that guide every interaction, decision, and solution we deliver.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <Users className="h-8 w-8 text-[#2C3E50]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Integrity</h3>
              <p className="mt-2 text-sm text-gray-600">
                We operate with unwavering honesty, transparency, and ethical standards in all our engagements.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Target className="h-8 w-8 text-[#2C3E50]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Excellence</h3>
              <p className="mt-2 text-sm text-gray-600">
                We pursue the highest standards of quality and continuously strive to exceed expectations.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
                <Globe className="h-8 w-8 text-[#2C3E50]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Innovation</h3>
              <p className="mt-2 text-sm text-gray-600">
                We embrace creativity and forward-thinking approaches to solve complex challenges.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <Award className="h-8 w-8 text-[#2C3E50]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Impact</h3>
              <p className="mt-2 text-sm text-gray-600">
                We measure our success by the transformative results we deliver for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Leadership Team
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Meet the experts dedicated to your transformation journey.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-48 w-48 rounded-full bg-[#2C3E50]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Dr. Alexandra Chen</h3>
              <p className="text-sm text-[#2C3E50]">Founder & CEO</p>
              <p className="mt-3 text-sm text-gray-600">
                With over 25 years of experience in executive coaching and organizational development,
                Dr. Chen has guided Fortune 500 CEOs through transformative leadership journeys.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-48 w-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-400" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Marcus Williams</h3>
              <p className="text-sm text-[#2C3E50]">Chief Strategy Officer</p>
              <p className="mt-3 text-sm text-gray-600">
                A renowned strategic consultant with expertise in digital transformation and
                innovation, Marcus has led successful business transformations across industries.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-48 w-48 rounded-full bg-[#2C3E50]" />
              <h3 className="mt-6 text-lg font-semibold text-gray-900">Sarah Martinez</h3>
              <p className="text-sm text-[#2C3E50]">VP of Coaching Excellence</p>
              <p className="mt-3 text-sm text-gray-600">
                Certified in multiple coaching methodologies, Sarah specializes in developing
                high-performance teams and fostering organizational culture transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2C3E50]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Start Your Transformation Journey?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Let&apos;s explore how Omega Fabric can help you achieve extraordinary results.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#2C3E50] shadow-sm hover:bg-gray-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}