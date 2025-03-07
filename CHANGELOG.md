# Changelog

## [v0.2.2] - 2025-02-25

### Added

- `User.jsx` shows no token found and login button if no token is found
- Logout button on user and admin dashboards
- Change password functionality
- Content to `Checkout.jsx` (email func missing)
- Change password route and controller

### Changed

- Replaced login/register alerts with alert component
- Renamed `utils/users.js` to `auth.js`
- Combined the Rows in `dashboard/Admin.jsx` so that they don't group in two.
- Updated `TODO.md`
- Moved `Checkout.jsx` under cart

### Removed
- `admin.css` it works without too

## [v0.2.1] - 2025-02-16

### Added

- Deployment of backend on the cloud and integration with the github page

### Fixed

- Error when trying to add products to cart
- Login error due to localhost address when deployed

### Changed

- All page headers have same margins

### Removed

- Unnecessary logs
- Flag icons package using pngs instead

## [v0.2.0] - 2025-02-03

### Added

- All CRUD operations through dashboard work
- Restricting access of users to /admin route with `AdminRoute.jsx` and `PermissionDenied.jsx`
- Footer margin on `Login.jsx` and `Register.jsx`
- Added missing deleteUser function to `user.controller.js`

### Fixed

- Login error after editing user caused by password rehashing

### Removed

- Delete all functions from backend
- Edit password text field until functionality is implemented

## [v0.1.9] - 2025-02-01

### Added

- Back to cart button when the cart is empty
- Products, users, carousel items and partners update through admin dashboard

### Changes

- Products and carousel items only have english names for simpler product editing.
- Small simplification to `Logo.jsx`
- `ProductCatalog.jsx` spinner shows at the top

### Deleted

- Translation entries for products and carousel items from `translations.json`

## [v0.1.8] - 2025-01-29

### Added

- Fetching product, partner and carousel item info from backend
- Placeholders for `EditUser.jsx` form with data from user
- `carousel.controller.js` and `partner.controller.js`
- `jwt-decode` package

### Changed

- Disabled navlink animation on toggled navbar
- Updated `README.md`

### Deleted

- `data` folder with its contents

## [v0.1.7] - 2025-01-27

### Added

- User login and registriation over backend and db
- `User.jsx` and `Admin.jsx` dashboard pages
- `user.controller.js` for seperating functions
- Axios package to frontend
- `utils` folder for functions
- Fancy animation to navlinks on `navlink.css`
- `EditUser.jsx` for editing user/admin information
- edit and get user by id routes for users

### Changed

- Minor simplifications to `Login.jsx` and `Register.jsx`
- Product card on hover animations
- change the folder name `login` to `auth`
- `Section.jsx` now redirects to `About.jsx`

### Removed

- `data/products.js` since the products get called from db
- `contact/form` folder, moved contents to parent

## [v0.1.6] - 2025-01-26

### Added

- CORS connection between frontend and backend
- Fetching products from backend

### Changed

- Simplied `product.routes.js` by importing funcs from controller
- Extracted functions of `products` into a `functions.js` file

## [v0.1.5] - 2025-01-22

### Added

- Navbar toggle on logo click

### Changed

- Frontend files to Javascript for simpler codebase
- Upgrade to emailjs/browser package from emailjs-com

## [v0.1.4] - 2025-01-22

### Changed

- Upgrade to flag-icons package from flag-icon-css
- Updated `README.md`
- Replaced nodemon with node --watch in `backend`

## [v0.1.3] - 2025-01-03

### Added

- Backend API endpoints and MongoDB connection
- Models and routes for carousel, partners, products and users (optimization required)
- Scroll to top on `Checkout.tsx`

### Removed

- Non-existing css import from `Navbar.tsx`
- Unnecessary `package.lock.json` file from root

## [v0.1.2] - 2024-12-21

### Added

- Toast when deleting products from cart
- Mobile navbar collapse when click on cart and language
- Cart overview section
- `Checkout.tsx` with title and return button
- In development alert on `Login` and `Register` pages

### Fixed

- Cart overview is now fixed to viewport
- Cart now refreshes when adding or removing items
- Manaul map alignment in contact page

### Changed

- General commenting and optimization
- Toast button margin
- Optimized Cart items view on mobile
- `Toast.tsx` now accepts success and danger variants
- Extracted cart overview, functions and items into seperate files
- Restructured keys in `translations.json`
- Added `Footer.tsx` to `App.tsx` for removing footer calls from each file
- Compressed the images and icons

### Removed

- Sticky navbar

## [v0.1.1] - 2024-12-11

### Added

- Banner to `CartIcon.tsx` to show the product count using global state
- Display products in cart in `Cart.tsx` as a list extracted from session storage
- Navbar collapse when a menu item is clicked on mobile

### Renamed

- `PartnersParent.tsx` and `CatalogParent.tsx` into `...Page.tsx`

### Changed

- Toasts to show in the center
- Products get saved to local storage instead of session storage
- Made the cart icon banner round
- Sticky Navbar and simplification
- `Section.tsx` uses full width
- Toasts stay for 3 seconds

### Moved

- `Cart.tsx` under `cart` folder
- - Styles from `Toast.tsx` into its css file
- `CartIcon.tsx` styles in css file

### Fixed

- Toast flashing after disappearing due to animation timing
- Cart items dont fit on mobile

## [v0.1.0] - 2024-11-2

### Added

- 'backend' template for Express.js (in development)
- Cart page and icon in navbar
- Adding products in cart to session storage
- Showing stacking animated toasts when adding products to the cart
- `data` folder for partners, products and carousel items.

### Changed

- Products in Catalog
- Moved `translatinos.json` into `locales` folder
- The prices and currencies of products
- Animations on Language switch and cart icon
- Centered and enlarged cart and language icons on toggled navbar view
- CSS file names in camel case
- Moved `README.md`, `CHANGELOG.md` and `TODO.md` into root folder

### Removed

- `ToggleButton.css`
- `Catalog.css` (content transferred to `Product.css`)
- In-file data definitions
- `import.ts` files under `assets/images`
- `node_modules` of backend from git

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
