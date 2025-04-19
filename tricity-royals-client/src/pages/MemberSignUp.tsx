// src/pages/MemberSignUp.tsx
import { useState } from 'react'

export default function MemberSignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    sport: '',
    ageGroup: '',
    experience: '',
    notes: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/signup`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
          })
          

      if (res.ok) {
        setSubmitted(true)
      } else {
        alert("There was a problem submitting the form.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Something went wrong.")
    }
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">🎉 Submitted Successfully!</h2>
        <p className="text-gray-700">Your request has been received. A club admin will review your submission and contact you shortly.</p>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">📝 Member Sign-Up</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 block w-full rounded border border-gray-300 px-3 py-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 block w-full rounded border border-gray-300 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="mt-1 block w-full rounded border border-gray-300 px-3 py-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Sport</label>
            <select name="sport" value={form.sport} onChange={handleChange} required className="mt-1 block w-full rounded border border-gray-300 px-3 py-2">
              <option value="">Select</option>
              <option value="Cricket">Cricket</option>
              <option value="Volleyball">Volleyball</option>
              <option value="Pickleball">Pickleball</option>
              <option value="Badminton">Badminton</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Age Group</label>
            <select name="ageGroup" value={form.ageGroup} onChange={handleChange} required className="mt-1 block w-full rounded border border-gray-300 px-3 py-2">
              <option value="">Select</option>
              <option value="U12">U12</option>
              <option value="U19">U19</option>
              <option value="Adult">Adult</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Experience Level</label>
            <select name="experience" value={form.experience} onChange={handleChange} required className="mt-1 block w-full rounded border border-gray-300 px-3 py-2">
              <option value="">Select</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Notes</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={3} className="mt-1 block w-full rounded border border-gray-300 px-3 py-2"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Submit
        </button>
      </form>
    </div>
  )
}
