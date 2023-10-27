import {PrismaClient} from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();
export const signUp = async (email: string, password: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if(user){
        return "User Was Already Exist You Must Be Sign In";
    }

    const passwod = bcrypt.hashSync(password, 10);

    await prisma.user.create({
        data: {
            email,
            password,
        }
    });

    return "User" + {email} + " Was be Created";
}