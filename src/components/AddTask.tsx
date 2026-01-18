import { CirclePlusIcon } from "lucide-react";

function AddTask({ startAdd }: { startAdd: () => void }) {
  return (
    <div>
      <button onClick={startAdd}>
        <CirclePlusIcon className="text-slate-200 mt-8 mr-6" />
      </button>
    </div>
  );
}

export default AddTask;
