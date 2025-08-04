// src/data/blogList.ts

export interface BlogMeta {
    id: string;
    slug: string; // filename of the .md file
    title: string;
    subtitle: string; // ← Subtitle added
    excerpt: string;
    image: string;
    category: string;
    date: string;
    readTime: string;
    tags: string[];
    author: {
      name: string;
      avatar: string;
      bio: string;
    };
  }
  
  export const blogList: BlogMeta[] = [
    {
      id: '1',
      slug: 'future-of-ai.md',
      title: 'The Future of AI in Product Development: Lessons from the Trenches',
      subtitle: 'Key insights from real-world AI product launches', // ← Add subtitle here
      excerpt:
        'After leading AI product initiatives across multiple companies, here are the key insights every product manager should know about building successful AI products.',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
      category: 'AI & ML',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['AI', 'Product Management', 'Strategy'],
      author: {
        name: 'Dhairya Sharma',
        avatar:
          'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        bio: 'Product & Strategy Leader building scalable AI products',
      },
    },

    {
        id: '2',
        slug: 'future-of-ai.md',
        title: 'TTrenches',
        subtitle: 'Key insights from real-world AI product launches', // ← Add subtitle here
        excerpt:
          'After leading AI product initiatives across multiple companies, here are the key insights every product manager should know about building successful AI products.',
        image:
          'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        category: 'AI & ML',
        date: '2024-01-15',
        readTime: '8 min read',
        tags: ['AI', 'Product Management', 'Strategy'],
        author: {
          name: 'Dhairya Sharma',
          avatar:
            'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: 'Product & Strategy Leader building scalable AI products',
        },
      }, 
      
      {
        id: '3',
        slug: 'future-of-ai.md',
        title: 'TT',
        subtitle: 'Key insights from real-world AI product launches', // ← Add subtitle here
        excerpt:
          'After leading AI product initiatives across multiple companies, here are the key insights every product manager should know about building successful AI products.',
        image:
          'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
        category: 'AI & ML',
        date: '2024-01-15',
        readTime: '8 min read',
        tags: ['AI', 'Product Management', 'Strategy'],
        author: {
          name: 'Dhairya Sharma',
          avatar:
            'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
          bio: 'Product & Strategy Leader building scalable AI products',
        },
      },    
    // Add more blog metadata here
  ];
  