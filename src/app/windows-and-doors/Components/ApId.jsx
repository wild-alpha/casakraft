'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: "8+",   label: "Trusted Years" },
  { value: "100+", label: "Employees" },
  { value: "200+", label: "Residential Projects" },
  { value: "50+",  label: "Commercial Fit-Outs" },
];

const services = [
  {
    title: "→ Aluminium Doors and Windows Dubai",
    desc: "In Dubai, aluminum doors and windows set the standards for modern day real estate construction, being light but strong enough, corrosion-resistant and highly versatile. As an expert supplier of aluminum doors and windows, Casa Kraft offers sliding doors, bi-folding systems, casement windows, tilt and turn windows, curtain walling and heavy duty security doors, all of which come with powder coating to protect them from the harsh conditions prevailing in the UAE region.",
  },
{
  title: "→ Premium Glass Doors & Windows Services UAE",
  desc:"Our  glass doors and windows services at Casa Kraft provide frameless glass doors, framed glass entrances, glass partitions, sliding glass walls, and custom made glass panels for interior applications. We only use high-quality tempered glass, laminated glass and solar control glass provided by reliable manufacturers to provide you with maximum safety and performance."
},
  {
    title: "→ Modern Window & Door Installation Services",
    desc: "The modern installation services for windows and doors at Casa Kraft involve precision, fast action, and little interference with your personal or business activities. Casa Kraft's installation services extend to all building types and sizes, from private houses to apartment blocks, hotels, restaurants, shops, and commercial high-rises.",
  },
 {
  title: "→ Door & Window Alignment Dubai",
  desc:"Misaligned doors and windows cause loss of energy, water leakage, sound intrusion, and faster degradation of the frames and seals. Casa Kraft offers door and window alignment services Dubai, which can be performed during the installation process or as an individual visit for pre-existing doors and windows that have been misaligned over time."
},
 {
  title: "→ Door and Window Replacement",
  desc: "If the doors or windows of your house are old and need replacements, then we have the perfect solution for you in the form of our door and window replacement service. We have an extensive range of  doors and windows available in different types, materials, and finishes that can perfectly match the architecture of your house."
},
  {
    title: "→ Window Repair",
    desc: "Our window repair services at Casa Kraft in Dubai cater to all brands and types of windows including aluminum, uPVC, single glazed, and double glazed. Some of the most common problems that our team addresses include faulty locks and handles, glazing seal failure, damaged window frames, cracked glass panes, torn rubber gaskets, and jammed sliding track repair.",
  },

  {
    title: "→ Glass Door Repair",
    desc: "A broken glass door poses a security threat and is a liability visually. The glass door repair Dubai service provided by Casa Kraft repairs broken glass doors quickly in all the zones of the city with most of the repairs being carried out on the same day. Our services include repairing frameless glass doors, aluminum framed glass doors, sliding glass walls, pivot doors, and glass entrance systems that may be cracked, have broken hinges, defective floor springs, broken tracks, or leaking seals.",
  },

  {
    title: "→ Maintenance & Aftercare",
    desc: "Maintain your doors and windows in top condition through our maintenance programs. We check the hardware, replace worn-out parts, lubricate the moving parts, and perform preventative maintenance to ensure that your doors and windows will last longer and require less repair expenses in the future.",
  },
  {
    title: "→ Energy-Efficient Solutions",
    desc: "Make your home more energy efficient with our energy efficient doors and windows. Energy efficient products that we provide have the ability to insulate your home, prevent heat loss, and make sure that your home remains comfortable all throughout the year.",
  },
  {
    title: "→ Customization",
    desc: "Each property has a distinct style and set of specifications; that's why we provide complete customization of our doors and windows. We have a variety of designs, materials, finishes, and hardware available for you to choose from, in order to have doors and windows that match the architectural style of your property.",
  },
  
  {
    title: "→ Sliding & Folding Door Systems",
    desc: "Make your home more stylish with sliding doors, folding doors, automated entrance doors, patio doors, and telescoping systems. Doors and Windows in Dubai by us are built to save you space, light, and time.",
  },
];

const ApId = () => {
  return (
    // FIX 1: Replaced heavy asymmetric px ladder (up to px-40) with a centered max-width container.
    // px-40 on xl was crushing content to ~540px on a 1280px screen.
    // Now: full-width section with consistent px-4 sm:px-6, content capped at max-w-6xl.
    <section className="bg-black text-white py-10 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-10">

        {/* TRUST BAR */}
        {/* FIX 2: Added grid-cols-1 for very small screens, 2 for sm, 4 for md */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center border border-white/10 bg-[#111] py-4 px-3 rounded-md hover:border-[#4eb5a9]/40 transition"
            >
              <p className="text-2xl sm:text-3xl font-semibold text-[#4eb5a9]">
                {item.value}
              </p>
              <p className="text-xs text-white/60 mt-1 uppercase tracking-wide">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
    Professional Doors and Windows Services in Dubai
        </h2>

        {/* INTRO */}
        <p className="space-y-4 text-white/80 text-sm sm:text-base text-center">
       Finding a <b className="text-[#4eb5a9]"
 ><a href="https://casakraftinteriors.ae/">window and door company in Dubai</a></b> has become easier than ever. Casa Kraft Interior Design & Renovation is Dubai’s leading window and door company, offering the best windows and doors in Dubai for villas, apartments, commercial offices, retail spaces, and hospitality projects in the United Arab Emirates. Whether you are looking for aluminum doors and windows or high-end glass doors and windows, our skilled team from Casa Kraft can help you with any project.        </p>
      
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
         Our Complete Doors and Windows Services in Dubai

        </h2>

       

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111] border border-white/10 p-5 rounded-md hover:border-[#4eb5a9]/40 transition"
            >
              <h3 className="text-[#4eb5a9] font-semibold mb-2 text-sm sm:text-base">
                {item.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ApId;