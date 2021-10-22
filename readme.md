# CRUD REST API ASSIGNMENT

Foobar is a Python library for dealing with word pluralization.

## Task To Do

You have to create CRUD functionalities for two schema using in memory array.
Category will have following fields:
id, title, createdDate

Book will have following fields:
id, title, description, categoryId, author, createdDate

Be sure to check if user provided categoryId actually exists or not. If it doesn't exists throw error.

To Complete this assignment. First lets initilize Node package Manager [npm](#).

```bash
npm init
```

## Books - Inputs and Outputs

````bash
// Create Books
Routes: http://127.0.0.1:8000/books
Input: JSON
    {
    "id":1,
    "title":"Black Holes and Baby Universes",
    "description": "Black Holes and Baby Universes (Bantam Press, 1993) is a collection of Hawking's essays, ranging from the scientific, such as the makeup of black holes, to the personal",
    "categoryId":2,
    "author": "Stephen Hawking",
    "createdDate": 1993
}
While creating books if user does not enter categoryID then it will thow an error to enter categoryId.


// GET all books
Routes = http://127.0.0.1:8000/books
Output:
    {
    "id":1,
    "title":"Black Holes and Baby Universes",
    "description": "Black Holes and Baby Universes (Bantam Press, 1993) is a collection of Hawking's essays, ranging from the scientific, such as the makeup of black holes, to the personal",
    "categoryId":2,
    "author": "Stephen Hawking",
    "createdDate": 1993
}

// Get Book By ID
Routes: http://127.0.0.1:8000/books/1
Output:
    Same as above only if ID book ID match. Otherwise it will throw an error.

// Update Book
Routes: http://127.0.0.1:8000/books/1
Input:
{
    "title":"Black Holes and Baby Universes -- Updated",
    "description": "Black Holes and Baby Universes (Bantam Press, 1993) is a collection of Hawking's essays, ranging from the scientific, such as the makeup of black holes, to the personal -- Updated",
    "categoryId":3,
    "author": "Stephen Hawking -- Updated",
    "createdDate": 1994
}

// Delete Book
Routes: http://127.0.0.1:8000/books/1
Output:
    Thow notice if book with given id is not found. Otherwise it eill delete tha book with given id.
```




````
