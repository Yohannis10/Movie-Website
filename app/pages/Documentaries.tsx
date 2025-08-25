'use client';
import React from 'react';
import ContentGrid from '../components/ContentGrid';
import { mockDocumentaries } from '../data/mockData';

const Documentaries: React.FC = () => {
  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Documentaries</h1>
        <ContentGrid items={mockDocumentaries} type="documentary" />
      </div>
    </div>
  );
};

export default Documentaries;