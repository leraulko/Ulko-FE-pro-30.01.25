import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());


let tasks = [{id: 0, taskTitle: 'do homework', completed: false}];
let id = 1;

app.get('/tasks', (request, response) => {
    response.json(tasks);
});

app.post('/tasks', (request, response) => {
    const {taskTitle} = request.body;
    const newTask = {id: id++, taskTitle, completed: false};
    tasks.push(newTask);
    response.send('ok');
});

app.delete('/tasks/:id', (request, response) => {
    const {id} = request.params;
    tasks = tasks.filter(task => task.id !== parseInt(id));
    response.send('deleted');
});

app.put('/tasks/:id', (request, response) => {
    const {id} = request.params;
    const {completed} = request.body;
    const task = tasks.find(t => t.id === parseInt(id));
    if (task) {
        task.completed = completed !== undefined ? completed : task.completed;
        response.json(task);
    }
});


app.listen(PORT, () => {
    console.log(`Server is on http://localhost:${PORT}`);
});