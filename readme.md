## Base URL
https://phonebook-zwbk.onrender.com/api

## Endpoints and methods for working with user's virification helps to sending email👤
### GET /verify/:verificationToken
Switchs a status of verify field

### POST /verify
Adds (registers) new user
Resends an email with verification link


## Endpoints and methods for working with users and authorization 👤
### POST /users/register
Adds (registers) new user
Required fields for user registration:
{
    "email": "olha@email.com",
    "password": "025-698-45-69",
}

### POST /users/login
Logins user. Returns token.
Required fields for user login:
{
    "email": "olha@email.com",
    "password": "025-698-45-69",
}

### POST /users/logout
Logouts user. Deletes token from DB.

### GET /users/current
Gets information about the current user

## Endpoint and method for working with users`s avatar 📸
### POST /users/avatars
Updates users`s avatar
Required fields for user registration:
Returns AvatarURL

## Endpoints and methods for working with contacts ☎️

### GET /contacts/
Returns list of all the contacts

### GET /contacts/{id}/
Returns contact by ID

### POST /contacts/
Adds new contact
Returns new contact

An example of a contact object to be added to the DB:
{
    "name": "Olha Toy",
    "email": "olha@email.com",
    "phone": "025-698-45-69",
}


### PUT /contacts/{id}/
Find contact by ID and updates it.

An example of a contact object to be added to the DB:
{
    "name": "Allen Raymonds",
    "email": "nulla.ante@vestibul.co.ua",
    "phone": "(992) 914-3792",
    "favorite": true
}

### PATCH /contacts/{id}/favorite/
Find contact by ID and updates object property favorite.

An example of a contact object to be added to the DB:
{
    "favorite": true
}
### DELETE /contacts/{id}/
Find contact by ID and delete

