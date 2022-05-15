import express from 'express';
import {
  updateHotel,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
} from '../controllers/hotel.js';
import { createError } from '../utils/error.js';

const router = express.Router();

//Post
router.post('/', createHotel);

//Update
router.put('/:id', updateHotel);

//Delete
router.delete('/:id', deleteHotel);

//Get
router.get('/:id', getHotel);

//Get all
router.get('/', getHotels);

export default router;
