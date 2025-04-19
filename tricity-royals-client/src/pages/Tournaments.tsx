export default function Tournaments() {
  const upcoming = [
    {
      title: 'Spikers Royale',
      date: 'April 2025',
      sport: '🏐 Volleyball',
      description: 'Our signature volleyball tournament featuring top local teams.',
    },
    {
      title: 'Smashers Royale',
      date: 'May 2025',
      sport: '🏸 Badminton',
      description: 'Highly competitive badminton event with singles and doubles categories.',
    },
    {
      title: 'Summer Royale',
      date: 'July 2025',
      sport: '🎉 Family + Cultural',
      description: 'A family fun day with food, culture, music, and games.',
    },
    {
      title: 'Royals Cricket League – Season 2',
      date: 'Aug–Sep 2025',
      sport: '🏏 Cricket',
      description: 'Season 2 of our elite tennis ball cricket league in KWC.',
    },
    {
      title: 'Indoor + Pickleball League',
      date: 'Oct–Dec 2025',
      sport: '🏓 Indoor + Pickleball',
      description: 'Indoor games and our newest league for Pickleball enthusiasts.',
    },
  ]

  const recap = [
    {
      title: 'Smashers Royale 2024',
      icon: '🏸',
      details: '96 matches • 20 knockouts • 4210 points • 8 category winners',
    },
    {
      title: 'Royals Cricket League 2024',
      icon: '🏆',
      details: '9 top teams • Final: Victoria CC beat Wonderland CC',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-12">Tournaments</h1>

        {/* Upcoming Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">📅 Upcoming Events – 2025</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcoming.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md border border-blue-100 p-5 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-blue-800 mb-1">{event.title}</h3>
                <span className="block text-sm text-blue-500 mb-2">{event.date} • {event.sport}</span>
                <p className="text-gray-600 text-sm">{event.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Recap Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-6">🕘 Recap – 2024</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {recap.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow p-5 border border-blue-100 flex flex-col items-center text-center"
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <h4 className="text-lg font-bold text-blue-700 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.details}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
