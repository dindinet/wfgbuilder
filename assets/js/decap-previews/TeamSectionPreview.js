const TeamSectionPreview = (props) => {
  const { title, team, width, collections, isLoading, getAsset, h } = props;
  const MarkdownPreview = window.CMS.getWidget('markdown').preview;

  // Get all authors from the collections prop, which is passed down by the parent preview.
  const allAuthors = collections.authors || [];

  // Get the selected team member IDs from the 'team' field. This preserves the order from the editor.
  const teamIds = team ? (team.toJS ? team.toJS() : team) : [];

  // Create a map of authors for easy and fast lookup by ID.
  const authorMap = allAuthors.reduce((acc, author) => {
    acc[author.data.id] = author;
    return acc;
  }, {});

  // Map over the teamIds array (which has the correct order) and look up the full author object.
  // This ensures the preview order matches the editor order.
  const teamMembers = teamIds.map(id => authorMap[id]).filter(Boolean);

  if (isLoading) {
    return h('div', {}, 'Loading team members...');
  }

  return h('section', { className: 'section section--team' },
    title ? h('div', { className: `container container--${width} align-center` },
      h('h2', { className: 'section-title' }, title)
    ) : null,
    h('div', { className: `container container--${width}` },
      h('div', { className: 'grid grid-cols-auto-fit-sm grid-gap-xl' },
        teamMembers.map(person => {
          // The 'person' object is the full collection entry.
          // The fields are in the 'data' property.
          const personData = person.data;
          const photo = personData.photo ? getAsset(personData.photo) : null;

          return h('div', { className: 'cell', key: personData.id },
            h('div', { className: 'card team-member' },
              photo ? h('figure', { className: 'card-image' },
                h('img', { src: photo.toString(), alt: personData.photo_alt })
              ) : null,
              h('div', { className: 'card-body' },
                h('header', { className: 'card-header' },
                  h('h3', { className: 'h4 card-title' }, `${personData.first_name} ${personData.last_name}`)
                ),
                personData.bio ? h('div', { className: 'card-body' },
                  h(MarkdownPreview, { value: personData.bio })
                ) : null
              )
            )
          );
        })
      )
    )
  );
};

// By declaring this, the parent page preview will fetch the 'authors'
// collection and pass it in the 'collections' prop.
TeamSectionPreview.needs = ['authors'];
