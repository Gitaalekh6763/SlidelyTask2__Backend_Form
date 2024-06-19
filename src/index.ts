import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pingRoute from './routes/ping';
import submitRoute from './routes/submit';
import readRoute from './routes/read';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/ping', pingRoute);
app.use('/submit', submitRoute);
app.use('/read', readRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
