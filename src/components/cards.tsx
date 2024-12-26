import { Search, List, ArrowDownUp, CheckSquare, PenToolIcon as Tool } from 'lucide-react'
import { DocumentGrid } from "@/components/document-grid"

export default function Cards() {
  return (
    <div className="min-h-screen w-full text-black">
      <div className="flex h-screen">
        
        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Top Navigation */}
            <div className="flex justify-end gap-4 mb-8">
              <button className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md">
                <List className="w-5 h-5" />
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md">
                <ArrowDownUp className="w-5 h-5" />
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md">
                <CheckSquare className="w-5 h-5" />
              </button>
              <button className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md">
                <Tool className="w-5 h-5" />
              </button>
            </div>

            {/* Document Grid */}
            <DocumentGrid />
          </div>
        </main>
      </div>
    </div>
  )
}