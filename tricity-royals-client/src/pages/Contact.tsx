export default function Contact() {
    return (
      <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen p-6">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">Contact Us</h1>
  
          <p className="text-center text-gray-600 mb-10">
            Have questions, feedback, or want to join Tricity Royals Club? Fill out the form below and we’ll get back to you!
          </p>
  
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Thank you! This is just a mockup. You can integrate a backend/email service later.')
            }}
            className="space-y-6 bg-white p-6 rounded-xl shadow-md border border-blue-100"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
  
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-blue-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
  
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
  
          {/* Optional Contact Info */}
          <div className="text-center mt-10 text-gray-600">
            <p>Email us at: <a href="mailto:tricityroyalsclub@gmail.com" className="text-blue-600 font-medium">tricityroyalsclub@gmail.com</a></p>
            <p className="mt-2">Follow us on Instagram: <a href="https://instagram.com/tricityroyals" className="text-blue-600">@tricityroyals</a></p>
          </div>
        </div>
      </div>
    )
  }
  