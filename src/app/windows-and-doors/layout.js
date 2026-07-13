import '../globals.css';

export const metadata = {
  title: "Best Doors & Windows Company in Dubai, UAE",
  description:
    "Casa Kraft Interior Design & Renovation offers aluminium doors & windows, window repair, glass door repair & alignment in Dubai. Get a free quote!",
  keywords: [
    "windows and doors Dubai",
    "custom windows Dubai",
    "door installation Dubai",
    "aluminum windows Dubai",
    "sliding doors Dubai",
    "Casa Kraft Interiors",
  ],
  
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/windows-and-doors",
  },
  publisher: "Casa Kraft Interiors", 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Windows & Doors Dubai",
              description:
                "Custom windows and doors design, supply, and installation services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Windows and Doors Installation",
              url: "https://casakraftinteriors.ae/windows-and-doors",
            }),
          }}
        />

        {/* WebPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Windows & Doors Dubai",
              url: "https://casakraftinteriors.ae/windows-and-doors",
              description:
                "Get custom windows and doors solutions in Dubai with expert design and installation by Casa Kraft Interiors.",
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://casakraftinteriors.ae/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Services",
                  item: "https://casakraftinteriors.ae/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Windows & Doors",
                  item: "https://casakraftinteriors.ae/windows-and-doors",
                },
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}