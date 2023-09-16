const express = require("express");

const guestsRoutes = express.Router();
const { PrismaClient } = require("@prisma/client");
const { response } = require("express");

const prisma = new PrismaClient();

// C
guestsRoutes.post("/guests/store", async (request, response) => {
    const { name, phone } = request.body;
    const guest = await prisma.guest.create({
        data: {
            name,
            phone
        },
    });

    return response.status(201).json(guest);
});
// R
guestsRoutes.get("/guests", async (request, response) => {
    const guests = await prisma.guest.findMany();
    return response.status(200).json(guests);
});
// U

guestsRoutes.put("/guests", async (request, response) => {
    const { name, id, phone } = request.body;

    if (!id) {
        return response.status(400).json("Id is mandatory");
    }

    const guestAlreadyExist = await prisma.guest.findUnique({ where: { id } });

    if (!guestAlreadyExist) {
        return response.status(404).json("Guest not exist");
    }

    const guest = await prisma.guest.update({
        where: {
            id,
        },
        data: {
            name,
            phone,
        },
    });

    return response.status(200).json(guest);
});
// D
guestsRoutes.delete("/guests/:id", async (request, response) => {
    const { id } = request.params;

    const intId = parseInt(id);

    if (!intId) {
        return response.status(400).json("Id is mandatory");
    }

    const guestAlreadyExist = await prisma.guest.findUnique({
        where: { id: intId },
    });

    if (!guestAlreadyExist) {
        return response.status(404).json("Guest not exist");
    }

    await prisma.guest.delete({ where: { id: intId } });

    return response.status(200).send();
});

module.exports = guestsRoutes;