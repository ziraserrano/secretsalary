import React from "react";

export default function Table() {
	return (
		<div className="container flex h-max items-center justify-center">
			<form class="flex gap-1">
				<input placeholder="Company"></input>
				<input placeholder="Title"></input>
				<input placeholder="Location"></input>
				<input placeholder="Location"></input>
				<input placeholder="Experience"></input>
				<input placeholder="Base"></input>
				<input placeholder="Bonus"></input>
				<input placeholder="Total"></input>
			</form>
			<h1 className="text-3xl font-bold text-blue">Table of Secret Salaries</h1>
		</div>
	);
}
