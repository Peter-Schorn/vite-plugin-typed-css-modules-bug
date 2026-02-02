import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import typedCssModules from "vite-plugin-typed-css-modules";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: duplicate dependencies from local package
        typedCssModules({
            verbose: true,
            include: [
                "**/*.module.css"
            ],
            rootDir: "src-gen"
        })
    ],
})
