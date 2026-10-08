import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) {
    return null; // Don't show on home page
  }

  const formatPathname = (name: string) => {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="pt-[58px] sm:pt-[70px] bg-brand-dark">
      <nav aria-label="Breadcrumb" className="bg-brand-navy/50 py-2 sm:py-2.5 relative z-30 border-b border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <ol className="flex items-center space-x-1.5 sm:space-x-2 text-xs sm:text-sm font-body overflow-x-auto whitespace-nowrap no-scrollbar py-0.5">
            <li className="shrink-0">
              <Link to="/" className="text-gray-400 hover:text-brand-cyan transition-colors">
                Home
              </Link>
            </li>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
  
              return (
                <li key={to} className="flex items-center space-x-1.5 sm:space-x-2 shrink-0">
                  <ChevronRight size={12} className="text-gray-600 shrink-0" />
                  <Link
                    to={to}
                    className={cn(
                      'transition-colors',
                      isLast ? 'text-brand-cyan font-semibold tracking-wide' : 'text-gray-400 hover:text-brand-cyan'
                    )}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {formatPathname(value)}
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </div>
  );
};

export default Breadcrumbs;

