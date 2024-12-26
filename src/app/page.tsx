'use client'

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import ScrollableContent from '../components/ScrollableContent';

export default function Home() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div className="min-h-screen  w-[100vw] overflow-hidden">
      <Header isExpanded={isExpanded} onToggle={toggleExpand} />
      <main className="flex flex-col items-center pt-20 pb-8 h-[calc(100vh-80px)] overflow-y-auto scrollbar-hide">
        <ScrollableContent isExpanded={isExpanded} />
      </main>
    </div>
  );
}


