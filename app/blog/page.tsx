import Link from 'next/link'
import { Calendar, Clock, ArrowRight, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Executive Leadership in 2025',
    excerpt: 'Explore the emerging trends and skills that will define successful leadership in the coming year.',
    author: 'Dr. Alexandra Chen',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Leadership',
    image: '/blog-1.jpg'
  },
  {
    id: 2,
    title: 'Digital Transformation: A Strategic Imperative',
    excerpt: 'Learn how to navigate digital transformation while maintaining organizational culture and values.',
    author: 'Marcus Williams',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Strategy',
    image: '/blog-2.jpg'
  },
  {
    id: 3,
    title: 'Building Resilient Teams in Uncertain Times',
    excerpt: 'Practical strategies for fostering team resilience and adaptability in changing environments.',
    author: 'Sarah Martinez',
    date: '2025-01-05',
    readTime: '6 min read',
    category: 'Team Development',
    image: '/blog-3.jpg'
  },
  {
    id: 4,
    title: 'The Art of Strategic Decision Making',
    excerpt: 'Master the frameworks and mental models that enable better strategic decisions.',
    author: 'Dr. Alexandra Chen',
    date: '2024-12-28',
    readTime: '8 min read',
    category: 'Strategy',
    image: '/blog-4.jpg'
  },
  {
    id: 5,
    title: 'Mentoring for Career Acceleration',
    excerpt: 'How professional mentoring can unlock new opportunities and accelerate career growth.',
    author: 'Sarah Martinez',
    date: '2024-12-20',
    readTime: '5 min read',
    category: 'Career Development',
    image: '/blog-5.jpg'
  },
  {
    id: 6,
    title: 'Work-Life Integration in the Modern Era',
    excerpt: 'Moving beyond work-life balance to create meaningful integration and personal fulfillment.',
    author: 'Marcus Williams',
    date: '2024-12-15',
    readTime: '6 min read',
    category: 'Personal Development',
    image: '/blog-6.jpg'
  }
]

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Insights & Articles
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Thought leadership, industry insights, and practical strategies for leaders and organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="aspect-w-16 aspect-h-9 mb-6 overflow-hidden rounded-xl bg-gray-100">
                  <div className="h-48 bg-gradient-to-br from-slate-200 to-gray-300" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="font-medium text-[#2C3E50]">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#2C3E50] transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-600">{post.author}</span>
                    </div>

                    <time className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </time>
                  </div>

                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-sm font-semibold text-[#2C3E50] hover:text-[#34495e] transition-colors pt-2"
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="mt-16 text-center">
            <button className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get the latest insights and strategies delivered to your inbox.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-300 px-4 py-3 focus:border-[#2C3E50] focus:ring-[#2C3E50]"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#2C3E50] px-6 py-3 text-sm font-semibold text-white hover:bg-[#34495e] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}