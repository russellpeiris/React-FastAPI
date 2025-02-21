import DeleteIcon from "@mui/icons-material/Delete";
import {
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Button, Input } from "../components";

interface Task {
  text: string;
  completed: boolean;
}

export const Todo = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState<Task>({ text: "", completed: false });
  const [error, setError] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.text.trim()) {
      setTasks([...tasks, { text: task.text, completed: false }]);
      setTask({ text: "", completed: false });
    } else {
      setError("Task cannot be empty");
    }
  };

  const toggleComplete = (index: number) => {
    const newTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <FormControl fullWidth error={!!error}>
        <Input
          label="New Task"
          value={task.text}
          onChange={(e) => {
            setTask({ text: e.target.value, completed: false });
            setError("");
          }}
        />
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
      <Button color="primary" onClick={addTask} buttonText="Add Task" />
      <List>
        {tasks.map((t, index) => (
          <ListItem key={index}>
            <Checkbox
              checked={t.completed}
              onChange={() => toggleComplete(index)}
            />
            <ListItemText
              primary={t.text}
              style={{ textDecoration: t.completed ? "line-through" : "none" }}
            />
            <IconButton
              edge="end"
              color="secondary"
              onClick={() => deleteTask(index)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
