import Link from 'next/link'
import { Calendar, Clock, MapPin, Users, CheckCircle, ArrowRight } from 'lucide-react'

const workshops = [
  {
    id: 1,
    title: 'Leadership Excellence Masterclass',
    description: 'A comprehensive 2-day workshop designed to elevate leadership capabilities and strategic thinking.',
    date: '2025-02-15',
    time: '9:00 AM - 5:00 PM',
    duration: '2 Days',
    location: 'San Francisco, CA',
    price: '$2,500',
    seats: '20 seats',
    availability: 'available',
    topics: [
      'Visionary Leadership',
      'Strategic Decision Making',
      'Team Dynamics',
      'Change Management'
    ]
  },
  {
    id: 2,
    title: 'Digital Transformation Strategy',
    description: 'Navigate the complexities of digital transformation with practical frameworks and real-world case studies.',
    date: '2025-02-28',
    time: '9:00 AM - 5:00 PM',
    duration: '1 Day',
    location: 'Virtual',
    price: '$1,200',
    seats: '50 seats',
    availability: 'available',
    topics: [
      'Digital Strategy',
      'Technology Integration',
      'Cultural Change',
      'Innovation Frameworks'
    ]
  },
  {
    id: 3,
    title: 'Executive Communication Workshop',
    description: 'Master the art of executive presence and influential communication in high-stakes situations.',
    date: '2025-03-10',
    time: '9:00 AM - 5:00 PM',
    duration: '1 Day',
    location: 'New York, NY',
    price: '$1,500',
    seats: '15 seats',
    availability: 'limited',
    topics: [
      'Executive Presence',
      'Persuasive Communication',
      'Stakeholder Management',
      'Crisis Communication'
    ]
  },
  {
    id: 4,
    title: 'Building High-Performance Teams',
    description: 'Learn proven strategies for building, leading, and sustaining high-performing teams.',
    date: '2025-03-20',
    time: '9:00 AM - 5:00 PM',
    duration: '2 Days',
    location: 'Chicago, IL',
    price: '$2,200',
    seats: '25 seats',
    availability: 'available',
    topics: [
      'Team Dynamics',
      'Performance Management',
      'Conflict Resolution',
      'Team Culture'
    ]
  },
  {
    id: 5,
    title: 'Strategic Planning Intensive',
    description: 'Develop robust strategic plans that drive organizational success and competitive advantage.',
    date: '2025-04-05',
    time: '9:00 AM - 5:00 PM',
    duration: '3 Days',
    location: 'San Francisco, CA',
    price: '$3,500',
    seats: '18 seats',
    availability: 'available',
    topics: [
      'Market Analysis',
      'Competitive Strategy',
      'Resource Planning',
      'Implementation Roadmaps'
    ]
  },
  {
    id: 6,
    title: 'Personal Leadership Journey',
    description: 'A transformative workshop focused on personal growth, self-awareness, and authentic leadership.',
    date: '2025-04-18',
    time: '9:00 AM - 5:00 PM',
    duration: '1 Day',
    location: 'Virtual',
    price: '$950',
    seats: '30 seats',
    availability: 'available',
    topics: [
      'Self-Awareness',
      'Emotional Intelligence',
      'Personal Branding',
      'Work-Life Integration'
    ]
  }
]

export default function WorkshopsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Transformative Workshops
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Intensive learning experiences designed to accelerate your growth and drive meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {workshops.map((workshop) => (
              <div
                key={workshop.id}
                className="rounded-2xl border border-gray-200 p-8 hover:border-[#2C3E50] hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {workshop.title}
                    </h2>
                    {workshop.availability === 'limited' && (
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                        Limited Seats
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600">
                    {workshop.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4 text-[#2C3E50]" />
                      {new Date(workshop.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-[#2C3E50]" />
                      {workshop.duration}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4 text-[#2C3E50]" />
                      {workshop.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4 text-[#2C3E50]" />
                      {workshop.seats}
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">Topics Covered:</h3>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic) => (
                        <span
                          key={topic}
                          className="rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-700"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-2xl font-bold text-[#2C3E50]">
                        {workshop.price}
                      </p>
                      <p className="text-xs text-gray-500">per person</p>
                    </div>
                    <Link
                      href={`/workshops/${workshop.id}`}
                      className="rounded-lg bg-[#2C3E50] px-6 py-3 text-sm font-semibold text-white hover:bg-[#34495e] transition-colors"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose Our Workshops?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Experience transformative learning with industry-leading experts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Expert Facilitators</h3>
              <p className="mt-2 text-sm text-gray-600">
                Learn from seasoned professionals with decades of real-world experience.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Practical Application</h3>
              <p className="mt-2 text-sm text-gray-600">
                Hands-on exercises and real-world case studies you can apply immediately.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Networking Opportunities</h3>
              <p className="mt-2 text-sm text-gray-600">
                Connect with like-minded professionals and expand your network.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Certification</h3>
              <p className="mt-2 text-sm text-gray-600">
                Receive a certificate of completion to showcase your new skills.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Ongoing Support</h3>
              <p className="mt-2 text-sm text-gray-600">
                Access to resources and community support after the workshop.
              </p>
            </div>
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-[#2C3E50]" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">ROI Focused</h3>
              <p className="mt-2 text-sm text-gray-600">
                Measurable outcomes that deliver real value to you and your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            We offer custom workshops tailored to your organization&apos;s specific needs.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg bg-[#2C3E50] px-8 py-3 text-sm font-semibold text-white hover:bg-[#34495e] transition-colors"
            >
              Request Custom Workshop <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}