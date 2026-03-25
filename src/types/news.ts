import type { PortableTextBlock } from "@portabletext/types"

export interface NewsPost {
    _id: string;
    _type: "news"
    title: string;
    publishedAt: string;
    imageUrl?: string;
    content: PortableTextBlock[]
}