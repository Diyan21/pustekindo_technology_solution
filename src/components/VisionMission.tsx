import React from 'react';

import {
  Target,
  Compass,
  CheckCircle2,
  Quote,
  Sparkles
} from 'lucide-react';

import {
  VISION_DATA,
  MISSION_DATA
} from '../data/companyData';

export const VisionMission: React.FC = () => {
  return (
    <section
      id="visi-misi"
      className="
        scroll-mt-32
        pt-4
        pb-20
        lg:pt-6
        lg:pb-24
        bg-white
        relative
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Quote Banner */}
        <div
          className="
            mb-14
            bg-[#ecfdf5]
            rounded-2xl
            p-8
            sm:p-10
            border
            border-emerald-200
            text-center
            shadow-lg
            relative
            overflow-hidden
          "
        >
          {/* Decorative Accent */}
          <div
            className="
              absolute
              -top-24
              left-1/2
              -translate-x-1/2
              w-[500px]
              h-[220px]
              bg-emerald-200/40
              blur-3xl
              rounded-full
              pointer-events-none
            "
          />

          <div className="relative z-10 max-w-3xl mx-auto">

            <Quote
              className="
                w-7
                h-7
                text-emerald-600
                mx-auto
                mb-3.5
              "
            />

            <blockquote
              className="
                text-lg
                sm:text-2xl
                md:text-3xl
                font-extrabold
                text-[#0a192f]
                tracking-tight
                leading-snug
              "
            >
              {VISION_DATA.quote}
            </blockquote>

            <p
              className="
                text-[11px]
                sm:text-xs
                text-emerald-700
                font-mono
                tracking-widest
                uppercase
                mt-4
                font-semibold
              "
            >
              Komitmen Integritas PUSTEKINDO TECHNOLOGY SOLUTION
            </p>
          </div>
        </div>

        {/* Vision & Mission Columns */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-6
            items-stretch
          "
        >

          {/* Visi */}
          <div
            className="
              lg:col-span-7
              bg-[#f8fafc]
              rounded-2xl
              p-7
              sm:p-8
              border
              border-slate-200/80
              shadow-sm
              flex
              flex-col
              justify-between
            "
          >
            <div>

              <div className="flex items-center space-x-3 mb-4">

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-emerald-50
                    border
                    border-emerald-200
                    flex
                    items-center
                    justify-center
                    text-emerald-600
                  "
                >
                  <Compass className="w-5 h-5" />
                </div>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-extrabold
                    text-[#0a192f]
                    tracking-tight
                  "
                >
                  {VISION_DATA.title}
                </h3>
              </div>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-slate-600
                  leading-relaxed
                  mb-6
                "
              >
                {VISION_DATA.statement}
              </p>

              <div className="pt-4 border-t border-slate-200/60">

                <h4
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-slate-400
                    mb-3
                    font-mono
                  "
                >
                  Pilar Komitmen Pelayanan
                </h4>

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                  "
                >
                  {VISION_DATA.pillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="
                        flex
                        items-start
                        space-x-2.5
                      "
                    >
                      <CheckCircle2
                        className="
                          w-4
                          h-4
                          text-emerald-600
                          shrink-0
                          mt-0.5
                        "
                      />

                      <span
                        className="
                          text-xs
                          sm:text-sm
                          text-slate-700
                          font-medium
                          leading-snug
                        "
                      >
                        {pillar}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Misi */}
          <div
            className="
              lg:col-span-5
              bg-[#ecfdf5]
              rounded-2xl
              p-7
              sm:p-8
              border
              border-emerald-200
              shadow-sm
              flex
              flex-col
              justify-between
            "
          >
            <div>

              <div className="flex items-center space-x-3 mb-4">

                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-white
                    border
                    border-emerald-200
                    flex
                    items-center
                    justify-center
                    text-emerald-600
                    shadow-sm
                  "
                >
                  <Target className="w-5 h-5" />
                </div>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-extrabold
                    text-[#0a192f]
                    tracking-tight
                  "
                >
                  {MISSION_DATA.title}
                </h3>
              </div>

              <p
                className="
                  text-sm
                  sm:text-base
                  text-slate-600
                  leading-relaxed
                "
              >
                {MISSION_DATA.statement}
              </p>
            </div>

            <div
              className="
                mt-8
                pt-5
                border-t
                border-emerald-200
                flex
                items-center
                space-x-3
                text-xs
                text-emerald-700
                font-mono
              "
            >
              <Sparkles className="w-4 h-4" />

              <span>
                Dedicated Quality & Integrity
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
