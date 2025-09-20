import Link from 'next/link'
import { CheckCircle, Target, TrendingUp, Users, Award, ArrowRight } from 'lucide-react'

export default function ExecutiveCoachingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-100">
                <Target className="h-8 w-8 text-[#2C3E50]" />
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Executive Coaching
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Transform your leadership style, enhance decision-making capabilities, and achieve
              unprecedented professional growth with personalized executive coaching.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-lg bg-[#2C3E50] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#34495e] transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#2C3E50] transition-colors"
              >
                View All Services <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Elevate Your Leadership Impact
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our executive coaching program is designed for senior leaders who are ready to
                transform their leadership approach and drive extraordinary results. Through
                personalized one-on-one sessions, we help you navigate complex challenges,
                develop strategic thinking, and unlock your full potential.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Whether you&apos;re stepping into a new role, leading through change, or seeking
                to enhance your leadership effectiveness, our coaching provides the guidance,
                tools, and support you need to excel.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl bg-gray-50 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Who Is This For?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#2C3E50] mt-0.5 flex-shrink-0" />
                    <span>C-Suite Executives and Senior Leaders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#2C3E50] mt-0.5 flex-shrink-0" />
                    <span>High-Potential Leaders in Transition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#2C3E50] mt-0.5 flex-shrink-0" />
                    <span>Entrepreneurs and Business Owners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-[#2C3E50] mt-0.5 flex-shrink-0" />
                    <span>Leaders Facing Complex Challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Key Focus Areas
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Our coaching addresses the critical areas that drive leadership excellence.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <TrendingUp className="h-8 w-8 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Strategic Thinking</h3>
              <p className="mt-2 text-gray-600">
                Develop the ability to see the big picture, anticipate trends, and make decisions
                that position your organization for long-term success.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Users className="h-8 w-8 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Team Leadership</h3>
              <p className="mt-2 text-gray-600">
                Master the art of building, inspiring, and leading high-performing teams that
                consistently deliver exceptional results.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Award className="h-8 w-8 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Executive Presence</h3>
              <p className="mt-2 text-gray-600">
                Enhance your ability to influence, inspire confidence, and effectively communicate
                with stakeholders at all levels.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Target className="h-8 w-8 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Decision Making</h3>
              <p className="mt-2 text-gray-600">
                Improve your decision-making process with frameworks and tools that lead to
                better outcomes in complex situations.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <TrendingUp className="h-8 w-8 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Change Management</h3>
              <p className="mt-2 text-gray-600">
                Lead organizational change with confidence, managing resistance and ensuring
                successful transformation initiatives.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <Users className="h-8 w-8 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Work-Life Integration</h3>
              <p className="mt-2 text-gray-600">
                Achieve sustainable success by creating harmony between professional excellence
                and personal fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Coaching Process
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              A structured approach tailored to your unique needs and goals.
            </p>
          </div>

          <div className="mt-16 space-y-8">
            <div className="relative flex gap-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C3E50] text-white font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Discovery & Assessment</h3>
                <p className="mt-2 text-gray-600">
                  We begin with a comprehensive assessment to understand your leadership style,
                  strengths, challenges, and goals. This includes 360-degree feedback and personality assessments.
                </p>
              </div>
            </div>

            <div className="relative flex gap-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C3E50] text-white font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Goal Setting & Planning</h3>
                <p className="mt-2 text-gray-600">
                  Together, we establish clear, measurable goals and create a customized development
                  plan aligned with your personal and organizational objectives.
                </p>
              </div>
            </div>

            <div className="relative flex gap-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C3E50] text-white font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Regular Coaching Sessions</h3>
                <p className="mt-2 text-gray-600">
                  Engage in regular one-on-one coaching sessions focused on skill development,
                  problem-solving, and strategic thinking. Sessions can be in-person or virtual.
                </p>
              </div>
            </div>

            <div className="relative flex gap-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2C3E50] text-white font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">Progress Monitoring</h3>
                <p className="mt-2 text-gray-600">
                  Track progress against goals with regular check-ins and adjustments to ensure
                  continuous improvement and maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-[#2C3E50]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Expected Outcomes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
              What you can expect from our executive coaching program.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <p className="text-4xl font-bold text-white">87%</p>
              <p className="mt-2 text-gray-200">Report improved decision-making</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">92%</p>
              <p className="mt-2 text-gray-200">Experience enhanced leadership effectiveness</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">78%</p>
              <p className="mt-2 text-gray-200">Achieve better work-life balance</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">95%</p>
              <p className="mt-2 text-gray-200">Recommend to other leaders</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">83%</p>
              <p className="mt-2 text-gray-200">Report increased team performance</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-white">90%</p>
              <p className="mt-2 text-gray-200">Feel more confident in leadership role</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Ready to Transform Your Leadership?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Take the first step toward becoming the leader you aspire to be.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-[#2C3E50] px-8 py-3 text-sm font-semibold text-white hover:bg-[#34495e] transition-colors"
            >
              Schedule Your Consultation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}