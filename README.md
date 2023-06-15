Deployed using netlify. Link - https://648add0728afbe00acbbaf0d--courageous-cocada-53dc66.netlify.app

# Overview
To create a web application that fetches data from the Google Books API (books on "flowers") and displays it in a table. Further information about the books (image, description, preview link) should be displayed. 

# Requirements
# MVP
Fetch and display a list of books related to flowers from the following REST API: https://www.googleapis.com/books/v1/volumes?q=flowers
Present the fetched data in a table, including book title, authors, and published date.
Enable users to view more details of a selected book, such as title, subtitle, authors, image, and description.
Showcase creativity and add a personal touch to the application.
Include a README file explaining the app's features and the creative elements introduced.

# Tech Stack
React: To create a responsive and modular frontend with reusable components.
Typescript: For type-safe coding and identifying potential errors before running the frontend.
React Testing Library: For creating comprehensive and reliable tests for components and functions/services.
React Query: For fetching data easily and managing that data easily between components.

# Build Steps
Run the Frontend React application, by executing the following commands from the root folder of this project:


cd e-books
npm install
npm run dev



# Design Goals
For the design, I kept it simple with minimal styles yet clearly displayed all the data. 

# Approach
Fetch the books using the URL and print it in the console.
Using react query, store all the books in the client provider.
Display and style the books in UI.
Design a modal to view more about the books.
Implement the sort functionality with author, title and published Date.
Update the Readme.

# Features
Single page react application with a header and table to display the results. The app is designed to display flower related books.

The main page of the application consists of a table that fetches and displays a list of books related to flowers from the following REST API: https://www.googleapis.com/books/v1/volumes?q=flowers by default. If an error occurs while fetching data, the user will see a message indicating that "Couldn't find any books", rather than the application appearing to do nothing. The app displays "Loading" state while fetching the data.

The data is presented in a table which includes the book title, authors, publisher and published date. If the data is missing the app shows relevant information rather than displaying empty fields. For example the author or published date may be missing. App handles the missing data by displaying "UnKnown Author" or "No Publisher" to let the user know that the information is not available.

Books can be sorted by title, author and published date in ascending. 

By clicking on the title of the book users can view more details. By clicking on it opens a modal which displays the details of the selected book. Image, title, author and description and preview button of the books are displayed in the modal. A default image source is used for books with missing image links. If the book's title or author(s) are missing, "UnKnown Author" is rendered. A back button is provided to go back to main page, closes the modal and can view all the books.

If the user wants to read the book, by clicking on the preview button the page loads the book in different window to ensure the users can open as many books as they want.

React testing library was used to test each component of the application to ensure that the behavior of the components in relation to user interaction and its response is as per the expectations.


# Challenges

The challenging part of this project was writing tests for each component because of lack of experience.

# Known Issues
All the features/functionalities are not tested.

# Future Goals
To implement the project in react-redux.
To write more test cases.

