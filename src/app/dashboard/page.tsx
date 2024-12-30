'use client'

import React, { useState } from 'react'
import { Search, SortAsc, Grid, List, Menu, X } from 'lucide-react'

const ResponsiveDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex flex-col h-screen w-[100vw]">
      {/* Header */}
      <header className="bg-white shadow-lgteams p-4 flex justify-between items-center">
        <div className="flex items-center">
          <button className="md:hidden mr-2" onClick={toggleSidebar}>
            <Menu className="h-6 w-6" />
          </button>
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <span className="ml-2 text-xl font-bold">Logo</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <SortAsc className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Grid className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <List className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`bg-gray-200 w-full md:w-4/12 lg:w-3/12 fixed md:static inset-y-0 left-0  transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out z-30`}
        >
          <div className="flex justify-between items-center p-4 md:hidden">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={toggleSidebar}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4">
            {['Notebooks', 'Tags', 'Folders', 'Settings', 'Help'].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded"
              >
                {item}
              </a>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-slate-300 overflow-auto">
  <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', width: 'calc(36rem + 60px)' }}>
    {[...Array(4)].map((_, i) => (
      <div key={i} className="flex flex-col items-center">
        <div className="w-36 h-48 bg-white rounded-lg shadow-md flex items-center justify-center">
          <span className="text-gray-400">3x4</span>
        </div>
        <p className="mt-2 text-sm text-center">Card {i + 1}</p>
      </div>
    ))}
  </div>
</main>
      </div>
    </div>
  )
}

export default ResponsiveDashboard
