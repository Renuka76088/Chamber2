import React from "react";
import {
  CheckCircle2,
  User,
  CalendarDays,
  ArrowRight,
  Search,
  BookOpenText,
  Rss,
  Layers,
} from "lucide-react";

const BlogPage = () => {
  // Updated styles - bigger & simpler
  const pStyle = "text-lg md:text-xl text-gray-700 leading-relaxed mb-4";
  const h3Style =
    "text-sm md:text-base font-bold uppercase tracking-wider text-chamber-orange  text-orange-700  mb-3 flex items-center gap-3";
  const metaStyle =
    "text-sm font-semibold uppercase tracking-wide text-gray-500 flex items-center gap-3";

  const blogs = [
    {
      title: "The Shimmer of Mulberry Silk: 2026 Textile Trends",
      excerpt:
        "Why premium pink and pastel silks are dominating the corporate and festive markets.",
      author: "PAREKH TEXTILE OF CHAMBER",
      date: "Mar 15",
      category: "Style",
      img: "https://media.istockphoto.com/id/172343783/photo/textile-production-weaving.jpg?s=612x612&w=0&k=20&c=eQLoLQGxwHyddPEAwaXNR1IZL70YW9YTCGTX022PEDA=",
    },
    {
      title: "Infrastructure: New Soft-Tone Dyeing Units in Ujjain",
      excerpt:
        "Implementing advanced dyeing processes for the upcoming Parekh Fabrics collection.",
      author: "Tech Team",
      date: "Mar 12",
      category: "Innovation",
      img: "https://fabiflex.preyantechnosys.com/wp-content/uploads/2022/05/01-610x750.jpg",
    },
    {
      title: "Sustainable Weaving: Reducing Water Footprint",
      excerpt:
        "How our latest cotton-silk blends are reducing water usage without losing glow.",
      author: "HC Parekh",
      date: "Mar 08",
      category: "Sustainability",
      img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=600",
    },
  ];

  return (
    <div className="bg-white font-sans text-gray-900 pb-12 md:pb-16">
      {/* 1. COMPACT BANNER - Slightly taller for better impact */}
      <section className="relative h-[280px] md:h-[320px] bg-gray-900 text-white flex items-center overflow-hidden border-b-4 border-chamber-orange">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(#ea580c 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/4 md:w-1/6 bg-chamber-orange transform translate-x-8 skew-x-12 opacity-80"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full">
          <div className="flex items-center gap-3 mb-3">
            <BookOpenText className="text-chamber-orange" size={28} />
            <span className="text-xs md:text-sm font-bold uppercase tracking-[0.35em] text-chamber-orange">
              Insights & Updates
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-tight mb-2">
            Textile <span className="text-gray-300 italic">Perspectives</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Industry Insights • Trends • Innovations
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-16">
        {/* 2. FEATURED POST */}
        <section className="mb-16 grid md:grid-cols-12 gap-8 lg:gap-12 items-center border-b border-gray-200 pb-12">
          <div className="md:col-span-7 space-y-5">
            <h3 className={h3Style}>
              <Layers size={20} /> Featured Article
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-gray-900 leading-tight">
              Indian Pink Silk: Quality Demand & Industry Shift
            </h2>
            <div className="flex flex-wrap gap-6 items-center py-4 border-y border-gray-100">
              <div className={metaStyle}>
                <User size={16} className="text-chamber-orange" /> PAREKH TEXTILE OF CHAMBER
              </div>
              <div className={metaStyle}>
                <CalendarDays size={16} className="text-chamber-orange" /> March 18, 2026
              </div>
            </div>
            <p className={pStyle}>
              Observing a critical transition in Indian agency procurements regarding cotton-silk blends. Quarterly Rate Contracts must adapt to this new soft-palette market domination.
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 font-bold text-base uppercase tracking-wide flex items-center gap-3 hover:bg-chamber-orange transition-all rounded-md shadow-md">
              Read Full Article <ArrowRight size={18} />
            </button>
          </div>

          <div className="md:col-span-5 relative">
            <img
              src="https://media.istockphoto.com/id/1038082736/photo/cotton-chord-spools.jpg?s=612x612&w=0&k=20&c=kcRAlKizMGQPg6LH1kzAKlP4XS4C5CUQPQURRVRKWWE="
              alt="Silk"
              className="w-full h-[320px] md:h-[380px] object-cover rounded-lg shadow-lg border-r-4 border-chamber-orange"
            />
          </div>
        </section>

        {/* 3. LATEST UPDATES */}
        <section>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 border-b border-gray-200 pb-6">
            <h3 className={h3Style}>
              <Rss size={20} /> Latest Posts
            </h3>
            <div className="w-full md:w-80 flex items-center gap-3 border border-gray-200 p-3 bg-gray-50 rounded-md">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="flex-1 bg-transparent text-base outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {blogs.map((blog, i) => (
              <article
                key={i}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 rounded-lg overflow-hidden bg-white border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 px-3 py-1 bg-chamber-orange text-white text-xs font-bold uppercase tracking-wider rounded-sm">
                    {blog.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-4 items-center mb-3">
                    <div className={metaStyle}>{blog.author}</div>
                    <div className={metaStyle}>{blog.date}</div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight text-gray-900 group-hover:text-chamber-orange transition-colors mb-3">
                    {blog.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. CTA */}
        <div className="mt-20 text-center border-t border-gray-200 pt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 md:gap-6 bg-gray-50 px-8 py-6 border border-gray-200 rounded-lg shadow-sm">
            <CheckCircle2 size={28} className="text-chamber-orange" />
            <p className="text-lg md:text-xl text-gray-700 font-medium">
              Get the latest textile trends & chamber updates directly in your inbox.
            </p>
            <button className="bg-chamber-orange text-orange-700 px-8 py-4 font-bold text-base uppercase tracking-wide hover:bg-orange-700 transition-all rounded-md shadow-md">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <footer className="text-center py-8 text-sm font-semibold text-gray-400 uppercase tracking-wider border-t border-gray-200">
        Parik Textile Chamber • Serving Since 2007
      </footer>
    </div>
  );
};

export default BlogPage;