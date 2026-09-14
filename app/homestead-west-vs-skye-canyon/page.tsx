import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { SITE_URL } from '@/lib/site-contact';
import { absoluteUrl, canonicalMetadata } from '@/lib/metadata';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Homestead West vs Skye Canyon: Complete Comparison | Northwest Las Vegas New Construction',
  description: 'Compare Homestead West and Skye Canyon new construction communities in Northwest Las Vegas. Price, location, home sizes, and features comparison to help you choose the right community.',
  keywords: [
    'Homestead West vs Skye Canyon',
    'compare new construction Las Vegas',
    'Northwest Las Vegas communities',
    'Homestead West comparison',
    'Skye Canyon comparison',
    'best new construction Las Vegas',
    '89149 vs 89166 zip code',
    'luxury homes Las Vegas comparison'
  ],
  ...canonicalMetadata('/homestead-west-vs-skye-canyon'),
  openGraph: {
    title: 'Homestead West vs Skye Canyon: Complete Comparison',
    description: 'Compare Homestead West and Skye Canyon new construction communities in Northwest Las Vegas.',
    type: 'website',
    url: absoluteUrl('/homestead-west-vs-skye-canyon'),
    images: ogImages('ranch-exterior-dusk'),
  },
};

export default function ComparisonPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: SITE_URL },
    { name: 'Homestead West vs Skye Canyon', url: absoluteUrl('/homestead-west-vs-skye-canyon') }
  ]);

  // AEO: Comparison schema for AI systems
  const comparisonSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Homestead West vs Skye Canyon: Complete Comparison',
    description: 'Detailed comparison of Homestead West and Skye Canyon new construction communities in Northwest Las Vegas',
    author: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      url: `${SITE_URL}/about`
    },
    datePublished: '2026-01-19',
    dateModified: '2026-01-19',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonSchema) }}
      />
      
      <article itemScope itemType="https://schema.org/Article" className="min-h-screen bg-white">
        <PageHero
          imageId="ranch-exterior-dusk"
          title="Homestead West vs Skye Canyon: Complete Comparison"
          subtitle="Compare two premier new construction communities in Northwest Las Vegas to find the right fit for your lifestyle and budget."
        >
          <address rel="author" className="text-blue-100 text-sm mb-2 not-italic">
            By <a href="/about" className="text-yellow-400 hover:text-yellow-300">Dr. Jan Duffy</a>, Licensed Nevada Real Estate Agent (S.0197614.LLC)
          </address>
          <time dateTime="2026-01-19" className="text-blue-100 text-sm">Last updated: January 19, 2026</time>
        </PageHero>

        <section className="py-14 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Browse live MLS listings</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              See current inventory in Northwest Las Vegas while you compare communities.
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Quick Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Feature</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Homestead West</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Skye Canyon</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Starting Price</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">$910,000</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">$650,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Sq Ft Range</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">3,336-3,704</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">1,800-4,500</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Home Style</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Single-story ranch</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Mixed (1 & 2 story)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Location</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">89149 (W. Ann & N. Fort Apache)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">89166 (Skye Canyon area)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Lot Features</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Pool-sized lots, optional casitas</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Varied lot sizes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-900">Nearby Attractions</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Red Rock Canyon (9 miles)</td>
                      <td className="border border-gray-300 px-4 py-3 text-gray-700">Mount Charleston (similar distance)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Price Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Price Comparison</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  <strong>How much do homes cost in Homestead West vs Skye Canyon?</strong> Homestead West homes start at $910,000, while Skye Canyon offers entry-level options starting around $650,000. Homestead West focuses exclusively on luxury single-story ranch homes, while Skye Canyon provides a wider range including more affordable two-story options.
                </p>
                <p className="text-lg mb-4">
                  Homestead West's higher starting price reflects its focus on larger, single-story luxury homes with premium lot sizes. Skye Canyon's broader price range accommodates first-time buyers and those seeking more budget-friendly options while still offering luxury homes at higher price points.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Comparison */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Location Comparison</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  <strong>Where is Homestead West vs Skye Canyon located?</strong> Homestead West is located in zip code 89149 at the intersection of W. Ann Road and N. Fort Apache Road in Northwest Las Vegas. Skye Canyon is located in zip code 89166, also in Northwest Las Vegas but in a different area of the valley.
                </p>
                <p className="text-lg mb-4">
                  Both communities offer access to Northwest Las Vegas amenities, but Homestead West is closer to Red Rock Canyon (9 miles) and serves the Centennial Hills area. Skye Canyon has its own master-planned community amenities and shopping centers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Home Style Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Home Style Comparison</h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg mb-4">
                  <strong>What types of homes are available in each community?</strong> Homestead West exclusively offers single-story ranch homes ranging from 3,336 to 3,704 square feet, perfect for families who want space without stairs. Skye Canyon offers both single-story and two-story homes with a wider size range from 1,800 to 4,500 square feet.
                </p>
                <p className="text-lg mb-4">
                  If you prefer single-story living and larger floor plans, Homestead West may be the better fit. If you want more variety in home styles and sizes, including more affordable options, Skye Canyon offers greater flexibility.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Which Should You Choose */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Which Should You Choose?</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Choose Homestead West if:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>You want exclusively single-story ranch homes</li>
                    <li>You prefer larger homes (3,336+ sq ft) and pool-sized lots</li>
                    <li>You want optional detached casitas for multi-generational living</li>
                    <li>You're looking for luxury homes starting at $910,000</li>
                    <li>You want proximity to Red Rock Canyon and Centennial Hills area</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Choose Skye Canyon if:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>You want more budget-friendly options starting around $650,000</li>
                    <li>You prefer variety in home styles (both 1 and 2 story)</li>
                    <li>You want a wider range of home sizes (1,800-4,500 sq ft)</li>
                    <li>You prefer master-planned community amenities</li>
                    <li>You're a first-time buyer or want more affordable entry points</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Help Deciding?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Dr. Jan Duffy can help you compare communities, understand pricing, and find the right home for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="tel:7022996607"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
              >
                📞 Call (702) 299-6607
              </a>
              <a
                href="/appointment"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                📅 Schedule Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Content Freshness */}
        <aside className="bg-gray-50 py-8 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm text-gray-600 text-center">
              <time dateTime="2026-01-19">Last verified: January 19, 2026</time>. Prices and availability subject to change. Contact Dr. Jan Duffy for current information about both communities.
            </p>
          </div>
        </aside>
      </article>
    </>
  );
}
