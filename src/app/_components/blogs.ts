export interface Blog {
  id: string
  title: string
  date: string
  tags: string[]
  content: {
    brief: string
    mdxPath: string
  }
  image: string
  author: string
  readTime: string
}

export const blogs: Blog[] = [
  {
    id: "vim-motions",
    title: "How vim motions made me a Linux Wizard",
    date: "24 May - 2025",
    tags: ["Vim", "SDE",],
    content: {
      brief: "A story about how i got into linux / neovim from my bloated windows / vsc*de setup and became a wizard at it.",
      mdxPath: "vim-motions"
    },
    image: "/blogs/vim-motions.jpg",
    author: "Kausthubh",
    readTime: "10 min read"
  },
] 
