import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import blogs from '@/data/blogs.json';

export const metadata: Metadata = {
  title: 'Insights & Growth Strategies | Build Beyond Studio',
  description: 'Read expert insights on branding, web development, SEO strategies, and startup growth. Discover practical strategies for your business.',
  keywords: 'blog, insights, growth strategies, SEO, web development, branding, startup tips',
  openGraph: {
    title: 'Insights & Growth Strategies | Build Beyond Studio',
    description: 'Expert insights on branding, web development, and startup growth strategies.',
    type: 'website',
    url: 'https://buildbeyondstudio.com/blog',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Build Beyond Studio Blog',
      },
    ],
  },
  alternates: {
    canonical: 'https://buildbeyondstudio.com/blog',
  },
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPage() {
  // Sort blogs by date, newest first
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Header />
      <section className="bg-[#F5F2EC] pt-24 pb-8 sm:pb-12 md:pb-16 px-4 sm:px-6 relative overflow-hidden min-h-[40vh] flex items-center justify-center border-b border-[rgba(200,134,10,0.10)]">
        {/* Decorative Elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl" style={{background:'radial-gradient(circle, rgba(200,134,10,0.08) 0%, transparent 70%)'}}></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl" style={{background:'radial-gradient(circle, rgba(200,134,10,0.06) 0%, transparent 70%)'}}></div>

        {/* Content */}
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Insights & Growth Strategies
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights on branding, web development, SEO, and startup growth. Practical strategies to accelerate your business.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#F5F2EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/blog/${blog.slug}`}
                className="group h-full flex flex-col"
              >
                <article className="bg-white border border-[rgba(200,134,10,0.12)] rounded-2xl overflow-hidden hover:border-[rgba(200,134,10,0.35)] transition-all duration-300 h-full flex flex-col hover:shadow-[0_12px_36px_rgba(200,134,10,0.14)]" style={{boxShadow:'0 2px 10px rgba(200,134,10,0.07)'}}>
                  {/* Featured Image */}
                  <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-900 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={blog.featuredImage}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      priority={false}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex flex-col grow">
                    {/* Date */}
                    <time className="text-sm text-gray-500 mb-3">
                      {formatDate(blog.date)}
                    </time>

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-[#C8860A] transition-colors line-clamp-2">
                      {blog.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 grow line-clamp-3">
                      {blog.description}
                    </p>

                    {/* Read More Button */}
                    <div className="flex items-center text-[#C8860A] group-hover:text-[#A06A00] font-semibold text-sm">
                      Read Article
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#F5F2EC] border-t border-[rgba(200,134,10,0.10)]">
        <div className="max-w-4xl mx-auto text-center text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-2xl mx-auto">
            These insights are more powerful when paired with a premium digital product. Let's build something that converts.
          </p>
          <Link
            href="/services/web-applications"
            className="inline-block text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            style={{background:'linear-gradient(135deg, #A06A00 0%, #C8860A 60%, #E8A020 100%)', boxShadow:'0 4px 16px rgba(200,134,10,0.30)'}}
          >
            Explore Our Services
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
