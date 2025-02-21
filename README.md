## Scenario 1: To-Do List Application using React

### Description 
I have use Vite build tool with React & TypeScript to complete the Scenario 1

### Folder Structure:
```
src
├── components
│── pages
│── App.tsx
│── theme.ts
```

### Install & Run the Application
Run the following command to start the application:
```
cd scenario-1
npm install
npm run dev
```

### Routes:
```
http://localhost:5173/ - Login Dummy Page
http://localhost:5173/todo - To-Do List Application
```

## Scenario 2: Python User Management with FastAPI & SQLite

├── app/
│   ├── main.py              
│   ├── models.py           
│   ├── schemas.py           
│   ├── database.py          
│   ├── auth.py    
│   ├── .env          
├── run.py             

### Environment Variables
```
SECRET_KEY
ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES
```

### Install & Run the Application

Run the following command to start the application:
```
cd scenario-2
pip install -r requirements.txt
python3 run.py
```

Documentation below are generated using Postman's PostBot

### POST /token

This endpoint is used to obtain a token by providing a username and password in the request body.

#### Request Body

- `username` (text): The username of the user.
    
- `password` (text): The password of the user.
    

#### Response

The response of this request follows the JSON schema below:

``` json
{
  "type": "object",
  "properties": {
    "token": {
      "type": "string"
    }
  }
}

 ```

This endpoint allows you to create a new user by sending a POST request to the specified URL. The request should include a JSON payload in the raw request body with the following parameters:

- `name` (string): The name of the user.
    
- `email` (string): The email address of the user.
    
- `password` (string): The password for the user account.
    

Upon successful creation of the user, the response will include the details of the newly created user, typically including an autogenerated user ID and other user information.

### POST /users

This endpoint allows you to create a new user by sending a POST request to the specified URL. The request should include a JSON payload in the raw request body with the following parameters:

- `name` (string): The name of the user.
    
- `email` (string): The email address of the user.
    
- `password` (string): The password for the user account.
    

Upon successful creation of the user, the response will include the details of the newly created user, typically including an autogenerated user ID and other user information.

### GET /users/1
This endpoint retrieves the details of a specific user identified by their ID.
#### Request Parameters

- `id` (integer) - The unique identifier of the user.
    

#### Response

Upon a successful request, the server will respond with the following details of the user:

- `id` (integer) - The unique identifier of the user.
    
- `username` (string) - The username of the user.
    
- `email` (string) - The email address of the user.
    
- `created_at` (string) - The timestamp indicating when the user was created.
    

If the user with the specified ID is not found, the server will respond with an appropriate error message.

### PUT /users/1

This endpoint allows updating the details of a specific user.

#### Request Body

- `name` (string, required): The updated name of the user.
    
- `email` (string, required): The updated email of the user.
    

#### Response

The response will be a JSON object conforming to the following schema:

``` json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string"
    },
    "message": {
      "type": "string"
    }
  }
}

 ```
### DELETE /users/1

 This endpoint sends an HTTP DELETE request to remove the user with the ID of 1.

#### Request Body

This request does not require a request body.

#### Response

The response will not include a response body. The status code will indicate the success or failure of the deletion operation.