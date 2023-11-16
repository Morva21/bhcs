import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import emailRoute from './routes/emailRoutes.js'
dotenv.config()


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/', emailRoute)

app.post('/api/send-email', emailRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


