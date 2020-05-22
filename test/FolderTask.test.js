const FolderTask = require("../bin/task/FolderTask");
describe("FolderTask", () => {
  it("get full path ", () => {
    const folderTask = new FolderTask({
      path: __dirname,
      filename: "test",
    });

    const fullPath = folderTask.getFullPath();

    expect(fullPath).toBe(__dirname + "/test");
  });
});
