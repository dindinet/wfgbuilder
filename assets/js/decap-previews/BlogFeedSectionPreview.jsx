const BlogFeedSectionPreview = (props) => {
    const { title, show_recent, recent_count, posts, loadingPosts } = props;

    let postsToDisplay = [];
    if (show_recent && posts) {
        postsToDisplay = posts.slice(0, recent_count);
    }

    let content;
    if (loadingPosts) {
        content = <p className="text-gray-500">Loading posts...</p>;
    } else if (postsToDisplay.length === 0 && show_recent) {
        content = <p className="text-gray-500">No posts found to display.</p>;
    } else {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {postsToDisplay.map((post, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-dashed border-gray-300">
                        <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{post.date}</p>
                        <p className="mt-2 text-sm text-gray-600">{post.summary}</p>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="blog-feed-section p-6 bg-gray-50 rounded-lg">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="text-sm text-gray-500 mb-6">
                    {show_recent ? `Previewing ${postsToDisplay.length} recent posts.` : "Not showing recent posts."}
                </p>
                {show_recent && content}
            </div>
        </div>
    );
};

export default BlogFeedSectionPreview;