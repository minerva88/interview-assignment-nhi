# Frontend Assignment for NHI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npx create-react-app .`

### `npm install react-router-dom`

### `npm install react-bootstrap`

### `npm install sass`

## Notes

Home page renders a list of users from the [Github API](https://docs.github.com/en/rest/reference/users) with a button/link to a details page for the user.

Home page also have a search-function for the rendered list.

Details page for each user renderes properties from the API, such as blog adress, amount of followers and company name, as well as a list of public repositories.

## Further improvements

UX/UI:

- Place searchbar in navbar, implement dropdown typeahead functionality (for use also when visiting other pages than Home-page).

- Display list in a grid on desktop/tablet sized screens.

- Choose fonts and colours resembling those on the Github site for better user experience.

- Make a proper layout for Details page.

Security:

- My experience is only with authorization by JWT-auth from APIs, and restricting access to admin-dashboards, f.ex., with the bare basics of security.

Organization: 

- Organized CSS by adding Sass and organize files in partials. Would use more descriptive folders with bigger projects.

- Organized pages and components in their own folders. 

- Would further implement Prop-Type checks in components and split up parts of components in their own descriptive folders.

Refactoring: 

- Shorten syntax and make changes to follow the DRY-principle

- Do usability/WCAG checks of the site when styled

- Probably use Next.js for simpler routing and better organization of component-files.



