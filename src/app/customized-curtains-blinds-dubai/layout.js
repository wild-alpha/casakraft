import '../globals.css';

export const metadata = {
  title: "Luxurious custom Curtains & Blinds Dubai | Casa Kraft interiors",
  description:
    "Casa Kraft offers premium curtains & blinds with custom designs, motorized options and expert installation across Dubai . Book now",
  keywords: [
    "curtains and blinds Dubai",
    "custom curtains Dubai",
    "window blinds Dubai",
    "curtain installation Dubai",
    "window treatments Dubai",
    "Casa Kraft Interiors",
  ],
  authors: [{ name: "Casa Kraft Interiors" }],
  metadataBase: new URL("https://casakraftinteriors.ae"),
  alternates: {
    canonical: "/customized-curtains-blinds-dubai",
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
              name: "Customized Curtains & Blinds Dubai",
              description:
                "Custom curtains and blinds design, supply, and installation services in Dubai by Casa Kraft Interiors.",
              provider: {
                "@type": "Organization",
                name: "Casa Kraft Interiors",
                url: "https://casakraftinteriors.ae/",
              },
              areaServed: {
                "@type": "Place",
                name: "Dubai, UAE",
              },
              serviceType: "Curtains and Blinds Supply and Installation",
              url: "https://casakraftinteriors.ae/customized-curtains-blinds-dubai",
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
              name: "Customized Curtains & Blinds Dubai",
              url: "https://casakraftinteriors.ae/customized-curtains-blinds-dubai",
              description:
                "Get customized curtains and blinds in Dubai with professional design and installation by Casa Kraft Interiors.",
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
                  name: "Customized Curtains & Blinds Dubai",
                  item:
                    "https://casakraftinteriors.ae/customized-curtains-blinds-dubai",
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