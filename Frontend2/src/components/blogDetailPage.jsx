import BlogComment from "./blogComment"

function BlogDetailPage(data) {
    const detailData = {
        title: "Special Pork Meat review",
        category: "Food",
        readTime: "2min read",
        date: "17 July 2024",
        Author: "Luffy",
        img: "https://i.pinimg.com/originals/19/80/bb/1980bb1a761ce60f9709def1173956d6.jpg",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste, adipisci asperiores est ipsam explicabo atque accusamus quisquam similique, sit pariatur, sunt deserunt! Nobis quos perspiciatis commodi non! Laborum aperiam, eligendi expedita cupiditate obcaecati molestiae, libero nisi non nemo sequi laudantium dolores minima aut ea quasi recusandae modi numquam vero voluptatem? Eveniet at nihil repellendus mollitia accusantium explicabo eaque atque quis maiores, repudiandae doloribus, incidunt voluptates asperiores? Accusamus vitae ratione earum optio non odio delectus molestias ullam necessitatibus adipisci! Ipsam veniam nisi quidem. Placeat, sint ab qui, aperiam neque eligendi asperiores voluptatibus nostrum et quos molestias repellat? Maiores rerum pariatur earum eveniet. Quaerat labore maiores numquam esse molestiae assumenda dolor dignissimos eius. Provident natus, error quidem vero nihil id consequatur itaque facere quasi. Perspiciatis dolores accusantium similique nobis quae obcaecati quos odio voluptatum, repellendus, itaque perferendis vero reprehenderit veritatis nisi. Vitae cupiditate voluptatem inventore maxime iusto, quo fugiat earum eum quae odio vero quod aperiam eaque, necessitatibus ut quam est amet quos. Excepturi explicabo dolore rerum iusto voluptas deleniti qui facilis delectus. Ducimus ea est in tempora asperiores, dolorum recusandae aperiam rem ipsum debitis maiores, commodi, atque labore. Quo corrupti a sint ducimus neque iure, odio dolorem excepturi hic quos earum dolores culpa, modi voluptatem maxime dicta harum laboriosam placeat eveniet et explicabo tenetur. Molestiae, culpa! Iure quae dolorem, praesentium explicabo impedit in perspiciatis provident necessitatibus sunt molestiae inventore totam incidunt velit amet cumque eum perferendis expedita",
    }
    return (
        <section>
            <div className="m-auto max-w-[90%]">
                <div className="w-1/2 max-lg:w-full m-auto text-center my-3">
                    <button className="w-full px-6 py-2 text-lg text-black bg-yellow-400 border border-yellow-500 rounded-lg hover:bg-yellow-500 hover:border-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 transition duration-300 ease-in-out">
                        Edit Blog
                    </button>
                </div>
                <h1 className="text-5xl py-4 text-center w-3/4 max-lg:w-full m-auto">{detailData.title}</h1>
                <p className="font-thin text-center"><span className="font-semibold">{detailData.category}</span> - {detailData.readTime} - {detailData.date}</p>
                <div className="font-medium text-center py-2">Author: {detailData.Author}</div>
                <div>
                    <img className="xl:max-h-[400px] sm:max-h-[300px] object-contain" src={detailData.img} alt={detailData.title} />
                </div>
                <div id="blog-content" className="xl:max-w-[60%] lg:max-w-[80%] sm:max-w-[90%] m-auto py-10 flex flex-col gap-5">
                    <p>{detailData.content}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste, adipisci asperiores est ipsam explicabo atque accusamus quisquam similique, sit pariatur, sunt deserunt! Nobis quos perspiciatis commodi non! Laborum aperiam, eligendi expedita cupiditate obcaecati molestiae, libero nisi non nemo sequi laudantium dolores minima aut ea quasi recusandae modi numquam vero voluptatem? Eveniet at nihil repellendus mollitia accusantium explicabo eaque atque quis maiores, repudiandae doloribus, incidunt voluptates asperiores? Accusamus vitae ratione earum optio non odio delectus molestias ullam necessitatibus adipisci! Ipsam veniam nisi quidem. Placeat, sint ab qui, aperiam neque eligendi asperiores voluptatibus nostrum et quos molestias repellat? Maiores rerum pariatur earum eveniet. Quaerat labore maiores numquam esse molestiae assumenda dolor dignissimos eius. Provident natus, error quidem vero nihil id consequatur itaque facere quasi. Perspiciatis dolores accusantium similique nobis quae obcaecati quos odio voluptatum, repellendus, itaque perferendis vero reprehenderit veritatis nisi. Vitae cupiditate voluptatem inventore maxime iusto, quo fugiat earum eum quae odio vero quod aperiam eaque, necessitatibus ut quam est amet quos. Excepturi explicabo dolore rerum iusto voluptas deleniti qui facilis delectus. Ducimus ea est in tempora asperiores, dolorum recusandae aperiam rem ipsum debitis maiores, commodi, atque labore. Quo corrupti a sint ducimus neque iure, odio dolorem excepturi hic quos earum dolores culpa, modi voluptatem maxime dicta harum laboriosam placeat eveniet et explicabo tenetur. Molestiae, culpa! Iure quae dolorem, praesentium explicabo impedit in perspiciatis provident necessitatibus sunt molestiae inventore totam incidunt velit amet cumque eum perferendis expedita quaerat mollitia quisquam ut! Provident sapiente aliquam ipsa iste, dolores magni consequuntur perferendis voluptas quam eum numquam sunt veniam modi dolor necessitatibus error ipsum cupiditate, dolore minima eligendi temporibus laborum fuga eius ducimus. Similique, doloribus perspiciatis blanditiis commodi id saepe quas aut, quos molestias enim odit nostrum fugiat corrupti! Cum doloremque numquam id voluptatem illo ipsa, inventore itaque obcaecati minima illum nesciunt aliquid.</p>
                </div>
                <div class="comments-section max-w-3xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
                    <h2 class="text-2xl font-semibold mb-6">Comments</h2>


                    <div class="comment-form mb-8">
                        <form id="commentForm" class="space-y-4">
                            <label for="commentText" class="block text-lg font-medium text-gray-700">Leave a Comment:</label>
                            <textarea id="commentText" name="commentText" rows="4" class="w-full p-3 border border-gray-300 rounded-md" required></textarea>
                            <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Submit</button>
                        </form>
                    </div>


                    <div class="comments-list space-y-6">
                        <BlogComment />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default BlogDetailPage