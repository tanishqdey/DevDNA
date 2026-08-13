import { motion } from "framer-motion";
import { Trophy, TrendingUp } from "lucide-react";
import techMap from "../utils/categoryMap.js"

const RoleCompatibility = ({ skillScores }) => {

  const roleScores = []
  for (const [roleName, roleScore] of Object.entries(skillScores)) {
    roleScores.push({
      role: techMap[roleName] || roleName,
      score: Math.round(roleScore)
    })
  }

  const allEmpty = roleScores.every((role) => role.score === 0)
  const highest = Math.max(...roleScores.map((r) => r.score))

  if (allEmpty) {
    return (
      <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

        {/* Heading */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Role Compatibility
            </h2>

            <p className="text-gray-400 mt-2">
              Based on your GitHub repository analysis , there aren't enough projects , repositories or technologies data to reliably assess your compatibility with roles such as Frontend , Backend , AI/ML , or DevOps Engineer etc . Therefore , role compatibility scores cannot be generated yet . Adding more projects and demonstrating a broader range of technologies will enable a more accurate analysis .

            </p>

          </div>


        </div>
      </section>
    )
  }
  else {
    return (
      <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

        {/* Heading */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Role Compatibility
            </h2>

            <p className="text-gray-400 mt-2">
              Based on detected technologies, project architecture and repository analysis.
            </p>

          </div>


        </div>

        {/* Roles */}

        <div className="space-y-7">

          {roleScores.map((role, index) => (

            <motion.div
              key={role.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
            >

              <div className="flex justify-between mb-3">

                <div className="flex items-center gap-3">

                  <span className="text-white font-medium">

                    {role.role}

                  </span>

                  {role.score === highest && (

                    <span className="flex items-center gap-2 rounded-full bg-yellow-500/15 border border-yellow-400/20 px-1 py-1 text-xs text-yellow-300 md:px-3">

                      <Trophy size={13} />

                      Best Match

                    </span>

                  )}

                </div>

                <span className="text-cyan-300 font-semibold">

                  {role.score}%

                </span>

              </div>

              {/* Progress Bar */}

              <div className="h-3 rounded-full bg-white/10 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${role.score}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                  }}
                  className={`h-full rounded-full

                  ${role.score === highest
                      ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                      : role.score >= 60
                        ? "bg-gradient-to-r from-green-500 to-yellow-400"
                        : role.score >= 45
                          ? "bg-gradient-to-r from-blue-500 to-green-500"
                          : role.score >= 30
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500"
                            : role.score >= 15
                              ? "bg-gradient-to-r from-gray-400 to-cyan-300"
                              : "bg-gradient-to-r from-red-500 to-gray-400"
                    }

                `}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </section>
    );
  };
}

export default RoleCompatibility;