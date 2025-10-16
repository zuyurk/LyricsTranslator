document.getElementById('lyricsForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const track = document.getElementById('track').value;
    const artist = document.getElementById('artist').value;
    
    const lyrics = await fetchLyrics(track, artist);
    document.getElementById('lyricsText').textContent = lyrics;

    const translatedLyrics = await translateText(lyrics, 'es'); // Translate to Spanish
    document.getElementById('translatedText').textContent = translatedLyrics;
});

async function fetchLyrics(track, artist) {
    const apiKey = ''; // Replace with your musix API key
    const response = await fetch(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${track}&q_artist=${artist}&apikey=${apiKey}`);
    const data = await response.json();
    return data.message.body.lyrics.lyrics_body || 'No lyrics found';
}
async function translateText(text, targetLanguage) {
    const apiKey = ''; // Replace with your Google Translate API key
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            q: text,
            target: targetLanguage
        }),
    });
    
    const data = await response.json();
    return data.data.translations[0].translatedText || 'No translation available';
}