'use client'
import React, { useState, useEffect } from 'react';
import { Maximize2, Menu, Minimize2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Settings, ChevronDown, X } from 'lucide-react'

interface HeaderProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export default function Header({ isExpanded, onToggle }: HeaderProps) {
  const menu = ["a", "b", "c"]
  const [isSearchVisible, setIsSearchVisible] = useState(false);



  return (
    <header className="flex items-center justify-between border-b h-[10vh] bg-white px-6 shadow-md">
    {/* Left Section */}
    <div className="flex items-center gap-20">
      <div className="text-xl font-bold">ACOLYTE</div>
      <div className="hidden sm:block">
        <h1 className="text-md font-semibold">Heart Analogy</h1>
        <p className="text-xs text-muted-foreground">
          Last Update: 25 August 2019 at 12:15 PM
        </p>
      </div>
    </div>
  
    {/* Right Section */}
    <div className="flex items-center gap-6">
      {/* Location Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="hidden md:flex items-center gap-2">
            Dropdown menu <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {menu.map((menuItem) => (
            <DropdownMenuItem key={menuItem}>{menuItem}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
  
      {/* Action Icons */}
      <div className="flex items-center gap-4">
      {!isSearchVisible && (
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex"
              onClick={() => setIsSearchVisible(true)}
            >
              <Search className="h-4 w-4" />
            </Button>
          )}
          {isSearchVisible && (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 sm:w-auto"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchVisible(false)}
              >
                ✖ {/* Close icon */}
              </Button>
            </div>
          )}
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:flex">
          <Menu className="h-4 w-4" />
        </Button>
        <button
          onClick={onToggle}
          className="p-2 bg-primary-foreground text-primary rounded-full hover:bg-primary-foreground/90 transition-colors"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <Minimize2 size={24} /> : <Maximize2 size={24} />}
        </button>
      </div>
    </div>
  </header>
  
  )
}

