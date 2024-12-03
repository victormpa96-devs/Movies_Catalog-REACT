# Víctor Manuel Pérez Alemán

# Project Description:

The application has several pages that display information about movies according to different categories and search criteria. Key views and features include:

-Home page (Home): displays a list of the most recent movies obtained through the API.
-Movie search: Allows the user to search for movies by name using a text field.
-Movies sorted by score: Displays a list of movies sorted by their average score.
-Movie detail page: Displays detailed information about a selected movie.
-Error page (Error 404): If the user navigates to a path that does not exist, an error page with a custom background is displayed.

# Technologies:

-React Router: Provides the fundamental components and functionalities to define and manage routes within a React application, such as Route, Switch, Link.
-Movie API (TMDb): The application obtains movie data using the TMDb API. It uses endpoints like /discover/movie to get popular movies and most recent movies, and they are sorted by score in the frontend.
-Styles in CSS modules: Modulates styles in each component.
-State and effect handling: useState and useEffect to handle the state of data (such as movie listing and search text) and to make API calls when the component is mounted.
-Componentization: each required component is created as “MovieCard.jsx”, which represents a card with the basic information of a movie (title, image, rating, release date).
-Navigation and routing: React Router DOM is used to handle navigation between the different views (e.g. home, movieCard, errorPage...).

# Methodologies:

-Component-based development: The application is built on the basis of reusable components, which keeps the code clean and easy to manage.
-State management: It uses useState to manage local states of components and useEffect to perform asynchronous actions such as API requests.
-Declarative routing and navigation: React Router is used to define and manage application navigation declaratively.


# HOW TO USE #
1. Clone the repository.
2. Install the dependencies: `npm install`.
3. Start the development server (in the project directory): `npm start`.