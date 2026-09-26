// ============================================================================
// GALLERY CONTENT — add your own photos and videos here.
// ============================================================================
// This array is the ONLY file you need to edit to update the gallery.
// Each entry is one card in the grid. Just copy an example object below,
// change its values, and add it to the array.
//
// FOR AN IMAGE:
//   1. Put the image file in  public/gallery/   (e.g. public/gallery/my-photo.jpg)
//   2. Reference it here as   src: '/gallery/my-photo.jpg'
//
// FOR A VIDEO, you have two options:
//   a) YouTube (recommended — no large files to host):
//        - Upload the video to YouTube (can be "Unlisted" if you don't want
//          it public on YouTube itself, it'll still play fine embedded here)
//        - Get the video ID from the URL, e.g. youtube.com/watch?v=XXXXXXXXXXX
//        - Set:  videoUrl: 'https://www.youtube.com/embed/XXXXXXXXXXX'
//        - Also set a `src` thumbnail image for the grid (a still photo,
//          or a YouTube-generated thumbnail: https://img.youtube.com/vi/XXXXXXXXXXX/hqdefault.jpg)
//   b) A local video file:
//        - Put the .mp4 file in  public/gallery/  (keep it reasonably small —
//          a few MB, not hundreds — large videos will slow the site down)
//        - Set:  videoFile: '/gallery/my-video.mp4'
//        - Also set a `src` thumbnail image for the grid
//
// `category` controls which filter button an item shows under. Use short,
// lowercase, no-space keys (e.g. 'education', 'community'). The filter bar
// is generated automatically from whatever categories appear below — add a
// new category name and a new filter button appears on its own.
// ============================================================================

export const galleryItems = [
  {
    id: 1,
    type: 'image',
    category: 'education',
    src: '/gallery/edu-1.jpg',
    title: 'Life Skills & Mentorship Circle',
    description: 'Pupils gathered for a guided learning and mentorship session, journaling and discussing life skills together.',
  },
  {
    id: 2,
    type: 'image',
    category: 'education',
    src: '/gallery/school-1.jpg',
    title: 'Ready for School',
    description: 'A sponsored pupil and her little brother, dressed in uniform and ready for another school day, with their Founder/Mentor.',
  },
  {
    id: 3,
    type: 'video',
    category: 'community',
    src: '/gallery/comm-1-thumb.jpg',
    videoFile: '/gallery/comm-1.mp4',
    title: 'Community Gathering Highlights',
    description: 'Moments from a community gathering bringing together mothers, children and volunteers in Siaya County.',
  },
  {
    id: 4,
    type: 'image',
    category: 'community',
    src: '/gallery/comm-2.jpg',
    title: 'Community Tree-Planting Drive',
    description: 'Volunteers and community members planting tree seedlings together as part of our environmental restoration efforts.',
  },
  {
    id: 5,
    type: 'image',
    category: 'community',
    src: '/gallery/comm-3.jpg',
    title: 'Restoring the Land Together',
    description: 'The wider group pauses to celebrate a successful day of reforestation work on the hillside.',
  },
  {
    id: 6,
    type: 'image',
    category: 'outreach',
    src: '/gallery/out-1.jpg',
    title: 'Partnership Meeting',
    description: 'Our founder meeting with partners to discuss child welfare programs.',
  },
  {
    id: 7,
    type: 'image',
    category: 'outreach',
    src: '/gallery/out-2.jpg',
    title: 'Donation Drive with Meru Prison Stars',
    description: 'Essential supplies Donated by Meru Prison Stars to support children in need.',
  },
  // {
  //   id: 8,
  //   type: 'image',
  //   category: 'outreach',
  //   src: '/gallery/out-3.jpg',
  //   title: 'Delivering Essential Supplies',
  //   description: 'Families and children receiving food, hygiene items and other essential supplies during the outreach visit.',
  // },
  {
    id: 9,
    type: 'image',
    category: 'talent',
    src: '/gallery/talent-1.jpg',
    title: 'Young Artist at Work',
    description: 'One of our talented pupils proudly displaying an original painting created during our talent development sessions.',
  },
  {
    id: 10,
    type: 'image',
    category: 'talent',
    src: '/gallery/talent-2.jpg',
    title: 'Showcasing Creative Talent',
    description: 'A young painter stands beside his artwork and mentor, celebrating his growing artistic ability.',
  },
  {
    id: 11,
    type: 'image',
    category: 'talent',
    src: '/gallery/talent-3.jpg',
    title: 'Mentorship in the Art Studio',
    description: 'A mentor and volunteer sharing an encouraging moment during a sketching and art mentorship session.',
  },
  {
    id: 12,
    type: 'image',
    category: 'talent',
    src: '/gallery/talent-4.jpg',
    title: 'Painting Lessons',
    description: 'An instructor guiding a young student through a painting exercise as part of our talent development program.',
  },
  {
    id: 13,
    type: 'image',
    category: 'education',
    src: '/gallery/edu-2.jpg',
    title: 'Transformation Workshop',
    description: 'Girls after being empowered to know who they are, honour their bodies and step in their powers through transformational workshops organized by UBUNTU voice in collaboration with Nyadeje Hope Foundation.',
  },
]
