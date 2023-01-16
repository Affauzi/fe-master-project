import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import boat from "../assets/boat.png";
import boat2 from "../assets/boat2.png";
import bird from "../assets/bird.png";
import styles from "./Main.module.css";

export default function Main() {
	return (
		<div>
			<Parallax pages={3}>
				<ParallaxLayer offset={0} speed={2.5}>
					<div className={styles.ocean}></div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={2.5}>
					<div className={styles.boat}>
						<img src={boat} width="70px" height={"auto"} alt="boat" />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={2.5}>
					<div className={styles.boat2}>
						<img src={boat} width="80px" height={"auto"} alt="boat-2" />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={2.5}>
					<div className={styles.boat3}>
						<img src={boat2} width="200px" height={"auto"} alt="boat-3" />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={2.5}>
					<div className={styles.bird}>
						<img src={bird} width="80px" height={"auto"} alt="bird" />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.5}>
					<div
						style={{
							margin: "auto",
							paddingTop: 140,
							fontSize: "50px",
							textAlign: "center",
							color: "#0077b6",
						}}
					>
						<h1>Hello, Welcome To My Website</h1>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={2.5}></ParallaxLayer>
			</Parallax>
		</div>
	);
}
