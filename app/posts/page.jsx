"use client";

import React from "react";
import PostList from "../components/PostList";
import Modal from "../components/Modal";
import { useState } from "react";

const Posts = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [inputs, setInputs] = useState({});

	return (
		<div className="pt-20 max-w-4xl mx-auto ">
			<div className="flex justify-between">
				<h1 className="font-bold text-4xl">Data Post</h1>
				<button
					onClick={() => setModalOpen(true)}
					className="py-3 px-5 bg-sky-300 rounded-full text-white"
				>
					Add New
				</button>
			</div>
			<hr className="my-5" />
			<PostList />

			<Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
				<form className="w-full">
					<h1 className="text-2xl pb-3">Add New Post</h1>

					<input
						type="text"
						placeholder="Title"
						name="title"
						className="w-full p-2"
						value={inputs.title || ""}
					/>

					<input
						type="text"
						placeholder="Description"
						name="description"
						className="w-full p-2 my-5"
						value={inputs.description || ""}
					/>

					<button
						type="submit"
						className="bg-blue-700 text-white px-5 py-2"
					>
						Submit
					</button>
				</form>
			</Modal>
		</div>
	);
};

export default Posts;
