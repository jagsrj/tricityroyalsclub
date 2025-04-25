// src/components/Footer.tsx

export default function Footer() {
    return (
      <footer className="bg-blue-900 text-white py-8 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="font-semibold text-lg">Tricity Royals Club</p>
          <p className="text-sm text-blue-100">
            © {new Date().getFullYear()} All rights reserved | Waterloo Region, Canada
          </p>
          <div className="flex justify-center gap-6 mt-2 text-sm">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/tricityroyals/#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              Instagram
            </a>
            <a
              href="mailto:info@tricityroyals.ca"
              className="hover:text-blue-300"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    )
  }
  