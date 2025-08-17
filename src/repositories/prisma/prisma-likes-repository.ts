import { prisma } from '../../app';
import { Prisma } from "@prisma/client";

export class PrismaLikesRepository implements LikesRepository {


    async create(data: Prisma.LikeUncheckedCreateInput) {
        const like = await prisma.like.create({ data });
        return like;
    }

    async findAllLikes() {
        const like = await prisma.like.findMany();
        return like;
    }

    async delete(id: string) {
        const like = await prisma.like.delete({
            where: {
                id
            }
        })
        return like;
    }

    async findById(id: string) {
        const like = await prisma.like.findUnique({
            where: {
                id
            }
        })
        return like;
    }

    async update(id: string, data: any) {
        const like = await prisma.like.update({
            where: { id },
            data: {
                title: data.title,
                content: data.content,
            }
        })
        return like;
    }

    async findByLikeId(userId: string) {
        const like = await prisma.like.findMany({
            where: {
                userId
            }
        })
        return like;

    }
}