'use client'

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ScrollableContent from '../components/ScrollableContent';
import Toolbar from '@/components/toolbar';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className="min-h-screen w-[100vw] overflow-hidden max-w-[1920px] ">
      <Header isExpanded={isExpanded} onToggle={toggleExpand} />
      <div className="flex flex-col items-center pb-8 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide bg-[#F6F7F9]">
        <ScrollableContent isExpanded={isExpanded} />
        <Toolbar/>
      </div>

    </div>
  );
}


