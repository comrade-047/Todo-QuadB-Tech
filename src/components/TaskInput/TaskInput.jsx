import InputField from "../InputField/InputField";
import Button from "../Button/Button";

function TaskInput({
  task,
  setTask,
  priority,
  setPriority,
  isOutdoor,
  setIsOutdoor,
  city,
  setCity,
  handleAddTask,
}) {
  return (
    <div className="flex flex-col gap-3 p-4 shadow-md rounded-md w-full max-w-md mx-auto bg-transparent">
      <InputField
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task ..."
      />

      {/* Priority Selection */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-white focus:outline-none bg-transparent"
      >
        <option value="Select" disabled>
          Select priority
        </option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      {/* Outdoor Task Checkbox */}
      <div className="mt-2">
        <label className="inline-flex items-center text-white">
          <input
            type="checkbox"
            checked={isOutdoor}
            onChange={(e) => setIsOutdoor(e.target.checked)}
            className="mr-2"
          />
          Outdoor Task?
        </label>
      </div>

      {/* City Input (Only for Outdoor Tasks) */}
      {isOutdoor && (
        <InputField
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
        />
      )}

      {/* Using Button Component */}
      <Button
        onClick={handleAddTask}
        className="hover:bg-green-400 hover:border-green-400"
      >
        Add Task
      </Button>
    </div>
  );
}

export default TaskInput;
