# e-books

-Google Books

- Demo & Snippets:

- Requirements:

 -This project is a basic front-end application with the following features:
    - Fetch and display a list of books related to flowers from the following REST API: https://www.googleapis.com/books/v1/volumes?q=flowers
    - Present the fetched data in a table, including book title, authors, and published date.
    - Enable users to view more details of a selected book, such as title, subtitle, authors, image, and description.

 -Additional Features that you could add once the MVP is done (but not limited to)
    - Sorting books by title, author, publish date
    - Book search
    - Add search history
    - favouriting books (could be done with redux)
    - books rating system (could be done with redux)
    - adding personal reviews to your books (could be done with redux)
    - using google books API collections features
    - Getting good reads links and displaying them on the page
    - Book form for submission for books you can't find in the API (react-hook-form)

 -Technology Recommendations (to get the most out of this project)
    - React
    - React Testing Library (always always always test everything you possibly can)
    - Typescript
    - Redux
    - React Query
    - Don't use an out of the box table library, build one yourself (break it down, scope it, build it)
    - Give tailwind a go, tip: have the docs open at all times

- Build Steps:
    - npm create vite@latest

- Design Goals:
  - Fetch the books using the URL and print it in console
  - Using react query store all the books in client provider
  - Display and style the books in UI.
  - Design a modal to view more about the books.
  - Design a search button and store the results in client provider.
  - Deploy the site.
  - Update the Readme.
- Additional features
    - Sorting books by title[a-z], author[a-z], publish Date.
        A dropdown with 4 options 
        1. none
        2. title[A_Z]
        3. Author[A_Z]
        4. Published Date.
    - Favorite books - A navbar maybe for books that are favorites. (Dont know how to implement with redux yet)
    - Add Search History 
    - books rating system (could be done with redux)
    - adding personal reviews to your books (could be done with redux)
    - using google books API collections features
    - Getting good reads links and displaying them on the page
    - Book form for submission for books you can't find in the API (react-hook-form)

- Features:
