# Jovick Table Water

A responsive, five-page brand website built with semantic HTML, CSS, and vanilla JavaScript. The site is intentionally dependency-free: there is no package installation or build step.

## Pages

- `index.html` — Homepage and primary calls to action
- `our-story.html` — Brand story
- `our-products.html` — Product and supply information
- `our-promise.html` — Brand standards and commitments
- `contact.html` — Customer and distribution inquiries

## Project structure

- `css/style.css` — Shared design tokens, layout, navigation, components, and responsive rules
- `css/home.css`, `css/story.css`, `css/products.css`, `css/promise.css`, `css/contact.css` — Page-specific styles
- `js/main.js` — Mobile navigation, active-page state, and current footer year
- `js/home.js`, `js/story.js`, `js/products.js`, `js/promise.js`, `js/contact.js` — Page-specific behavior
- `assets/images/jovick-logo.svg` — Brand mark and site icon

## Run locally

1. Clone the repository and open the project folder in VS Code.
2. Open `index.html` directly, or use the VS Code Live Server extension for a local web server.
3. Check each page at desktop, tablet, and mobile widths. Test the mobile navigation and all calls to action.

No build command is required.

## Inquiry form behavior

The form in `contact.html` validates required fields in the browser and prepares an email using the visitor's configured email app. The recipient is `jovickuniqueenterprises@gmail.com`. The business phone is `0803 665 8159`; WhatsApp is `+234 813 729 7150`. It uses a `mailto:` link, so it does **not** send messages directly from the website and depends on the visitor having an email app configured.

Product-page inquiry links preselect the matching inquiry type using the `topic` query parameter.

## Pre-launch checklist

- Replace illustrative third-party photography with approved Jovick product, packaging, and facility photos where available.
- Confirm product sizes, packaging, supply capacity, pricing, delivery coverage, and business contact details.
- Publish only quality, safety, or certification claims that can be substantiated.
- Test every internal link, navigation state, inquiry topic preselection, and the email-draft flow on desktop and mobile.
- Confirm the hosting provider's project root and deployment configuration before publishing.

## Design and maintenance

Keep shared colors and component styles in `css/style.css`; add page-only styles to the corresponding page stylesheet. Preserve the existing inquiry recipient and email-draft behavior unless a replacement form service is deliberately configured and tested.
