import { certificates } from "../data/certificates";

export const CertificateSection = () => {
  return (
    <section
      id="certificates"
      className="py-24 px-6 bg-[#050414] relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Achievements &{" "}
            <span className="text-primary">Certifications</span>
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full" />

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Certifications, achievements and professional milestones that
            showcase my learning journey and practical experience.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="
                group
                bg-white/5
                border border-white/10
                backdrop-blur-md
                rounded-2xl
                p-6
                transition-all
                duration-300
                hover:border-primary/50
                hover:-translate-y-2
                hover:shadow-[0_0_25px_rgba(130,69,236,0.25)]
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-2xl mb-5">
                🏆
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">
                {certificate.title}
              </h3>

              {/* Issuer */}
              <p className="text-primary font-medium mb-2">
                {certificate.issuer}
              </p>

              {/* Date */}
              <p className="text-gray-400 text-sm mb-6">
                Issued: {certificate.date}
              </p>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    text-center
                    py-2.5
                    rounded-lg
                    bg-primary
                    text-white
                    font-medium
                    hover:scale-105
                    transition-all
                  "
                >
                  View
                </a>

                <a
                  href={certificate.file}
                  download
                  className="
                    flex-1
                    text-center
                    py-2.5
                    rounded-lg
                    border border-white/10
                    bg-white/5
                    text-white
                    font-medium
                    hover:border-primary
                    transition-all
                  "
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;