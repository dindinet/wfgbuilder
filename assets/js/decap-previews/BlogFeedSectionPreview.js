const BlogFeedSectionPreview = (props) => {
    const { title, show_recent, recent_count, collections, isLoading, h, getAsset } = props;
    const posts = collections.posts || [];
    const authors = collections.authors || [];
    const categories = collections.categories || [];
    const loadingPosts = isLoading;

    // Create maps for easy lookup by id
    const authorMap = authors.reduce((acc, member) => {
        acc[member.data.id] = member.data;
        return acc;
    }, {});

    const categoryMap = categories.reduce((acc, cat) => {
        acc[cat.data.id] = cat.data;
        return acc;
    }, {});

    let postsToDisplay = [];
    if (show_recent && posts) {
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
        content = h('div', { className: 'grid grid-cols-auto-fit-sm grid-gap-xl' },
            postsToDisplay.map((post) => {
                const postAuthor = post.data.author ? authorMap[post.data.author] : null;
                const postCategories = post.data.categories?.map(catId => categoryMap[catId]).filter(Boolean) || [];
                const imageUrl = post.data.image ? getAsset(post.data.image).toString() : null;

                const categoryElements = [];
                if (postCategories.length > 0) {
                    categoryElements.push(h('span', {}, 'In '));
                    postCategories.forEach((cat, index) => {
                        categoryElements.push(h('a', { href: '#', className: 'card-meta' }, cat.title));
                        if (index < postCategories.length - 1) {
                            categoryElements.push(', ');
                        }
                    });
                }

                let authorElement;
                if (postAuthor) {
                    const authorName = `${postAuthor.first_name} ${postAuthor.last_name}`;
                    if (postAuthor.link) {
                        authorElement = h('span', {}, [' by ', h('a', { href: '#', className: 'text-sm' }, authorName)]);
                    } else {
                        authorElement = h('span', {}, ` by ${authorName}`);
                    }
                }

                return h('article', { className: 'cell' },
                    h('div', { className: 'card-post' }, [
                        imageUrl && h('a', { className: 'card-image', href: '#' },
                            h('img', { src: imageUrl, alt: post.data.image_alt || '', className: 'responsive-img' })
                        ),
                        h('div', { className: 'card-body' }, [
                            h('header', { className: 'xcard-header' }, [
                                postCategories.length > 0 && h('div', {}, categoryElements),
                                h(title ? 'h3' : 'h2', { className: 'h4 card-title' },
                                    h('a', { className: 'menu-item', href: '#' }, post.data.title)
                                )
                            ]),
                            post.data.excerpt && h('div', { className: 'card-content' },
                                h('p', {}, post.data.excerpt)
                            ),
                            h('footer', { className: 'card-footer' }, [
                                h('span', {},
                                    h('time', { dateTime: post.data.date }, new Date(post.data.date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }))
                                ),
                                authorElement
                            ])
                        ])
                    ])
                );
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

BlogFeedSectionPreview.needs = ['posts', 'authors', 'categories'];
