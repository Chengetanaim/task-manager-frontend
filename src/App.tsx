import { useState } from "react";
import {
  Plus,
  Check,
  Calendar,
  Search,
  Filter,
  MoreVertical,
} from "lucide-react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete project proposal",
      priority: "high",
      status: "in-progress",
      dueDate: "2026-01-25",
      category: "Work",
    },
    {
      id: 2,
      title: "Review design mockups",
      priority: "medium",
      status: "pending",
      dueDate: "2026-01-26",
      category: "Design",
    },
    {
      id: 3,
      title: "Team meeting preparation",
      priority: "high",
      status: "pending",
      dueDate: "2026-01-24",
      category: "Work",
    },
    {
      id: 4,
      title: "Update documentation",
      priority: "low",
      status: "completed",
      dueDate: "2026-01-23",
      category: "Development",
    },
    {
      id: 5,
      title: "Client feedback call",
      priority: "medium",
      status: "in-progress",
      dueDate: "2026-01-27",
      category: "Communication",
    },
  ]);

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "text-red-600 bg-red-50",
      medium: "text-yellow-600 bg-yellow-50",
      low: "text-green-600 bg-green-50",
    };
    return colors[priority] || colors.medium;
  };

  const getStatusColor = (status: string) => {
    const colors = {
      completed: "bg-green-100 text-green-800",
      "in-progress": "bg-blue-100 text-blue-800",
      pending: "bg-gray-100 text-gray-800",
    };
    return colors[status] || colors.pending;
  };

  const ListView = () => (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start space-x-3 flex-1">
              <button className="mt-1 w-5 h-5 rounded border-2 border-gray-300 hover:border-blue-500 flex items-center justify-center">
                {task.status === "completed" && (
                  <Check className="w-4 h-4 text-blue-500" />
                )}
              </button>
              <div className="flex-1">
                <h3
                  className={`font-medium text-gray-900 ${task.status === "completed" ? "line-through text-gray-500" : ""}`}
                >
                  {task.title}
                </h3>
                <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}
                  >
                    {task.priority}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {task.dueDate}
                  </span>
                  <span className="text-gray-500">{task.category}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}
              >
                {task.status}
              </span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Tasks</h1>
          <p className="text-gray-600">
            Organize and track your tasks efficiently
          </p>
        </div>

        {/* Toolbar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tasks..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="w-5 h-5" />
                Filter
              </button>
            </div>
            <button className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Plus className="w-5 h-5" />
              New Task
            </button>
          </div>
        </div>

        <div>
          <ListView />
        </div>
      </div>
    </div>
  );
};

export default App;
