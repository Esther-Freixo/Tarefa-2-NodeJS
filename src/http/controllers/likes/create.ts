import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { PrismaPostsRepository } from "../../../repositories/prisma/prisma-posts-repository";
import { CreatePostUseCase } from "../../../use-cases/posts/register-posts-use-case";


export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createBodySchema = z.object({
    created_at: z.string().transform((str) => new Date(str)),
    postId: z.string().optional(),
    commentId: z.string().optional(),
  });

  const {
    created_at,
    postId,
    commentId,
  } = createBodySchema.parse(request.body);

  const userId = request.user.sub;


  try {
    const prismaLikesRepository = new PrismaLikesRepository()
    const createLikesUseCase = new CreateLikesUseCase(prismaLikesRepository)
    await createLikesUseCase.execute({
        created_at,
        userId,
        postId,
        commentId,
    })
  } catch (error) {
    throw error
  }

  return reply.status(201).send('Post criado com sucesso!');
};