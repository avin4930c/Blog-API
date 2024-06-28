import { Link } from "react-router-dom"
import dateFormatter from "./dateFormatter"

function BlogEditCard({data}) {
    const formattedDate = dateFormatter({inputDate: data.time_stamp})
    return (
        <div className="w-3/4 border-2 rounded-lg flex max-xl:flex-col bg-violet-50">
            <div className="w-36 h-full bg-black max-lg:m-auto">
                <img className="h-full" src={data.imgUrl} alt="Special Pork Meat" />
            </div>
            <div className="xl:w-[40%] px-2 flex flex-col border-r-2 items-center justify-center ">
                <div className="text-3xl max-xl:pt-5 text-center">{data.title}</div>
                <div className="pt-5">{data.category} - {data.time_read} min read - {formattedDate}</div>
            </div>
            <div className={`xl:w-[20%] border-r-2 text-lg px-10 flex items-center justify-center max-xl:pt-5 ${data.published? "text-green-600" : "text-red-500"}`}>
                {data.published ? "Published" : "Unpublished"}
            </div>
            <div className="xl:w-[20%] flex items-center mx-10 max-xl:justify-center max-xl:py-3">
            <Link to={`/editBlog/${data._id}`} className="w-full">
            <button className="w-full px-6 py-2 text-lg text-black bg-yellow-400 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition duration-300 ease-in-out">
                        Edit Blog
                    </button>
                    </Link>
            </div>
        </div>
    )
}

export default BlogEditCard