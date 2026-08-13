import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Target,
  CheckCircle2,
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
    },
  }),
};

const siw = ({strengths , intermediates , weaknesses}) => {

  const Strengths = []
  const Intermediates = []
  const growthAreas = []

  for(const strength of strengths){
    Strengths.push(strength)
  }
  for(const intermediate of intermediates){
    Intermediates.push(intermediate)
  }
  for(const growthArea of weaknesses){
    growthAreas.push(growthArea)
  }

  return (
    <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

      {/* Heading */}

      <div className="mb-10">

        <h2 className="text-3xl font-bold text-white">

          Developer Assessment

        </h2>

        <p className="mt-2 text-gray-400">

          In depth analysis of your current developer profile.

        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Strengths */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={cardVariants}
          className="rounded-3xl border border-green-500/20 bg-green-500/5 p-6 min-h-[260px] h-fit lg:h-full"
        >

          <div className="flex items-center gap-3">

            <ShieldCheck className="text-green-400"/>

            <h3 className="text-xl font-semibold text-white">

              Core Strengths

            </h3>

          </div>

          <p className="mt-3 text-sm text-gray-400">

            Skills where your GitHub profile demonstrates strong capability.

          </p>

          <div className="mt-6 space-y-3">

            {Strengths.length > 0 ? Strengths.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
              >

                <CheckCircle2
                  size={18}
                  className="text-green-400"
                />

                <span className="text-gray-200">

                  {item}

                </span>

              </div>

            )):(
              <div className="text-sm text-white p-2">Based on your GitHub repository analysis , there aren't enough projects , repositories or technologies data to reliably assess your technical strengths.</div>
            )}

          </div>

        </motion.div>

        {/* Intermediate */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={cardVariants}
          className="rounded-3xl border border-yellow-500/20 bg-yellow-500/5 p-6 min-h-[260px] h-fit lg:h-full"
        >

          <div className="flex items-center gap-3">

            <TrendingUp className="text-yellow-400"/>

            <h3 className="text-xl font-semibold text-white">

              Developing Skills

            </h3>

          </div>

          <p className="mt-3 text-sm text-gray-400">

            Areas showing promising experience but with room to grow.

          </p>

          <div className="mt-6 space-y-3">

            {Intermediates.length > 0 ? Intermediates.map((item) => (

              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white/5 p-3"
              >

                <TrendingUp
                  size={18}
                  className="text-yellow-400"
                />

                <span className="text-gray-200">

                  {item}

                </span>

              </div>

            )):(
              <div className="text-sm text-white p-2">Based on your GitHub repository analysis , there aren't enough projects , repositories or technologies data to reliably assess your technical skills which are at intermediate level. </div>
            )}

          </div>

        </motion.div>

        {/* Growth */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={cardVariants}
          className="rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6 lg:col-span-2"
        >

          <div className="flex items-center gap-3">

            <Target className="text-cyan-400"/>

            <h3 className="text-xl font-semibold text-white">

              Growth Opportunities

            </h3>

          </div>

          <p className="mt-3 text-sm text-gray-400">

            Technologies that can significantly improve your profile.

          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            {growthAreas.map((item) => (

              <motion.div
                key={item}
                whileHover={{
                  scale: 1.05,
                }}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
              >

                {item}

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default siw ;