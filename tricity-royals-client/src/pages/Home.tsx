import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useEffect } from 'react'

export default function Home() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3 },
      },
    },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next()
    }, 3000)
    return () => clearInterval(interval)
  }, [instanceRef])

  const athletes = [
    {
      name: 'sachin',
      label: 'Sachin Tendulkar',
      quotes: [
        "People throw stones at you and you convert them into milestones.",
        "Chase your dreams. But make sure you don’t find shortcuts.",
      ],
    },
    {
      name: 'ronaldo',
      label: 'Cristiano Ronaldo',
      quotes: [
        "Your love makes me strong, your hate makes me unstoppable.",
        "We don’t want to tell our dreams. We want to show them.",
      ],
    },
    {
      name: 'federer',
      label: 'Roger Federer',
      quotes: [
        "Believe in the long-term plan.",
        "There is no way around the hard work. Embrace it.",
      ],
    },
  ]

  const getRandomQuote = (quotes: string[]) =>
    quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <div className="font-sans text-gray-800">
      {/* 🔹 Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-600 text-white min-h-[90vh] flex flex-col items-center justify-center px-6 py-16 text-center">
       
        <img
  src="/trc_logo_large.png"
  alt="TRC Logo"
  className="w-52 h-auto mx-auto mb-8 drop-shadow-2xl rounded-xl"
/>

        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to Tricity Royals Club
          </h1>
          <p className="text-lg md:text-xl text-blue-100">
            Uniting Waterloo’s vibrant community through sports, wellness, and shared passion.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="/signup"
              className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-full shadow hover:bg-blue-100 transition"
            >
              Join as Member
            </a>
            <a
              href="/teams"
              className="bg-blue-100 text-white font-semibold py-3 px-6 rounded-full shadow hover:bg-blue-300 transition"
            >
              View Teams
            </a>
          </div>
        </div>
      </section>

      {/* 🔹 Athlete Carousel Section */}
      <section
        className="py-12 px-6 bg-[url('/bg-sports.jpg')] bg-cover bg-center bg-no-repeat text-white"
      >
        <h2 className="text-center text-2xl font-bold mb-6 drop-shadow-lg">Icons Who Inspire Us</h2>
        <div ref={sliderRef} className="keen-slider">
          {athletes.map((athlete) => (
            <div
              key={athlete.name}
              className="keen-slider__slide w-64 p-4 flex-shrink-0 text-center"
            >
              <img
                src={`/${athlete.name}_avatar.jpg`}
                alt={athlete.label}
                className="rounded-full w-48 h-48 mx-auto object-cover border-4 border-white shadow-xl hover:scale-105 transition duration-300"
              />
              <p className="mt-3 font-semibold text-lg">{athlete.label}</p>
              <p className="text-sm italic text-blue-100 mt-2">
                “{getRandomQuote(athlete.quotes)}”
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Vision & Mission */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">Our Vision & Mission</h2>
          <p className="text-gray-700 text-lg">
            We’re here to unite Waterloo’s diverse community through sports, service, and wellness.
          </p>
          <p className="text-gray-600">
            Tricity Royals stands for <strong>Oneness</strong>, <strong>Holistic Well-being</strong>, and{' '}
            <strong>Shared Prosperity</strong> — empowering people through cultural and sporting events.
          </p>
          <a
            href="/about"
            className="inline-block mt-4 text-blue-600 font-medium hover:underline"
          >
            Learn more about our journey →
          </a>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-blue-900 text-white py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="font-semibold text-lg">Tricity Royals Club</p>
          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} All rights reserved. | Waterloo Region, Canada
          </p>
          <div className="flex justify-center gap-6 mt-2 text-sm">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-300">Facebook</a>
            <a href="https://www.instagram.com/tricityroyals/" target="_blank" className="hover:text-blue-300">Instagram</a>
            <a href="mailto:info@tricityroyals.ca" className="hover:text-blue-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
