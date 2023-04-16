#Comic Book Inventory API
This API allows users to manage a collection of comic books, including adding new books, updating existing books, and deleting books from the inventory. It also provides a list of available comic books that can be filtered and sorted based on user requirements.


#To use this API, you will need:
->Node.js installed on your machine.
->NPM (Node Package Manager) or Yarn installed on your machine.


#Installation
->Clone this repository to your local machine.
->Run npm install or yarn in the project directory to install dependencies.


#Usage
Start the server by running npm start or yarn start.
Access the API endpoints using a REST client like Postman or curl.



#API Endpoints

->POST/create-new-comic
Adds a new comic book to the inventory.

->GET/comic-lists
Returns a list of all comic books in the inventory.

Optional query parameter:
-sort: sort the results by a particular attribute (e.g. "price","page_count", "discount","published_year").


->GET/comic-details/{comicId}
Returns details of a particular comic book, based on the provided ID.


->DELETE/comic-delete/{comicId}
Removes a comic book from the inventory, based on the provided ID.


->PUT/update-comic/{comicId}
Updates an existing comic book in the inventory, based on the provided ID.



#Built With
->Node.js
->Express
->MongoDB


#Authors
Amarnath kumar mandal