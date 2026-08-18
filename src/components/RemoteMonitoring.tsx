import React from 'react';
import {
  Camera,
  HardDrive,
  Wifi,
  MonitorSmartphone,
  Server,
  Globe,
  Users,
  PlayCircle,
  Lock,
  Grid3X3,
  ArrowRight
} from 'lucide-react';

import {
  REMOTE_MONITORING_FEATURES,
  WORKFLOW_STEPS
} from '../data/companyData';

const iconMap: Record<string, React.ElementType> = {
  Camera,
  HardDrive,
  Wifi,
  MonitorSmartphone,
  Server,
  Globe,
  Users,
  PlayCircle,
  Lock,
  Grid: Grid3X3
};

export const RemoteMonitoring: React.FC = () => {
  return (
    <section
      id="remote-monitoring"
      className="
        relative
        py-20
        lg:py-24
        overflow-hidden
        text-white
        bg-gradient-to-br
        from-[#06162b]
        via-[#0a2947]
        to-[#155e75]
      "
    >
      {/* =========================================
          BACKGROUND ATMOSPHERIC GLOW
      ========================================== */}

      {/* Glow kanan atas */}
      <div
        className="
          absolute
          -top-56
          -right-48
          w-[750px]
          h-[750px]
          rounded-full
          bg-sky-300/10
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Glow kiri bawah */}
      <div
        className="
          absolute
          -bottom-64
          -left-52
          w-[700px]
          h-[700px]
          rounded-full
          bg-blue-400/10
          blur-[160px]
          pointer-events-none
        "
      />

      {/* Glow cyan tengah */}
      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[400px]
          rounded-full
          bg-cyan-300/[0.04]
          blur-[130px]
          pointer-events-none
        "
      />

      {/* Grid technology halus */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          pointer-events-none
          bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* Vignette */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-[#06162b]/30
          via-transparent
          to-[#06162b]/40
          pointer-events-none
        "
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="max-w-3xl mx-auto text-center">

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              py-1.5
              rounded-full
              bg-white/[0.06]
              backdrop-blur-md
              border
              border-cyan-300/20
              text-[#57e6ff]
              text-[10px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[0.14em]
              shadow-sm
            "
          >
            <Wifi className="w-3.5 h-3.5" />

            IT & Remote Surveillance
          </div>

          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              tracking-tight
              text-white
              leading-[1.1]
            "
          >
            Pantau Lokasi Anda dari Mana Saja
          </h2>

          <p
            className="
              mt-4
              text-sm
              sm:text-base
              text-slate-200/90
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Solusi surveillance PUSTEKINDO dirancang untuk kebutuhan
            monitoring fleksibel, baik melalui jaringan lokal (LAN)
            maupun internet publik sesuai dengan infrastruktur yang
            diterapkan di lokasi Anda.
          </p>

        </div>

        {/* =========================================
            SYSTEM FLOW
        ========================================== */}

        <div
          className="
            mt-12
            lg:mt-14
            rounded-3xl
            border
            border-white/10
            bg-[#07182e]/45
            backdrop-blur-xl
            shadow-2xl
            shadow-blue-950/20
            p-5
            sm:p-7
            lg:p-8
          "
        >
          {/* Flow Header */}
          <div className="text-center mb-7">

            <p
              className="
                text-[10px]
                sm:text-xs
                font-mono
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#38ddff]
              "
            >
              Arsitektur Alur Sistem Monitoring
            </p>

            <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
              Integrasi end-to-end dari perangkat tangkap optik hingga
              ke layar kendali pengguna.
            </p>

          </div>

          {/* Workflow */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-4
            "
          >
            {WORKFLOW_STEPS.map((step, index) => {
              const Icon = iconMap[step.iconName] || Camera;

              return (
                <div
                  key={step.step}
                  className="relative group"
                >
                  <div
                    className="
                      h-full
                      rounded-2xl
                      border
                      border-white/10
                      bg-[#07182e]/65
                      hover:bg-[#0a223d]/80
                      hover:border-cyan-300/40
                      transition-all
                      duration-300
                      p-5
                      text-center
                      shadow-sm
                    "
                  >
                    {/* Step Badge */}
                    <div
                      className="
                        inline-flex
                        px-2
                        py-1
                        rounded
                        bg-[#007bff]/20
                        border
                        border-[#00d4ff]/20
                        text-[9px]
                        font-mono
                        font-bold
                        text-[#38ddff]
                        uppercase
                      "
                    >
                      Step {step.step}
                    </div>

                    {/* Icon */}
                    <div
                      className="
                        mt-4
                        mx-auto
                        w-11
                        h-11
                        rounded-xl
                        border
                        border-cyan-300/15
                        bg-[#06162b]/70
                        flex
                        items-center
                        justify-center
                        text-[#38ddff]
                        group-hover:scale-105
                        transition-transform
                      "
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`
                        mt-4
                        text-sm
                        sm:text-base
                        font-bold
                        ${
                          index === 1
                            ? 'text-[#38ddff]'
                            : 'text-white'
                        }
                      `}
                    >
                      {step.title}
                    </h3>

                    {/* Desc */}
                    <p
                      className="
                        mt-2
                        text-[11px]
                        sm:text-xs
                        text-slate-300
                        leading-relaxed
                      "
                    >
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow desktop */}
                  {index < WORKFLOW_STEPS.length - 1 && (
                    <div
                      className="
                        hidden
                        xl:flex
                        absolute
                        top-1/2
                        -right-[14px]
                        -translate-y-1/2
                        z-20
                        w-7
                        h-7
                        rounded-full
                        bg-[#0a2947]
                        border
                        border-cyan-300/20
                        items-center
                        justify-center
                        text-[#38ddff]
                      "
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================
            FEATURES
        ========================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
        >
          {REMOTE_MONITORING_FEATURES.map((feature) => {
            const Icon =
              iconMap[feature.iconName] || Server;

            return (
              <article
                key={feature.id}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#07182e]/45
                  backdrop-blur-md
                  p-5
                  sm:p-6
                  hover:border-cyan-300/30
                  hover:bg-[#0a2947]/55
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  shadow-sm
                "
              >
                {/* Icon */}
                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-[#07182e]/80
                    border
                    border-cyan-300/15
                    flex
                    items-center
                    justify-center
                    text-[#38ddff]
                    group-hover:bg-cyan-300/10
                    group-hover:border-cyan-300/30
                    transition-colors
                  "
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-4
                    text-sm
                    sm:text-base
                    font-bold
                    text-white
                  "
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    leading-relaxed
                    text-slate-300
                  "
                >
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* =========================================
            BOTTOM ACCENT
        ========================================== */}

        <div className="mt-12 flex justify-center">
          <div
            className="
              w-40
              h-px
              bg-gradient-to-r
              from-transparent
              via-cyan-300/50
              to-transparent
            "
          />
        </div>

      </div>
    </section>
  );
};
