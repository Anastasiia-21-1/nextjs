import { NextResponse } from 'next/server';
import {createUser, getUsers} from "@/lib/api/user";

export async function GET() {
    try {
        const users = await getUsers();
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const user = await request.json();
        const newUser = await createUser(user);
        return NextResponse.json(newUser);
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}
