// vite.config.js
import path from "path";
import { defineConfig, loadEnv } from "file:///D:/professional/projects/logictech/github/reusable_components_js/react-boilerplate-with-routing-redux-vite/node_modules/vite/dist/node/index.js";
import react from "file:///D:/professional/projects/logictech/github/reusable_components_js/react-boilerplate-with-routing-redux-vite/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/professional/projects/logictech/github/reusable_components_js/react-boilerplate-with-routing-redux-vite/node_modules/vite-plugin-svgr/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\professional\\projects\\logictech\\github\\reusable_components_js\\react-boilerplate-with-routing-redux-vite";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env": env
    },
    plugins: [react(), svgr()],
    loader: {
      ".js": "jsx"
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    build: {
      outDir: "build"
    },
    server: {
      host: "0.0.0.0",
      port: 3100
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9mZXNzaW9uYWxcXFxccHJvamVjdHNcXFxcbG9naWN0ZWNoXFxcXGdpdGh1YlxcXFxyZXVzYWJsZV9jb21wb25lbnRzX2pzXFxcXHJlYWN0LWJvaWxlcnBsYXRlLXdpdGgtcm91dGluZy1yZWR1eC12aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9mZXNzaW9uYWxcXFxccHJvamVjdHNcXFxcbG9naWN0ZWNoXFxcXGdpdGh1YlxcXFxyZXVzYWJsZV9jb21wb25lbnRzX2pzXFxcXHJlYWN0LWJvaWxlcnBsYXRlLXdpdGgtcm91dGluZy1yZWR1eC12aXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9mZXNzaW9uYWwvcHJvamVjdHMvbG9naWN0ZWNoL2dpdGh1Yi9yZXVzYWJsZV9jb21wb25lbnRzX2pzL3JlYWN0LWJvaWxlcnBsYXRlLXdpdGgtcm91dGluZy1yZWR1eC12aXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgXCJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBkZWZpbmU6IHtcbiAgICAgIFwicHJvY2Vzcy5lbnZcIjogZW52LFxuICAgIH0sXG4gICAgcGx1Z2luczogW3JlYWN0KCksIHN2Z3IoKV0sXG4gICAgbG9hZGVyOiB7XG4gICAgICBcIi5qc1wiOiBcImpzeFwiLFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIG91dERpcjogXCJidWlsZFwiLFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICAgIHBvcnQ6IDMxMDAsXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4ZixPQUFPLFVBQVU7QUFDL2dCLFNBQVMsY0FBYyxlQUFlO0FBQ3RDLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFIakIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksR0FBRyxFQUFFO0FBRTNDLFNBQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxNQUNOLGVBQWU7QUFBQSxJQUNqQjtBQUFBLElBQ0EsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFBQSxJQUN6QixRQUFRO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLE1BQ3RDO0FBQUEsSUFDRjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
