import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GbpNapBar from "../components/GbpNapBar";
import { SITE_URL, AGENT_JSONLD_DESCRIPTION, ADDRESS, GEO, GOOGLE_GBP_URL, GOOGLE_MAPS_PLACE_URL, GOOGLE_REVIEW_URL, PHONE_E164, EMAIL, BUSINESS_NAME } from "@/lib/site-contact";
import { bhhsLogoAbsoluteUrl, headshotAbsoluteUrl } from "@/lib/site-assets";
import { mediaAbsoluteUrl } from "@/lib/media";
import { metadataBaseUrl } from "@/lib/metadata";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Better font loading performance
  preload: true,
  fallback: ['Arial', 'Helvetica', 'sans-serif'], // Fallback fonts
  adjustFontFallback: true, // Better fallback rendering
});

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl,
  
  title: {
    default: "Homestead West Las Vegas | $910K+ Ranch Homes | Dr. Jan Duffy Real Estate",
    template: "%s | Homestead West Las Vegas"
  },
  
  description: "Homestead West: 3,336-3,704 sq ft luxury ranch homes on pool-sized lots in Northwest Las Vegas. Expert guidance from Dr. Jan Duffy. Starting at $910,990. Call (702) 299-6607.",
  
      keywords: [
        "Homestead West",
        "Homestead West Las Vegas",
        "luxury new construction Las Vegas",
        "Northwest Las Vegas homes",
        "Las Vegas ranch homes",
        "new homes Las Vegas",
        "pool-sized lots Las Vegas",
        "single story homes Las Vegas",
        "luxury homes Las Vegas",
        "5592 Dapple Gray Rd",
        "Dr. Jan Duffy",
        "Las Vegas real estate",
        "89149 zip code homes",
        "VIP New Construction Homes Specialist",
        "new construction Las Vegas",
        "Las Vegas homebuyer guide",
        "VIP buyer program",
        "Las Vegas real estate expert",
        "Nevada real estate license S.0197614.LLC"
      ],

  authors: [{ name: "Dr. Jan Duffy" }],
  creator: "Dr. Jan Duffy",
  publisher: "Homestead West | Homes by Dr Jan Duffy",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Homestead West Las Vegas',
    title: 'Homestead West Las Vegas | $910K+ Ranch Homes',
    description: '$910K+ luxury ranch homes on pool-sized lots in Northwest Las Vegas. 3,336-3,704 sq ft. Expert guidance from Dr. Jan Duffy. Call (702) 299-6607.',
    images: [
      {
        url: mediaAbsoluteUrl('ranch-exterior-dusk'),
        width: 1920,
        height: 1080,
        alt: 'Luxury single-story ranch home in Homestead West, Northwest Las Vegas 89149',
      },
      {
        url: headshotAbsoluteUrl,
        width: 750,
        height: 752,
        alt: 'Dr. Jan Duffy - VIP New Construction Homes Specialist | Homestead West Las Vegas',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Homestead West Las Vegas | $910K+ Ranch Homes',
    description: 'Luxury ranch homes on pool-sized lots in Northwest Las Vegas. Expert real estate guidance from Dr. Jan Duffy.',
    images: [mediaAbsoluteUrl('ranch-exterior-dusk')],
  },

  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),

  alternates: {
    canonical: `${SITE_URL}/`,
    types: {
      'application/rss+xml': '/blog/rss.xml',
    },
  },

  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Las Vegas',
    'geo.position': '36.2738;-115.3089',
    'ICBM': '36.2738, -115.3089',
    // AEO: AI-friendly meta tags
    'subject': 'Homestead West new construction homes Las Vegas',
    'topic': 'Real Estate, New Construction, Las Vegas',
    'coverage': 'Las Vegas, Nevada, Northwest Las Vegas, 89149',
    'classification': 'Real Estate Listing Service',
    'category': 'Real Estate > Residential > New Construction',
    'revised': '2026-01-19',
    'date': '2026-01-19',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data for RealEstateListing
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: BUSINESS_NAME,
    description: '$910K+ ranch-style homes on pool-sized lots in Northwest Las Vegas',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.streetAddress,
      addressLocality: ADDRESS.addressLocality,
      addressRegion: ADDRESS.addressRegion,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.addressCountry
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.latitude,
      longitude: GEO.longitude
    },
    telephone: PHONE_E164,
    smsNumber: `sms:${PHONE_E164}`,
    email: EMAIL,
    url: SITE_URL,
    image: [
      mediaAbsoluteUrl('ranch-exterior-dusk'),
      headshotAbsoluteUrl,
    ],
    priceRange: '$910,990 - $940,990',
    numberOfRooms: '4-5',
    floorSize: {
      '@type': 'QuantitativeValue',
      value: '3336-3704',
      unitText: 'square feet'
    },
        agent: {
          '@type': 'RealEstateAgent',
          name: 'Dr. Jan Duffy',
          telephone: '+17022996607',
          email: 'DrJanSells@HomesteadWestLasVegas.com',
          image: headshotAbsoluteUrl,
          priceRange: '$850,000-$990,000',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '5592 Dapple Gray Rd',
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            postalCode: '89149',
            addressCountry: 'US'
          },
          areaServed: [
            {
              '@type': 'Place',
              name: 'Centennial Hills',
              address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV', addressCountry: 'US' }
            },
            {
              '@type': 'City',
              name: 'Las Vegas',
              '@id': 'https://en.wikipedia.org/wiki/Las_Vegas'
            },
            {
              '@type': 'City',
              name: 'Henderson',
              '@id': 'https://en.wikipedia.org/wiki/Henderson,_Nevada'
            },
            {
              '@type': 'City',
              name: 'North Las Vegas',
              '@id': 'https://en.wikipedia.org/wiki/North_Las_Vegas,_Nevada'
            }
          ],
          knowsAbout: [
            'Homestead West',
            'Northwest Las Vegas Real Estate',
            'Luxury Ranch Homes',
            'New Construction Homes',
            'VIP New Construction Homes Specialist',
            'Cadence Henderson',
            'Las Vegas Market Analysis'
          ],
          jobTitle: 'VIP New Construction Specialist',
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            name: 'Nevada Real Estate License',
            credentialCategory: 'license',
            credentialId: 'S.0197614.LLC',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Nevada Real Estate Division'
            }
          },
          worksFor: {
            '@type': 'Organization',
            name: 'Homestead West | Homes by Dr Jan Duffy'
          },
          memberOf: {
            '@type': 'Organization',
            name: 'Las Vegas Association of Realtors'
          }
        },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '910990',
      highPrice: '940990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      offerCount: '2'
    },
    amenityFeature: [
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Pool-sized lots',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification', 
        name: 'Single-story ranch homes',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Optional detached casita',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: 'Multi-generational layouts available',
        value: true
      },
      {
        '@type': 'LocationFeatureSpecification',
        name: '3-5 car garage',
        value: true
      }
    ],
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Community',
        value: 'Homestead West'
      },
      {
        '@type': 'PropertyValue',
        name: 'Zip Code',
        value: '89149'
      }
    ],
        nearbyPlaces: [
          {
            '@type': 'TouristAttraction',
            name: 'Red Rock Canyon National Conservation Area',
            description: '9 miles away'
          },
          {
            '@type': 'Place',
            name: 'Downtown Las Vegas',
            description: '18 miles away'
          },
          {
            '@type': 'Place',
            name: 'Mount Charleston',
            description: '23 miles away'
          },
          {
            '@type': 'School',
            name: 'Dean LaMar Allen Elementary',
            description: '~1 mile away, Grades K-5, GreatSchools 6/10',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '8680 W Hammer Ln',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89149',
              addressCountry: 'US'
            }
          },
          {
            '@type': 'School',
            name: 'Justice Myron E. Leavitt Middle School',
            description: '1.5 miles away, Grades 6-8, ~1,400 students'
          },
          {
            '@type': 'School',
            name: 'Centennial High School',
            description: 'Grades 9-12, GreatSchools 4/10, Niche B, 91% graduation rate, #1 in Nevada for Best High Schools for Athletes'
          },
          {
            '@type': 'Hospital',
            name: 'Centennial Hills Hospital',
            description: '3.8 miles away',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '6900 N Durango Dr',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89149',
              addressCountry: 'US'
            }
          }
        ],
        hasMap: GOOGLE_MAPS_PLACE_URL,
        sameAs: [
          SITE_URL,
          GOOGLE_GBP_URL,
          GOOGLE_REVIEW_URL,
          `${SITE_URL}/vip-buyer-program`,
          `${SITE_URL}/about`,
          `${SITE_URL}/contact`,
          `${SITE_URL}/floor-plans`,
          `${SITE_URL}/community`,
          `${SITE_URL}/services`,
          `${SITE_URL}/buyers-guide`,
          `${SITE_URL}/homebuying-process`
        ]
  };

      const breadcrumbData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Homestead West Las Vegas',
            item: SITE_URL
          }
        ]
      };

      // Removed duplicate RealEstateAgent - using @graph version instead

      return (
        <html lang="en">
          <head>
            {/* Preconnect to external resources for faster loading - Prioritize fonts for LCP */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            {/* Defer non-critical preconnects */}
            <link rel="dns-prefetch" href="https://em.realscout.com" />
            <link rel="dns-prefetch" href="https://www.realscout.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://assets.calendly.com" />
            {/* Google Analytics - Deferred and optimized to reduce unused JS */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    // Defer Google Analytics until after page is fully interactive
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    window.gtag = gtag;
                    
                    // Only initialize after user interaction or extended idle time
                    function loadGA() {
                      if (window.gtagLoaded) return;
                      window.gtagLoaded = true;
                      
                      gtag('js', new Date());
                      const script = document.createElement('script');
                      script.async = true;
                      script.src = 'https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}';
                      script.defer = true;
                      document.head.appendChild(script);
                      
                      // Delay config until script loads
                      script.onload = function() {
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'}', {
                          send_page_view: false
                        });
                      };
                    }
                    
                    // Load on user interaction (more efficient than on load)
                    // Only load GA after significant user engagement to reduce unused JS
                    var interactionCount = 0;
                    var interactionHandler = function(event) {
                      interactionCount++;
                      // Only load after 3+ interactions or scroll depth > 50%
                      if (!window.gtagLoaded && (interactionCount >= 3 || (event === 'scroll' && (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) > 0.5))) {
                        // Defer GA loading to avoid blocking
                        requestAnimationFrame(function() {
                          loadGA();
                        });
                        // Remove listeners after loading
                        ['mousedown', 'touchstart', 'keydown', 'scroll'].forEach(function(evt) {
                          window.removeEventListener(evt, interactionHandler, { passive: true });
                        });
                      }
                    };
                    ['mousedown', 'touchstart', 'keydown', 'scroll'].forEach(function(event) {
                      window.addEventListener(event, interactionHandler, { once: false, passive: true });
                    });
                    
                    // Fallback: load after page is idle for 5 seconds (increased from 2s)
                    if ('requestIdleCallback' in window) {
                      requestIdleCallback(function() {
                        setTimeout(function() {
                          if (!window.gtagLoaded && document.readyState === 'complete') {
                            loadGA();
                          }
                        }, 5000);
                      }, { timeout: 6000 });
                    } else {
                      setTimeout(function() {
                        if (document.readyState === 'complete' && !window.gtagLoaded) {
                          loadGA();
                        }
                      }, 5000);
                    }
                  })();
                `,
              }}
            />

            {/* Structured Data - RealEstateListing */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
              }}
            />

            {/* Structured Data - BreadcrumbList */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(breadcrumbData),
              }}
            />

            {/* Removed duplicate RealEstateAgent schema - consolidated in @graph */}

            {/* Structured Data - @graph (RealEstateAgent, LocalBusiness, Organization, WebSite, SiteNavigationElement) */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@graph': [
                    {
                      '@type': 'RealEstateAgent',
                      '@id': `${SITE_URL}/#agent`,
                      name: 'Dr. Jan Duffy',
                      description: AGENT_JSONLD_DESCRIPTION,
                      telephone: '+17022996607',
                      email: 'DrJanSells@HomesteadWestLasVegas.com',
                      url: SITE_URL,
                      image: [headshotAbsoluteUrl, mediaAbsoluteUrl('ranch-exterior-dusk')],
                      priceRange: '$850,000-$990,000',
                      address: {
                        '@type': 'PostalAddress',
                        streetAddress: '5592 Dapple Gray Rd',
                        addressLocality: 'Las Vegas',
                        addressRegion: 'NV',
                        postalCode: '89149',
                        addressCountry: 'US'
                      },
                      areaServed: [
                        { '@type': 'Place', name: 'Centennial Hills', address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV', addressCountry: 'US' } },
                        { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } }
                      ],
                      knowsAbout: ['New Construction Homes', 'VIP New Construction Homes Specialist', 'Northwest Las Vegas', 'Homestead West', 'Luxury Ranch Homes'],
                      hasCredential: [
                        {
                          '@type': 'EducationalOccupationalCredential',
                          credentialCategory: 'degree',
                          educationalLevel: 'Ph.D. in Market Research & Consumer Behavior'
                        },
                        {
                          '@type': 'EducationalOccupationalCredential',
                          credentialCategory: 'license',
                          name: 'Nevada Real Estate License S.0197614.LLC'
                        }
                      ],
                      memberOf: {
                        '@type': 'Organization',
                        name: 'Berkshire Hathaway HomeServices Nevada Properties'
                      }
                    },
                    {
                      '@type': 'LocalBusiness',
                      '@id': `${SITE_URL}/#business`,
                      name: 'Homestead West | Homes by Dr Jan Duffy',
                      alternateName: ['Homestead West Las Vegas Real Estate', 'Dr. Jan Duffy - Las Vegas Real Estate Expert'],
                      description: 'Buying a new home in Homestead West Las Vegas? Work with a licensed agent who represents you, not the builder. Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada specializes in this single-story ranch community at Ann Road and Fort Apache, 89149. Services include early lot access, upgrade negotiations, and buyer representation through closing. Buyers pay no commission as builders cover agent fees.',
                      telephone: '+17022996607',
                      email: 'DrJanSells@HomesteadWestLasVegas.com',
                      url: SITE_URL,
                      image: [
                        mediaAbsoluteUrl('ranch-exterior-dusk'),
                        mediaAbsoluteUrl('sales-office'),
                        mediaAbsoluteUrl('community-streetscape'),
                        headshotAbsoluteUrl,
                      ],
                      logo: bhhsLogoAbsoluteUrl,
                      priceRange: '$850,000-$990,000',
                      address: {
                        '@type': 'PostalAddress',
                        streetAddress: '5592 Dapple Gray Rd',
                        addressLocality: 'Las Vegas',
                        addressRegion: 'NV',
                        postalCode: '89149',
                        addressCountry: 'US'
                      },
                      geo: {
                        '@type': 'GeoCoordinates',
                        latitude: 36.2738,
                        longitude: -115.3089
                      },
                      areaServed: [
                        { '@type': 'Place', name: 'Centennial Hills', address: { '@type': 'PostalAddress', addressLocality: 'Las Vegas', addressRegion: 'NV', addressCountry: 'US' } },
                        { '@type': 'City', name: 'Las Vegas', containedInPlace: { '@type': 'State', name: 'Nevada' } },
                        { '@type': 'City', name: 'Henderson', containedInPlace: { '@type': 'State', name: 'Nevada' } }
                      ],
                      openingHoursSpecification: [
                        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '10:00', closes: '15:00' },
                        { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '10:00', closes: '18:00' },
                        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '16:00' }
                      ],
                      amenityFeature: [
                        { '@type': 'LocationFeatureSpecification', name: 'Has wheelchair accessible parking lot', value: true },
                        { '@type': 'LocationFeatureSpecification', name: 'Has wheelchair accessible entrance', value: true }
                      ],
                      hasCredential: {
                        '@type': 'EducationalOccupationalCredential',
                        credentialCategory: 'license',
                        name: 'Nevada Real Estate License S.0197614.LLC'
                      },
                      foundingDate: '2022',
                      numberOfEmployees: {
                        '@type': 'QuantitativeValue',
                        value: '1'
                      },
                      serviceArea: {
                        '@type': 'GeoCircle',
                        geoMidpoint: {
                          '@type': 'GeoCoordinates',
                          latitude: 36.2738,
                          longitude: -115.3089
                        },
                        geoRadius: {
                          '@type': 'Distance',
                          value: '50',
                          unitCode: 'MI'
                        }
                      }
                    },
                    {
                      '@type': 'Organization',
                      '@id': `${SITE_URL}/#organization`,
                      name: 'Dr. Jan Duffy Real Estate',
                      alternateName: 'Homestead West Las Vegas Real Estate',
                      url: SITE_URL,
                      logo: bhhsLogoAbsoluteUrl,
                      image: [headshotAbsoluteUrl, mediaAbsoluteUrl('ranch-exterior-dusk')],
                      address: {
                        '@type': 'PostalAddress',
                        streetAddress: '5592 Dapple Gray Rd',
                        addressLocality: 'Las Vegas',
                        addressRegion: 'NV',
                        postalCode: '89149',
                        addressCountry: 'US'
                      },
                      contactPoint: {
                        '@type': 'ContactPoint',
                        telephone: '+17022996607',
                        contactType: 'Customer Service',
                        areaServed: ['US'],
                        availableLanguage: ['English']
                      },
                      sameAs: [
                        SITE_URL,
                        GOOGLE_GBP_URL,
                        GOOGLE_REVIEW_URL,
                        `${SITE_URL}/vip-buyer-program`,
                        `${SITE_URL}/about`,
                        `${SITE_URL}/contact`
                      ],
                      memberOf: {
                        '@type': 'Organization',
                        name: 'Berkshire Hathaway HomeServices Nevada Properties'
                      }
                    },
                    {
                      '@type': 'WebSite',
                      '@id': `${SITE_URL}/#website`,
                      url: SITE_URL,
                      name: 'Homestead West Las Vegas - Dr. Jan Duffy',
                      description: 'Expert guidance for Homestead West luxury ranch homes from VIP New Construction Homes Specialist',
                      publisher: {
                        '@id': `${SITE_URL}/#business`
                      },
                      inLanguage: 'en-US',
                      potentialAction: {
                        '@type': 'SearchAction',
                        target: {
                          '@type': 'EntryPoint',
                          urlTemplate: `${SITE_URL}/properties?q={search_term_string}`
                        },
                        'query-input': 'required name=search_term_string'
                      }
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      '@id': `${SITE_URL}/#navigation`,
                      name: 'Main Navigation',
                      url: SITE_URL,
                      hasPart: [
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Home',
                          url: SITE_URL
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'New Homes, Prime Locations',
                          url: `${SITE_URL}/properties`,
                          description: 'Browse available Homestead West homes and Las Vegas MLS listings'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Single-Story & Two-Story Homes',
                          url: `${SITE_URL}/floor-plans`,
                          description: 'Explore Homestead West floor plans: 3,336-3,704 sq ft luxury ranch homes'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Nevada Is The Perfect Place To Make Memories. Communities With Parks, Recreation & More!',
                          url: `${SITE_URL}/community`,
                          description: 'Discover Homestead West community amenities, parks, schools, and nearby attractions'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Community',
                          hasPart: [
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Community Guide',
                              url: `${SITE_URL}/community`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Community Map',
                              url: `${SITE_URL}/community-map`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Virtual Tour',
                              url: `${SITE_URL}/virtual-tour`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Location & Office',
                              url: `${SITE_URL}/location/las-vegas-office`
                            }
                          ]
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Services',
                          hasPart: [
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'All Services',
                              url: `${SITE_URL}/services`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Home Buying',
                              url: `${SITE_URL}/services/buying`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Home Selling',
                              url: `${SITE_URL}/services/selling`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Investment Consulting',
                              url: `${SITE_URL}/services/investment`
                            }
                          ]
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Resources',
                          hasPart: [
                            {
                              '@type': 'SiteNavigationElement',
                              name: "Buyer's Guide",
                              url: `${SITE_URL}/buyers-guide`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Homebuying Process',
                              url: `${SITE_URL}/homebuying-process`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'VIP New Construction Homes Specialist',
                              url: `${SITE_URL}/vip-buyer-program`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'FAQ',
                              url: `${SITE_URL}/faq`
                            },
                            {
                              '@type': 'SiteNavigationElement',
                              name: 'Testimonials',
                              url: `${SITE_URL}/testimonials`
                            }
                          ]
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'About Dr. Jan',
                          url: `${SITE_URL}/about`
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Contact Us',
                          url: `${SITE_URL}/contact`,
                          description: 'Get in touch with Dr. Jan Duffy for expert real estate guidance'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Homeowner Reviews',
                          url: `${SITE_URL}/testimonials`,
                          description: 'Read what clients say about working with Dr. Jan Duffy'
                        },
                        {
                          '@type': 'SiteNavigationElement',
                          name: 'Now\'s The Time To Make Your Move To Nevada. Homes From A Top U.S. Homebuilder.',
                          url: `${SITE_URL}/vip-buyer-program`,
                          description: 'Get VIP access to new construction homes with exclusive buyer representation'
                        }
                      ]
                    }
                  ]
                }),
              }}
            />

            {/* RealScout Widget Script - Loaded asynchronously to prevent render blocking */}
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  realscout-advanced-search {
                    --rs-as-button-text-color: #ffffff;
                    --rs-as-background-color: #ffffff;
                    --rs-as-button-color: #1a365d;
                    --rs-as-button-hover-color: #0f2439;
                    --rs-as-border-color: #e2e8f0;
                    --rs-as-text-color: #1a365d;
                    --rs-as-widget-width: 100% !important;
                    max-width: 100% !important;
                    width: 100% !important;
                  }
                  @media (min-width: 768px) {
                    realscout-advanced-search {
                      --rs-as-widget-width: 800px !important;
                      max-width: 800px !important;
                    }
                  }
                  realscout-office-listings {
                    --rs-listing-divider-color: #0e64c8;
                    width: 100%;
                  }
                `
              }}
            />

            {/* Calendly: loaded on-demand by CalendlyLink / appointment page to avoid LCP and long main-thread tasks */}
          </head>
          <body className={inter.className}>
            <GbpNapBar />
            <Navigation />
            {children}
            <Footer />
            {/* RealScout script is now loaded by RealScoutListings component when needed */}
          </body>
        </html>
      );
}