# Changelog

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
