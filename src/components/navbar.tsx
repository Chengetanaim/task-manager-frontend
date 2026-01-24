import { Check, Plus, Search } from "lucide-react";
import { Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  TaskFlow
                </span>
              </div>

              <div className="hidden md:flex items-center gap-1">
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg"
                >
                  My Tasks
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Today
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Upcoming
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  Completed
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                New Task
              </button>
              <button className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-medium hover:bg-gray-300 transition-colors">
                U
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
