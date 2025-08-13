import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'; // For Node.js <18; in Node 18+, you can use native fetch

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => {
  res.json({
    'Greetings':'hello'
  })
})


app.post('/shorten', async (req, res) => {
  const longURL = req.body.url;
  console.log(longURL)

  if (!longURL) {
    return res.status(400).json({ error: 'Missing URL' });
  }

  try {
    const response = await fetch('https://cleanuri.com/api/v1/shorten', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ url: longURL })
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Error calling CleanURI:', err);
    res.status(500).json({ error: 'Server error shortening URL' });
  }
});


export default serverless(app)


