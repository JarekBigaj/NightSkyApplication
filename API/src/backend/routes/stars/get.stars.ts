import { RequestHandler } from 'express';
import request from 'request';

export const getStars: RequestHandler = (req, res) => {
  const { name } = req.params;
  request.get({
    url: `https://api.api-ninjas.com/v1/stars?name=${name}`,
    headers: {
      'X-Api-Key': "6VqgDS2SRJ3TIetq4ceLkg==YbzljTkj97Dxtc3E",
    },
  }, (error, response, body) => {
    if (error) {
      console.error('Request failed:', error);
      res.status(500).send('Request failed');
    } else if (response.statusCode !== 200) {
      console.error('Error:', response.statusCode, body);
      res.status(response.statusCode).send(body);
    } else {
      console.log(body);
      res.send(body);
    }
  });
};