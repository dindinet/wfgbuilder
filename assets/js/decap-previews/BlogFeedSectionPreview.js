const BlogFeedSectionPreview = (props) => {
    const { title, show_recent, recent_count, posts, loadingPosts, h } = props;

    let postsToDisplay = [];
    if (show_recent && posts) {
        postsToDisplay = posts.slice(0, recent_count);
    }

    let content;
    if (loadingPosts) {
        content = h('p', { className: 'text-gray-500' }, "Loading posts...");
    } else if (postsToDisplay.length === 0 && show_recent) {
        content = h('p', { className: 'text-gray-500' }, "No posts found to display.");
    } else {
        content = h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
            postsToDisplay.map((post, index) => (
                h('div', { key: index, className: 'bg-white p-4 rounded-lg shadow-md border border-dashed border-gray-300' },
                    h('h3', { className: 'text-lg font-semibold text-gray-800' }, post.title),
                    h('p', { className: 'text-sm text-gray-500 mt-1' }, post.date),
                    h('p', { className: 'mt-2 text-sm text-gray-600' }, post.summary)
                )
            ))
        );
    }

    return h('div', { className: 'blog-feed-section p-6 bg-gray-50 rounded-lg' },
        h('div', { className: 'container mx-auto' },
            h('h2', { className: 'text-2xl font-bold mb-4' }, title),
            h('p', { className: 'text-sm text-gray-500 mb-6' },
                show_recent ? `Previewing ${postsToDisplay.length} recent posts.` : "Not showing recent posts."
            ),
            show_recent && content
        )
    );
};

export default BlogFeedSectionPreview;