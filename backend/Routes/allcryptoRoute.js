import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import axios from 'axios';

const allcryptoRoute = express.Router();

allcryptoRoute.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`
    );
    res.send(data);
  })
);

allcryptoRoute.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${req.params.id}`
    );
    res.send(data);
  })
);

export default allcryptoRoute;
