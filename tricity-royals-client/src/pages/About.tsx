import { motion } from 'framer-motion'

export default function About() {
  const timeline = [
    {
      date: 'Feb 2023',
      title: 'The Spark',
      description: 'A casual tea-time discussion sparked the idea of starting a cricket group.',
      icon: '☕',
    },
    {
      date: 'May 2023',
      title: 'SHARKS Formed',
      description: 'The first group “SHARKS” was officially launched to enjoy cricket together.',
      icon: '🦈',
    },
    {
      date: 'Jun 2023',
      title: 'Tournaments Begin',
      description: 'SHARKS participated in multiple competitive tournaments and became runners-up.',
      icon: '🏏',
    },
    {
      date: 'Aug 2023',
      title: 'Family Meetups',
      description: 'Organized family get-togethers to build a friendly, inclusive community.',
      icon: '👨‍👩‍👧‍👦',
    },
    {
      date: 'Sep 2023',
      title: 'Indoor Games Start',
      description: 'Introduced indoor competitions using school gym facilities.',
      icon: '🏫',
    },
    {
      date: 'Dec 2023',
      title: 'TRC Official Launch',
      description: 'Officially launched Tricity Royals Club with a broader vision for community service.',
      icon: '🎉',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen p-6">
  <div className="text-lg">
  <div className="hidden md:block bg-purple-500 text-white p-2">🌐 md:block is WORKING!</div>
  <div className="block md:hidden text-gray-800 p-2">📱 md:hidden is showing on mobile</div>
</div>


      <div className="max-w-5xl mx-auto space-y-20">
        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-3">
            About Tricity Royals Club
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Our story, values, and mission to bring the community together.
          </p>
        </div>

        {/* Timeline Section */}
        <section>
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-16">
            📜 How It All Started
          </h2>

          <div className="relative border-l-2 border-blue-200 pl-6 ml-2 space-y-20">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white p-6 rounded-xl shadow-md border border-blue-100 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl ${
                  index % 2 === 0 ? 'ml-0' : 'ml-8'
                }`}
              >
                <div className="absolute -left-[1.625rem] top-4 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center ring-4 ring-white shadow-md">
                  <span className="text-xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-800">{item.title}</h3>
                <span className="block text-sm text-blue-500 mb-2">{item.date}</span>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Vision Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🌍 Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Tricity Royals Club is dedicated to{' '}
            <span className="font-semibold text-blue-600">empowering communities</span> through service.
            We stand for <strong>ONENESS</strong>, <strong>HOLISTIC WELL-BEING</strong>, and{' '}
            <strong>SHARED PROSPERITY</strong>, uniting diverse cultural backgrounds across the Region of Waterloo.
          </p>
        </motion.section>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow p-6"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🎯 Our 2025 Mission</h2>
          <p className="text-gray-700">
            Our mission is to bring <strong>joy, unity, and wellness</strong> across Waterloo Region by organizing:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-1">
            <li>Cultural events</li>
            <li>Community services</li>
            <li>Sports tournaments (Cricket, Volleyball, etc.)</li>
            <li>Training & coaching camps</li>
            <li>Recognizing volunteers through awards</li>
          </ul>
        </motion.section>
      </div>
    </div>
  )
}
