import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Layers3,
  Filter,
} from "lucide-react";
import { techCategoryMap } from "../utils/langToCat.js";
import { getTechIcon } from "../utils/techIcons.js";
import { Icon } from "@iconify/react";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Language",
  "Database",
  "AI",
  "DevOps",
  "Security",
];

const TechnologyArsenal = ({ knownTech }) => {

  const technologies = []
  const categories = new Set()
  for (const tech of knownTech) {
    technologies.push({
      name: tech,
      category: techCategoryMap[tech] || "Other"
    })
    categories.add(techCategoryMap[tech] || "Other")
  }

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTech = useMemo(() => {

    return technologies.filter((tech) => {

      const matchesCategory =
        selectedCategory === "All" ||
        tech.category === selectedCategory;

      const matchesSearch =
        tech.name
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;

    });

  }, [search, selectedCategory]);



  return (

    <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

      {/* Heading */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        <div>

          <div className="flex items-center gap-3">

            <Layers3 className="text-cyan-400" />

            <h2 className="text-3xl font-bold text-white">

              Technology Arsenal

            </h2>

          </div>

          <p className="text-gray-400 mt-2">

            Every technology detected from repositories,
            package.json, requirements.txt and GitHub topics.

          </p>

        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

          <p className="text-gray-400 text-sm">

            Total Technologies

          </p>

          <h3 className="text-2xl font-bold text-cyan-300">

            {technologies.length}

          </h3>

        </div>

      </div>

      {technologies.length === 0 ? <p className="text-sm text-cyan-300 p-2 mt-4">Based on your GitHub repository analysis , there aren't enough projects , repositories or technologies data to reliably assess your known tech stack . Therefore , Tech Arsenal cannot be created yet . Adding more projects and demonstrating a broader range of technologies will enable creating an impressive arsenal with your known technologies .</p>
        : (<div>
          <div className="relative mt-8">

            <Search
              size={18}
              className="absolute left-4 top-4 text-gray-500"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search technology"
              className="w-full rounded-2xl border border-white/10 bg-[#111114] py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-500"
            />

          </div>

          {/* Category Pills */}

          <div className="mt-6 flex flex-wrap gap-3">

            {[...categories].map((category) => {

              const active = category === selectedCategory;

              return (

                <button

                  key={category}

                  onClick={() => setSelectedCategory(category)}

                  className={`rounded-full px-5 py-2 transition-all

              ${active
                      ? "bg-cyan-500 text-white"
                      : "bg-white/5 border border-white/10 text-gray-400 hover:text-white"
                    }

              `}

                >

                  {category}

                </button>

              )

            })}

          </div>

          {/* Grid */}

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {filteredTech.map((tech, index) => {

              const IconLogo = getTechIcon(tech.name) || BookOpen;

              return (

                <motion.div

                  key={tech.name}

                  initial={{ opacity: 0, y: 20 }}

                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true }}

                  transition={{
                    delay: index * 0.03
                  }}

                  whileHover={{
                    y: -6,
                    scale: 1.03
                  }}

                  className="group rounded-2xl border border-white/10 bg-[#111114] p-5 cursor-pointer"

                >

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">

                      {tech.category}

                    </span>

                  </div>

                  <div className="h-fit w-fit rounded-xl bg-gray-800/10 flex items-center justify-center gap-3">
                    <h3 className="mt-6 text-lg font-semibold text-white group-hover:text-cyan-300 transition">

                      {tech.name}

                    </h3>
                    <Icon icon={IconLogo} width={25}
                      height={25} className="mt-5 text-emerald-600" />
                  </div>

                  <p className="mt-2 text-sm text-gray-500">

                    Detected from repository analysis.

                  </p>

                </motion.div>

              )

            })}

          </div>

          {/* Empty State */}

          {
            filteredTech.length === 0 && (

              <div className="py-16 text-center">

                <h3 className="text-white text-xl">

                  No technologies found

                </h3>

                <p className="text-gray-500 mt-2">

                  Try another search.

                </p>

              </div>

            )
          }
        </div>)
      }

    </section >

  );

};

export default TechnologyArsenal;