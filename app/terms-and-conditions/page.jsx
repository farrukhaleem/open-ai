import Head from 'next/head';
import PageWrapper from './../components/PageWrapper';

export default function TermsAndConditions() {
  return (
    <PageWrapper>
      <Head>
        <title>Terms and Conditions | TalkToKrishna</title>
        <meta name="description" content="Read the Terms and Conditions for using TalkToKrishna." />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10 text-gray-200">
        <h1 className="text-3xl font-bold mb-4 text-white">Terms and Conditions</h1>
        <p className="text-sm text-gray-400 mb-8">Last Updated: March 27, 2025</p>

        <p className="mb-4">
          Welcome to <strong>TalkToKrishna</strong>. By accessing or using our AI chatbot service, you agree to these Terms and Conditions.
        </p>

        <Section title="1. Service Description">
          <p>
            TalkToKrishna is an AI-based service that provides answers related to the Bhagavad Gita and Krishna&apos;s teachings. Unlike general AI
            chatbots, our service specifically focuses on providing insights from the Bhagavad Gita and related spiritual texts.
          </p>
        </Section>

        <Section title="2. User Guidelines">
          <ul className="list-disc list-inside space-y-1">
            <li>Use the service responsibly and ethically</li>
            <li>Not misuse or attempt to exploit the system</li>
            <li>Not use the service for illegal purposes</li>
            <li>Respect the spiritual nature of the content</li>
            <li>Not upload harmful or malicious content</li>
          </ul>
        </Section>

        <Section title="3. Intellectual Property">
          <p>All content, including but not limited to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>AI responses</li>
            <li>Interface design</li>
            <li>Graphics and logos</li>
            <li>Text and formatting</li>
          </ul>
          <p>are property of TalkToKrishna and protected by intellectual property laws.</p>
        </Section>

        <Section title="4. Disclaimer">
          <p>
            While our AI chatbot serves as a personal Gita coach offering spiritual guidance and solutions for life&apos;s challenges from a divine
            perspective, we explicitly state that:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>The service is not a replacement for professional religious guidance</li>
            <li>Responses are AI-generated interpretations</li>
            <li>We do not guarantee 100% accuracy</li>
            <li>Users should exercise personal judgment</li>
          </ul>
        </Section>

        <Section title="5. User Content">
          <ul className="list-disc list-inside space-y-1">
            <li>Grant us permission to use the content</li>
            <li>Verify that you have rights to share such content</li>
            <li>Accept that we may moderate or remove inappropriate content</li>
          </ul>
        </Section>

        <Section title="6. Service Availability">
          <ul className="list-disc list-inside space-y-1">
            <li>May interrupt service for maintenance</li>
            <li>Cannot guarantee 24/7 availability</li>
            <li>Reserve the right to modify or discontinue features</li>
            <li>May limit access based on geographical location</li>
          </ul>
        </Section>

        <Section title="7. Account Security">
          <ul className="list-disc list-inside space-y-1">
            <li>Maintaining password confidentiality</li>
            <li>Restricting access to your account</li>
            <li>All activities under your account</li>
            <li>Notifying us of security breaches</li>
          </ul>
        </Section>

        <Section title="8. Limitation of Liability">
          <ul className="list-disc list-inside space-y-1">
            <li>Indirect or consequential damages</li>
            <li>Loss of data or profits</li>
            <li>Service interruptions</li>
            <li>Third-party actions</li>
            <li>User misinterpretation of advice</li>
          </ul>
        </Section>

        <Section title="9. Modifications">
          <ul className="list-disc list-inside space-y-1">
            <li>Modify these terms at any time</li>
            <li>Change service features</li>
            <li>Adjust pricing (if applicable)</li>
            <li>Update user requirements</li>
          </ul>
        </Section>

        <Section title="10. Governing Law">
          <p>
            These terms are governed by <strong>[Your Jurisdiction]</strong> law. Any disputes will be subject to the exclusive jurisdiction of courts in <strong>[Your Jurisdiction]</strong>.
          </p>
        </Section>

        <Section title="11. Termination">
          <ul className="list-disc list-inside space-y-1">
            <li>Terminate accounts</li>
            <li>Restrict access</li>
            <li>Remove content</li>
            <li>Block users for violations or inappropriate behavior</li>
          </ul>
        </Section>

        <Section title="Contact">
          <p>For questions about these Terms and Conditions, contact:</p>
          <p>
            Surendar Kumar<br />
            Email: <a href="mailto:kumar@talktokrishna.com" className="text-blue-400 underline">kumar@talktokrishna.com</a>
          </p>
        </Section>

        <p className="mt-6">
          By using TalkToKrishna, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
        </p>
      </main>
    </PageWrapper>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
      {children}
    </section>
  );
}
