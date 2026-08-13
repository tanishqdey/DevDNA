import { motion } from "framer-motion";
import {
  FolderGit2,
  GitFork,
  Star,
  FileText,
  Users,
  Trophy,
} from "lucide-react";

const StatsGrid = ({ totalRepos, originalRepos, averageStars, withDesc, collabedProjects, popularProject }) => {

  const stats = [
    {
      title: "Total Repositories",
      value: totalRepos,
      icon: FolderGit2,
      color: "text-cyan-400",
    },
    {
      title: "Original Repositories",
      value: originalRepos,
      icon: GitFork,
      color: "text-green-400",
    },
    {
      title: "Average Stars",
      value: Math.round(averageStars),
      icon: Star,
      color: "text-yellow-400",
    },
    {
      title: "Projects with Description",
      value: withDesc,
      icon: FileText,
      color: "text-indigo-400",
    },
    {
      title: "Collaborative Projects",
      value: collabedProjects,
      icon: Users,
      color: "text-orange-400",
    },
    {
      title: "Popular Project",
      value: popularProject,
      icon: Trophy,
      color: "text-pink-400",
    },
  ]

  return (
    <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">

      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ y: -5 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-gray-400 text-sm">
                  {stat.title}
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white text-wrap">
                  {stat.value}
                </h2>

              </div>

              <div
                className={`h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color}`}
              >
                <Icon size={28} />
              </div>

            </div>

          </motion.div>
        );
      })}

    </section>
  );
};

export default StatsGrid;