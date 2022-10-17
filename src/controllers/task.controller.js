import Task from "../models/Task";

export const renderTask = async (req, res) => {
  //Query Tasks
  //We put lean() to transform mongodb query to normal json
  const tasks = await Task.find().lean();

  res.render("index", { tasks: tasks });
};

export const addTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (error) {
    console.log(error);
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const toogleTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
