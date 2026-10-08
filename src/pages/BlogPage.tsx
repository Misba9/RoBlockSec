import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/ui/PageHero';
import { DEMO_BLOG_POSTS } from '../constants';
import { Calendar, Tag, Search } from 'lucide-react';
import Button from '../components/ui/Button';

const BlogPage: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const categories = [...new Set(DEMO_BLOG_POSTS.map(p => p.category))];

  return (
    <div>
      <PageHero
        title="Insights & Research"
        subtitle="The latest cybersecurity intelligence, research, and news from the Roblocksec team."
      />
      <div className="py-8 sm:py-16 md:py-20 container mx-auto px-3 sm:px-6">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 mb-6 sm:mb-12">
            <div className="relative flex-grow">
                <input type="text" placeholder="Search articles..." className="w-full bg-brand-navy/70 border border-gray-600 rounded-lg sm:rounded-md pl-10 pr-3 py-2 sm:py-2.5 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan transition-all" />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                <span className="font-bold text-white text-xs sm:text-sm mr-1">Filter:</span>
                {categories.map(cat => (
                    <button key={cat} className="px-2.5 py-1 bg-gray-700/50 text-gray-300 rounded-full text-xs hover:bg-brand-cyan hover:text-brand-dark transition-colors">{cat}</button>
                ))}
            </div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-2 gap-2.5 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {DEMO_BLOG_POSTS.map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-brand-navy rounded-xl overflow-hidden glowing-border group flex flex-col"
            >
              <div className="relative">
                <img src={post.image} alt={post.title} className="w-full h-24 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-2.5 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center text-[8px] sm:text-xs text-gray-400 mb-1.5 sm:mb-4 gap-1.5 sm:gap-3 flex-wrap">
                    <div className="flex items-center gap-1">
                        <Tag size={10} className="text-brand-cyan sm:hidden" />
                        <Tag size={13} className="text-brand-cyan hidden sm:block" />
                        <span>{post.category}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar size={10} className="text-brand-cyan sm:hidden" />
                        <Calendar size={13} className="text-brand-cyan hidden sm:block" />
                        <span>{post.date}</span>
                    </div>
                </div>
                <h3 className="text-xs sm:text-2xl font-bold font-display text-white mb-1.5 line-clamp-2">{post.title}</h3>
                <p className="text-gray-300 text-[9px] sm:text-sm mb-2.5 sm:mb-4 leading-snug sm:leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="mt-auto">
                  <Button href="#" variant="outline" className="w-full text-center justify-center text-[9px] sm:text-sm py-1 sm:py-2 px-2">Read Full Article</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPage;
