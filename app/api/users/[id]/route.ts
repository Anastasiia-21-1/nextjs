import { NextResponse } from 'next/server';
import {deleteUser, getUserById, updateUser} from "@/lib/api/user";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));
    console.log({id: searchParams.get('id')})

    try {
        const user = await getUserById(id);
        if (user) {
            return NextResponse.json(user);
        } else {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
    }
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    try {
        await deleteUser(id);
        return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 });
    }
}

export async function PATCH(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get('id'));

    try {
        const userData = await request.json();
        const updatedUser = await updateUser(id, userData);
        return NextResponse.json(updatedUser);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update user' }, { status: 500 });
    }
}