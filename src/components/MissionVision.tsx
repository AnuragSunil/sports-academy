import { FlagIcon, LightBulbIcon } from "@heroicons/react/24/solid";

export default function MissionVision() {
  return (
    <section
      className="relative px-4 sm:px-6 lg:px-20"
      style={{
        paddingTop: "6rem",
        paddingBottom: "4rem",
        minHeight: "60vh",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale"
        style={{
          backgroundImage: "url('/about/bg-texture.jpg')",
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black opacity-95" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto space-y-12 sm:space-y-16 text-white">
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-sans)] font-extrabold text-center mb-12 leading-tight tracking-tight">
          Our Mission & Vision
        </h2>

        {/* Mission */}
        <div className="flex justify-start">
          <div
            className="flex flex-col lg:flex-row items-start gap-6 bg-white/90 shadow-lg backdrop-blur-sm overflow-hidden border-l-4 border-l-lime-400"
            style={{
              borderTopRightRadius: "9999px",
              borderBottomRightRadius: "9999px",
              borderTopLeftRadius: "24px",
              borderBottomLeftRadius: "24px",
              padding: "1.5rem 1.75rem",
              width: "100%",
              maxWidth: "800px",
            }}
          >
            {/* Icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-lime-100 shadow flex-shrink-0">
              <FlagIcon className="w-8 h-8 sm:w-10 sm:h-10 text-lime-700" />
            </div>

            {/* Text */}
            <div className="flex-1 text-left">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-800 mb-2">
                Mission
              </h3>
              <p className="text-gray-700 font-sans leading-relaxed text-sm sm:text-base break-words">
                Our mission is to provide world-class coaching and
                infrastructure, empowering athletes to reach their highest
                potential while fostering discipline, teamwork, and lifelong
                passion for sports.
              </p>
            </div>
          </div>
        </div>

 {/* Vision */}
<div className="flex justify-end">
  <div
    className="flex flex-col lg:flex-row-reverse items-end lg:items-center gap-4 lg:gap-6 bg-white/90 shadow-lg backdrop-blur-sm overflow-hidden border-r-4 border-r-yellow-400"
    style={{
      borderTopLeftRadius: "9999px",
      borderBottomLeftRadius: "9999px",
      borderTopRightRadius: "24px",
      borderBottomRightRadius: "24px",
      padding: "1.5rem 1.75rem",
      width: "100%",
      maxWidth: "800px",
    }}
  >
    {/* Icon */}
    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-yellow-100 shadow">
      <LightBulbIcon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-600" />
    </div>

    {/* Text */}
    <div className="flex-1 text-right lg:text-right">
      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-gray-800 mb-2">
        Vision
      </h3>
      <p className="text-gray-700 font-sans leading-relaxed text-sm sm:text-base break-words">
        Our vision is to inspire the next generation of athletes by creating a
        culture of excellence, dedication, and community that goes beyond the
        playing field and shapes future leaders.
      </p>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}
