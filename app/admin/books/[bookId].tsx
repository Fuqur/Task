import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    try {
      await axios.put('https://crudcrud.com/api/c6ee99d6cfcb423da8aa3c918e72dd53', req.body);
      res.status(200).json({ message: 'Book updated successfully' });
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        res.status(error.response?.status || 500).json(error.response?.data || { message: 'Unknown error occurred' });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}