import { AuthContext } from "../context/AuthContext";
import AddBlogButton from "./addBlogButton";
import BlogEditCard from "./blogEditCard";
import { useContext } from "react";
function BlogMain() {
    const {user} = useContext(AuthContext);
    const blogData = [
        { blogImg: "https://i.pinimg.com/originals/19/80/bb/1980bb1a761ce60f9709def1173956d6.jpg", blogCategory: "Food", blogTitle: "Special Pork Meat Review", blogDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, fuga laboriosam similique ad voluptatem sequi facilis ducimus ratione praesentium officiis." },
        { blogImg: "https://i.pinimg.com/originals/19/80/bb/1980bb1a761ce60f9709def1173956d6.jpg", blogCategory: "Food", blogTitle: "Special Lamb Meat Review", blogDesc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, fuga laboriosam similique ad voluptatem sequi facilis ducimus ratione praesentium officiis." },
    ]
    return (
        <>
            <h1 className="text-3xl m-auto py-2 xl:max-w-[70%] md:max-w-[80%]">Published Blogs</h1>
            <section>
            {user && <AddBlogButton />}
                <div className="m-auto py-7 xl:max-w-[70%] md:max-w-[80%] bg-red-400 flex flex-wrap justify-around gap-5">
                    {blogData.map((data, index) => {
                        return (
                            <BlogEditCard key={index} data={data} />
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default BlogMain