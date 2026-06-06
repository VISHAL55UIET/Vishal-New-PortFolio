import { codingProfiles } from "../data/codingProfiles";

export const CodingProfilesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Coding <span className="text-primary">Profiles</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile) => (
            <div
              key={profile.id}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-md
                rounded-2xl
                p-6
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <h3
                className={`text-2xl font-bold mb-3 ${profile.color}`}
              >
                {profile.platform}
              </h3>

              <p className="text-gray-300 mb-6">
                {profile.stats}
              </p>

              <a
                href={profile.link}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-block
                  px-4
                  py-2
                  rounded-lg
                  bg-primary
                  text-white
                  font-medium
                "
              >
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;