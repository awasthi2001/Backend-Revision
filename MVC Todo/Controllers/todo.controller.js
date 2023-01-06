import { TodoModel } from "../Models/todo.model.js";

export async function getAllTodos(req, res) {
  try {
    let todos = await TodoModel.find().sort({ createdAt: -1 });
    if (todos.length > 0) {
      return res.status(200).send({
        todos: todos,
      });
    } else {
      return res.status(404).send({
        message: "No todos found",
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Something went wrong",
    });
  }
}

export async function handlePost(req, res) {
  try {
    let { title } = req.body;
    if (title) {
      let todo = {
        title: title,
        Status: false,
      };
      let createnew = await TodoModel.create(todo);
      return res.status(201).send(createnew);
    } else {
      return res.status(400).send({
        message: "Bad Request",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Something went wrong",
    });
  }
}
export async function handleDelete(req, res) {
  try {
    let { id } = req.params;
    let todo = await TodoModel.findByIdAndDelete({ _id: id }, { new: true });
    if (todo) {
      return res.status(200).send({
        message: "Todo deleted successfully",
      });
    } else {
      return res.status(404).send({
        message: "Todo not found",
      });
    }
  } catch (err) {
    return res.status(500).send({
      message: "Something went wrong",
    });
  }
}
export async function handleUpdate(req, res) {
  try {
    let { id } = req.params;
    let data = req.body;
    if (data) {
      let todo = await TodoModel.findByIdAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (todo) {
        return res.status(200).send({
          message: "Todo updated successfully",
        });
      } else {
        return res.status(404).send({
          message: "Todo not found",
        });
      }
    } else {
      return res.status(400).send({
        message: "Bad Request",
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Something went wrong",
    });
  }
}
