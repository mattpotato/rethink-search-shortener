# rethink-search-shortener

Solution for #2 and #3 are both inside this repo. For this to run, you need to have PostgreSQL and Node installed in your computer

## Setup
1. Install PostgreSQL
2. In the terminal ```createdb dbsearch```
3. Go to server directory then install server packages with ```npm install``` or ```yarn```
4. Start the server ```npm run dev``` or ```yarn dev```
5. Populate the tables 
6. Go to client directory then Install client packages with ```npm install``` or ```yarn```
7. Start the client ```npm start``` or ```yarn start```
8. Go to ```localhost:3000``` in the browser

## Search
### Scope
* Search using Full Text Search in PostgreSQL (with the help of PostGraphile and Apollo Client for GraphQL queries/mutations)
* Render results in a table and update search results when character changes
* Pagination

## Shortener
### Scope
* Generate unique shortened urls using nanoid and store in the database
* Render all URLs in a table
* Redirect user to original url when short URL is clicked

## Packages Used
* React
* Postgraphile
* Apollo Client
* react-data-table-component
* nanoid
