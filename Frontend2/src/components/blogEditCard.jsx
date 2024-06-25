function BlogEditCard({data}) {
    return (
        <div className="w-3/4 border-2 rounded-lg bg-yellow-400 flex max-xl:flex-col">
            <div className="w-36 h-full bg-black max-lg:m-auto">
                <img className="h-full" src="https://i.pinimg.com/originals/19/80/bb/1980bb1a761ce60f9709def1173956d6.jpg" alt="Special Pork Meat" />
            </div>
            <div className="xl:w-[40%] px-2 flex flex-col border-r-2 items-center justify-center bg-red-700">
                <div className="text-3xl max-xl:pt-5 text-center">{data.blogTitle}</div>
                <div className="pt-5">{data.blogCategory} - 2min read - 17 July 2024</div>
            </div>
            <div className="xl:w-[20%] border-r-2 text-lg px-10 flex items-center justify-center max-xl:pt-5 text-green-600">
                Published
            </div>
            <div className="xl:w-[20%] flex items-center mx-10 max-xl:justify-center max-xl:py-3">
            <button className="w-full px-6 py-2 text-lg text-black bg-yellow-400 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition duration-300 ease-in-out">
                        Edit Blog
                    </button>
            </div>
        </div>
    )
}

export default BlogEditCard