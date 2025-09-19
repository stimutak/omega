export interface Company {
  id: string
  name: string
  description: string
  logo?: string
  website?: string
  category: string
  featured: boolean
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  tags: string[]
  readingTime: string
  image?: string
}

export interface Workshop {
  id: string
  title: string
  description: string
  date: string
  duration: string
  instructor: string
  capacity: number
  enrolled: number
  price: number
  type: 'online' | 'in-person' | 'hybrid'
  topics: string[]
}

export interface ConsultationForm {
  name: string
  email: string
  company?: string
  serviceType: 'executive-coaching' | 'professional-mentoring' | 'personal-consultancy' | 'strategic-consulting'
  message: string
  preferredDate?: string
  preferredTime?: string
}