import { Router } from "express";
const router = Router()

const info = {
    name: "CHALLENGE BACKEND NodeJS",
    description: "Challenge de ingreso  a alkemy",
    platform: "Web API",
    technologies: "Node.js, PostgreSQL",
    version: "1.0.0",
}

router.get('/', (req, res) => {
    res.json(info)
})
export default router