import { useState } from 'react'

//const sportsOptions = ['Cricket', 'Volleyball', 'Pickleball', 'Badminton']
const ageGroups = ['U13', 'U17', 'Adult']
const experienceLevels = ['Beginner', 'Intermediate', 'Advanced']

export default function MemberSignUp() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    sports: [] as string[],
    ageGroup: '',
    experience: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleMultiSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, (option) => option.value)
    setForm((prev) => ({ ...prev, sports: selected }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const result = await res.json()
      if (result.success) {
        alert('🎉 Registration successful!')
        setForm({
          name: '',
          email: '',
          phone: '',
          sports: [],
          ageGroup: '',
          experience: '',
          notes: '',
        })
      } else {
        alert('⚠️ There was a problem submitting the form.')
      }
    } catch (err) {
      console.error('Submission error:', err)
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 bg-white rounded-xl shadow-lg mt-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">🏅 Join Tricity Royals Club</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        {/* Multi-select Sports */}
        <div>
  <label className="block mb-1 font-medium text-gray-700">Select Sports (you can choose multiple)</label>
  <select
    name="sports"
    multiple
    value={form.sports}
    onChange={handleMultiSelectChange}
    required
    className="w-full border rounded px-3 py-2 h-40"
  >
    <optgroup label="Cricket">
      <option value="Cricket-Leather">Leather Ball</option>
      <option value="Cricket-Tennis">Tennis Ball</option>
    </optgroup>
    <optgroup label="Other Sports">
      <option value="Volleyball">Volleyball</option>
      <option value="Pickleball">Pickleball</option>
      <option value="Badminton">Badminton</option>
    </optgroup>
  </select>
  <p className="text-sm text-gray-500 mt-1">Hold Ctrl/Cmd to select multiple sports.</p>
</div>


        {/* Age Group */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Age Group</label>
          <select
            name="ageGroup"
            value={form.ageGroup}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select an option</option>
            {ageGroups.map((age) => (
              <option key={age} value={age}>
                {age}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Level */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Experience Level</label>
          <select
            name="experience"
            value={form.experience}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select an option</option>
            {experienceLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        {/* Notes */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Notes (optional)</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            className="w-full border rounded px-3 py-2"
            placeholder="Any additional details..."
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-700 text-white font-semibold px-6 py-2 rounded hover:bg-blue-800"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  )
}
