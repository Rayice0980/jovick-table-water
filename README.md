# Jovick Table Water

Static responsive multi-page website built with plain HTML, CSS and vanilla JavaScript. No package installation or build step is required.

## Pages

- `index.html` — Homepage
- `our-story.html` — Our Story
- `our-products.html` — Our Products
- `our-promise.html` — Our Promise
- `contact.html` — Contact & Inquiries

## CSS

- `css/style.css` — shared layout, navigation, buttons, cards and responsive styles
- `css/home.css`, `css/story.css`, `css/products.css`, `css/promise.css`, `css/contact.css` — page-specific styles

## JavaScript

- `js/main.js` — shared mobile menu, active navigation and footer year
- `js/home.js`, `js/story.js`, `js/products.js`, `js/promise.js`, `js/contact.js` — page-specific behavior

## Local testing

Open `index.html` or use VS Code Live Server.

## Before publishing

- Replace sample Unsplash photos with real Jovick product and facility photos.
- Confirm the official inquiry email. `js/contact.js` currently uses `hello@jovicktablewater.com` as a placeholder.
- The inquiry form opens a visitor's email app via `mailto:`; it does not send directly from the website.
- Verify product sizes, prices, delivery areas, quality claims and certifications before publishing.
- Deploy the repository root as a static site.
