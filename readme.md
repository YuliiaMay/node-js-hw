## Base URL
https://phonebook-zwbk.onrender.com

## Endpoints and methods for working with users and authorization 👤
### POST /api/users/register
Adds (registers) new user
Required fields for user registration:
{
    "email": "olha@email.com",
    "password": "025-698-45-69",
}

### POST /api/users/login
Logins user. Returns token.
Required fields for user login:
{
    "email": "olha@email.com",
    "password": "025-698-45-69",
}

### POST /api/users/logout
Logouts user. Deletes token from DB.

### GET /api/users/current
Gets information about the current user

## Endpoints and methods for working with contacts ☎️

### GET /api/contacts/
Returns list of all the contacts

### GET /api/contacts/{id}/
Returns contact by ID

### POST /api/contacts/
Adds new contact
Returns new contact

An example of a contact object to be added to the DB:
{
    "name": "Olha Toy",
    "email": "olha@email.com",
    "phone": "025-698-45-69",
}


### PUT /api/contacts/{id}/
Find contact by ID and updates it.

An example of a contact object to be added to the DB:
{
    "name": "Allen Raymonds",
    "email": "nulla.ante@vestibul.co.ua",
    "phone": "(992) 914-3792",
    "favorite": true
}

### PATCH /api/contacts/{id}/favorite/
Find contact by ID and updates object property favorite.

An example of a contact object to be added to the DB:
{
    "favorite": true
}
### DELETE /api/contacts/{id}/
Find contact by ID and delete

