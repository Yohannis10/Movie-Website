'use client';
 import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ContentCardProps {
  item: any;
  type: 'movie' | 'series' | 'documentary';
}

const ContentCard: React.FC<ContentCardProps> = ({ item, type }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleWatch = () => {
    navigate(`/watch/${item.id}`);
  };

  return (
    <div
      className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Poster Image */}
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden">
        <img
          src={item.poster}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={handleWatch}
            className="bg-white hover:bg-gray-200 text-black p-3 rounded-full transform scale-75 hover:scale-100 transition-all duration-200"
          >
            <Play className="h-6 w-6 fill-current" />
          </button>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
          <Star className="h-3 w-3 text-yellow-400 fill-current" />
          <span className="text-white text-xs font-medium">{item.rating}</span>
        </div>
      </div>

      {/* Content Info */}
      <div className="mt-3 space-y-2">
        <h3 className="font-semibold text-white text-sm line-clamp-2 group-hover:text-red-400 transition-colors">
          {item.title}
        </h3>
        
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>{item.year}</span>
          <span className="capitalize">{type}</span>
        </div>

        {/* Action Buttons (visible on hover) */}
        <div className={`flex items-center space-x-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <button
            onClick={handleWatch}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg text-xs font-medium transition-colors flex items-center justify-center space-x-1"
          >
            <Play className="h-3 w-3 fill-current" />
            <span>Watch</span>
          </button>
          
          <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors">
            <Plus className="h-3 w-3" />
          </button>
          
          <button className="bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-colors">
            <ThumbsUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;