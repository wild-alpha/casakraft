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
    title: "→ Customized Curtains",
    desc: "The professionally installed custom made curtains are created keeping in mind the unique dimensions of your window as well as your room lighting and the interiors. From an impressive collection of imported fabrics that range from light sheers to heavy blackout fabrics, each curtain is specifically tailor-made according to your needs, reflecting customized designs built around your lifestyle.",
  },
{
  title: "→ Motorized & Smart Blinds",
  desc:"Motorized and smart blinds from Casa Kraft enable you to operate the light and privacy levels from your phone or a smart home app. These blinds have become extremely popular for modern villas, apartments and offices where sleek looks and automated operation are among the topmost priorities, thus adding to the comfort as well as energy efficiency at work or at home."
},
  {
    title: "→ Customized Blinds & Layered Curtain Systems",
    desc: "As a  top supplier of blinds in Dubai, we offer custom made blinds and curtains in Dubai for those who want to have layered window systems that will give them total control of the amount of light and privacy during different times of the day. We supply all kinds of blinds from roller, Roman, Venetian and vertical blinds to meet all window sizes including sliding doors. Every single blind will be tailor-made based on the accurate measurements taken.",
  },
 {
  title: "→ Sheer & Custom Printed Curtains",
  desc:"Should you want something that is not only stylish but also allows the light to filter through, our sheer curtains in Dubai are what you need. Also, our customized printed curtains are something that you can go for to make them unique, offering luxurious custom curtains Dubai homeowners love. Our fabric will be chosen based on durability and design."
},
 {
  title: "→ Blackout & Sunscreen Fabric Solutions",
  desc: "The climatic conditions in Dubai require window solutions that are not just aesthetically pleasing. Our beautifully crafted blackout curtains and blinds will suit your bedrooms and media rooms well as they completely block out the sun, whereas the sunscreen fabrics cool off your living rooms and offices without compromising your view. These window solutions make cooling bills lower."
},
  {
    title: "→ Free Consultation & In-Home Measuring",
    desc: "We begin all our projects with a free consultation and an on-site visit, during which we measure your window panes and discuss your taste and budget needs face-to-face. This eliminates the need for guessing, which usually results in a bad fit for curtains or blinds, and allows you to see the materials for yourself.",
  },

  {
    title: "→ Curtain & Blind Repair and Maintenance",
    desc: "We don't just install blinds and curtains , we do repair and maintenance too, ranging from repairing faulty motors, fixing worn out tracks to hanging curtains which aren’t hung properly anymore. We can help you extend the life of your existing window fittings without the added expense of having to replace them completely.",
  },

  {
    title: "→ Professional Fitting and Fixing Services",
    desc: "No matter how amazing your curtain or blind design is, the installation of it will make or break it. This is where our proficient installation & custom fitting and fixing services come into their own, as part of all that we offer. Our installers have been trained in all aspects of curtain rail systems, motorized tracks, and blind mechanisms, ensuring that all fittings are installed securely through our modern designs & flawless installation services.",
  },
  {
    title: "→ Curtain and Blind Cleaning",
    desc: "Your curtains will remain clean and pristine as well as last longer with the help of regular cleaning. We provide expert curtain and blind cleaning services to keep dust, allergens, and stains out of your curtains and blinds without harming them in any way. Our cleaners have the expertise and know how to clean all sorts of fabric.",
  },
  {
    title: "→ Commercial & Hotel Curtains",
    desc: "Our company handles curtain and blind projects on a larger scale for hotels, restaurants, offices, and many other commercial establishments in Dubai. Large scale projects usually include bulk manufacturing, matching fabrics and shorter time frames of installation, and all these aspects are catered by our skilled team. You can have fire retardant and strong fabric curtains in your hospitality and office environments.",
  },
  
  {
    title: "→ Outdoor Curtains & Shades",
    desc: "For balconies, majlis sections, terraces and other outdoor spaces, we provide you with durable outdoor curtains and shades that are made to withstand the harsh climate of Dubai. Outdoor curtains do not fade nor absorb moisture like our indoor curtains, but still provide you with the same kind of customization as indoor ones.",
  },
  {
    title: "→ Acoustic & Sound-Reduction Curtains",
    desc: "For movie rooms, office spaces, and places close to bustling streets, we have our acoustic curtains. This type of curtain uses thick, multi-layered fabrics which are great at absorbing noise. This particular curtain will easily fit in with your interior decor while also keeping out noise.",
  },
  {
    title: "→ Children's Bedroom Curtains",
    desc: "We design fun and safe curtains for kids' bedrooms that use soft and strong fabric materials as well as cordless or automated designs for extra safety. We can custom design, prints and colors according to your kid’s room design, ranging from soft and muted pastel colors to wild and vivid prints.",
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
    Customized Curtains and Blinds in Dubai – Casa Kraft 
        </h2>

        {/* INTRO */}
        <p className="space-y-4 text-white/80 text-sm sm:text-base text-center">
       Windows are one of the most essential components of an interior design, and with the right window treatments, you can create an entirely new look and feeling for your home. At <b className="text-[#4eb5a9]"
 ><a href="https://casakraftinteriors.ae/renovation-dubai">Casa Kraft Interior Design & Renovation</a></b>, we provide high quality custom made curtains & blind installation services that will help you enhance the interior in accordance with your way of life, the theme of the interior design, and requirements of functionality. Whether you want to design luxurious villa interiors, interior design of modern apartments, office interiors, or commercial interiors, our experienced trainer will provide you with bespoke window treatments that will not only be elegant and comfortable but also functional. Every item from our range of curtains and blinds is manufactured from high-quality materials and installed professionally to give you an everlasting product with excellent performance.       </p>
      
        {/* HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center">
        Our Best Curtains & Blinds Services in Dubai

        </h2>
<p className="space-y-4 text-white/80 text-sm sm:text-base text-center">
       <b className="text-[#4eb5a9]"
 ><a href="https://casakraftinteriors.ae/">Casa Kraft</a></b> provides full spectrum window treatment services that are specifically customized to meet the needs of your property. Here's a brief summary of our services for the properties in Dubai.
       </p>

       

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