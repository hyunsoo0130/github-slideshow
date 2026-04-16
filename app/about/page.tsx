import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About PromptCopy',
  description: 'Learn about PromptCopy — the free AI prompt library and ASCII art collection built for creators worldwide.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="mb-8">
        <div className="text-4xl mb-4">✦</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">About PromptCopy</h1>
        <p className="text-lg text-gray-500">
          A free library of hand-crafted AI prompts and ASCII art for creators worldwide.
        </p>
      </div>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">What is PromptCopy?</h2>
          <p>
            PromptCopy is a free-to-use online library of AI prompts and ASCII art symbols.
            We collect, write, and organize prompts for popular AI tools — including image generation
            platforms and document AI assistants — so you can find the right prompt quickly and
            copy it with a single click.
          </p>
          <p>
            We also maintain a growing library of over 1,000 ASCII characters, emoticons, symbols,
            and decorative text that you can browse by category and copy instantly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h2>
          <p>
            Getting AI tools to produce great results depends heavily on the quality of the prompt.
            Most people spend hours tweaking prompts to get what they want. PromptCopy&apos;s mission
            is to share that knowledge freely — so anyone can start creating high-quality AI outputs
            without the frustration of trial and error.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">What We Cover</h2>
          <ul className="space-y-2 list-none">
            {[
              { icon: '🎨', text: 'Image generation prompts for AI art tools (3D sculpture, neon, glassmorphism styles, and more)' },
              { icon: '📄', text: 'Document layout prompts for Claude AI — reports, proposals, business letters' },
              { icon: '📊', text: 'Presentation structure prompts for PowerPoint and Google Slides creation' },
              { icon: '🃏', text: 'Card news layout prompts for social media visual content' },
              { icon: '📈', text: 'Spreadsheet layout prompts for Excel budgets, trackers, and dashboards' },
              { icon: '✦', text: '1,000+ ASCII symbols including hearts, stars, text faces, borders, and special characters' },
            ].map(item => (
              <li key={item.icon} className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Our Content Standards</h2>
          <p>
            Every prompt on PromptCopy is original content written and tested by our team.
            We do not scrape, copy, or reproduce prompts from other sources without transformation.
            Each prompt page includes detailed usage instructions, variable explanations, and
            pro tips to help you get the best results.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h2>
          <p>
            Have a suggestion, a prompt request, or found an issue? We&apos;d love to hear from you.
            Head over to our <Link href="/contact" className="text-indigo-600 hover:underline">Contact page</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
