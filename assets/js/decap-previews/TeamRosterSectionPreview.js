const TeamRosterSectionPreview = (props) => {
  const { heading, intro_text, team_members, getAsset, h } = props;
  // Assuming this is used directly representing the section scope or block scope

  return h('section', { className: 'section-team-roster container-wide py-12' },
    h('div', { className: 'team-roster-header' },
      h('h2', { className: 'text-4xl font-bold' }, heading),
      h('div', { className: 'text-md color-neutral' }, intro_text) // markdown would need a markdown-to-jsx parser or similar in real CMS, simple render for now
    ),
    h('div', { className: 'team-roster-list' },
      team_members.map((member, index) => {
        const imageSrc = member.image ? getAsset(member.image).toString() : '';
        return h('div', { key: index, className: 'team-member-card py-6' },
          h('div', { className: 'team-member-image' },
            imageSrc ? h('img', { src: imageSrc, alt: member.name, className: 'rounded-lg', style: { width: '100%', height: 'auto', objectFit: 'cover' } }) : null
          ),
          h('div', { className: 'team-member-details' },
            h('h3', { className: 'text-xl font-semibold mb-2' }, 
              h('span', { className: 'bullet' }, '• '),
              `${member.name || ''}, ${member.title || ''}`
            ),
            h('div', { className: 'text-sm color-neutral' }, member.bio || '') // simple render for text
          )
        );
      })
    )
  );
};


