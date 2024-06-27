import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import BlogComment from "./blogComment";

function BlogCommentMain({paramId}) {
    const {authToken} = useContext(AuthContext);

    async function handleCommentSubmit() {
        const commentText = document.getElementById("commentText").value;
        try {
            const response = await fetch(`http://localhost:3000/blog/${paramId}/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${authToken}`,
            },
            body: JSON.stringify({ commentText }),
        });

            if (!response.ok) {
                console.error("Error submitting comment");
            }
            else{
                document.getElementById("commentForm").reset();

            }

        } catch (error) {
            console.error("Network error:", error);
        }
    }
    return (
        <section>
            <div className="max-w-3xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Comments</h2>
          <div className="comment-form mb-8">
            <form id="commentForm" className="space-y-4" onSubmit={handleCommentSubmit}>
              <label
                htmlFor="commentText"
                className="block text-lg font-medium text-gray-700"
              >
                Leave a Comment:
              </label>
              <textarea
                id="commentText"
                name="commentText"
                rows="4"
                disabled={!authToken}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder={authToken ? "Write your comment here..." : "Please login to leave a comment"}
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="comments-list space-y-6">
            <BlogComment />
          </div>
        </div>
        </section>
    )
}

export default BlogCommentMain