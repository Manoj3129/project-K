import React from "react";

const blog = {
    id: 1,
    category: "Technology",
    image:
        "https://images.unsplash.com/photo-1581092334651-f7a3c6c44a1d?auto=format&fit=crop&w=800&q=80",
    author: "Sarah Johnson",
    time: "2 hours ago",
    readTime: "5 min read",
    title: "Getting Started with React and Tailwind CSS",
    description:
        "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup...",
};

const Home = () => {
    const posts = [
        {
            id: 1,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1581092334651-f7a3c6c44a1d?auto=format&fit=crop&w=800&q=80",
            author: "Sarah Johnson",
            time: "2 hours ago",
            readTime: "5 min read",
            title: "Getting Started with React and Tailwind CSS",
            description:
                "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup...",
        }, {
            id: 1,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1581092334651-f7a3c6c44a1d?auto=format&fit=crop&w=800&q=80",
            author: "Sarah Johnson",
            time: "2 hours ago",
            readTime: "5 min read",
            title: "Getting Started with React and Tailwind CSS",
            description:
                "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup...",
        }, {
            id: 1,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1581092334651-f7a3c6c44a1d?auto=format&fit=crop&w=800&q=80",
            author: "Sarah Johnson",
            time: "2 hours ago",
            readTime: "5 min read",
            title: "Getting Started with React and Tailwind CSS",
            description:
                "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup...",
        }, {
            id: 1,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1581092334651-f7a3c6c44a1d?auto=format&fit=crop&w=800&q=80",
            author: "Sarah Johnson",
            time: "2 hours ago",
            readTime: "5 min read",
            title: "Getting Started with React and Tailwind CSS",
            description:
                "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup...",
        }, {
            id: 1,
            category: "Technology",
            image:
                "https://images.unsplash.com/photo-1581092334651-f7a3c6c44a1d?auto=format&fit=crop&w=800&q=80",
            author: "Sarah Johnson",
            time: "2 hours ago",
            readTime: "5 min read",
            title: "Getting Started with React and Tailwind CSS",
            description:
                "Learn how to build beautiful and responsive user interfaces using React and Tailwind CSS. This comprehensive guide covers everything from setup...",
        },

    ]
    return (
        <div className="flex items-center flex-col justify-center mt-10 gap-5">
            <h1 className="text-4xl text-black font-bold">Welcome to BlogVerse</h1>
            <p className="text-3xl text-gray-600 text-center font-semibold">
                Discover amazing stories, insights, and ideas from our community of <br />
                writers. <span className="text-blue-700">Sign in</span> to create your own posts and save your favorites.
            </p>
            <div className="flex gap-10 flex-wrap p">
                {
                posts.map((blog) => {
                    return (
                        (
                            <div className="mt-8 w-[600px] max-w-md border p-6">
                                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4" />
                                <span className="text-sm text-purple-600 font-semibold">{blog.category}</span>
                                <h2 className="text-xl font-bold mt-2">{blog.title}</h2>
                                <p className="text-gray-600 mt-2">{blog.description}</p>
                                <div className="flex items-center justify-between mt-4">
                                    <span className="text-sm text-gray-500">{blog.author}</span>
                                    <span className="text-sm text-gray-400">{blog.time} • {blog.readTime}</span>
                                </div>
                            </div>
                        )
                    )
                })
            }
            </div>
        </div>
    );
};

export default Home;