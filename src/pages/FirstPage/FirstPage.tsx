import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import { useTranslation } from "react-i18next";
import TopNav from "../../components/TopNav/TopNav";

export default function FirstPage() {
	const { t, i18n } = useTranslation();

	return (
		<>
			<ParallaxLayer offset={0} speed={0.5}>
				<div>
					<TopNav />
				</div>
				<div
					style={{
						color: "white",
						margin: "auto",
						textAlign: "center",
						paddingTop: 300,
					}}
				>
					<text
						style={{
							fontFamily: "Montserrat",
							fontSize: 80,
							fontWeight: 700,
						}}
					>
						{t("home.title")}
					</text>
				</div>
			</ParallaxLayer>
		</>
	);
}
