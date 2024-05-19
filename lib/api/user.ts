import {prisma} from "@/lib/prisma";

export const getUsers = async () => {
    return prisma.user.findMany()
}

export const getUserById = async (id: number) => {
    return prisma.user.findFirst({
        where: {
            id
        }
    })
}

export const createUser = async (user: any) => {
    return prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            password: user.password
        }
    })
}

export const deleteUser = async (id: number) => {
    return prisma.user.delete({
        where: {
            id
        }
    })
}