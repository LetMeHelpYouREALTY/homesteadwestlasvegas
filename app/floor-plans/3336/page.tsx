import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Plan 3336 - 3,336 Sq Ft Ranch Home | Homestead West Las Vegas | Dr. Jan Duffy',
  description: 'Explore Plan 3336 at Homestead West: 3,336 sq ft single-story ranch home with 4-5 bedrooms, 4.5 baths, 3-5 car garage, and pool-sized lot. Starting at $910,990. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'available homes Las Vegas',
    'Las Vegas MLS listings',
    'Homestead West homes',
    'Las Vegas real estate listings',
    'new construction homes Las Vegas'
  ],
  openGraph: {
    title: 'Available Homes | Homestead West Las Vegas',
    description: 'Browse current available homes in Las Vegas MLS. Updated daily with the latest properties.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/floor-plans/3336',
    images: ogImages('luxury-kitchen'),
  },
};

export default function Plan3336Page() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Floor Plans', url: 'https://www.homesteadwestlasvegas.com/floor-plans' },
    { name: 'Plan 3336', url: 'https://www.homesteadwestlasvegas.com/floor-plans/3336' }
  ]);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Homestead West Plan 3336 - Single-Story Ranch Home',
    description: '3,336 sq ft single-story ranch home with 4-5 bedrooms, 4.5 baths, 3-5 car garage, and pool-sized lot. Starting at $910,990.',
    brand: {
      '@type': 'Brand',
      name: 'Homestead West'
    },
    category: 'Real Estate',
    offers: {
      '@type': 'Offer',
      price: '910990',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
      url: 'https://www.homesteadwestlasvegas.com/floor-plans/3336',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        telephone: '+17022996607',
        email: 'DrJanSells@HomesteadWestLasVegas.com'
      }
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    telephone: '+17022996607',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5592 Dapple Gray Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89149',
      addressCountry: 'US'
    },
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas'
    },
    knowsAbout: [
      'Las Vegas Real Estate',
      'MLS Listings',
      'New Construction Homes',
      'Homestead West'
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        <PageHero
          imageId="luxury-kitchen"
          title="Homestead West Plan 3336 — 3,336 Sq Ft Ranch Home"
          subtitle="Las Vegas MLS Listings - Updated Daily"
        />

        {/* RealScout Office Listings Carousel */}
        <section className="py-16 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                Available Homes in Las Vegas
              </h2>
              <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
                Browse current listings from the Las Vegas MLS - Updated daily with the latest properties
              </p>
              
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center bg-blue-900 text-white py-12 rounded-lg">
              <h3 className="text-3xl font-bold mb-4">Ready to Find Your Dream Home?</h3>
              <p className="text-xl mb-8 text-blue-100">
                Contact Dr. Jan Duffy for expert guidance on your Las Vegas home search
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:7022996607"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  📞 Call (702) 299-6607
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
