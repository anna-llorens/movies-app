# 🎥 Movies App

Welcome to the Movies App project!

## 🚀 Quick Start

To get started quickly, run the following commands:

```bash
yarn && yarn start
```

The server will start on **[http://localhost:3000](http://localhost:3000)**.

## ⚙️ Prerequisites

- **Node.js 20** (you can use [Volta](https://volta.sh) to ensure the correct version)
- **Yarn 1.2**

## Unit test

To run the ut:

```
yarn test
```

## 👩‍💻 Dev Notes

I would like to detail the steps followed to complete this code challenge:

1. Setup github repo
2. Added webpack config, react, sass, babel and main page entry.
3. Added SSR config with express.

   - **Client**: The client-side bundle (`bundle.js`) is served to make the app interactive.
   - **Server**: The server bundle (`server.js`) renders the initial movies that will be loaded on the Carousels

4. Added nodemon to refresh on Save
5. Added the main components and scss files:

   - Button, Carousel, Header, Image, MovieItem, Wishlist, and the MovieDetailPage.

6. Implemented the navigation from the main page to the movie/:movieId using [React router](https://reactrouter.com/)
7. Fetched the real movies data from the API
8. Added persitence over the Wishlist (on localstore)
9. Setup UT with React testing library and jest and added for the UT for the MovieDetailPage
10. Fetch data from the Movie Carousel on the client. Added pagination.
11. Improve scss.

## Further improvements

- I would like to improve the styles of the Movie Detail page layout and add more information about the movie (Another API call to get the main actors, for instance)
- In order for the reviewer to start directly the project, I have added the API key. (Not a big fan, this should have been added on a .env file and not pusehedd)
