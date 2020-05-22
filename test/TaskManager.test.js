const FolderTask = require("../bin/task/FolderTask");
const TaskManager = require("../bin/task/TaskManager");
describe("TaskManager.test.js", () => {
  it("add task ", () => {
    // given
    const taskManager = new TaskManager();
    const folderTask = new FolderTask({
      path: "",
      filename: "",
    });

    // when
    taskManager.add(folderTask);

    // then
    expect(taskManager.size()).toBe(1);
  });

  it("get tasks by type", () => {
    // given
    const taskManager = new TaskManager();
    const folderTask1 = new FolderTask({
      path: "",
      filename: "",
    });
    const folderTask2 = new FolderTask({
      path: "",
      filename: "",
    });

    taskManager.add(folderTask1);
    taskManager.add(folderTask2);

    // when
    const folderTasks = taskManager.getTasksByType("folder");

    // then
    expect(folderTasks.length).toBe(2);
  });
});
