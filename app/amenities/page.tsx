import { Metadata } from 'next';
import Link from 'next/link';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import {
  AMENITY_CATEGORIES,
  amenityMapEmbedUrl,
  amenityMapsLink,
  MAP_BASE_DISPLAY,
} from '@/lib/amenities';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Nearby Amenities Map | Homestead West Las Vegas | Restaurants, Parks, Parking',
  description: `Explore nearby amenities near Homestead West and Centennial Hills: restaurants, parks, parking, shopping, schools, and healthcare. Interactive maps—no cost, powered by Google Maps.`,
  keywords: [
    'Homestead West amenities',
    'Centennial Hills restaurants',
    'Northwest Las Vegas parks',
    'amenities near Homestead West',
    'Las Vegas 89149 shopping',
    'nearby parking Las Vegas',
    'schools near Homestead West',
  ],
  openGraph: {
    title: 'Nearby Amenities Map | Homestead West Las Vegas',
    description: 'Restaurants, parks, parking, shopping, schools, and more near Homestead West. View on Google Maps.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/amenities',
    images: ogImages('red-rock-canyon'),
  },
};

export default function AmenitiesPage() {
  const baseUrl = 'https://www.homesteadwestlasvegas.com';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Nearby Amenities Map | Homestead West Las Vegas',
    description: 'Interactive maps showing nearby restaurants, parks, parking, shopping, schools, and healthcare near Homestead West.',
    url: `${baseUrl}/amenities`,
    about: {
      '@type': 'Place',
      name: 'Homestead West / Centennial Hills area',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5592 Dapple Gray Rd',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89149',
        addressCountry: 'US',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Nearby amenity categories',
      numberOfItems: AMENITY_CATEGORIES.length,
      itemListElement: AMENITY_CATEGORIES.map((cat, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: cat.label,
        description: cat.description,
      })),
    },
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: baseUrl },
    { name: 'Community', url: `${baseUrl}/community` },
    { name: 'Nearby Amenities', url: `${baseUrl}/amenities` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-white">
        <PageHero
          imageId="red-rock-canyon"
          title="Nearby Amenities Map"
          subtitle={
            <>
              Restaurants, parks, parking, shopping, schools & more near Homestead West
              <br />
              Centered near {MAP_BASE_DISPLAY}. Powered by Google Maps — no cost to use.
            </>
          }
        />

        <section className="py-12 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
              Browse homes near these amenities
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto text-sm md:text-base">
              Live MLS listings — explore inventory while you plan schools, dining, and parks.
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-700 max-w-2xl mx-auto">
              Select a category below to see that type of place on the map. Each map shows results near our office and the Homestead West area. Use the links to open Google Maps, or embed these maps on your own site at no cost.
            </p>
          </div>
        </section>

        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="space-y-12 max-w-5xl mx-auto">
              {AMENITY_CATEGORIES.map((category) => (
                <article
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-24 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden"
                >
                  <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      {category.icon && <span aria-hidden>{category.icon}</span>}
                      {category.label}
                    </h2>
                    <p className="text-gray-600 mt-1">{category.description}</p>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-100 aspect-video max-h-[400px]">
                      <iframe
                        src={amenityMapEmbedUrl(category.searchQuery)}
                        width="100%"
                        height="100%"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`Map: ${category.label} near Homestead West`}
                        className="w-full h-full min-h-[320px] block border-0"
                      />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={amenityMapsLink(category.searchQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#1a365d] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#2d4a7c] transition-colors"
                      >
                        View on Google Maps
                      </a>
                      <a
                        href={`#${category.id}`}
                        className="text-gray-600 hover:text-[#1a365d] text-sm"
                        aria-label={`Link to ${category.label} section`}
                      >
                        #
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore More</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/community-map"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Community Map
              </Link>
              <Link
                href="/location"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Find Our Office
              </Link>
              <Link
                href="/community"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#1a365d] text-[#1a365d] px-5 py-2.5 rounded-lg font-medium hover:bg-[#1a365d] hover:text-white transition-colors"
              >
                Community Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
