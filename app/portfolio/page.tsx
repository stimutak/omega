import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Target, Award } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Global Tech Corporation Transformation',
    client: 'Fortune 500 Technology Company',
    challenge: 'Struggling with digital transformation and cultural resistance',
    solution: 'Implemented comprehensive change management strategy with executive coaching',
    results: [
      '45% increase in digital adoption',
      '30% improvement in employee engagement',
      '$12M cost savings in first year'
    ],
    category: 'Digital Transformation',
    icon: TrendingUp
  },
  {
    id: 2,
    title: 'Healthcare Leadership Excellence',
    client: 'Regional Healthcare Network',
    challenge: 'Need for stronger leadership pipeline and succession planning',
    solution: 'Developed custom leadership development program with mentoring',
    results: [
      '90% internal promotion rate',
      '25% reduction in turnover',
      'Patient satisfaction increased by 35%'
    ],
    category: 'Leadership Development',
    icon: Users
  },
  {
    id: 3,
    title: 'Retail Chain Strategic Pivot',
    client: 'National Retail Brand',
    challenge: 'Declining market share and need for strategic repositioning',
    solution: 'Strategic consulting with market analysis and brand refresh',
    results: [
      '60% increase in online revenue',
      '15% market share growth',
      'Successful launch in 3 new markets'
    ],
    category: 'Strategic Consulting',
    icon: Target
  },
  {
    id: 4,
    title: 'Financial Services Innovation',
    client: 'Investment Management Firm',
    challenge: 'Need to innovate while maintaining regulatory compliance',
    solution: 'Innovation framework with risk management integration',
    results: [
      '3 new product lines launched',
      '40% improvement in time-to-market',
      'Zero compliance violations'
    ],
    category: 'Innovation Strategy',
    icon: Award
  }
]

const metrics = [
  { label: 'Clients Served', value: '500+' },
  { label: 'Success Rate', value: '95%' },
  { label: 'Industries', value: '25+' },
  { label: 'Countries', value: '15+' }
]

export default function PortfolioPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Portfolio
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Real results from real transformations. Explore how we&apos;ve helped organizations achieve extraordinary outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-[#2C3E50]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="text-3xl font-bold text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-gray-300">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => {
              const Icon = study.icon
              return (
                <div
                  key={study.id}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <Icon className="h-6 w-6 text-[#2C3E50]" />
                      </div>
                      <span className="text-sm font-medium text-[#2C3E50]">
                        {study.category}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900">
                      {study.title}
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Client</h3>
                        <p className="text-gray-600">{study.client}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#2C3E50] mt-1">•</span>
                              <span className="text-gray-600">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href={`/portfolio/${study.id}`}
                      className="inline-flex items-center text-sm font-semibold text-[#2C3E50] hover:text-[#34495e] transition-colors"
                    >
                      View Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>

                  <div className="flex-1">
                    <div className="aspect-w-16 aspect-h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-gray-200 p-12">
                      <div className="flex items-center justify-center h-full">
                        <Icon className="h-32 w-32 text-[#2C3E50] opacity-20" />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Write Your Success Story?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Join the ranks of organizations that have transformed their potential into performance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-[#2C3E50] px-8 py-3 text-sm font-semibold text-white hover:bg-[#34495e] transition-colors"
            >
              Start Your Transformation
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-700 hover:bg-white transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}