
'use client';
import React from 'react';

import { mockMovies, mockSeries, mockDocumentaries } from '../data/mockData';
import ContentSection from '../Components/ContentSection';
import Hero from '../Components/Hero';

const Home: React.FC = () => {
  return (
    <div className="pt-16 min-h-screen">
      <Hero />
      
      <div className="px-4 sm:px-6 lg:px-8 space-y-8 pb-12 -mt-32 relative z-10">
        <ContentSection
          title="Trending Movies" 
          items={mockMovies.slice(0, 6)} 
          type="movie"
        />
        
        <ContentSection 
          title="Popular TV Series" 
          items={mockSeries.slice(0, 6)} 
          type="series"
        />
        
        <ContentSection 
          title="Featured Documentaries" 
          items={mockDocumentaries.slice(0, 6)} 
          type="documentary"
        />
      </div>
    </div>
  );
};

export default Home;