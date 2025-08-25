  'use client';
import React from 'react';
import ContentCard from './ContentCard';


interface ContentGridProps {
  items: any[];
  type: 'movie' | 'series' | 'documentary';
}

const ContentGrid: React.FC<ContentGridProps> = ({ items, type }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {items.map((item) => (
        <ContentCard key={item.id} item={item} type={type} />
      ))}
    </div>
  );
};

export default ContentGrid;