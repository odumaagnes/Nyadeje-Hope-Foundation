// ============================================================================
// BLOG CONTENT — add your own posts here.
// ============================================================================
// This array is the ONLY file you need to edit to publish a new blog post.
// Copy one of the objects below, change its values, and it will appear on
// the Blog page automatically (newest first is up to you — the array order
// is the display order, so add new posts to the TOP of the array).
//
// Fields:
//   id           unique number or string
//   title        post headline
//   category     short label shown as a tag (e.g. 'Community', 'Education')
//   date         a display string, e.g. 'March 2026' or 'March 12, 2026'
//   image        path to a cover photo — put the file in public/gallery/
//                (or public/blog/ if you'd rather keep blog images separate)
//                and reference it as '/gallery/my-photo.jpg'
//   excerpt      one or two sentences shown on the post card in the grid
//   content      the full post body, as an array of paragraph strings —
//                each array item becomes one paragraph when the post opens
// ============================================================================

export const blogPosts = [
  {
    id: 1,
    title: 'Back to School: Every Uniform Tells a Story',
    category: 'Education',
    date: 'August 2026',
    image: '/gallery/school-1.jpg',
    excerpt: 'For many children in schools, a school uniform is more than clothing — it is dignity, belonging, and a ticket back into the classroom.',
    content: [
      'For many of the children we support in Siaya County, the start of a new school term brings a familiar worry: will there be a uniform, books, and shoes waiting for them, or will they have to stay home again this year?',
      'Through our education support program, we work directly with families and schools to make sure that worry does not stand between a child and their classroom. This term, we were able to walk alongside several of our sponsored pupils as they suited up in a fresh uniform, packed their bags, and headed back to school with their heads held high.',
      'Behind every uniform is a story of a caregiver who never gave up, a mentor who kept checking in, and a community that chose to invest in a child\u2019s future. We are grateful to everyone who makes this possible, and we remain committed to walking with these children for as long as it takes.',
    ],
  },
  {
    id: 2,
    title: 'Nurturing Young Artists Through Talent Development',
    category: 'Talent',
    date: 'November 2025',
    image: '/gallery/talent-4.jpg',
    excerpt: 'Beyond the classroom, we are discovering and nurturing the creative gifts of the children in our care — one paintbrush at a time.',
    content: [
      'Not every child\u2019s brightest gift shows up on a report card. Some of our children express themselves best through color, shape and story — and our talent development program exists to give that gift room to grow.',
      'During our most recent art mentorship sessions, pupils spent hours sketching, mixing paint and building up the confidence to call themselves artists. Mentors worked one-on-one with the children, encouraging them not just to copy what they saw, but to tell their own stories on canvas.',
      'For children who have faced real hardship, a finished painting can be a quiet but powerful statement: I am capable, I have something to offer, and my voice matters. We are proud to keep creating space for that kind of growth.',
    ],
  },
  {
    id: 3,
    title: 'Partnering with Meru Prison Stars Volleyball Club',
    category: 'Outreach',
    date: 'April 2026',
    image: '/gallery/out-2.jpg',
    excerpt: 'A heartfelt donation drive in partnership with the Meru Prison Stars Volleyball Club brought essential supplies to families in need.',
    content: [
      'Community partnerships are at the heart of how we extend our reach. Recently, we joined hands with the Meru Prison Stars Volleyball Club for a donation drive supporting families and children with essential household and hygiene supplies.',
      'Members of the club, together with our team and community volunteers, packed and distributed food staples, sanitary items and other necessities to families who needed a little extra support this season.',
      'These partnerships remind us that hope is a team effort — it grows fastest when organizations, clubs and everyday community members choose to show up for one another.',
    ],
  },
  {
    id: 4,
    title: 'Community Tree-Planting: Restoring Our Land',
    category: 'Community',
    date: 'March 2026',
    image: '/gallery/comm-2.jpg',
    excerpt: 'Caring for children also means caring for the land they will inherit. Our community came together to plant trees and restore the hillside.',
    content: [
      'Our mission is about more than immediate relief — it is about building a future worth inheriting. That is why our community outreach work now includes environmental restoration alongside child welfare.',
      'Volunteers, community members and staff spent the day planting tree seedlings along a degraded hillside, working together in the sun to give the land a second chance to thrive.',
      'A healthier environment means more reliable rainfall, better soil for local farmers, and a more resilient community for the children we serve to grow up in. Small seedlings today, we believe, will shade a stronger tomorrow.',
    ],
  },
]
