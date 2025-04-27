import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | TalkToKrishna</title>
        <meta name="description" content="Read the Privacy Policy for using TalkToKrishna." />
      </Head>

      <main className="py-10 px-5 md:px-20 text-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-white">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-8">Last Updated: March 27, 2025</p>

        <p className="mb-4">
          Welcome to <strong>TalkToKrishna</strong> ("we," "us," or "our"). We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI chatbot service.
        </p>

        <Section title="Information We Collect" />

        <h3 className="text-lg font-semibold mt-4 mb-2 text-white">User-Provided Information</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Messages and conversations you have with our chatbot</li>
          <li>Optional account information (if you create an account)</li>
          <li>Feedback and suggestions you provide</li>
          <li>Technical support communications</li>
        </ul>

        <h3 className="text-lg font-semibold mt-4 mb-2 text-white">Automatically Collected Information</h3>
        <p className="mb-2">
          You have the option to provide your email or mobile number, but this is completely optional. We make this clear while collecting any information.
        </p>

        <h3 className="text-lg font-semibold mt-4 mb-2 text-white">Technical Information</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Device information</li>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Operating system</li>
          <li>Usage statistics</li>
          <li>Performance data</li>
        </ul>

        <Section title="How We Use Your Information" />
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Provide and improve our chatbot service</li>
          <li>Personalize your experience</li>
          <li>Analyze usage patterns and trends</li>
          <li>Enhance our AI model&apos;s responses</li>
          <li>Address technical issues</li>
          <li>Send important service updates</li>
          <li>Ensure compliance with our terms of service</li>
        </ul>

        <Section title="Data Storage and Security" />
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Encryption of data in transit and at rest</li>
          <li>Regular security assessments</li>
          <li>Access controls and authentication</li>
          <li>Secure data centers</li>
          <li>Regular backups</li>
          <li>Security monitoring</li>
        </ul>

        <Section title="Information Sharing" />
        <p className="mb-2">We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect our rights and safety</li>
          <li>With service providers who assist in our operations</li>
        </ul>

        <Section title="Your Rights" />
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Access your personal information</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of certain data collection</li>
          <li>Receive a copy of your data</li>
          <li>Lodge a complaint with supervisory authorities</li>
        </ul>

        <Section title="Children's Privacy" />
        <p className="mb-4">
          TalkToKrishna is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent/guardian and believe your child has provided us with personal information, please contact us.
        </p>

        <Section title="Changes to Privacy Policy" />
        <p className="mb-4">
          We may update this Privacy Policy periodically. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date.
        </p>

        <Section title="Contact Us" />
        <p className="mb-1">If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
        <p className="mb-4">
          Surendar Kumar<br />
          Email: <a href="mailto:kumar@talktokrishna.com" className="text-blue-400 underline">kumar@talktokrishna.com</a><br />
          Address: 20 - 22 Wenlock Road, London, UK, N1 7GU
        </p>

        <p className="mt-6">
          By using TalkToKrishna, you agree to this Privacy Policy.
        </p>
      </main>
    </>
  );
}

function Section({ title }) {
  return <h2 className="text-xl font-semibold mt-6 mb-2 text-white">{title}</h2>;
}
