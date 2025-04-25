// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-blue-800 text-white text-sm py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left: Copyright */}
          <div className="text-center sm:text-left">
            <p>© {new Date().getFullYear()} Tricity Royals Club</p>
            <p>Made with ❤️ in Waterloo</p>
          </div>
  
          {/* Right: Links */}
          <div className="flex gap-4 items-center">
            <a
              href="https://www.instagram.com/tricityroyals"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
              title="Instagram"
            >
              📸 Instagram
            </a>
  
            <a
              href="mailto:tricityroyalsclub@gmail.com"
              className="hover:text-blue-200 transition"
              title="Email Us"
            >
              📧 tricityroyalsclub@gmail.com
            </a>
          </div>
        </div>
      </footer>
    )
  }
  