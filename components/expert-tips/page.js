'use client'

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Designing for accessibility: Best practices",
    excerpt: "Learn how to create inclusive designs that cater to all users, regardless of their abilities.",
    category: "Design",
    author: {
      name: "Alice Johnson",
      avatar: "/placeholder.svg"
    },
    date: "2 Feb 2024",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "The future of product management",
    excerpt: "Explore emerging trends and technologies shaping the field of product management.",
    category: "Product",
    author: {
      name: "Bob Smith",
      avatar: "/placeholder.svg"
    },
    date: "28 Jan 2024",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Microservices vs Monoliths: Choosing the right architecture",
    excerpt: "Compare the pros and cons of microservices and monolithic architectures for your next project.",
    category: "Software Engineering",
    author: {
      name: "Charlie Brown",
      avatar: "/placeholder.svg"
    },
    date: "15 Jan 2024",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Building customer loyalty through exceptional support",
    excerpt: "Discover strategies to enhance customer satisfaction and build long-lasting relationships.",
    category: "Customer Success",
    author: {
      name: "Diana Martinez",
      avatar: "/placeholder.svg"
    },
    date: "5 Jan 2024",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "The psychology of color in UI design",
    excerpt: "Understand how color choices impact user perception and behavior in digital interfaces.",
    category: "Design",
    author: {
      name: "Eva Green",
      avatar: "/placeholder.svg"
    },
    date: "20 Dec 2023",
    image: "/placeholder.svg"
  },
  {
    id: 6,
    title: "Agile vs Waterfall: Choosing the right methodology",
    excerpt: "Compare two popular project management approaches and learn when to use each one.",
    category: "Product",
    author: {
      name: "Frank White",
      avatar: "/placeholder.svg"
    },
    date: "10 Dec 2023",
    image: "/placeholder.svg"
  },
  {
    id: 7,
    title: "Optimizing database performance in high-traffic applications",
    excerpt: "Learn techniques to improve database efficiency and handle large-scale data operations.",
    category: "Software Engineering",
    author: {
      name: "Grace Lee",
      avatar: "/placeholder.svg"
    },
    date: "1 Dec 2023",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    title: "The art of handling difficult customer conversations",
    excerpt: "Develop skills to navigate challenging interactions and turn them into positive experiences.",
    category: "Customer Success",
    author: {
      name: "Henry Davis",
      avatar: "/placeholder.svg"
    },
    date: "20 Nov 2023",
    image: "/placeholder.svg"
  },
  {
    id: 9,
    title: "Responsive design patterns for modern web applications",
    excerpt: "Explore effective strategies to create fluid and adaptable layouts for various screen sizes.",
    category: "Design",
    author: {
      name: "Ivy Chen",
      avatar: "/placeholder.svg"
    },
    date: "10 Nov 2023",
    image: "/placeholder.svg"
  },
]

export default function Component() {
  const categories = ["All", "Design", "Product", "Software Engineering", "Customer Success"]
  const [activeCategory, setActiveCategory] = useState("All")
  const [sortOrder, setSortOrder] = useState("newest")

  const filteredPosts = blogPosts.filter(post => 
    activeCategory === "All" || post.category === activeCategory
  )

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    }
  })

  return (
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold">Blog</h1>
        <p className="text-muted-foreground">Insights and updates from our team</p>
      </div>

      {/* Featured Post */}
      <Card className="mb-8 overflow-hidden">
        <div className="relative aspect-[2/1] bg-muted">
          <Image
            src="/placeholder.svg"
            alt="Featured post"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white">
            <h2 className="mb-2 text-2xl font-bold">
              The Future of AI in Software Development
            </h2>
            <p className="mb-4">
              Explore how artificial intelligence is revolutionizing the way we build and maintain software applications.
            </p>
            <div className="flex items-center gap-4">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-2">
                <span>John Doe</span>
                <span>•</span>
                <span>1 Mar 2024</span>
              </div>
              <div className="flex gap-2 ml-auto">
                <Badge variant="secondary">AI</Badge>
                <Badge variant="secondary">Software Engineering</Badge>
                <Badge variant="secondary">Future Tech</Badge>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Filters */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-4 pb-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "ghost"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        <Select
          value={sortOrder}
          onValueChange={(value) => setSortOrder(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest first</SelectItem>
            <SelectItem value="oldest">Oldest first</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <div className="relative aspect-video bg-muted">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader className="p-4">
              <Badge className="mb-2 w-fit" variant="secondary">
                {post.category}
              </Badge>
              <h3 className="mb-2 text-xl font-bold">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {post.excerpt}
              </p>
            </CardHeader>
            <CardFooter className="p-4 pt-0">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-muted-foreground">{post.date}</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="icon">
          <ChevronLeft className="w-4 h-4" />
          <span className="sr-only">Previous page</span>
        </Button>
        <Button variant="outline" size="sm">1</Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="w-4 h-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>
    </div>
  )
}