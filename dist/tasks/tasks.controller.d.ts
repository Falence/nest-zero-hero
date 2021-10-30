import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    creatTask(createTaskDto: CreateTaskDto): Task;
    updateTask(id: string, status: TaskStatus): Task;
    deleteTask(id: string): void;
}
