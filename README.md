# React + Vite

Website name: Dream Land

Live site:

##Features and characteristics:

- Unique Real Estate Focus: Dream Land specializes in agricultural land, ranches, farms, vineyards, forests, and plantations, offering a niche selection of properties to users.

- Responsive Design: The website is optimized for all devices, including mobile phones, tablets, and desktop computers, ensuring a seamless browsing experience for users regardless of their device.

- Active Routes Navbar: The navbar includes active routes for easy navigation, displaying the website name, home page, update profile (optional), user profile and reviews. Conditional rendering shows the user's image and name when logged in, and a login button when not logged in.

- Authentication Options: Users can log in using email and password authentication, as well as through Google and GitHub login options, providing flexibility and convenience for users.

- Registration Page: The registration page allows users to create accounts with their name, email, photo URL, and password. Password verification ensures password strength, and error messages are displayed if criteria are not met.

- Banner Slider: The home page features a slider, showcasing different properties and enticing users to explore further.

- Footer: The footer contains relevant information and has an eye-catching design, providing users with additional navigation options and essential links.

- Estate Section: Users can browse through a curated selection of properties. Each estate card displays relevant information, including an image, title, ID, segment name, description, price, status (sale or rent), area, location, facilities, and a "View Property" button.

- Estate Details Page: Clicking on the "View Property" button redirects users to the estate details page, a protected route where they can view comprehensive information about the selected property.

- 404 Page: A custom 404 page is included to handle any invalid URLs or navigation errors, ensuring a smooth user experience.

- Extra Route: An additional private/protected route which is the Review page is available, offering the buyers reviews of our previous properties.

- Dynamic Title: Each page on the website has a dynamic title that reflects its content.

- Persistent User Information: Once logged in, user information remains visible in the navbar even after reloading the website, providing continuity and convenience for users.

- Password Visibility Toggle: Users can toggle password visibility on the registration page, allowing them to view or hide their password as needed for enhanced usability.

##Additional npm Package Implementations for challenges task:

Three additional packages from the provided list are integrated into the website. these are AOS package(estate cards), Animate CSS(Home page slider) and Swiper slider (home page slider) enhancing functionality and visual appeal.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
