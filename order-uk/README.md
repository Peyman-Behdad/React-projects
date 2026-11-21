# Order.uk

A food-delivery landing page built with React, Vite, Tailwind CSS 4 and Swiper.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run lint     # check the code with ESLint
```

## Project structure

```
src/
├── assets/images/        SVG images, one folder per page section
├── components/
│   ├── layout/           Parts of the page shell: Navbar, Footer, Copyright, GetDiscount bar
│   └── ui/               Small reusable pieces: Button, Input, DropDown
└── pages/
    └── HomePage/
        ├── HomePage.jsx  Puts the sections together
        └── components/   Sections and cards used only by the home page
```

Rule of thumb: a component lives next to the page that uses it. Move it to
`src/components/` only when a second page needs it.
