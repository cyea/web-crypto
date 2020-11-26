import { VitePWA } from "vite-plugin-pwa";
export default {
  plugins: [
    VitePWA({
      manifest: {
        name: "顽狗文件加密",
        short_name: "顽狗",
        lang: "zh-CN",
        background_color: "#fff",
        theme_color: "#fff",
        description: "一款安全免费支持所有文件格式的文件加密软件",
        icons: [
          {
            src: "/images/touch_72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/images/touch_144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/images/touch_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/images/touch_512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
};
