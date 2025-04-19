export default function Teams() {
  const sports = [
    {
      name: 'Cricket',
      emoji: '🏏',
      description: '25+ active players. Participates in leagues & tournaments across KWC.',
    },
    {
      name: 'Volleyball',
      emoji: '🏐',
      description: 'Our volleyball squad competes in “Spikers Royale” and local indoor matches.',
    },
    {
      name: 'Badminton',
      emoji: '🏸',
      description: 'Hosts “Smashers Royale” and weekly sessions for all age groups.',
    },
    {
      name: 'Pickleball',
      emoji: '🥒',
      description: 'Newly added! A fast-growing sport with an inclusive team spirit.',
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">Our Sports Teams</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border border-blue-100 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-3">{sport.emoji}</div>
              <h2 className="text-xl font-bold text-blue-700 mb-2">{sport.name}</h2>
              <p className="text-gray-600 text-sm">{sport.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
