# Game developer and 3D artist portfolio

## Run locally

```sh
npm.cmd install
npm.cmd run dev
```

Create a production build with `npm.cmd run build`, or preview it with
`npm.cmd run preview`.

## Echoes of Tomorrow case study

The case study is available at `/projects/echoes-of-tomorrow/`. The page uses
the screenshots already present under `public/images/echoes/`. Screenshots
open in a larger view when selected. The hero and video poster currently use
clearly labeled temporary Unsplash mood artwork, not game footage; replace
`temporaryCinematicImage` in `src/data/echoes.js` when final artwork is ready.
The gameplay showcase is a 16:9 placeholder until footage is supplied; set
`gameplayShowcase.videoUrl` in `src/data/echoes.js` to a playable MP4 URL and
replace its poster with a still from the actual video.

## Replace the remaining portfolio image slots

Add your images under `public/images/`, then update `portfolioImages` in
`src/data/portfolio.js` with an image path and descriptive alt text for each
slot. For example:

```js
hero: {
  src: "/images/hero-still.jpg",
  alt: "A still from your cinematic portfolio work.",
},
```

The remaining homepage slot names are `hero`, `car-cinematics`,
`blender-animation`, `environment-vfx`, and `featured-case`. The case-study
video URL is in `src/data/echoes.js`.
