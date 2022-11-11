import express from 'express';
import allcryptoRoute from './Routes/allcryptoRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/getallcrypto', allcryptoRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
