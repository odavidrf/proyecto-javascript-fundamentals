// tomamos la tarea ingresada en la consulta

const nameTask=document.getElementById('mainNameTask');
const priorityTask=document.getElementById('mainPriorityTask');
const TaskList=document.getElementById('mainTaskList');
const itemList=document.createElement('li');
const newPriority=document.getElementById('newPriorityTask');
const addButton=document.getElementById('AddButton');
const DelButton=document.getElementById('delButton');
const DelTask=document.getElementById('delTask');
const EditButton=document.getElementById('editButton');
const EditTask=document.getElementById('editTask')
const PriorityOrder=document.getElementById('mainPriorityOrder')


export const indexNameTask = nameTask;
export const indexPriorityTask = priorityTask;
export const indexTaskList = TaskList;
export const indexItemList = itemList;
export const indexEditTask = EditTask;
export const indexNewPriorityTask = newPriority;
export const indexAddButton = addButton;
export const indexDelButton = DelButton;
export const indexDelTask = DelTask;
export const indexEditButton = EditButton;
export const indexOrderTask = PriorityOrder;

//ahora necesito exponer el codigo segun el archivo application.js 

