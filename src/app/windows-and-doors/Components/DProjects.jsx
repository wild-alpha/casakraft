'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      quote:
        "Our entire villa got new aluminium doors and windows by Casa Kraft. They are punctual, clean, and their workmanship is excellent. They were also able to align our doors and windows without fail. Everything opens and shuts perfectly now.",
      author: "Khalid Al Rashidi, Mirdif, Dubai",
    },
    {
      quote:
        "I contacted Casa Kraft to get my glass door repaired at night on a Friday; within an hour a technician arrived and made sure that everything was perfect right then and there. They are definitely the most reliable door and window repair firm in Dubai.",
      author: "Jennifer Walsh, Dubai Marina",
    },
  ];

  const [idx, setIdx] = React.useState(0);
  const [animate, setAnimate] = React.useState(true);

  const change = (i) => {
    setAnimate(false);
    setTimeout(() => {
      setIdx((i + testimonials.length) % testimonials.length);
      setAnimate(true);
    }, 250);
  };

  React.useEffect(() => {
    const t = setInterval(() => change(idx + 1), 6000);
    return () => clearInterval(t);
  }, [idx]);

  return (
    <div className="relative max-w-4xl mx-auto my-16 px-4 sm:px-6">
      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4eb5a9]/20 via-transparent to-[#4eb5a9]/20 blur-3xl rounded-3xl"></div>

      {/* Main card */}
      <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 p-6 sm:p-8 md:p-10 shadow-2xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
        >
          What Casa Kraft Clients Say
        </motion.h2>
        
        {/* Quote */}
        <div
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0px)" : "translateY(10px)",
            transition: "all 0.3s ease",
            minHeight: "140px",
          }}
          className="text-center"
        >
          <p className="text-white/80 text-sm md:text-lg leading-relaxed italic ">
            "{testimonials[idx].quote}"
          </p>

          <div className="mt-6 text-[#4eb5a9] font-semibold text-sm md:text-base">
            — {testimonials[idx].author}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={() => change(idx - 1)}
            className="w-10 h-10 rounded-full border border-[#4eb5a9] text-[#4eb5a9] hover:bg-[#4eb5a9] hover:text-black transition"
          >
            ‹
          </button>

          {/* dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => change(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === idx ? "w-6 h-2 bg-[#4eb5a9]" : "w-2 h-2 bg-zinc-600"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => change(idx + 1)}
            className="w-10 h-10 rounded-full border border-[#4eb5a9] text-[#4eb5a9] hover:bg-[#4eb5a9] hover:text-black transition"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

const aptGallery = [
  "/images/wd1.png",
  "/images/wd2.png",
  "/images/wd3.png",
  "/images/wd4.png",
  "/images/wd5.png",
  "/images/wd6.png",
];

const krSteps = [
  {
    id: '01',
    title: 'Step 1 – Free Consultation',
    desc: 'Get in touch with Casa Kraft Interior Design & Renovation to find out about the door and window installations. We understand your requirements, tastes, budget and timeline to recommend the most suitable solution.',
  },
  {
    id: '02',
    title: 'Step 2 – Site Survey and Measurement',
    desc: 'Our team will visit your property and do a free-of-charge site survey for you. They will evaluate the installation area and make necessary measurements to ensure perfect fit if required.',
  },
  {
    id: '03',
    title: 'Step 3 – Design and Materials Selection',
    desc: 'You can choose from a variety of modern aluminium doors and windows, different types of glass, finishes, colours and hardware. Our certified trainer will assist in selecting the most appropriate designs for your property.',
  },
  {
    id: '04',
    title: 'Step 4 – Detailed Quotation',
    desc: 'We prepare an itemized quotation that includes materials, fabrication, installation and labour prices. You will not have any surprises with extra costs.',
  },
  {
    id: '05',
    title: 'Step 5 – In-House Fabrication',
    desc: 'Upon agreement, your aluminium doors and windows will be made by us in our Dubai factory using luxury aluminium profiles, glass and hardware.',
  },
  {
    id: '06',
    title: 'Step 6 – Installation',
    desc: 'Our proficient trainer will properly install your new doors and windows including weather sealing and hardware fitting.',
  },
  {
    id: '07',
    title: 'Step 7 – Quality Inspection & Testing',
    desc: 'All installations go through a detailed quality check process. We check for alignment, locking mechanisms, glazing, insulation, and performance in general.',
  },
  {
    id: '08',
    title: 'Step 8 – Final Handover & Aftercare',
    desc: 'Once the job is completed, we go through the installation with you, give you maintenance advice, and will always be there for any window repairs or glass door repairs.',
  },
];



const faqs = [
  {
    question: 'What doors and windows services does Casa Kraft offer in Dubai?',
    answer:
      'Casa Kraft Interior Design & Renovation provides a full suite of services ranging from supplying and installing aluminium doors and windows, high-end glass doors and windows, uPVC windows, double glazing window installation, door and window alignments, window repairs, glass door repairs, new window installations, and trade supplies throughout UAE.',
  },
  {
    question: ' How do I find reliable window and door contractors in Dubai?',
    answer:
      'Try finding a contractor that has in-house fabrication capabilities, licensed installers, clear pricing structure, and valid project experience. As a reputable window and door company in Dubai, Casa Kraft has all of these features in addition to an easily traceable project management procedure.',
  },
  {
    question: ' Can Casa Kraft carry out glass door repair near me on the same day?',
    answer:
      'Yes – in most instances, the glass door repair Dubai experts at Casa Kraft can repair your glass door within one day, especially in case of commercial emergencies. Our trucks always have glass panels and replacement parts available, thus making it possible to do most glass door repairs on-site.',
  },
  {
    question: ' How quickly can Casa Kraft carry out window repair in Dubai?',
    answer:
      'Casa Kraft ensures that for regular window repair services, we will be at your service within 24 to 48 hours from the time you call us. Our emergency window repair services for commercial premises are available on a 24/7 basis. Window repairs in Dubai are normally done in one visit since we have all the replacement parts with us.',
  },
  {
    question: 'Does Casa Kraft offer new window installation for both residential and commercial buildings?',
    answer:
      'Yes. Casa Kraft has the service of installing new windows for residential buildings like villas, apartments, and townhouses, as well as for commercial premises like offices, hotels, retail units, and restaurants.',
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DProjects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="text-white/80 bg-black overflow-x-hidden"
    >
      {/* Top Content Block */}
      <motion.div
        variants={fadeUp}
        viewport={{ once: true }}
        whileInView="visible"
        initial="hidden"
        className="max-w-6xl text-white mx-auto bg-black px-6 sm:px-10 py-10 text-center space-y-6"
      > 
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
        >
          Why Choose Casa Kraft for Doors & Windows in Dubai?
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="space-y-4 text-white/80 text-sm sm:text-base text-center"
        >
          <p>
            Casa Kraft Interior Design & Renovation is a trusted <b className="text-[#4eb5a9]"
 ><a href="https://www.google.com/search?sa=X&sca_esv=100be553d7950a9c&cs=0&biw=1536&bih=695&sxsrf=APpeQnuUYF6leLIL5USzYWTvywB5MXK0RA:1782919123970&kgmid=/g/11yql27kgy&q=Casa+Kraft+Interiors&shem=epsd1,ltae&shndl=30&source=sh/x/loc/uni/m1/1&kgs=ae98336ed73609f4&utm_source=epsd1,ltae,sh/x/loc/uni/m1/1">window and door contractor in Dubai</a></b>, providing premium aluminium doors and windows, professional installation, and repair solutions for domestic and commercial customers in the United Arab Emirates. With more than 10 years of experience in the field, we know all about the weather conditions, building codes, and latest trends in the architecture of Dubai, which allows us to create durable, fashionable and energy-saving products. Our aluminium and glass items are produced at our own manufacturing plant, which guarantees high quality, accuracy and quick installation without delegation to third parties. Each installation work is performed by licensed specialists according to the strict industry standards. Whether it is consultations, manufacturing, installations, or aftercare, Casa Kraft provides you with a complete doors and windows solution along with competitive pricing and customer satisfaction.
          </p>
        </motion.div>        
      </motion.div>
       
      {/* Portfolio / Marquee Section */}
      <div className="w-full overflow-hidden">
        <div className="text-center mb-8 sm:mb-12 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4">
            Our Doors and Windows Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 text-sm sm:text-base">
            Explore a selection of beautifully designed doors and windows showcasing our craftsmanship,
            premium finishes, and attention to detail.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-5 w-max">
            {[...aptGallery, ...aptGallery].map((image, index) => (
              <div
                key={index}
                className="group relative flex-shrink-0 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Doors and Windows Project ${index + 1}`}
                  width={600}
                  height={450}
                  className="w-[280px] sm:w-[340px] h-[210px] sm:h-[255px] object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white/80 text-lg font-medium">View Design</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-black text-white/80 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
          >
            Casa Kraft's 8-Step Process — From Quote to Completion
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {krSteps.map((step) => (
              <div
                key={step.id}
                className="bg-white/5 hover:bg-white/10 transition rounded-xl p-6 border border-white/10"
              >
                <div className="text-[#4eb5a9] font-bold text-sm mb-2">{step.id}</div>
                <h3 className="font-conthrax text-sm md:text-base mb-3">{step.title}</h3>
                <p className="text-xs md:text-sm text-white/80 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-[#111111] py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white uppercase mb-2">
            Get In Touch With Casa Kraft
          </h2>
          <p className="text-white/80 text-sm md:text-base mb-8">
            Premium Doors and Windows Installation & Repair Services in Dubai
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
      </div>

      {/* Areas We Serve */}
     

      {/* Testimonial */}
      <TestimonialCarousel />

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto bg-black px-6 sm:px-10 py-10">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center mb-6 sm:mb-10"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((item, index) => (
            <details key={index} className="group border-b border-zinc-700 py-3">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className=" font-semibold text-sm sm:text-base text-white/80 text-left pr-4">
                  {item.question}
                </span>
                <span className="ml-3 text-white/80 text-xl transition-transform group-open:rotate-45 flex-shrink-0">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm sm:text-base  text-white/70 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-10 right-0 text-white/80 text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Preview"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Free Quote Section */}
      <div className="mt-14 pb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center mb-6">
          Get Your Free Quote — Casa Kraft Doors & Windows Dubai
        </h2>
        <p className="text-zinc-400 max-w-5xl text-center mb-10 mx-auto text-sm sm:text-base">
          Want to work with the best doors and windows contractor in Dubai? Do you require an emergency glass door repair, new window installation, alignment of doors and windows, or a full range of top quality doors and windows in Dubai? Then Casa Kraft Interior Design & Renovation is the name you can depend on.
        </p>
      </div>
    </motion.section>
  );
};

export default DProjects;