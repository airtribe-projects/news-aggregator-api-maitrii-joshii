# News Aggregator API

A personalized RESTful API built using **Node.js**, **Express.js**, **JWT**, and **bcrypt** that allows users to fetch customized news based on their preferences.

This project demonstrates authentication, external API integration, validation, and clean backend architecture.

Users can register, log in, set preferences, and retrieve curated news articles securely using token-based authentication.

---

## Features

- User Account Registration
- Secure User Authentication (JWT-based Login)
- Create User News Preferences
- Retrieve User Preferences
- Update User Preferences
- External News API Integration
- Personalized News Preferences Management
- Input validation using Zod
- Centralized Error Handling
- In-memory storage (can be replaced with DB)

---

## Tech Stack

- Node.js
- Express.js
- JWT (Authentication)
- bcrypt (Password hashing)
- Zod (Validation)
- External News API (News API)
- JavaScript
- Postman (API testing)

---

## Project Structure

```
src/
│
├── app.js
│
├── routers/
├── controllers/
├── services/
├── middlewares/
├── repositories/
├── errors/
├── schemas/
```

---

## Setup Instructions


```bash
# 1. Clone the repository
git clone https://github.com/airtribe-projects/news-aggregator-api-maitrii-joshii

# 2. Navigate to repository
cd news-aggregator-api-maitrii-joshii

# 3. Install necessary NPM packages
npm install

# 4. Start the server
npm run start-dev
```

---

## API Documentation

Base URL:

```
http://localhost:3000
```

---

### 1. Register User

**POST** `/auth/register`

Registers a new user.

#### Request Body

```json
{
    "name": "Carner",
    "email": "carner@test.airtribe.com",
    "password": "123456"
}
```

#### Response (200 OK)

```json
{
    "user": {
        "name": "Carner",
        "email": "carner@test.airtribe.com",
        "password": "$2b$05$Wy9kvcPjedVty9c9u6HnNuMLQe2MoQA52L5FDoJIvUIERod6WDpFq",
        "id": 1
    }
}
```

---

### 2. Login User

**POST** `/auth/login`

Logins user.

#### Request Body

```json
{
    "email": "carner@test.airtribe.com",
    "password": "123456"
}
```

#### Response (200 OK)

```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJ0YWlydHJpYmVAZ21haWwuY29tIiwiaWF0IjoxNzcyMjg1NzMxLCJleHAiOjE3NzIyODkzMzF9.O-BnzpFxQMMcAij0v_-sN-VsbbvSU-eAM8qyEQ4yhwU"
}
```

---

### 3. Create User Preferences

**POST** `/preferences`

Creates user preferences.

#### Request Body

```json
{
    "category": "business",
    "country": "us"
}
```

#### Response (200 OK)

```json
{
    "preferences": {
        "userId": 1,
        "category": "business",
        "country": "us",
        "id": 1
    }
}
```

---

### 4. Retrieve User Preferences

**GET** `/preferences`

Retrieves user preferences.

#### Response (200 OK)

```json
{
    "preferences": [
        {
            "userId": 1,
            "category": "business",
            "country": "us",
            "id": 1
        },
        {
            "userId": 1,
            "category": "entertainment",
            "country": "us",
            "id": 2
        }
    ]
}
```

---

### 5. Update User Preferences

**PUT** `/preferences/:id`

Updates user preferences.

#### Request Body

```json
{
    "category": "entertainment",
    "country": "us"
}
```

#### Response (204 No Content)

```
No Content
```

---

### 6. Fetch Top Headlines

**GET** `/news`

Fetches all tasks.

#### Optional Query Parameters

* `preferenceId=1`

#### Example

```
GET /news?preferenceId=1
```

#### Response (200 OK)

```json
{
  "news": [
    {
      "source": {
        "id": null,
        "name": "The-berliner.com"
      },
      "author": "Ceri Savage",
      "title": "Did you know it was a book first? - The Berliner",
      "description": "Why the success of Heated Rivalry should come as no surprise.",
      "url": "https://www.the-berliner.com/books/did-you-know-it-was-a-book-first/",
      "urlToImage": "https://www.the-berliner.com/wp-content/uploads/2026/02/hudson-williams-connor-storrie-2.jpg",
      "publishedAt": "2026-02-27T14:24:55Z"
    },
    {
      "source": {
        "id": null,
        "name": "HuffPost"
      },
      "author": null,
      "title": "Stephen Colbert Pokes Trump In One Of His Sorest Of All Sore Spots - HuffPost",
      "description": "The \"Late Show\" host mocked the president for slipping in the one area that matters most to him.",
      "url": "https://www.huffpost.com/entry/stephen-colbert-trump-ratings_n_69a157a9e4b0302539932fbe",
      "urlToImage": "https://img.huffingtonpost.com/asset/69a1684b2700001c74472489.jpeg",
      "publishedAt": "2026-02-27T09:52:16Z"
    },
    {
      "source": {
        "id": null,
        "name": "Deadline"
      },
      "author": "Anthony D'Alessandro",
      "title": "‘Scream 7’ Heading To $7.5M Franchise Record Previews – Box Office - Deadline",
      "description": "'Scream 7' is off to a great start at the weekend box office with $7.5M in previews, a franchise record.",
      "url": "http://deadline.com/2026/02/box-office-scream-7-1236738417/",
      "urlToImage": "https://deadline.com/wp-content/uploads/2026/02/SCR7_10984R-e1772177753483.jpg",
      "publishedAt": "2026-02-27T07:55:00Z"
    }
  ]
}
```

---

## How to Test the API

### Using Postman

1. Open Postman
2. Select HTTP method (GET / POST / PUT)
3. Enter the API URL
4. Add request body (JSON) if required
5. Click **Send**

---

### Using CLI

```bash
npm run test
```

---

## Author

**MJ**
Backend Developer (Node.js | Express.js)