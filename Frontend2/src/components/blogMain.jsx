import { useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import AddBlogButton from "./addBlogButton";
import BlogEditCard from "./blogEditCard";
import { useState, useContext } from "react";
function BlogMain() {
    const {user} = useContext(AuthContext);
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://localhost:3000/blog', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const data = await response.json();
                console.log(data)
                if (response.ok) {
                    setBlogData(data);
                }
                else {
                    console.error('Error fetching data');
                }
            } catch (error) {
                console.error('Network error:', error);
            }
        }

        fetchData();
    }, [])
    return (
        <>
            <h1 className="text-3xl m-auto py-2 xl:max-w-[70%] md:max-w-[80%]">Published Blogs</h1>
            <section>
            <AddBlogButton />
                <div className="m-auto py-7 xl:max-w-[70%] md:max-w-[80%] flex flex-wrap justify-around gap-5">
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