const express = require("express");

const guestsRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");
const { response } = require("express");

const prisma = new PrismaClient();

// C
guestsRoutes.post("/guest/store", async (request, response) => {
  const { name, phone } = request.body;
  const guest = await prisma.guest.create({
    data: {
      name,
      phone,
    },
  });

  return response
    .status(201)
    .json({ response: true, message: "guest_created_ok", guest });
});
// R
guestsRoutes.get("/guests", async (request, response) => {
  const guests = await prisma.guest.findMany();
  return response.status(200).json({ response: true, guests: guests });
});

guestsRoutes.get("/guest/:id", async (request, response) => {
  const { id } = request.params;

  const intId = parseInt(id);

  if (!intId) {
    return response.status(400).json({ response: false, message: "id_error" });
  }

  const guest = await prisma.guest.findUnique({
    where: { id: intId },
  });

  if (!guest) {
    return response
      .status(404)
      .json({ response: false, message: "data_not_found" });
  }

  return response.status(200).json({ response: true, guest: guest });
});

// U
guestsRoutes.patch("/guest/:id", async (request, response) => {
  const { id } = request.params;
  const intId = parseInt(id);

  if (!intId) {
    return response.status(400).json({ response: false, message: "id_error" });
  }

  const guestAlreadyExist = await prisma.guest.findUnique({
    where: { id: intId },
  });

  if (!guestAlreadyExist) {
    return response
      .status(404)
      .json({ response: false, message: "data_not_found" });
  }

  const { name, phone } = request.body;

  const guest = await prisma.guest.update({
    where: {
      id: intId,
    },
    data: {
      name,
      phone,
    },
  });

  return response.status(200).json({ response: true, message: "guest_updated_ok", guest });
});
// D
guestsRoutes.delete("/guest/:id", async (request, response) => {
  const { id } = request.params;

  const intId = parseInt(id);

  if (!intId) {
    return response.status(400).json({ response: false, message: "id_error" });
  }

  const guestAlreadyExist = await prisma.guest.findUnique({
    where: { id: intId },
  });

  if (!guestAlreadyExist) {
    return response
      .status(404)
      .json({ response: false, message: "data_not_found" });
  }

  await prisma.guest.delete({ where: { id: intId } });

  return response
    .status(200)
    .json({ response: true, message: "guest_deleted_ok" });
});

module.exports = guestsRoutes;
