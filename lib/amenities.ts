/**
 * Nearby amenity categories for the Amenity Map page.
 * Uses Google Maps embed (no API key) — search query "placeType near address".
 */

import type { SiteImageId } from '@/lib/image-catalog';

const MAP_BASE = '5592+Dapple+Gray+Rd,+Las+Vegas,+NV+89149';
const MAP_BASE_DISPLAY = '5592 Dapple Gray Rd, Las Vegas, NV 89149';

export type AmenityCategory = {
  id: string;
  label: string;
  /** Query for embed and link, e.g. "restaurants near ..." */
  searchQuery: string;
  description: string;
  icon?: string;
  imageId: SiteImageId;
};

export const AMENITY_CATEGORIES: AmenityCategory[] = [
  {
    id: 'restaurants',
    label: 'Restaurants & Dining',
    searchQuery: `restaurants+near+${MAP_BASE}`,
    description: 'Restaurants, cafes, and dining options near Homestead West and Centennial Hills.',
    icon: '🍽️',
    imageId: 'dining-patio-89149',
  },
  {
    id: 'parks',
    label: 'Parks & Recreation',
    searchQuery: `parks+near+${MAP_BASE}`,
    description: 'Parks, trails, and outdoor recreation near Northwest Las Vegas.',
    icon: '🌳',
    imageId: 'local-park-89149',
  },
  {
    id: 'parking',
    label: 'Parking',
    searchQuery: `parking+near+${MAP_BASE}`,
    description: 'Parking lots and structures near our office and Homestead West.',
    icon: '🅿️',
    imageId: 'parking-retail-89149',
  },
  {
    id: 'grocery',
    label: 'Grocery & Shopping',
    searchQuery: `grocery+stores+and+shopping+near+${MAP_BASE}`,
    description: 'Supermarkets, shopping centers, and retail near Centennial Hills.',
    icon: '🛒',
    imageId: 'grocery-center-89149',
  },
  {
    id: 'schools',
    label: 'Schools',
    searchQuery: `schools+near+${MAP_BASE}`,
    description: 'Schools and education near Homestead West (Dean LaMar Allen Elementary, Leavitt Middle, Centennial High).',
    icon: '🏫',
    imageId: 'school-campus-89149',
  },
  {
    id: 'healthcare',
    label: 'Healthcare & Pharmacies',
    searchQuery: `pharmacies+and+hospitals+near+${MAP_BASE}`,
    description: 'Pharmacies, medical offices, and Centennial Hills Hospital nearby.',
    icon: '🏥',
    imageId: 'medical-campus',
  },
];

/** Google Maps embed URL for a place-type search (no API key). */
export function amenityMapEmbedUrl(searchQuery: string): string {
  return `https://www.google.com/maps?q=${searchQuery}&output=embed`;
}

/** Google Maps search URL (opens in Maps). */
export function amenityMapsLink(searchQuery: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery.replace(/\+/g, ' '))}`;
}

export { MAP_BASE_DISPLAY };
