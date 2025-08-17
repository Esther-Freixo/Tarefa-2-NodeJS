import { FastifyInstance } from "fastify";
import { create } from "./create";
import { verifyJWT } from "../../middleware/verify-jwt";

export function postsRoutes(app: FastifyInstance) {
    app.post('/likes', { onRequest: [verifyJWT] }, create)
}