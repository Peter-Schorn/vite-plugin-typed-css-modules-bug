import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typedCssModules from "vite-plugin-typed-css-modules";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        typedCssModules({
            verbose: true,
            include: [
                "**/*.module.css"
            ],
            rootDir: "src-gen"
        })
    ],
})
