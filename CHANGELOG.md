# Changelog

## [v0.0.9] - 2024-11-9

### Added

- Contact form validation in `Form.tsx`
- `Modal.tsx` for showing pop up when the email is sent
- `formUtils.ts` for emailjs related stuff
- Show error message in modal when the email couldn't be sent
- `import.ts` for simplifying partners imports

### Changed

- `Navbar.tsx` with better collapsing
- Moved form related files into `contact/form`
- `About.tsx` `Partners.tsx` `Section.tsx` `Footer.tsx` `NotFound.tsx` `LanguageSwitch.tsx` `Image.tsx` `Cards.tsx` are now react bootstrap based
- Rounded the carousel icons
- Language switch shows up on the right in toggled view

## [v0.0.8] - 2024-11-6

### Added

- `@` alias for absolute imports in `tsconfig.app.json`
- Footer component to `NotFound.tsx`
- `Catalog.tsx` for products with the css file
- `import.ts` files for simpler imports in `Catalog.tsx` and `Carousel.tsx`
- On hover animations to carousel, products and partners
- Links to carousel text
- `Footer.css` for on hover on links

### Changed

- Optimized and commented `form.tsx`
- Updated `README.md`
- Imports paths to absolute
- Smaller text in `section.tsx`
- `Partners.tsx` to `PartnersParent.tsx` and `ParentsChild.tsx` to `Parents.tsx`

### Renamed

- `Login` folder to `login`
- Carousel images to english names
- `slides` folder to `carousel`
- `CarouselExample` to `CustomCarousel`
- All `.tsx` files to start with capitals

### Removed

- `mdb-react-ui-kit` package
- Unnecessary lines from `Carousel.css`

## [v0.0.7] - 2024-11-3

### Added

- `Login.tsx` and `Register.tsx` (only the frontend)
- 404 not found page
- Custom css files for Logo, NavLink, ToggleButton, LangSwitch

### Changed

- Port on dev server to 3000
- Set version in `package.json`
- Seperated component css into own files
- Default lang to Turkish

### Fixed

- Not centered copyright part in `Footer.tsx`
- Stretched tab logo
- Links refing to undefined path in url

### Removed

- `currentLang` check from links

## [v0.0.6] - 2024-11-1

### Added

- Added localization for every text in the site
- `LanguageSwitch.tsx` and `i18n.ts` under `locales` for localization
- href to remaining footer links

### Changed

- Moved home components into `home` folder
- Transferred content of `social.tsx` into `Footer.tsx`
- In-site links now direct to pages according to language
- Translated Carousel captions into Turkish in tr

### Removed

- Unnecessary links from `footer.tsx`
- Semi transparent bg from carousel captions
- `social.tsx` file

## [v0.0.5] - 2024-10-30

### Added

- Functionality to the contact form via `EmailJS`
- New item to `Carousel.tsx`
- `.custom-width` for the last item

### Changed

- `form.tsx` for email functionailty
- `Carousel.css` for fitting images
- Corrected the e-mail address

## [v0.0.4] - 2024-10-19

### Added

- Hompage navlink
- Hover shadow to logo
- Margins to replace `<br>` tags
- Content and styles to partners page
- Remaining content to homepage
- Footer component with dummy links
- Persistent background to selected links

### Changed

- File names according to airbnb guidelines
- Extracted `PartnersChild.tsx` from `Partners.tsx`
- Implemented flex layout for fixing the footer to the bottom on `About.tsx` and `Contact.tsx`
- Relative imports to Absoulte path imports

### Fixed

- Missing margin on mobile between map and form
- Tab logo missing on gh-pages, due to change in image path

### Removed

- Solutions page and file
- Segoe UI from navlinks
- `<br>` tags from `App.tsx` and `
- `material_kit` folder

## [v0.0.3] - 2024-10-18

### Added

- Content to about page
- All contents of contact page including cards, form and map
- New folder for contact files
- `TODO.md` file

### Changed

- Function names for pages corrected
- Moved images to according folders

## [v0.0.2] - 2024-10-17

### Added

- Routes for single pages using HashRouter
- Github Pages support thanks to gh-pages package

### Changed

- Compressed carousel images
- Increased font weight of links via inline style
- Moved default page into home, alongside the carousel
- New App.tsx layout compatible with routes
- Small simplification to Link component
- Renamed `Link.css` to `NavLink.css`

## [v0.0.1] - 2024-10-17

### Added

- Custom tab logo and name
- Navbar with logo and links
- Carousel with images
- Seperate `.css` files for components under `styles` folder
