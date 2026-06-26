import { Book, NavItem, BlogPost, Recommendation, Review } from './types';

export const AUTHOR_NAME = "Daniel Blood";
export const AUTHOR_AKA = "Vernon Daniel Blood";

/** 
 * IMAGE PROXY UTILITY
 * Amazon blocks "hotlinking" from sandboxed environments.
 * We use weserv.nl to proxy these images so they are visible in the preview.
 */
const proxy = (url: string) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&default=https://via.placeholder.com/400x600?text=Book+Cover`;

const HEALED_TO_REBUILD_IMG = "/images/book1.PNG";
const HEALED_TO_REBUILD_INT1 = "/images/book1.PNG";
const HEALED_TO_REBUILD_INT2 = "/images/IMG_8426.PNG";

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
  fullDescription?: string;
  specs?: string[];
}

export const BOOKS: EnhancedBook[] = [
  {
    id: "your-will",
    title: "Your Will",
    subtitle: "Learning To Ask For What Matters Most",
    coverImage: HEALED_TO_REBUILD_IMG,
    images: [HEALED_TO_REBUILD_IMG, HEALED_TO_REBUILD_INT1, HEALED_TO_REBUILD_INT2],
    rating: 5.0,
    reviewCount: 0,
    format: "Paperback",
    description: "Stop asking for what you think you need—and start asking for what God longs to give. Move beyond surface-level prayer and enter a powerful partnership with the purposes of God—one that aligns your heart, builds on Scripture, and bears eternal fruit.",
    fullDescription: `Stop asking for what you think you need—and start asking for what God longs to give.

Do you ever feel like your prayers are hitting a ceiling? Are you tired of petitions that focus only on temporary comfort, convenience, or crisis? In His Will: Asking for What Matters Most, you will discover that prayer is not a spiritual "last resort," but a powerful partnership with the purposes of God.

This book is an invitation to move beyond the surface and enter the "surrendered asking" that changes eternity.

In this book, you will discover how to:
• Align Your Heart: Shift from "My will be done" to the power of "Your kingdom come."
• Pray with Scriptural Authority: Learn why prayers gain momentum when they are rooted in God's character rather than our own wants.
• Cultivate Eternal Fruit: Focus your petitions on wisdom, love, and spiritual power that impacts the world around you.
• Build on the Right Foundation: Understand why repentance and a relationship with Jesus are the essential keys to being heard by the Father.

Are you ready to surrender your agenda and lay hold of His? Begin your journey toward a life of powerful, answered prayer today.`,
    specs: [
      "159 pages",
      "Reading age: 12–18 years",
      "Dimensions: 5 x 0.38 x 8 inches",
      "Format: Paperback, Kindle"
    ],
    bioSnippet: "Daniel's core philosophy 'Healed to Rebuild' takes center stage in this powerful new release.",
    amazonLink: AMAZON_STORE_URL,
    releaseDate: "2025",
    genre: "Christian Devotional"
  },
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