import { NextRequest, NextResponse } from "next/server";

const todos = [
    { text: "Apprendre Nt" },
    { text: "Créer une API" },
];

export async function GET(req) {
    return NextResponse.json(
        todos,
        { status: 200 }
    );
}

export async function POST(req) {
    const todo = await req.json();

    todos.push(todo);

    return NextResponse.json(
        todo,
        { status: 200 }
    ); 
}