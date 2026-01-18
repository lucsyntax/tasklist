import { ChevronRight, Trash2Icon } from "lucide-react";

function TasksList({
  tasks,
  isAdding,
  step,
}: {
  tasks: any[];
  isAdding: boolean;
  step: number;
}) {
  return (
    <div className="w-full max-w-md bg-slate-500 rounded shadow p-4 mt-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-2 border-b border-slate-400 text-slate-100"
        >
          <span className="text-slate-100 font-bold">{task.title}</span>
          <div>
            <button>
              <ChevronRight className="text-slate-300" />
            </button>
            <button>
              <Trash2Icon className="text-slate-300" />
            </button>
          </div>
        </div>
      ))}
      {isAdding && (
        <div className="flex items-center justify-between p-2 mt-3 rounded bg-slate-600 text-slate-100">
          <span className="font-semibold">Novo task...</span>
        </div>
      )}
    </div>
  );
}

export default TasksList;
