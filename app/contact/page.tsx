import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PromptCopy — questions, prompt requests, or feedback welcome.',
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-500">
          Have a question, prompt request, or found an issue? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid gap-6 mb-10">
        {[
          { icon: '💡', title: 'Prompt Requests', desc: 'Want us to create a specific prompt category or use case? Let us know and we\'ll prioritize it.' },
          { icon: '🐛', title: 'Bug Reports', desc: 'Found a copy button that doesn\'t work, or a page that looks broken? Tell us and we\'ll fix it.' },
          { icon: '🤝', title: 'Collaboration', desc: 'Interested in contributing prompts or partnering with us? Reach out.' },
        ].map(item => (
          <div key={item.title} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
            <span className="text-2xl">{item.icon}</span>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-5">Send a Message</h2>
        <form
          action="https://formspree.io/f/placeholder"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-white"
            >
              <option>Prompt Request</option>
              <option>Bug Report</option>
              <option>Collaboration</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Tell us what you need..."
              className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200"
          >
            Send Message
          </button>
        </form>
        <p className="text-xs text-gray-400 text-center mt-4">
          We typically respond within 2–3 business days.
        </p>
      </div>
    </div>
  );
}
