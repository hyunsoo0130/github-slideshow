import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for PromptCopy — rules for using our prompt library and ASCII art collection.',
};

export default function TermsPage() {
  const lastUpdated = 'April 13, 2026';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: {lastUpdated}</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using PromptCopy (saju-todayfortune.com), you accept and agree to be
            bound by these Terms of Service. If you do not agree to these terms, please do not
            use our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Use of Content</h2>
          <p className="mb-3">
            All prompts and ASCII art on PromptCopy are provided for personal and commercial use.
            You may:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm mb-3">
            <li>Copy and use any prompt for personal projects</li>
            <li>Use prompts commercially to create AI-generated content</li>
            <li>Share prompts with attribution to PromptCopy</li>
            <li>Modify prompts for your specific needs</li>
          </ul>
          <p className="mb-3">You may not:</p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Republish our prompt library as your own website or product without significant transformation</li>
            <li>Scrape or automatically collect content from this site in bulk</li>
            <li>Use our content in ways that violate applicable laws</li>
            <li>Represent our prompts as exclusively your own original work for resale as a prompt library</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Intellectual Property</h2>
          <p>
            The prompt texts, descriptions, usage guides, and website design of PromptCopy are
            our original creative works. The ASCII characters themselves are part of the Unicode
            standard and are not owned by anyone. Our curation, organization, descriptions, and
            categorization of ASCII art are our original work.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Disclaimer of Warranties</h2>
          <p>
            PromptCopy is provided &ldquo;as is&rdquo; without any warranties, expressed or implied.
            We do not guarantee that prompts will produce specific results in any AI tool, as
            AI outputs depend on many factors outside our control including model versions,
            settings, and platform updates.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, PromptCopy shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising from your
            use of our website or content.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">6. Third-Party AI Tools</h2>
          <p>
            PromptCopy provides prompts for use with third-party AI tools. We are not affiliated
            with, endorsed by, or sponsored by any AI company or platform mentioned on our site.
            All product names and trademarks are the property of their respective owners.
            Your use of third-party AI tools is governed by those tools&apos; own terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">7. Advertising</h2>
          <p>
            Our website displays third-party advertisements through Google AdSense and potentially
            other advertising networks. These advertisements are clearly distinguishable from our
            content. We are not responsible for the content of third-party advertisements.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">8. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective
            immediately upon posting. Your continued use of the site after changes constitutes
            acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">9. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with applicable law.
            Any disputes shall be resolved in the appropriate courts of competent jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">10. Contact</h2>
          <p>
            For questions about these terms, please visit our{' '}
            <a href="/contact" className="text-indigo-600 hover:underline">Contact page</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
