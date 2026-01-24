import { Calendar, Check, MoreVertical } from "lucide-react";
import { useState } from "react";

export const ListView = () => {
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

  return (
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
};
