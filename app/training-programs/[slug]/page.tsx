import type { Metadata } from 'next';
import { buildMetadata, buildBreadcrumbSchema } from '@/lib/metadata';
import { COURSES } from "../data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const course = COURSES.find((c) => c.id === resolvedParams.slug);

  if (!course) {
    return buildMetadata(
      '/training-programs',
      'Training Program Not Found',
      'The requested training program does not exist.'
    );
  }

  return buildMetadata(
    `/training-programs/${course.id}`,
    course.title,
    course.tagline,
    {
      openGraph: {
        title: course.title,
        description: course.tagline,
        type: 'website',
      },
    }
  );
}


export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const activeCourse = COURSES.find(c => c.id === resolvedParams.slug);

  if (!activeCourse) {
    notFound();
  }

  const priceNumber = parseInt(activeCourse.price.replace(/[^\d]/g, ''));
  const durationISO = `P${activeCourse.duration.replace(/[^\d]/g, '')}D`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": activeCourse.title,
    "description": activeCourse.tagline,
    "provider": {
      "@type": "Organization",
      "name": "Build Beyond Studio",
      "url": "https://buildbeyondstudio.com"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "duration": durationISO
    },
    "offers": {
      "@type": "Offer",
      "price": priceNumber,
      "priceCurrency": "INR"
    }
  };

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', path: '/' },
    { name: 'Training & Internship Programs', path: '/training-programs' },
    { name: activeCourse.title, path: `/training-programs/${activeCourse.id}` },
  ]);

  return (
    <main className="min-h-screen bg-[#F5F2EC] text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      
      <div className="bg-[#FAF8F5] pt-12 pb-24">
        <section className="px-4 sm:px-6 max-w-5xl mx-auto animate-fade-in">
          {/* Back button */}
          <div className="mb-6">
            <a href="/training-programs" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors">
              ← Back to all programs
            </a>
          </div>

          <div className="bg-white rounded-3xl border border-[#C8860A]/20 shadow-xl overflow-hidden">
            {/* Detail Header */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-[#FFFDF9] to-[#F5F2EC] border-b border-black/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#C8860A]/10 border border-[#C8860A]/20 text-xs font-bold text-[#C8860A] uppercase tracking-wider mb-2">
                  {activeCourse.num} Detail Sheet
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight">{activeCourse.title}</h2>
                <p className="mt-2 text-gray-500 italic">"{activeCourse.tagline}"</p>
              </div>
              <div className="flex gap-3 shrink-0">
                <a
                  href={`https://wa.me/919301579493?text=${encodeURIComponent(activeCourse.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-[#A06A00] to-[#C8860A] text-white px-6 py-3 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                >
                  Enroll via WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-black/5 bg-[#FFFDFB]">
              {activeCourse.stats.map((stat, sIdx) => (
                <div key={sIdx} className="p-6 border-r border-black/5 last:border-r-0 text-center">
                  <span className="text-3xl md:text-4xl font-black text-black block mb-1">{stat.v}</span>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{stat.l}</span>
                </div>
              ))}
            </div>

            {/* Curriculum Phases */}
            <div className="p-8 md:p-12">
              <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#C8860A] border-b border-black/5 pb-4 mb-8">
                Curriculum &amp; Timeline Detailed Breakdown
              </h3>
              <div className="space-y-8">
                {activeCourse.phases.map((phase, pIdx) => (
                  <div key={pIdx} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 md:gap-8 border-b border-black/5 pb-8 last:border-0 last:pb-0">
                    <div className="border-r-0 md:border-r border-black/5 pr-0 md:pr-4">
                      <span className="text-xs font-bold text-[#C8860A] uppercase tracking-wider block mb-1">{phase.num}</span>
                      <span className="text-xl font-black text-black block mb-1">{phase.days}</span>
                      <span className="text-xs text-gray-400 font-medium">{phase.sub}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-black text-lg mb-3">{phase.name}</h4>
                      <div className="flex flex-wrap gap-2.5 mb-4">
                        {phase.topics.map((topic, tIdx) => (
                          <span key={tIdx} className="bg-[#F5F2EC] border border-black/5 px-3 py-1 rounded-full text-xs text-gray-600 font-medium">
                            {topic}
                          </span>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500">
                        <strong className="text-black font-semibold">Outcome: </strong> {phase.build}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Capstone Block */}
            <div className="p-8 md:p-12 bg-[#FFFDFB] border-t border-black/5">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-5">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#C8860A]/10 text-xs font-bold text-[#C8860A] uppercase tracking-wide mb-2">
                    Capstone Project
                  </span>
                  <h4 className="text-xl font-extrabold text-black">{activeCourse.capstone.title}</h4>
                </div>
                <span className="bg-white border border-[#C8860A]/30 text-[#C8860A] px-4 py-1.5 rounded-full text-xs font-bold shadow-sm">
                  🌐 Live on {activeCourse.capstone.deploy}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{activeCourse.capstone.desc}</p>
              <div className="flex flex-wrap gap-2">
                {activeCourse.capstone.techs.map((tech, tIdx) => (
                  <span key={tIdx} className="bg-white border border-black/5 px-3 py-1 rounded-full text-xs text-gray-500">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
