'use client';

const DesignV = () => {
  return (
    // Section has no padding so the bg spans full width naturally.
    <section className="bg-black/80 py-10">
      <div className="max-w-4xl mx-auto px-4 text-center">

        <h2 className="text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
          Get In Touch With Casa Kraft
        </h2>

        <p className="text-white/80 text-sm md:text-base mb-8">
          Premium Custom Curtains, Blinds & Window Treatments in Dubai
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/gallery"
            className="bg-[#1f5a53] hover:bg-[#276d64] text-white px-6 py-3 text-base transition text-center"
          >
            See Our Projects
          </a>

          <a
            href="https://wa.me/971586023677"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#4eb5a9] text-white hover:bg-[#4eb5a9] hover:text-black px-6 py-3 text-base transition text-center"
          >
            WhatsApp Us
          </a>

          <a
            href="/contact-us"
            className="bg-white text-black hover:bg-gray-200 px-6 py-3 text-base transition text-center"
          >
            Request Quote
          </a>
        </div>

      </div>
    </section>
  );
};

export default DesignV;