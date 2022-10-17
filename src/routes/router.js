import { Router } from "express";
import {
  renderTask,
  addTask,
  getTask,
  editTask,
  deleteTask,
  toogleTask,
} from "../controllers/task.controller";

const router = Router();

//GETS
router.get("/", renderTask);

router.get("/tasks/:id/edit", getTask);

//POSTS
//Adding tasks
router.post("/tasks/add", addTask);

//Editing tasks
router.post("/tasks/:id/edit", editTask);

//DELETES
router.get("/tasks/:id/delete", deleteTask);

//Toggle
router.get("/tasks/:id/toggleDone", toogleTask);

export default router;
