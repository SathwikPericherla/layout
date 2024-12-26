import { AppSidebar } from "@/components/app-sidebar"
import Cards from "../../components/cards"
import { SidebarTrigger } from "@/components/ui/sidebar"
function Dashboard() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen w-full">
      {/* Header */}
      <div className="border-2 border-red-500 p-4">
        Header
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] border-2 border-blue-500">
        {/* Sidebar */}
        <div className="border-2 border-green-500 p-4">
          Sidebar
        </div>
        {/* Main Content */}
        <div className="border-2 border-orange-500 p-4">
          Main Content
        </div>
      </div>

      {/* Footer */}
      <div className="border-2 border-purple-500 p-4">
        Footer
      </div>
    </div>
  );
}

  
export default Dashboard