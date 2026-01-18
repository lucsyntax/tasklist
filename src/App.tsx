import { useState } from "react";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Buy groceries",
      description: "Buy groceries",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Walk the dog",
      description: "Walk the dog",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Read a book",
      description: "Read a book",
      isCompleted: false,
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [draft, setDraft] = useState({ title: "", description: "" });

  function startAdd() {
    setIsAdding(true);
  }

  function submitTitle(title: string) {
    setDraft((prev) => ({ ...prev, title }));
    setStep(2);
  }

  function submitDescription(description: string) {
    const newTask = {
      id: tasks.length + 1,
      title: draft.title,
      description,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setIsAdding(false);
    setStep(1);
    setDraft({ title: "", description: "" });
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center px-4 py-10">
      <div className="w-full max-w-xls">
        <h1 className="text-white font-bold text-3xl text-slate-200 mt-8 mr-6">
          Todo Pro
        </h1>
      </div>
      <AddTask startAdd={startAdd} />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
