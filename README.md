# Nyadeje Hope Foundation — React (Vite) Site

This is a React conversion of the original 7-page static HTML site
(index, about, impact, programs, gallery, donate, contact — the
"impact" page has since been replaced with a Blog, see below). The
visual design, copy, Tailwind styling, custom CSS animations, and
all interactive behavior (mobile menu, scroll-reveal animations,
navbar color transition, copy-to-clipboard, toast notifications,
back-to-top button, floating WhatsApp button, contact form
submission) have been preserved exactly — just re-implemented with
React state/hooks instead of vanilla JS + `document.querySelector`.

Since the 7 pages were mostly just different sections wrapped by the
same nav/footer, this is built as a **single-page app**: one
`<Navbar>` and `<Footer>` (shared across the site, as they were
already identical across all 7 original HTML files), with the page
body swapped in via `src/App.jsx`'s `page` state — no page reloads,
no react-router. Nav links call `onNavigate(page, hash)`, which
switches the active page and smooth-scrolls to the right section,
mirroring the original `page.html#section` anchor links.

## Structure

```
index.html                 Vite entry HTML — same Tailwind CDN config,
                            Google Fonts, Iconify script and custom CSS
                            as the original pages, unchanged.
src/
  main.jsx                 React root
  App.jsx                  Page-switching logic + shared layout
  navLinks.js               Nav link config (label/page/hash)
  context/ToastContext.jsx  Toast + copy-to-clipboard state, shared site-wide
  hooks/useScrollAnimate.js IntersectionObserver scroll-reveal hook
  components/
    Navbar.jsx              Scroll-driven navbar + mobile menu
    Footer.jsx               Shared footer (identical on every page originally)
    Toast.jsx                 Toast notification UI
    BackToTop.jsx             Back-to-top button
    WhatsAppButton.jsx        Floating WhatsApp button
    CopyButton.jsx             Copy-to-clipboard button used on the Donate page
  pages/
    Home.jsx, About.jsx, Blog.jsx, Programs.jsx,
    Gallery.jsx, Donate.jsx, Contact.jsx
```

## Setup

This project was built in a sandbox without network access, so
dependencies were **not** installed or test-run — do that locally:

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Images

Five local photos (`imagee1.jpeg` … `imagee5.jpeg`) were referenced
by the original HTML but weren't included in the uploaded zip (it
only contained the `.html` files). Drop them into `/public` with
those exact names — see `public/README-IMAGES.txt` for where each
one is used. Every other image in the site loads remotely from
`picsum.photos` and needs no action.

## Adding gallery photos & videos

The gallery now uses your real photos and a video from the Nyadeje
Hope Foundation's programs (education, community, outreach and talent
sessions), plus the 12 supplied images and one video, and is driven
entirely by one file: `src/data/galleryItems.js`. That file has
step-by-step instructions in its header comment for:

- adding an image (drop it in `public/gallery/`, reference it in the array)
- adding a YouTube video (embed URL + a thumbnail image)
- adding a local video file (an `.mp4` in `public/gallery/`)
- adding a new filter category (just use a new `category` value — the
  filter bar builds itself from whatever categories exist)

## The Blog page

The old "Impact" page (vision/mission stats, objectives, who-we-help)
has been replaced with a **Blog**, per request. It's driven by
`src/data/blogPosts.js` — that file's header comment explains the
fields (title, category, date, image, excerpt, and a `content` array
of paragraphs for the full post). Add a new post by copying one of
the existing objects to the top of the array.

The page shows the first post as a large featured card, the rest in a
grid, and clicking any post opens its full text in a lightbox/modal —
consistent with the reading experience already used elsewhere on the
site (the gallery lightbox, for instance).

## Notes on fidelity

- The former Impact page's content wasn't discarded — it was folded
  into the pages it fits best: Vision & Mission (with Core Values) and
  Who We Help now live on the **About** page (`#vision-mission` and
  `#who-we-help`), and the detailed Objectives list now lives on the
  **Programs** page (`#objectives`), alongside the existing "What We
  Do" summary cards it complements. The Footer's quick links were
  updated to match.

- The Gallery page originally had its filter buttons and photo grid
  commented out (disabled) in the source HTML. It's now fully
  implemented (see "Adding gallery photos & videos" above) instead of
  left dormant.
- The mobile navigation menu was redesigned into a slide-in side
  panel (logo, close button, animated link list, Support Us + WhatsApp
  buttons) instead of the original's plain dropdown list, per request.
- The contact form still posts to the same Formspree endpoint via
  `fetch`, with the same loading/success/error states as the
  original inline `<script>`.
- One small bug in the original `donate.html` (a stray unmatched
  closing `</div>`, which browsers silently tolerate but JSX does
  not) was corrected without changing the rendered layout.
