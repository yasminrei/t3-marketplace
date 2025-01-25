import express from "express";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
    // Start server
    // this function is used for querying, finding and deleting data from the database
    const payload = await getPayloadClient();


}

start();