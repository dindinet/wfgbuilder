
{{- $previewFiles := resources.Match "js/decap-previews/*.js" -}}
{{- $previewComponents := dict -}}
{{- range $previewFiles -}}
  {{- $baseName := path.BaseName .Name -}}
  {{- $componentName := $baseName | replaceRE "Preview$" "" -}}
  {{- $templateName := $componentName | humanize | lower | replace " " "-" -}}
  {{- $previewComponents = merge $previewComponents (dict $templateName $baseName) -}}
{{- end -}}
import React, { useState, useEffect } from 'react';
import CMS from 'decap-cms-app';

{{- range $previewFiles }}
import {{ path.BaseName .Name }} from "./decap-previews/{{ .Name }}";
{{- end }}

const PagePreview = ({ entry, getAsset, getCollection, widgetFor }) => {
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);

  useEffect(() => {
    const blogFeedSection = entry.getIn(["data", "sections"])?.find(
      section => section.get("type") === "blog-feed"
    );

    const needsPosts = !!blogFeedSection;
    const recentCount = blogFeedSection?.get("recent_count") || 6;

    if (needsPosts && getCollection) {
      const postsCollection = getCollection('posts');
      if (postsCollection && postsCollection.length > 0) {
        const processedPosts = postsCollection
          .filter(post => post.data && !post.data.draft)
          .sort((a, b) => new Date(b.data.date) - new Date(a.data.date))
          .slice(0, recentCount)
          .map(post => ({
            title: post.data.title,
            date: new Date(post.data.date).toLocaleDateString(),
            summary: post.data.summary || post.data.excerpt || '',
            slug: post.slug,
          }));
        setPosts(processedPosts);
      }
    }
    setLoadingPosts(false);
  }, [entry, getCollection]);

  const sections = entry.getIn(["data", "sections"]);
  if (!sections) {
    return React.createElement('div', null, widgetFor("body"));
  }

  return React.createElement('div', null,
    sections.map((section, index) => {
      const type = section.get("type");
      const props = {
        ...section.toJS(),
        getAsset,
        h: React.createElement,
        posts,
        loadingPosts,
        key: index
      };

      switch (type) {
{{- range $key, $value := $previewComponents }}
        case "{{ $key }}":
          return React.createElement({{ $value }}, props);
{{- end }}
        default:
          return React.createElement('div', { key: index }, `Unknown section type: ${type}`);
      }
    })
  );
};

CMS.registerPreviewTemplate("advanced", PagePreview);