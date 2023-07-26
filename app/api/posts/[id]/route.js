// url: http://localhost:3000/api/posts
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
	try {
		const { id } = res.params;
		const post = await prisma.post.findUnique({
			where: {
				id,
			},
		});

		if (!post) {
			return NextResponse.json(
				{ message: "Post not found", err },
				{ status: 404 }
			);
		}
		return NextResponse.json(post);
	} catch (err) {
		return NextResponse.json(
			{ message: "GET Error", err },
			{ status: 500 }
		);
	}
};

export const PATCH = async (req, res) => {
	try {
		const { id } = res.params;
		const body = await req.json();
		const { title, description } = body;

		const post = await prisma.post.update({
			where: {
				id,
			},
			data: {
				title,
				description,
			},
		});

		return NextResponse.json({ message: "success", data: post });
	} catch (error) {
		return NextResponse.json(
			{ message: "Error post ", err },
			{ status: 500 }
		);
	}
};

export const DELETE = async (req, res) => {
	try {
		const { id } = res.params;
		console.log(id);

		await prisma.post.delete({
			where: { id },
		});

		return NextResponse.json({ message: "success", data: id });
	} catch (error) {
		return NextResponse.json(
			{ message: "Error post ", err },
			{ status: 500 }
		);
	}
};
