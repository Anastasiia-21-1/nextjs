import {PrismaClient} from "@prisma/client";
import userMock from "../mock/user.json"

const prisma = new PrismaClient()

async function main() {
    for (const mock of userMock) {
        await prisma.user.upsert({
            where: {
                email: mock.email
            },
            update: {},
            create: mock
        })
    }
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })