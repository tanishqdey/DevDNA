import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Code2 } from "lucide-react";
import techMap from "../utils/Technology_Display_Map.json" with {type: "json"};
import { getTechIcon } from "../utils/techIcons.js";
import { Icon } from "@iconify/react";

const COLORS = [
  "#3B82F6",
  "#06B6D4",
  "#22C55E",
  "#F59E0B",
  "#EC4899",
  "#8B5CF6",
  "#64748B",
];

const LanguageChart = ({ languages }) => {

  const languageData = []
  for (const [language, percentage] of Object.entries(languages)) {
    languageData.push({
      name: techMap[language] || language,
      value: Number(percentage.toFixed(1))
    })
  }

  const allEmpty = languageData.every((language) => language.value === 0)

  if (allEmpty) {
    return (
      <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

        {/* Heading */}

        <div className="flex items-center justify-between mb-8">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Language Chart
            </h2>

            <p className="text-gray-400 mt-2">
              Based on your GitHub repository analysis , there aren't enough projects , repositories or technologies data to reliably assess the various languages you use . Therefore , language chart cannot be generated yet . Adding more projects and demonstrating a broader range of languages will enable a more accurate analysis .

            </p>

          </div>

        </div>
      </section>
    )
  }
  else {
    return (
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
      >
        {/* Heading */}

        <div className="flex items-center justify-between mb-10">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Language Analytics
            </h2>

            <p className="text-gray-400 mt-2">
              Distribution of code across all repositories.
            </p>

          </div>

          <div className="hidden md:flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">

            <Code2 size={18} />

            Languages

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Donut Chart */}

          <div className="h-[340px]">

            <ResponsiveContainer>

              <PieChart>

                <Pie
                  data={languageData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={3}
                >
                  {languageData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip
                  contentStyle={{
                    background: "#18181B",
                    border: "1px solid #27272A",
                    borderRadius: "14px",
                    color: "#fff",
                  }}
                />

              </PieChart>

            </ResponsiveContainer>

          </div>

          {/* Progress Bars */}

          <div className="space-y-6">

            {languageData.map((language, index) => {

              const IconLogo = getTechIcon(language.name);

              return (
                <div key={language.name}>

                  <div className="flex justify-between mb-2">

                    <div className="h-fit w-fit rounded-xl bg-gray-800/10 flex items-center justify-center gap-3">
                      <span className="text-white font-medium">

                        {language.name}

                      </span>
                      <Icon icon={IconLogo} width={20}
                        height={20} className="text-emerald-600" />
                    </div>

                    <span className="text-cyan-300">

                      {language.value}%

                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-white/10 overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${language.value}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.08,
                      }}
                      style={{
                        backgroundColor:
                          COLORS[index % COLORS.length],
                      }}
                      className="h-full rounded-full"
                    />

                  </div>

                </div>
              )

            })}

          </div>

        </div>

      </motion.section>
    );
  };
}

export default LanguageChart;