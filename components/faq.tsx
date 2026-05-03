const faqs = [
  {
    question: "What is white-label web development?",
    answer:
      "White-label web development means your agency offers web development to clients, but a technical partner like Build Beyond Studio builds everything behind the scenes. You present the work under your brand, invoice the client at your price, and keep the full margin. Your clients never know we were involved.",
  },
  {
    question: "Do you work with agencies in Ambikapur and Chhattisgarh?",
    answer:
      "Yes. Build Beyond Studio is based in Ambikapur, Chhattisgarh. We work with marketing agencies, businesses, and startups across Ambikapur, Surguja, Raipur, Bilaspur, and all of India.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "A standard business website takes 2–3 weeks. A custom web application takes 4–8 weeks depending on complexity. We provide a firm timeline upfront before any project begins — no surprises.",
  },
  {
    question: "What tech stack do you use?",
    answer:
      "We build on the MERN stack — MongoDB, Express.js, React, and Node.js — combined with Next.js for frontend and full DevOps setup including Docker and CI/CD pipelines for deployment.",
  },
  {
    question: "Do clients get full ownership of the code?",
    answer:
      "Yes. 100% of the source code, design files, and documentation belong to you or your client on delivery. Build Beyond Studio retains nothing. Full IP transfer is standard on every project.",
  },
  {
    question: "How do I get started with Build Beyond Studio?",
    answer:
      "Simply reach out via our contact form or WhatsApp. Share your project requirements or your client's brief. We'll respond within 24 hours with a clear estimate and timeline.",
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#050505]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about partnering with Build Beyond Studio.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-[#0c0c0e] border border-white/5 rounded-xl p-6 cursor-pointer hover:border-blue-500/30 transition-all duration-200"
            >
              <summary className="flex items-center justify-between list-none">
                <h3 className="text-white font-semibold text-base sm:text-lg pr-4">
                  {faq.question}
                </h3>
                <span className="text-blue-400 text-xl flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}