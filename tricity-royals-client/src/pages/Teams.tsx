import { useEffect, useState } from "react";

interface Member {
  id: number;
  name: string;
  sports: string[];
  ageGroup: string;
  experience: string;
  notes?: string;
}

const sportsList = [
  { label: "Cricket 🏏", matchKeys: ["Cricket-Leather", "Cricket-Tennis"] },
  { label: "Volleyball 🏐", matchKeys: ["Volleyball"] },
  { label: "Pickleball 🏓", matchKeys: ["Pickleball"] },
  { label: "Badminton 🏸", matchKeys: ["Badminton"] },
];

export default function Teams() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMatchKeys, setSelectedMatchKeys] = useState<string[] | null>(
    null
  );
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(
          `${
            import.meta.env.VITE_API_BASE_URL
          }/api/approved-members?status=approved`
        );
        const data = await res.json();
        setMembers(data);
      } catch (err) {
        console.error("Error fetching members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  // Count members per sport group
  const sportCounts = sportsList.reduce((acc, sport) => {
    const count = members.filter((m) =>
      m.sports.some((s) => sport.matchKeys.includes(s))
    ).length;
    acc[sport.label] = count;
    return acc;
  }, {} as Record<string, number>);

  // Filter members based on selected sport(s) or show all
  const filteredMembers = selectedMatchKeys
    ? members.filter((m) => m.sports.some((s) => selectedMatchKeys.includes(s)))
    : members;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
        🏆 Our Teams
      </h1>

      {/* Show All Players Button - always visible */}
      <div className="text-center mb-6">
        <button
          onClick={() => {
            setSelectedMatchKeys(null);
            setSelectedLabel(null);
          }}
          disabled={!selectedMatchKeys}
          className={`inline-block px-4 py-2 rounded-full text-sm font-medium border transition
            ${
              selectedMatchKeys
                ? "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200"
                : "bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed"
            }`}
        >
          🔁 Show All {members.length}{" "}
          {members.length === 1 ? "Player" : "Players"}
        </button>
      </div>

      {/* Sport tiles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {sportsList.map((sport) => {
          const count = sportCounts[sport.label] ?? 0;
          const countText = `${count} ${count === 1 ? "Player" : "Players"}`;
          return (
            <button
              key={sport.label}
              onClick={() => {
                setSelectedMatchKeys(sport.matchKeys);
                setSelectedLabel(sport.label);
              }}
              className={`relative border p-6 rounded-xl shadow text-center hover:shadow-md transition flex flex-col items-center gap-2 ${
                selectedLabel === sport.label
                  ? "bg-blue-100 border-blue-500"
                  : "bg-white"
              }`}
            >
              <span className="text-lg font-semibold">{sport.label}</span>
              <span className="text-xs bg-blue-600 text-white px-3 py-1 rounded-full shadow-sm">
                {countText}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected sport title */}
      {selectedLabel && (
        <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
          Showing players for: {selectedLabel}
        </h2>
      )}

      {/* Member cards */}
      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : filteredMembers.length === 0 ? (
        <p className="text-center text-red-600">No approved members found.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredMembers.map((player) => (
            <div key={player.id} className="bg-white p-4 rounded-xl shadow">
              <h3 className="font-bold text-blue-800">{player.name}</h3>
              <p className="text-sm text-gray-600">
                {player.ageGroup} • {player.experience}
              </p>
              {player.notes && (
                <p className="text-xs text-gray-500 italic">
                  Note: {player.notes}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
