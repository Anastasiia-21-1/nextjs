import {prisma} from "@/lib/prisma";

export const getUsers = async () => {
    return prisma.user.findMany()
}

export const getUserById = async (id: number) => {
    console.log({id})
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

export const updateUser = async (id: number, data: any) => {
    return prisma.user.update({
        where: {
            id,
        },
        data,
    });
};

export const deleteUser = async (id: number) => {
    return prisma.user.delete({
        where: {
            id
        }
    })
}