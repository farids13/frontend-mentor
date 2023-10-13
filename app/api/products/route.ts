import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import type { Product } from "@prisma/client";
const prisma = new PrismaClient();

export const POST = async (req:Request) => {
    try {
        const body: Product = await req.json();
        const product = await prisma.product.create({
            data: {
                title: body.title,
                price: body.price,
                brandId: body.brandId,
            },
        });
        // console.log(req);
        return NextResponse.json(product);
    } catch (error) {
        console.error("Kesalahan Eror Kenapa:", error);
        return NextResponse.json("error");
    }
}
