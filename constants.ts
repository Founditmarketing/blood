import { Book, NavItem, BlogPost, Recommendation, Review } from './types';

export const AUTHOR_NAME = "Daniel Blood";
export const AUTHOR_AKA = "Vernon Daniel Blood";

/** 
 * IMAGE PROXY UTILITY
 * Amazon blocks "hotlinking" from sandboxed environments.
 * We use weserv.nl to proxy these images so they are visible in the preview.
 */
const proxy = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=https://via.placeholder.com/400x600?text=Book+Cover`;

const SPIRITUAL_DEV_IMG = "/images/book2.PNG";
const SPIRITUAL_DEV_INT1 = "/images/book2.PNG";
const SPIRITUAL_DEV_INT2 = "/images/IMG_8426.PNG"; // Using available generic interior for now

const MOMS_HISTORY_IMG = "/images/book4.PNG";
const MOMS_HISTORY_INT1 = "/images/book4.PNG"; // Using cover as interior for now
const MOMS_HISTORY_INT2 = "/images/IMG_8426.PNG";

const DADS_HISTORY_IMG = "/images/book3.PNG";
const DADS_HISTORY_INT1 = "/images/book3.PNG"; // Using cover as interior for now
const DADS_HISTORY_INT2 = "/images/IMG_8426.PNG";

// Master author portrait
export const AUTHOR_PHOTO = "/images/new.jpeg";
export const AMAZON_STORE_URL = "https://www.amazon.com/stores/Vernon-Daniel-Blood/author/B0DP1R44MX";
export const AMAZON_ABOUT_URL = "https://www.amazon.com/stores/author/B0DP1R44MX/about";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Bookshelf", href: "#books" },
  { label: "About", href: "#about" },
  { label: "Journal", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export interface EnhancedBook extends Book {
  rating: number;
  reviewCount: number;
  format: string;
  images: string[];
}

export const BOOKS: EnhancedBook[] = [
  {
    id: "spiritual-development",
    title: "Spiritual Development",
    subtitle: "Educators, Employees, and Disciples",
    coverImage: SPIRITUAL_DEV_IMG,
    images: [SPIRITUAL_DEV_IMG, SPIRITUAL_DEV_INT1, SPIRITUAL_DEV_INT2],
    rating: 4.8,
    reviewCount: 7,
    format: "Kindle Edition & Paperback",
    description: "A heartfelt devotional for anyone seeking a deeper connection with God. Perfect for those desiring spiritual renewal, it offers guidance in faith, service, and compassion for the front lines of our schools and workplaces.",
    bioSnippet: "As a veteran history teacher and devoted disciple, Daniel draws from years in the classroom to empower those serving on the front lines of education.",
    amazonLink: "https://a.co/d/0aLc67Xl",
    releaseDate: "2024",
    genre: "Christian Devotional"
  },
  {
    id: "moms-history",
    title: "A Mom's History",
    subtitle: "Leaving a Legacy for Future Generations",
    coverImage: MOMS_HISTORY_IMG,
    images: [MOMS_HISTORY_IMG, MOMS_HISTORY_INT1, MOMS_HISTORY_INT2],
    rating: 5.0,
    reviewCount: 2,
    format: "Paperback",
    description: "Generously sized at 7 x 10 inches, this floral-themed legacy journal captures the 'Essence of Motherhood' through inspirational prompts and milestone tracking.",
    bioSnippet: "A father of four, Daniel created this journal to help mothers immortalize the cherished memories that define motherhood for generations to come.",
    amazonLink: "https://a.co/d/03MeDavZ",
    releaseDate: "2024",
    genre: "Legacy Journal"
  },
  {
    id: "dads-history",
    title: "A Dad's History",
    subtitle: "Leaving a Legacy for Future Generations",
    coverImage: DADS_HISTORY_IMG,
    images: [DADS_HISTORY_IMG, DADS_HISTORY_INT1, DADS_HISTORY_INT2],
    rating: 5.0,
    reviewCount: 1,
    format: "Paperback",
    description: "A companion 7 x 10 memory journal designed specifically for fathers to document their unique experiences, ancestry, and values for their children.",
    bioSnippet: "Driven by his love for history and his own journey as a father, Daniel designed this tool to ensure every father's unique legacy is preserved.",
    amazonLink: "https://a.co/d/0gDuMWE2",
    releaseDate: "2024",
    genre: "Legacy Journal"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Jessica",
    bookId: "moms-history",
    rating: 5,
    title: "Motherhood",
    content: "I bought a couple of these books for friends of mine that are pregnant. It is a great gift to give... They loved them because it gave them a place to write down precious moments.",
    date: "November 23, 2024"
  },
  {
    id: "rev-2",
    author: "JWS Electronics Repair",
    bookId: "spiritual-development",
    rating: 5,
    title: "Spiritual Growth for Everyday Life",
    content: "Spiritual Development is a heartfelt devotional for anyone seeking a deeper connection with God. Through daily Scripture, reflection, and prayer.",
    date: "April 10, 2025"
  }
];

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: "rec-1",
    question: "What book do you wish more readers knew about?",
    bookId: "moms-history",
    quote: "This journal could be a family's treasure and gift for generations as moms can tell their story."
  },
  {
    id: "rec-2",
    question: "What's your most talked about book?",
    bookId: "spiritual-development",
    quote: "Spiritual Development is a devotional that encourages growth for anyone who desires to live for Jesus in the work place."
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "post-1",
    title: "The Heart of a History Teacher",
    date: "February 02, 2024",
    category: "Personal",
    image: DADS_HISTORY_IMG,
    excerpt: "How my background in education and love for history shapes the way I approach legacy and spiritual development in my writing."
  },
  {
    id: "post-2",
    title: "Inside 'Mom's History': Legacy Prompts",
    date: "January 15, 2024",
    category: "Journaling",
    image: MOMS_HISTORY_IMG,
    excerpt: "Exploring the specific prompts within the Mom's History journal designed to capture the essence of motherhood."
  }
];

export const BIO = `Vernon Daniel Blood is a devoted history teacher and author whose life is guided by his passion for serving Jesus and helping others. Drawing from his background in education and his love for history, Vernon's work reflects his belief in the power of reflection, devotion, and communication to strengthen family bonds and inspire future generations.`;