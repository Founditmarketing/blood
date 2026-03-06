export interface Book {
  id: string;
  title: string;
  subtitle?: string;
  coverImage: string;
  description: string;
  bioSnippet?: string;
  amazonLink: string;
  releaseDate: string;
  genre: string;
}

export interface Recommendation {
  id: string;
  question: string;
  bookId: string;
  quote: string;
}

export interface Review {
  id: string;
  author: string;
  bookId: string;
  rating: number;
  title: string;
  content: string;
  date: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}