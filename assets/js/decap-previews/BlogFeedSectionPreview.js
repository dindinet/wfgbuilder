const BlogFeedSectionPreview = (props) => {
    const { title, show_recent, recent_count, posts, loadingPosts, h } = props;

    let postsToDisplay = [];
    if (show_recent && posts) {
        // 1. Filter out entries that aren't posts (like the blog index page)
        // 2. Create a shallow copy before sorting to avoid mutating props
        const sortedPosts = [...posts]
            .filter(p => p.data && p.data.date) 
            .sort((a, b) => new Date(b.data.date) - new Date(a.data.date));

        if (recent_count > 0) {
            postsToDisplay = sortedPosts.slice(0, recent_count);
        } else {
            postsToDisplay = sortedPosts;
        }
    }

    let content;
    if (loadingPosts) {
        content = h('p', { className: 'text-gray-500' }, "Loading posts...");
    } else if (postsToDisplay.length === 0 && show_recent) {
        content = h('p', { className: 'text-gray-500' }, "No posts found to display.");
    } else {
        content = h('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
            postsToDisplay.map((post, index) => {
                return h('div', { key: index, className: 'bg-white p-4 rounded-lg shadow-md border border-dashed border-gray-300' }, [
                    h('h3', { className: 'text-lg font-semibold text-gray-800' }, post.data.title),
                    h('p', { className: 'text-sm text-gray-500 mt-1' }, new Date(post.data.date).toLocaleDateString()),
                    h('p', { className: 'mt-2 text-sm text-gray-600' }, post.data.excerpt)
                ]);
            })
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
