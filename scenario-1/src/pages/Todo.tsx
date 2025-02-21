import { Container, TextField, Button, List, ListItem, Checkbox, ListItemText, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

interface Task {
    text: string;
    completed: boolean;
}

export const Todo = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [task, setTask] = useState<Task>({ text: "", completed: false });
  
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = () => {
      if (task.text.trim()) {
        setTasks([...tasks, { text: task.text, completed: false }]);
        setTask({ text: "", completed: false });
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
        <TextField
          fullWidth
          label="New Task"
          variant="outlined"
          value={task.text}
          onChange={(e) => setTask({ text: e.target.value, completed: false })}
        />
        <Button variant="contained" color="primary" onClick={addTask} style={{ marginTop: "10px" }}>
          Add Task
        </Button>
        <List>
          {tasks.map((t, index) => (
            <ListItem key={index}>
              <Checkbox checked={t.completed} onChange={() => toggleComplete(index)} />
              <ListItemText primary={t.text} style={{ textDecoration: t.completed ? "line-through" : "none" }} />
              <IconButton edge="end" color="secondary" onClick={() => deleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  };
  