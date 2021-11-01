import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    getTaskById(id: number): Promise<Task>;
    creatTask(createTaskDto: CreateTaskDto): Promise<Task>;
}
