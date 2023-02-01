import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function TopNav() {
	const [t, i18n] = useTranslation("translation");

	return (
		<div>
			<button
				style={{ cursor: "pointer" }}
				onClick={() => i18n.changeLanguage("en")}
			>
				en
			</button>
			<button
				style={{ cursor: "pointer" }}
				onClick={() => i18n.changeLanguage("id")}
			>
				id
			</button>
		</div>
	);
}
