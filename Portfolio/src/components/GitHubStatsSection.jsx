export const GitHubStatsSection = () => {
  return (
    <section
      id="github"
      className="py-24 px-6 bg-[#050414] relative overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            GitHub <span className="text-primary">Activity</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Open source contributions, repositories and development activity.
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="https://github.com/VISHAL55UIET"
            target="_blank"
            rel="noreferrer"
            className="block transition-all duration-300 hover:scale-[1.02]"
          >
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=VISHAL55UIET&theme=tokyonight"
              alt="GitHub Activity"
              className="
                w-full
                max-w-5xl
                rounded-2xl
                border
                border-white/10
                shadow-[0_0_25px_rgba(130,69,236,0.15)]
              "
            />
          </a>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/VISHAL55UIET"
            target="_blank"
            rel="noreferrer"
            className="
              inline-block
              px-8
              py-4
              rounded-full
              bg-primary
              text-white
              font-semibold
              hover:scale-105
              transition-all
              shadow-[0_0_20px_rgba(130,69,236,0.25)]
            "
          >
            Visit GitHub →
          </a>
        </div>

      </div>
    </section>
  );
};

export default GitHubStatsSection;