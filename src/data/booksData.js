// Main Showcase Book Data
export const mainBook = {
  id: 'psychology-of-money',
  title: 'The Psychology of Money',
  author: 'Morgan Housel',
  price: 499,
  currency: '৳',
  rating: 4.8,
  readersCount: '2,438',
  coverImage: '/book.png',
  tags: ['PSYCHOLOGY', 'PERSONAL FINANCE'],
  description: 'A timeless exploration of how people think about money, wealth and financial decisions.',
};

// Explicit Hero Data Export to fix import issues
export const heroBookData = {
  title: "The Psychology of Money",
  author: "Morgan Housel",
  edition: "LUMINA EDITION · 2020",
  rating: "4.8",
  readers: "2,438 readers",
  tagline: "TIMELESS LESSONS ON",
  summary: "A timeless exploration of how people think about money, wealth and financial decisions.",
  price: "৳499",
  specs: {
    price: "৳499",
    readingTime: "5h 24m",
    pages: "256",
    language: "English",
    published: "Sept. 2020"
  }
};

// Takeaways List Data
export const takeawaysData = [
  { id: '01', title: 'Wealth is what you don’t see', desc: 'Spending money to show people how much money you have is the fastest way to have less money.' },
  { id: '02', title: 'Reasonable beats rational', desc: 'You are not a spreadsheet. A plan you can stick with is better than one that is mathematically perfect.' },
  { id: '03', title: 'Room for error is essential', desc: 'The most important part of every plan is planning on your plan not going according to plan.' },
  { id: '04', title: 'Compounding needs time', desc: 'Good investing is not necessarily about earning the highest returns. It is about earning steady returns for a long time.' }
];

// Reader Reviews Data
export const reviewsData = [
  { name: 'Jamie Lee', date: 'May 14, 2025', initials: 'JL', bgColor: 'bg-[#986242]', title: 'Quietly changed how I think', text: 'Housel makes complex ideas feel almost obvious, but never simplistic.' },
  { name: 'Samir Khan', date: 'May 8, 2025', initials: 'SK', bgColor: 'bg-[#536E5D]', title: 'More about behavior than finance', text: 'A humane, elegantly written book about the stories we tell ourselves.' },
  { name: 'Elena Ruiz', date: 'April 29, 2025', initials: 'ER', bgColor: 'bg-[#B08A4B]', title: 'A book to keep close', text: 'Short chapters, memorable examples, and no jargon.' }
];

// Related Books List Data
export const relatedBooksData = [
  { id: 1, title: 'Same as Ever', author: 'Morgan Housel', tag: 'IDEAS & CULTURE', subtitle: 'A GUIDE TO WHAT NEVER CHANGES', rating: '4.7', coverStyle: 'bg-[#C26242] text-[#F3ECE0]' },
  { id: 2, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', tag: 'IDEAS & CULTURE', subtitle: 'PSYCHOLOGY & DECISION MAKING', rating: '4.8', coverStyle: 'bg-[#E3D8C4] text-[#1F2421]' },
  { id: 3, title: 'The Almanack of Naval Ravikant', author: 'Eric Jorgenson', tag: 'IDEAS & CULTURE', subtitle: 'WEALTH AND HAPPINESS', rating: '4.7', coverStyle: 'bg-[#2A4944] text-[#D0C0A5]' },
  { id: 4, title: 'Four Thousand Weeks', author: 'Oliver Burkeman', tag: 'IDEAS & CULTURE', subtitle: 'TIME MANAGEMENT FOR MORTALS', rating: '4.8', coverStyle: 'bg-[#DDD2C6] text-[#221F1E]' }
];