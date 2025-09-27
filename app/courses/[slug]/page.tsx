import React from 'react'
import { courseData } from '@/data/courseData'
import CoursePageClient from './CoursePageClient'

interface CoursePageProps {
  params: {
    slug: string
  }
}

const CoursePage = ({ params }: CoursePageProps) => {
  // Find the course by slug on the server side
  const course = courseData.find(c => c.slug === params.slug)

  if (!course) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="container-custom py-20 text-center">
          <h1 className="text-4xl font-bold text-secondary mb-4">Course Not Found</h1>
          <p className="text-gray-600 mb-8">The course you're looking for doesn't exist.</p>
          <a href="/courses" className="btn-primary">
            Back to Courses
          </a>
        </div>
      </main>
    )
  }

  return <CoursePageClient course={course} />
}

// Required for static export of dynamic routes
export async function generateStaticParams() {
  const params = courseData.map(course => ({ slug: course.slug }));
  console.log('Generated static params:', params);
  return params;
}

export default CoursePage
