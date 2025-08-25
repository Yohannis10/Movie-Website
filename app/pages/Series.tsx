'use client';
import React from 'react';
import { mockSeries } from '../data/mockData';
import ContentGrid from '../Components/ContentGrid';

const Series: React.FC = () => {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">TV Series</h1>
        <ContentGrid items={mockSeries} type="series" />
      </div>
    </div>
  );
};

export default Series;