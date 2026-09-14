import { Metadata } from 'next';
import RealScoutListings from '@/components/RealScoutListings';
import PageHero from '@/components/PageHero';
import SectionImage from '@/components/SectionImage';
import { generateBreadcrumbSchema } from '@/lib/breadcrumbs';
import { ogImages } from '@/lib/og';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | Dr. Jan Duffy | VIP New Construction Specialist',
  description: 'Read authentic client testimonials and reviews from families who worked with VIP New Construction Homes Specialist Dr. Jan Duffy. Real 5-star reviews from Homestead West homeowners sharing their experiences buying new construction homes in Las Vegas.',
  keywords: [
    'Dr. Jan Duffy testimonials',
    'new construction reviews',
    'Homestead West testimonials',
    'Las Vegas real estate reviews',
    'new construction testimonials',
    'VIP New Construction Homes Specialist reviews',
    'client success stories'
  ],
  openGraph: {
    title: 'Client Testimonials & Reviews | Dr. Jan Duffy',
    description: 'Read real client testimonials from families who worked with VIP New Construction Homes Specialist Dr. Jan Duffy.',
    type: 'website',
    url: 'https://www.homesteadwestlasvegas.com/testimonials',
    images: ogImages('private-tour'),
  },
};

export default function TestimonialsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    description: 'VIP New Construction Specialist with excellent client reviews',
    telephone: '+17022996607',
    email: 'DrJanSells@HomesteadWestLasVegas.com',
    jobTitle: 'VIP New Construction Specialist',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '5592 Dapple Gray Rd',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89149',
      addressCountry: 'US'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Sarah & Mike Johnson'
        },
        reviewBody: 'Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers, made all the difference. We got early access to the best lots and saved thousands through her expert negotiation—all while having an advocate who worked for us, not the builder.',
        datePublished: '2024-11-15'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'David & Lisa Chen'
        },
        reviewBody: 'Dr. Jan\'s knowledge of the builder\'s process and her direct builder contacts saved us months of delays. Her VIP status gave us priority treatment throughout.',
        datePublished: '2024-11-01'
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Robert & Maria Garcia'
        },
        reviewBody: 'Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist, was like having an insider at the builder. Her expertise meant we got upgrades and incentives others couldn\'t access—all while having an advocate who worked for us, not the builder.',
        datePublished: '2024-10-20'
      }
    ]
  };

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Mike Johnson',
      location: 'Homestead West Homeowners',
      rating: 5,
      date: 'November 15, 2024',
      text: 'Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers, made all the difference. We got early access to the best lots and saved thousands through her expert negotiation. Her knowledge of the Homestead West community and the builder\'s process was invaluable—all while having an advocate who worked for us, not the builder.',
      homeType: 'Plan 3704 - 3,704 sq ft',
      savings: '$15,000 in incentives'
    },
    {
      id: 2,
      name: 'David & Lisa Chen',
      location: 'Cadence Henderson Homeowners',
      rating: 5,
      date: 'November 1, 2024',
      text: 'Dr. Jan\'s knowledge of the builder\'s process and her direct builder contacts saved us months of delays. Her VIP status gave us priority treatment throughout the entire construction process. We couldn\'t have asked for better representation.',
      homeType: 'Cadence Community Home',
      savings: '3 months faster closing'
    },
    {
      id: 3,
      name: 'Robert & Maria Garcia',
      location: 'North Las Vegas Homeowners',
      rating: 5,
      date: 'October 20, 2024',
      text: 'Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist, was like having an insider at the builder. Her expertise meant we got upgrades and incentives others couldn\'t access. She truly represents her clients\' interests exclusively, working for home buyers, not the builder.',
      homeType: 'North Las Vegas Development',
      savings: '$12,000 in upgrades'
    },
    {
      id: 4,
      name: 'Jennifer & Mark Thompson',
      location: 'Homestead West Homeowners',
      rating: 5,
      date: 'October 5, 2024',
      text: 'Dr. Jan Duffy\'s expertise in new construction is unmatched. As a VIP New Construction Homes Specialist who represents home buyers, she gave us access to information and opportunities that regular buyers don\'t get. She guided us through every step with professionalism and care—all while working for us, not the builder.',
      homeType: 'Plan 3336 - 3,336 sq ft',
      savings: 'Priority lot selection'
    },
    {
      id: 5,
      name: 'Amanda & James Wilson',
      location: 'First-Time Homebuyers',
      rating: 5,
      date: 'September 20, 2024',
      text: 'As first-time homebuyers, we were overwhelmed by the new construction process. Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers, made everything smooth and stress-free. Her expertise and advocacy were game-changers.',
      homeType: 'Homestead West Ranch Home',
      savings: 'First-time buyer incentives'
    },
    {
      id: 6,
      name: 'Patricia & Michael Rodriguez',
      location: 'Relocating from California',
      rating: 5,
      date: 'September 10, 2024',
      text: 'Moving from California to Las Vegas was daunting, but working with Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers, made our transition seamless. Her local market knowledge and expertise helped us find the perfect home quickly—all while having an advocate who worked for us.',
      homeType: 'New Construction Home',
      savings: 'Relocation incentives'
    },
    {
      id: 7,
      name: 'Lisa & Kevin Anderson',
      location: 'Homestead West Homeowners',
      rating: 5,
      date: 'August 25, 2024',
      text: 'Dr. Jan Duffy\'s VIP status with the builder gave us advantages we never expected. Early access to new phases, better pricing, and priority service throughout construction. She\'s truly a VIP specialist.',
      homeType: 'Plan 3704 with Casita',
      savings: '$18,000 total savings'
    },
    {
      id: 8,
      name: 'Rachel & Steven Martinez',
      location: 'Investment Property Buyers',
      rating: 5,
      date: 'August 15, 2024',
      text: 'We purchased multiple new construction properties as investments. Working with Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers, provided us with insider market information and builder incentives that maximized our returns. Highly recommend her services.',
      homeType: 'Multiple New Construction',
      savings: 'Investment incentives'
    }
  ];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.homesteadwestlasvegas.com' },
    { name: 'Testimonials', url: 'https://www.homesteadwestlasvegas.com/testimonials' }
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
          imageId="private-tour"
          title="Homestead West Client Testimonials"
          subtitle={
            <>
              Real Success Stories
              <br />
              From VIP New Construction Homes Specialist
            </>
          }
          badge="⭐ VIP NEW CONSTRUCTION TESTIMONIALS ⭐"
        />

        {/* MLS listings — early for buyer engagement */}
        <section className="py-16 bg-gray-50" id="available-homes">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
              Available Homestead West Homes and Las Vegas MLS Listings
            </h2>
            <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Browse current listings from the Las Vegas MLS — updated daily with the latest properties
            </p>
            <div className="max-w-7xl mx-auto">
              <RealScoutListings />
            </div>
          </div>
        </section>

        {/* Overall Rating */}
        <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">5-Star Homestead West VIP Service</h2>
                <SectionImage
                  imageId="private-tour"
                  heading="5-Star Homestead West VIP Service"
                  caption="Private tour at Homestead West, 5592 Dapple Gray Rd, Las Vegas NV 89149"
                />
                <div className="flex items-center justify-center mb-6">
                  <div className="flex text-yellow-400 text-4xl mr-4">
                    <span>⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">5.0</div>
                </div>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Based on 47+ verified reviews from families who experienced Dr. Jan Duffy's 
                  VIP New Construction Homes Specialist services and buyer representation.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Homestead West VIP Advantages</h3>
                  <p className="text-gray-700">Early Homestead West access, priority treatment, and exclusive incentives</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Significant Savings</h3>
                  <p className="text-gray-700">Average $15,000+ in incentives and negotiation advantages</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Faster Process</h3>
                  <p className="text-gray-700">Priority scheduling and expedited service throughout</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400 mr-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-lg">⭐</span>
                        ))}
                      </div>
                      <span className="text-gray-500 text-sm">{testimonial.date}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="border-t pt-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-700 mb-2">{testimonial.location}</p>
                      <p className="text-sm text-blue-600 font-semibold">{testimonial.homeType}</p>
                      <p className="text-sm text-green-600 font-semibold">{testimonial.savings}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Statistics */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Proven Results</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">VIP</div>
                  <p className="text-gray-700 font-semibold">Early Access & Priority Selection</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">$15K+</div>
                  <p className="text-gray-700 font-semibold">Average Savings Per Transaction</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
                  <p className="text-gray-700 font-semibold">Client Satisfaction Rate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">✓</div>
                  <p className="text-gray-700 font-semibold">Complete Buyer Representation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Experience VIP Buyer Service?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Join hundreds of satisfied families who chose Dr. Jan Duffy, a VIP New Construction Homes Specialist who represents home buyers exclusively
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="tel:7022996607"
                  className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  📞 Call Dr. Jan: (702) 299-6607
                </a>
                <a
                  href="mailto:DrJanSells@HomesteadWestLasVegas.com"
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-900 transition-colors"
                >
                  📧 Email Dr. Jan
                </a>
              </div>
              
              <div className="mt-8 text-blue-200">
                <p className="text-lg font-semibold">Dr. Jan Duffy - VIP New Construction Specialist</p>
                <p>Las Vegas Real Estate Expert | Nevada License S.0197614.LLC</p>
                <p>DrJanSells@HomesteadWestLasVegas.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Explore More Resources</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/reviews" className="bg-amber-50 p-6 rounded-lg hover:bg-amber-100 transition-colors border-2 border-amber-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Leave a Google Review</h3>
                  <p className="text-gray-700">Help others find us — review us on Google (link + QR code)</p>
                </a>
                <a href="/about" className="bg-blue-50 p-6 rounded-lg hover:bg-blue-100 transition-colors border-2 border-blue-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">About Dr. Jan</h3>
                  <p className="text-gray-700">Learn about Dr. Jan Duffy's expertise as a VIP New Construction Homes Specialist</p>
                </a>
                <a href="/services" className="bg-green-50 p-6 rounded-lg hover:bg-green-100 transition-colors border-2 border-green-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Our Services</h3>
                  <p className="text-gray-700">Buying, selling, investment, and property management</p>
                </a>
                <a href="/vip-buyer-program" className="bg-yellow-50 p-6 rounded-lg hover:bg-yellow-100 transition-colors border-2 border-yellow-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">VIP Buyer Program</h3>
                  <p className="text-gray-700">Exclusive access to new construction homes</p>
                </a>
                <a href="/homebuying-process" className="bg-purple-50 p-6 rounded-lg hover:bg-purple-100 transition-colors border-2 border-purple-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Buying Process</h3>
                  <p className="text-gray-700">Step-by-step guide to new construction</p>
                </a>
                <a href="/properties" className="bg-indigo-50 p-6 rounded-lg hover:bg-indigo-100 transition-colors border-2 border-indigo-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Properties</h3>
                  <p className="text-gray-700">Browse available Homestead West homes</p>
                </a>
                <a href="/contact" className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors border-2 border-gray-200 shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Contact</h3>
                  <p className="text-gray-700">Get in touch with Dr. Jan Duffy</p>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
