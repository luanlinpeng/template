import react from "@vitejs/plugin-react";
import pathLib from "path";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return defineConfig({
    plugins: [
      svgr(),
    ],
    resolve: {
      alias: {
        "@": pathLib.resolve(__dirname, "src"),
        "@src": pathLib.resolve(__dirname, "src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: "http://47.98.238.104/api",
          changeOrigin: true,
          secure: true,
          bypass(req, res, options: any) {
            const proxyURL = options.target + options.rewrite(req.url);
            req.headers["x-real"] = proxyURL; //设置未生效
            res.setHeader("x-real", proxyURL); //设置响应头可以看到
          },
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
       
      },
    },
  });
};
