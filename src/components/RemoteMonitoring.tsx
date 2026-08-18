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
        bg-white
        text-[#0a192f]
      "
    >
      {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

      {/* Soft blue glow kanan atas */}
      <div
        className="
          absolute
          -top-64
          -right-52
          w-[700px]
          h-[700px]
          rounded-full
          bg-sky-100/60
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Soft cyan glow kiri bawah */}
      <div
        className="
          absolute
          -bottom-64
          -left-52
          w-[650px]
          h-[650px]
          rounded-full
          bg-cyan-50/70
          blur-[150px]
          pointer-events-none
        "
      />

      {/* Grid pattern sangat halus */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          pointer-events-none
          bg-[linear-gradient(#0a192f_1px,transparent_1px),linear-gradient(90deg,#0a192f_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* =========================================
          CONTENT
      ========================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* =========================================
            HEADER
        ========================================== */}

        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-3.5
              py-1.5
              rounded-full
              bg-blue-50
              border
              border-blue-100
              text-[#007bff]
              text-[10px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[0.14em]
            "
          >
            <Wifi className="w-3.5 h-3.5" />

            IT & Remote Surveillance
          </div>

          {/* Main Heading */}
          <h2
            className="
              mt-5
              text-3xl
              sm:text-4xl
              lg:text-5xl
              font-extrabold
              tracking-tight
              text-[#0a192f]
              leading-[1.1]
            "
          >
            Pantau Lokasi Anda dari Mana Saja
          </h2>

          {/* Description */}
          <p
            className="
              mt-4
              text-sm
              sm:text-base
              text-slate-500
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
            SYSTEM FLOW CONTAINER
        ========================================== */}

        <div
          className="
            mt-12
            lg:mt-14
            rounded-3xl
            border
            border-slate-200
            bg-[#f8fafc]
            shadow-sm
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
                text-[#007bff]
              "
            >
              Arsitektur Alur Sistem Monitoring
            </p>

            <p
              className="
                mt-1.5
                text-xs
                sm:text-sm
                text-slate-500
              "
            >
              Integrasi end-to-end dari perangkat tangkap optik hingga
              ke layar kendali pengguna.
            </p>

          </div>

          {/* =========================================
              WORKFLOW
          ========================================== */}

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
              const Icon =
                iconMap[step.iconName] || Camera;

              return (
                <div
                  key={step.step}
                  className="relative group"
                >

                  {/* Workflow Card */}
                  <div
                    className="
                      h-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-white
                      hover:border-blue-200
                      hover:shadow-md
                      hover:-translate-y-1
                      transition-all
                      duration-300
                      p-5
                      text-center
                    "
                  >

                    {/* Step Badge */}
                    <div
                      className="
                        inline-flex
                        px-2
                        py-1
                        rounded-md
                        bg-blue-50
                        border
                        border-blue-100
                        text-[9px]
                        font-mono
                        font-bold
                        text-[#007bff]
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
                        border-blue-100
                        bg-blue-50/60
                        flex
                        items-center
                        justify-center
                        text-[#007bff]
                        group-hover:bg-[#007bff]
                        group-hover:text-white
                        group-hover:border-[#007bff]
                        group-hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-4
                        text-sm
                        sm:text-base
                        font-bold
                        text-[#0a192f]
                        group-hover:text-[#007bff]
                        transition-colors
                      "
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="
                        mt-2
                        text-[11px]
                        sm:text-xs
                        text-slate-500
                        leading-relaxed
                      "
                    >
                      {step.desc}
                    </p>

                  </div>

                  {/* Arrow Desktop */}
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
                        bg-white
                        border
                        border-blue-200
                        shadow-sm
                        items-center
                        justify-center
                        text-[#007bff]
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
            REMOTE MONITORING FEATURES
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
                  border-slate-200
                  bg-white
                  p-5
                  sm:p-6
                  hover:border-blue-200
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                {/* Icon */}
                <div
                  className="
                    w-10
                    h-10
                    rounded-xl
                    bg-blue-50
                    border
                    border-blue-100
                    flex
                    items-center
                    justify-center
                    text-[#007bff]
                    group-hover:bg-[#007bff]
                    group-hover:text-white
                    group-hover:border-[#007bff]
                    transition-all
                    duration-300
                  "
                >
                  <Icon className="w-4 h-4" />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-4
                    text-sm
                    sm:text-base
                    font-bold
                    text-[#0a192f]
                    group-hover:text-[#007bff]
                    transition-colors
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
                    text-slate-500
                  "
                >
                  {feature.description}
                </p>

              </article>
            );
          })}

        </div>

        {/* =========================================
            BOTTOM INFO
        ========================================== */}

        <div
          className="
            mt-10
            max-w-3xl
            mx-auto
            text-center
          "
        >

          <div
            className="
              inline-flex
              items-center
              justify-center
              px-5
              py-2.5
              rounded-full
              bg-blue-50/70
              border
              border-blue-100
              text-xs
              sm:text-sm
              text-slate-600
            "
          >
            Sistem monitoring dapat disesuaikan dengan kebutuhan
            jaringan, jumlah kamera, lokasi, dan hak akses pengguna.
          </div>

        </div>

        {/* Bottom Accent */}
        <div className="mt-10 flex justify-center">

          <div
            className="
              w-40
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#007bff]/30
              to-transparent
            "
          />

        </div>

      </div>
    </section>
  );
};
