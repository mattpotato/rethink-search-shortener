# rethink-search-shortener

Rethink Challenge 2 and 3. For this to run, you need to have PostgreSQL and Node installed.

## Setup

1. Install PostgreSQL
2. In the terminal, create a new postgres database `createdb dbsearch`
3. Go to server directory then install server packages with `npm install` or `yarn`
4. Run migrations ```npx knex migrate:latest```
5. Populate table ```npx knex seed:run```
4. Start the server `npm run dev` or `yarn dev`
6. Go to client directory then Install client packages with `npm install` or `yarn`
7. Start the client `npm start` or `yarn start`
8. Open `localhost:3000` in your browser

## Search

### Scope

- Search using Full Text Search in PostgreSQL (with the help of PostGraphile and Apollo Client for GraphQL queries/mutations)
- Render results in a table and update search results when search query changes
- Pagination

## Shortener

### Scope

- Generate unique shortened URLs using nanoid and store in the database
- Render all URLs in a table
- Redirect user to original URL when short URL is clicked

## Packages Used

- React
- react-data-table-component
- Apollo Client
- Postgraphile
- nanoid
- knex
