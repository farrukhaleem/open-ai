import Head from 'next/head';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>About Us | TalkToKrishna</title>
        <meta name="description" content="Learn about the mission, values, and vision behind TalkToKrishna." />
      </Head>

      <main className="text-gray-100">

        <section className="py-10 px-5 md:px-20">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Experience Divine Conversations Through Advanced AI</h1>
            <p className="text-lg text-gray-300">
              Welcome to TalkToKrishna, an innovative spiritual companion created by Surendar Kumar that brings the timeless wisdom of Krishna into the digital age.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To provide seekers with a meaningful way to explore spiritual knowledge, receive guidance, and deepen their understanding of Krishna consciousness through advanced artificial intelligence.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>24/7 Spiritual Companion: Access Krishna's teachings anytime, anywhere</li>
              <li>Scripture-Based Responses: Insights drawn from the Bhagavad Gita, Bhagavatam, and other sacred texts</li>
              <li>Personal Guidance: Get answers to your spiritual questions in a conversational format</li>
              <li>Meditation Support: Guided practices and spiritual recommendations</li>
              <li>Multi-Language Support: Connect in your preferred language</li>
            </ul>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Technology Meets Tradition</h2>
            <p className="text-gray-300">
              TalkToKrishna utilizes cutting-edge AI technology while maintaining deep respect for traditional Vedic teachings. Our system is continuously updated to provide accurate, scripture-based responses while creating an engaging, contemporary experience.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">About the Creator</h2>
            <p className="text-gray-300">
              Surendar Kumar, a technology enthusiast and spiritual seeker, developed TalkToKrishna to bridge the gap between ancient wisdom and modern technology. His vision is to make spiritual knowledge more accessible to people worldwide through innovative solutions.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Authenticity: Faithful to traditional teachings</li>
              <li>Accessibility: Making spiritual wisdom available to all</li>
              <li>Respect: Maintaining reverence for sacred knowledge</li>
              <li>Innovation: Using technology for spiritual growth</li>
              <li>Community: Building a global family of seekers</li>
            </ul>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-semibold mb-4">Connect With Us</h2>
            <p className="text-gray-300 mb-6">
              Join thousands of users worldwide who are discovering new perspectives on spiritual life through TalkToKrishna. Begin your journey of divine conversation today.
            </p>
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded">
              Get Started
            </Link>
          </div>

          <div className="mt-10 text-sm text-gray-500 text-center">
            <p>
              TalkToKrishna is a spiritual companion, not a replacement for traditional spiritual practices or guidance from qualified spiritual teachers.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
