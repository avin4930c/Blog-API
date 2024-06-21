import { FaChevronRight } from "react-icons/fa";

function BlogCard({data}) {
    return (
        <div className="blog-card bg-pink-500 max-w-sm">
            <div>
                <img className="max-h-[200px]" src={data.blogImg} alt="Luffy with Meat" />
            </div>
            <div className="px-2">
                <p id="blog-category" className="py-2 pb-1">{data.blogCategory}</p>
                <h1 id="blog-title" className="text-2xl font-bold">{data.blogTitle}</h1>
                <p id="blog-time" className="text-sm pt-2 pb-1 font-semibold">2min read</p>
                <p id="blog-desc" className="text-lg text leading-tight pb-3 pt-0">{data.blogDesc}</p>
                <p id="blog-date" className="text-base">17th Jul 2024</p>
            </div>
            
        </div>
    )
}

export default BlogCard