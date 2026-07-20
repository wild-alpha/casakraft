'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const testimonials = [
    
    {
      quote:
        "We engaged Casa Kraft for our villa in Arabian Ranches for power and smart blinds installation and the whole process was amazing from the consultations right down to the installation. They were accurate with their measurements, gave us a variety of good fabrics and the overall finish really brought our living space to life. We highly recommend Casa Kraft for any luxury blinds Dubai can offer, and their premier Blind Installation Services truly deliver on the promise of the  Luxury Window Curtains in the city.",
      author: "Satisfied Villa Owner",
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
  "/images/apartment-living-room-blinds-in-dubai.png",
  "/images/villa-bed-room-curtains-in-dubai.png",
  "/images/office-blinds-in-dubai.png",
  "/images/apartment-curtains-dubai.png",
  "/images/apartment-bedroom-curtains-in-dubai.png",
  
];

const krSteps = [
  {
    id: '01',
    title: 'Step 1 – Free Consultation',
    desc: 'Your needs, requirements, and budget are known to us either via a telephonic conversation or face-to-face discussion.',
  },
  {
    id: '02',
    title: 'Step 2 – On-site Visit',
    desc: 'We visit your villa or apartment or office to check the premises, windows, and interiors that exist already.',
  },
  {
    id: '03',
    title: 'Step 3 – Accurate Measurement',
    desc: 'Each window is carefully measured to ensure your curtains or blinds are made perfectly according to size.',
  },
  {
    id: '04',
    title: 'Step 4 – Fabric and Design Selection',
    desc: 'We show you different fabric samples along with a variety of colors and blind designs that go well with your interiors.',
  },
  {
    id: '05',
    title: 'Step 5 – Design Finalization',
    desc: 'After you select the fabric of choice, design, and finish, we finalize the design and confirm the quotation.',
  },
  {
    id: '06',
    title: 'Step 6 – Custom Manufacturing',
    desc: 'Your blinds or curtains are manufactured according to the exact measurement done earlier.',
  },
  {
    id: '07',
    title: 'Step 7 – Expert  Installation',
    desc: 'Our experienced fitters install tracks, rails, brackets, or motorized blinds in your interiors with utmost precision.',
  },
  {
    id: '08',
    title: 'Step 8 – Final Quality Control',
    desc: 'We perform quality control testing on all the mechanisms, finishes, and makes everything working as it should be.',
  },
];



const faqs = [
  {
    question: 'Do you offer custom made curtains for both homes and offices?',
    answer:
      'Yes, we do make custom-made curtains and install them in villas, apartments, offices and other commercial places in Dubai.',
  },
  {
    question: 'Can I get motorized blinds installed in my current home?',
    answer:
      'Yes, it is possible to install motorized blinds even in an existing house without making any changes to the existing structure. Our specialists will help you in installing smart blinds easily.',
  },
  {
    question: 'How much time does installation take?',
    answer:
      'The time required for installation depends on the scale of the job, and usually, residential curtain or blind installations take a couple of days from the moment the exact measurement is confirmed.',
  },
  {
    question: '  What are some of the best blinds for Dubai homes and offices?',
    answer:
      'Some of the best blinds for Dubai include blackout blinds, sunscreen roller blinds, and motorized blinds. These are among the most suitable blinds to help with heat, glare and privacy.',
  },
  {
    question: 'What kind of fabric would be ideal in Dubai weather conditions?',
    answer:
      'As a result of the hot weather and the abundance of sunshine in Dubai, blackout and sunscreen materials are the most popular ones. Blackout materials prevent heat and sun penetration, whereas sunscreen materials minimize glare and ultraviolet radiation without stopping daylight from entering your room.',
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
          Why Choose Casa Kraft Interior Design & Renovation
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
           As far as the premium blinds and curtains in Dubai are concerned, Casa Kraft is known for offering customers the right blend of design skill, high-quality material, and reliable services. We visit your place in person to measure everything and not guess about anything as other providers do. You can have total freedom in choosing a fabric and colours that you like, along with having our  recommendation based on years of experience in interior design in Dubai, whether residential places like Arabian Ranches or commercial spaces like Dubai Marina or Business Bay offices.
Contrary to some providers that only care about volume of orders, we provide the same level of attentiveness to each project regardless of its size, whether it is one bedroom or whole commercial interior fitout. The prices are clear from the very start and we will never charge any additional fees during consultations. This way, along with our reputation as a customized design provider, makes Casa Kraft a reliable partner in your projects.
          </p>
        </motion.div>        
      </motion.div>
       
      {/* Portfolio / Marquee Section */}
      <div className="w-full overflow-hidden">
        <div className="text-center mb-8 sm:mb-12 px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4">
            Our Customized Curtains and Blinds Portfolio
          </h2>
          <p className="max-w-3xl mx-auto text-white/80 text-sm sm:text-base">
           Explore a selection of beautifully designed window treatments and custom drapery showcasing our craftsmanship,
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
            Our Curtain & Blind Installation Process
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
          Ready to Transform Your Windows?
        </h2>
        <p className="text-zinc-400 max-w-5xl text-center mb-10 mx-auto text-sm sm:text-base">
          Don't settle for pre-made products. Get Casa Kraft Interior Design & Renovation to design and manufacture customized curtains & blinds that perfectly suit your needs  regardless of whether you live in a villa, flat or office in Dubai. Book your free consultation and measurement appointment now and experience the exceptional curtain and blind fitting service in Dubai. Contact us now or complete the form on our website to take the first step toward making your windows dreams come true.
                  </p>
      </div>
    </motion.section>
  );
};

export default DProjects;