import React from "react";

export default function Navbar() {
	return (
		<div className="container flex h-4 items-center justify-between">
			<h1 className="text-4xl font-bold text-blue">Secret Salary</h1>
			<div className="flex list-none flex-row space-x-4 text-white">
				<li>Salary Possibilities</li>
				<li>Spill The Salary Tea</li>
			</div>
		</div>
	);
}
