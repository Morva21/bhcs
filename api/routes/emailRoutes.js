import express from "express";

import Email  from "../controllers/email.controller.js";

const router = express.Router();

router.get('/api/', (req, res)=>{
    res.send('Hello World')
})

router.post('/api/send-email', Email)


export default router