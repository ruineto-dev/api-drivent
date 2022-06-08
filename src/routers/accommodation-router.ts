import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import {
  getTotalCapacity,
  getHotels,
  postCreateOrUpdateReservation,
  getReservationById,
  getRoomsByHotelId
} from "@/controllers";
import { createBookingSchema } from "@/schemas";

const accommodationRouter = Router();

accommodationRouter
  .all("/*", authenticateToken)
  .get("/", getTotalCapacity)
  .get("/hotels", getHotels)
  .post(
    "/book",
    validateBody(createBookingSchema),
    postCreateOrUpdateReservation
  )
  .get("/reservation", getReservationById)
  .get("/rooms/:hotelId", getRoomsByHotelId)

export { accommodationRouter };
