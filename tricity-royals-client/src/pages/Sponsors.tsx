export default function Sponsors() {
  const perks = [
    'Brand Visibility',
    'Targeted Audience',
    'Increased Credibility',
    'Exclusive Content',
    'Networking Opportunities',
  ]

  const packages = [
    {
      tier: 'Platinum',
      price: 3000,
      color: 'bg-gradient-to-r from-yellow-300 to-yellow-500',
      features: [
        'Tournament Jersey',
        'Exclusive Social Media Branding',
        'Display Banners at Events',
        'Award Ceremony – Primary Guest Invite',
      ],
    },
    {
      tier: 'Diamond',
      price: 1500,
      color: 'bg-gradient-to-r from-gray-300 to-gray-500',
      features: [
        'Tournament Jersey',
        'Social Media Posts',
        'Event Branding Kit',
      ],
    },
    {
      tier: 'Gold',
      price: 800,
      color: 'bg-gradient-to-r from-amber-200 to-yellow-400',
      features: ['Tournament Jersey', 'Social Media Posts'],
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">Become a Sponsor</h1>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🎁 Sponsor Advantages</h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-base list-disc list-inside">
            {perks.map((perk, i) => (
              <li key={i} className="bg-white border border-blue-100 rounded-lg p-4 shadow hover:shadow-md">
                {perk}
              </li>
            ))}
          </ul>
        </section>

        {/* Packages Section */}
        <section>
          <h2 className="text-2xl font-semibold text-blue-700 mb-8">💎 Sponsorship Packages</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`rounded-xl shadow-lg text-center text-white p-6 ${pkg.color}`}
              >
                <h3 className="text-2xl font-bold mb-2">{pkg.tier} Package</h3>
                <p className="text-lg font-semibold mb-4">${pkg.price} CAD</p>
                <ul className="text-sm space-y-2 text-white/90">
                  {pkg.features.map((f, j) => (
                    <li key={j}>✔️ {f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Optional: Past Sponsors */}
        {/* <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">🏢 Our Sponsors History</h2>
          <p className="text-gray-600">[Add sponsor logos or acknowledgements here]</p>
        </section> */}
      </div>
    </div>
  )
}
