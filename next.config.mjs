import { withNextVideo } from "next-video/process";
const nextConfig = {
    images:{
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                port:""
            }
        ]
    }
};

export default withNextVideo(nextConfig);