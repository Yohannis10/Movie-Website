'use client';import React from 'react';


import { mockMovies } from '../data/mockData';
import ContentGrid from '../components/ContentGrid';




const Movies: React.FC = () => {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Movies</h1>

        <ContentGrid items={mockMovies} type="movie" />
      </div>
    </div>
  );
};

export default Movies;