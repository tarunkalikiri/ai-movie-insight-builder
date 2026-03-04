# 🎬 AI Movie Insight Builder

## Overview

AI Movie Insight Builder is a full-stack web application that allows users to search for movies using either an **IMDb ID or movie name** and instantly view key movie information along with **AI-generated audience sentiment insights**.

The application fetches movie metadata from the **OMDb API** and analyzes audience reception using IMDb ratings to generate a summarized AI insight about how viewers perceive the movie.

---

## 🚀 Live Demo

Live Application:

https://ai-movie-insight-builder-alpha.vercel.app

---

## ✨ Features

- Search movies using:
  - IMDb ID (example: `tt0133093`)
  - Movie name (example: `RRR`, `Inception`)

- Fetch movie data using **OMDb API**

### Displays

- Movie Poster
- Movie Title
- Release Year
- IMDb Rating
- Cast
- Plot Summary

### AI Audience Insights

- AI-generated audience summary
- What audiences liked
- Criticism or weaknesses
- Overall verdict

### Sentiment Classification

- Positive
- Mixed
- Negative

### Additional Features

- Rating progress bar visualization
- Input validation
- Error handling
- Cinematic UI with animations
- Responsive layout
- Direct link to IMDb page

---

## 🛠 Tech Stack

### Frontend
- **Next.js** (React Framework)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

### Backend
- **Next.js API Routes**
- **Node.js Runtime**

### External API
- **OMDb API** – Movie metadata

### Deployment
- **Vercel**

---

## 📂 Project Structure


ai-movie-insight-builder
│
├ app
│ ├ api
│ │ └ movie
│ │ └ route.ts
│ ├ globals.css
│ ├ layout.tsx
│ └ page.tsx
│
├ public
├ .env.local
├ package.json
└ README.md


---

## ⚙️ Setup Instructions

### 1. Clone the Repository


git clone <repo-url>
cd ai-movie-insight-builder


### 2. Install Dependencies


npm install


### 3. Add Environment Variables

Create a `.env.local` file.


OMDB_API_KEY=your_api_key_here


### 4. Run Development Server


npm run dev


Open:


http://localhost:3000


---

## 🔄 How It Works

1. User searches for a movie using **IMDb ID or movie name**.
2. Frontend sends request to `/api/movie`.
3. Backend fetches movie data from **OMDb API**.
4. Sentiment logic analyzes IMDb rating.
5. API returns:

- Movie metadata
- AI audience insight
- Sentiment classification
- Insight breakdown (likes, criticism, verdict)

6. Frontend renders the movie insight card.

---

## 🧠 Sentiment Logic

Audience sentiment is estimated using IMDb rating:

| Rating | Sentiment |
|------|------|
| ≥ 7.5 | Positive |
| 5 – 7.4 | Mixed |
| < 5 | Negative |

This provides a quick overview of how audiences generally perceive the movie.

---

## 📌 Assumptions

- IMDb rating acts as a proxy for audience sentiment.
- OMDb API provides reliable movie metadata.
- Users enter valid movie names or IMDb IDs.

---

## 🔮 Future Improvements

- Real AI sentiment analysis using LLM APIs
- Audience review scraping
- Movie recommendations
- Trending movies carousel
- Search autocomplete
- Enhanced UI animations

---

## 👨‍💻 Author

Full-Stack Developer Internship Assignment Submission
