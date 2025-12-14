const Banner = () => {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original/8YFL5QQVPy3AgrEQxNYVSgiPEbe.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Banner Content */}
      <div className="relative z-10 px-10 pt-40 max-w-xl text-white">
        <h1 className="text-5xl font-bold mb-4">
          The Witcher
        </h1>

        <div className="flex space-x-3 mb-6">
          <button className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-200">
            ▶ <span>Play</span>
          </button>

          <button className="flex items-center space-x-2 bg-gray-500/70 text-white px-6 py-2 rounded font-semibold hover:bg-gray-500/90">
            ℹ <span>More Info</span>
          </button>
        </div>

        <p className="text-sm leading-relaxed text-gray-200 line-clamp-3">
          Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his
          destiny in a turbulent world where people often prove more wicked than
          beasts.
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Banner;
