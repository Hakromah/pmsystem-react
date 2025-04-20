/* eslint-disable no-undef */
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss({
		//for docker
		server: {
			host: true,
			port: 5173,
			watch: {
				usePolling: true,
			},
		},
		darkMode: "class", // Enables class-based dark mode
		theme: {
			extend: {
				colors: {
					background: "hsl(var(--background))",
					foreground: "hsl(var(--foreground))",
					primary: "hsl(var(--primary))",
					"primary-foreground": "hsl(var(--primary-foreground))",
				},
			},
		},
	})],
	base: process.env.VITE_BASE_PATH || "/pmsystem-react",
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
