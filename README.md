# Lyrics Translator 🎵🌍

A simple web application that lets you search for a song, fetch its lyrics from a public API, and translate those lyrics into another language. Built to practice using web APIs, asynchronous JavaScript, and creating a clean, responsive user interface.

---

## Features

- Search for a song by **title** (and optionally artist)
- Fetch song lyrics from a **lyrics API**
- Translate the lyrics into a selected **target language** using a translation API
- Display **original** and **translated** lyrics in a readable layout
- Basic error handling for:
  - Song not found
  - Empty input
  - API errors / network issues
- Responsive UI that works on desktop and mobile

> You can customize this section slightly based on exactly what your app does, but this version is interview-ready.

---

## Tech Stack

- **Frontend**
  - HTML5
  - CSS3 (responsive layout, flexbox/grid)
  - JavaScript (ES6+, `fetch`, async/await)

- **APIs**
  - Lyrics API (e.g., Musixmatch, Lyrics.ovh, or similar)
  - Translation API (e.g., Google, DeepL, or similar)
  - Data is exchanged using **JSON** over standard **HTTP** requests

> Replace or specify the exact APIs you used here.

There is no backend required if you’re calling APIs directly from the frontend, but if you have a small backend, you can add it here.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/<your-lyrics-repo>.git
cd <your-lyrics-repo>
