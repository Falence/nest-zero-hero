import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
export declare class TasksService {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    getTaskById(id: number): Promise<Task>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: number): Promise<void>;
}
