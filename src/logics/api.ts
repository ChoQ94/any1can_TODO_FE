import axios from "axios";
import { QueryOptions, useQuery } from "react-query";

export const getTodoList = async (date?: Date | string) => {
  const getUrl = `http://localhost:8000/api/tasks/${date}`;
  try {
    const response = await fetch(getUrl).then((res) => res.json());
    return response;
  } catch (err) {
    return {};
  }
};

export const useGetTodoList = (date?: Date | string) => {
  return useQuery(["todoList", date], () => getTodoList(date));
};

export const addTodoList = async (todoItem: string, date: string) => {
  try {
    const response = await fetch(`http://localhost:8000/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: todoItem, date: date }),
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodoList = async (todoID: string | number) => {
  try {
    const response = await fetch(`http://localhost:8000/api/tasks/${todoID}`, {
      method: "DELETE",
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};

export const checkTodoList = async (
  todoID: string | number,
  completed: boolean
) => {
  try {
    const response = await fetch(`http://localhost:8000/api/tasks/${todoID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: completed }),
    });

    return response;
  } catch (error) {
    console.log(error);
  }
};
