import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import styles from "./Main.module.css";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import Card from "../components/Card/Card";
import TopNav from "../components/TopNav/TopNav";

export default function Main() {
	return (
		<div className={styles.main}>
			<Parallax pages={5} style={{ top: 0, left: 0 }} className={styles.main}>
				<FirstPage />

				<ParallaxLayer
					sticky={{ start: 1, end: 3 }}
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-start",
					}}
				>
					<Card style={{ marginLeft: "10em", textAlign: "center" }}>
						<div
							style={{
								fontWeight: 700,
								fontSize: 40,
								fontFamily: "Montserrat",
							}}
						>
							My Profile
						</div>
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
					<Card style={{ marginRight: "10em" }}>
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
					<Card style={{ marginRight: "10em" }}>
						<div style={{ fontWeight: 700 }}>ABC2</div>
					</Card>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}
