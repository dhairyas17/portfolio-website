export const blogContentMap = import.meta.glob('./blogs/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  });
  