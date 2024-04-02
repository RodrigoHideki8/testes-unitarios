import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import * as dotenv from 'dotenv'
dotenv.config()
const app = express();

app.use(helmet());

app.use(cors());

app.use(compression());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100 
});
app.use(limiter);


app.get('/api/secure-route', (req, res) => {
  res.send('Rota segura acessada com sucesso!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`);
});