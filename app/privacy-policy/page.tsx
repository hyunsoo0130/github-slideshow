import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for PromptCopy — how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'April 13, 2026';

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-10">Last updated: {lastUpdated}</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">1. Introduction</h2>
          <p>
            Welcome to PromptCopy (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;),
            accessible at saju-todayfortune.com. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you visit our website. Please
            read this policy carefully.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">2. Information We Collect</h2>
          <h3 className="font-semibold mb-1">Automatically Collected Information</h3>
          <p className="mb-3">
            When you visit our site, we may automatically collect certain information about your
            device, including your IP address, browser type, operating system, referring URLs,
            and pages viewed. This information is used to analyze trends, administer the site,
            and improve user experience.
          </p>
          <h3 className="font-semibold mb-1">Information You Provide</h3>
          <p>
            If you contact us via our contact form, we collect your name, email address, and
            message content. We use this solely to respond to your inquiry.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">3. Cookies and Tracking Technologies</h2>
          <p className="mb-3">
            We use cookies and similar tracking technologies to enhance your experience on our site.
            Cookies are small data files stored on your device. You can control cookies through
            your browser settings.
          </p>
          <h3 className="font-semibold mb-1">Analytics</h3>
          <p className="mb-3">
            We use Google Analytics to analyze website traffic and usage patterns.
            Google Analytics collects data such as pages visited, time on site, and demographic
            information. This data is processed by Google in accordance with their privacy policy.
            You can opt out of Google Analytics by installing the
            <a href="https://tools.google.com/dlpage/gaoptout" className="text-indigo-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">
              Google Analytics Opt-out Browser Add-on
            </a>.
          </p>
          <h3 className="font-semibold mb-1">Advertising — Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements on our site. Google AdSense uses cookies
            to serve ads based on your prior visits to this website and other sites on the internet.
            Google&apos;s use of advertising cookies enables it and its partners to serve ads to our
            users based on their visit to our site and/or other sites on the Internet.
            You may opt out of personalized advertising by visiting
            <a href="https://www.google.com/settings/ads" className="text-indigo-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">
              Google&apos;s Ads Settings
            </a>.
            For more information on how Google uses data from our site, please visit
            <a href="https://policies.google.com/technologies/partner-sites" className="text-indigo-600 hover:underline mx-1" target="_blank" rel="noopener noreferrer">
              Google&apos;s Privacy & Terms
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">4. Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites and services. We are not
            responsible for the privacy practices of these external sites. We encourage you to
            review the privacy policies of any third-party sites you visit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">5. Data Retention</h2>
          <p>
            We retain automatically collected data for up to 26 months for analytics purposes.
            Contact form submissions are retained for up to 12 months and then deleted.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">6. Your Rights (GDPR / CCPA)</h2>
          <p className="mb-3">
            Depending on your location, you may have the following rights regarding your personal data:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>The right to access your personal data</li>
            <li>The right to correct inaccurate data</li>
            <li>The right to request deletion of your data</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent at any time</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, please contact us at the address below.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">7. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed to children under the age of 13. We do not knowingly
            collect personal information from children. If you believe a child has provided us
            with personal information, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            significant changes by updating the &ldquo;Last updated&rdquo; date at the top of this page.
            Your continued use of our website after any changes constitutes your acceptance of
            the new Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-2">9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="mt-3 bg-gray-50 rounded-xl p-4 text-sm">
            <p className="font-semibold">PromptCopy</p>
            <p>Website: saju-todayfortune.com</p>
            <p>Contact form: <a href="/contact" className="text-indigo-600 hover:underline">promptcopy.com/contact</a></p>
          </div>
        </section>
      </div>
    </div>
  );
}
