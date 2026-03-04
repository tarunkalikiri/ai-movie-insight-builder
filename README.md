# AI Movie Insight Builder

## Overview

AI Movie Insight Builder is a full-stack web application that allows users to enter an IMDb movie ID and instantly view key movie information along with AI-generated audience sentiment insights.

The application fetches movie metadata from the OMDb API and performs sentiment analysis based on audience ratings to provide a summarized insight about how audiences perceive the movie.

---

## Features

* Enter an **IMDb movie ID**
* Fetch movie data using **OMDb API**
* Display:

  * Movie poster
  * Movie title
  * Release year
  * IMDb rating
  * Cast
  * Plot summary
* AI-based audience sentiment analysis
* Sentiment classification:

  * Positive
  * Mixed
  * Negative
* Input validation
* Error handling
* Responsive UI design

---

## Tech Stack

### Frontend

* Next.js (React framework)
* TypeScript
* Tailwind CSS

### Backend

* Next.js API Routes
* Node.js runtime

### API

* OMDb API (Movie data)

### Deployment

* Vercel

---

## Project Structure

```
ai-movie-insight
│
├ app
│   ├ api
│   │   └ movie
│   │        └ route.ts
│   ├ globals.css
│   ├ layout.tsx
│   └ page.tsx
│
├ public
├ .env.local
├ package.json
└ README.md
```

---

## Setup Instructions

### 1. Clone Repository

```
git clone <repo-url>
cd ai-movie-insight
```

### 2. Install Dependencies

```
npm install
```

### 3. Add Environment Variables

Create `.env.local`

```
OMDB_API_KEY=your_api_key_here
```

### 4. Run Development Server

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

## How It Works

1. User enters an IMDb ID.
2. Frontend sends request to `/api/movie`.
3. Backend fetches movie details from OMDb API.
4. Sentiment logic analyzes IMDb rating.
5. API returns:

   * Movie details
   * AI sentiment summary
   * Sentiment classification.
6. Frontend renders the movie insight card.

---

## Sentiment Logic

Audience sentiment is estimated using IMDb rating:

| Rating  | Sentiment |
| ------- | --------- |
| ≥ 7.5   | Positive  |
| 5 – 7.4 | Mixed     |
| < 5     | Negative  |

This provides a quick insight into how audiences generally perceive the movie.

---

## Assumptions

* IMDb rating is used as a proxy for audience sentiment.
* OMDb API provides reliable movie metadata.
* Users provide a valid IMDb ID.

---

## Future Improvements

* Real AI sentiment analysis using LLM APIs
* Audience review scraping
* Movie search by title
* Movie recommendations
* Better UI animations
* Advanced sentiment analytics

---

## Deployment

The application is deployed using **Vercel** for easy hosting and scalability.

---

## Author

Full-Stack Developer Internship Assignment Submission
