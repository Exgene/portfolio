import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            { userAgent: "*", allow: ["/", "/projects", "/blog"] },
        ],
        sitemap: `${process.env.NEXT_PUBLIC_URL}/sitemap.xml`,
        host: process.env.NEXT_PUBLIC_URL,
    }
}