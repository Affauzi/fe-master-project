import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import Card from "../../components/Card/Card";

export default function SecondPage() {
	return (
		<div>
			<ParallaxLayer
				sticky={{ start: 1, end: 4 }}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-start",
				}}
			>
				<Card>
					<div style={{ fontWeight: 700 }}>My Profile</div>
				</Card>
			</ParallaxLayer>
			<ParallaxLayer
				offset={1.5}
				speed={1.5}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
				}}
			>
				<Card>
					<div style={{ fontWeight: 700 }}>ABC</div>
				</Card>
			</ParallaxLayer>
			<ParallaxLayer
				offset={2.5}
				speed={1.5}
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "flex-end",
				}}
			>
				<Card>
					<div style={{ fontWeight: 700 }}>ABC2</div>
				</Card>
			</ParallaxLayer>
		</div>
	);
}
