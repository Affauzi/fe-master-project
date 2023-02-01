import React from "react";

export default function Card(props: any) {
	return (
		<div
			style={{
				...props.style,
				border: "1px solid #00b4d8",
				width: 300,
				height: "auto",
				minHeight: 100,
				borderRadius: 20,
				background: "linear-gradient(#00b4d8, #90e0ef)",
			}}
		>
			<div
				style={{
					padding: 20,
					display: "flex",
					flexDirection: "column",
					color: "#fff",
				}}
			>
				{props.children}
			</div>
		</div>
	);
}
