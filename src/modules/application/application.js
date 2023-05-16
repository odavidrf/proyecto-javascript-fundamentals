import {
    indexItemList, 
    indexNameTask, 
    indexPriorityTask, 
    indexTaskList, 
    indexEditTask, 
    indexNewPriorityTask, 
    indexAddButton, 
    indexDelTask, 
    indexDelButton,
    indexEditButton,
    indexOrderTask
} from "../index.js";

//clase para crear las tareas
export class applicationCreate {
    constructor(name,priority,complete){
      this.name = name;
      this.priority =  priority ;
      this.complete = complete;
    }  
}

//arreglo poara guardar las tareas Creadas
let applicationSave = []

//creacion de instancia de clase solo como elemento de prueba
/*const appTask = new applicationCreate (indexNameTask,indexPriorityTask,false);
applicationSave.push(appTask);*/

//ordenar las tareas segun la prioridad
const applicationOrder = ()=>{

        applicationSave.sort((a,b)=>{

            return a.priority - b.priority

        });

}

//funcion para eliminar una tarea por nombre
const DeleteByName = (name)=>{
//sintax bucar en el arregle = arreglo.filter'filtrar dentro del arreglo'('filtramos accediendo a una propiedad de la clase' hacemos match )
    applicationSave = applicationSave.filter(applicationCreate => applicationCreate.name !==name);

}

//funcion editar una tarea por nombre

const applicationEditByName = (name, newPriority) =>{

    applicationSave.forEach(applicationCreate =>{
        if(applicationCreate.name === name){
            applicationCreate.priority = newPriority
        };
    });

}

//Funcion para generar la lista de tareas en el HTML
const applicationList = ()=>{

    indexTaskList.innerHTML='';
    applicationSave.forEach(applicationCreate=>{
        const applicationComplete = applicationCreate.complete ? '(complete)' : '';
        indexItemList.innerText = `${applicationCreate.name} - Priority: ${applicationCreate.priority}${applicationComplete}`;
        indexTaskList.appendChild(indexItemList);

        //agregar un listener para seleccionar elementos y editar
        indexItemList.addEventListener('click',()=>{

            indexItemList.addEventListener('click',()=>{
                indexEditTask.value = applicationCreate.name
                indexNewPriorityTask.value = applicationCreate.priority });

        });
    });

}

//agregar un listener para el boton de agregar una tarea (creando instancia de la clase)
indexAddButton.addEventListener('click',()=>{

    let tarea = indexNameTask.value; // aqui obtienes el valor del input al dar click (name)
    let prioridad = indexPriorityTask.value; // aqui obtienes el valor de la prioridad al dar click

    // indexNameTask = applicationCreate.name;
    // indexPriorityTask = applicationCreate.priority;
    const applicationAddTask = new applicationCreate(tarea,prioridad,false) // creas nueva tarea con los valores obtenidos
    //console.log(applicationAddTask);
    applicationSave.push(applicationAddTask)
    console.log(applicationSave);
    applicationList();
})

//agregar un listener para el boton de ordenar las tareas
indexOrderTask.addEventListener('click',()=>{
    applicationOrder();
    applicationList();
})


//agregar un listener para el botn eliminar tarea
indexDelButton.addEventListener('click', ()=>{
   DeleteByName(indexDelTask.value);
   applicationList();
})

//agregar un listener para el boton editar tarea
indexEditButton.addEventListener('clicl',()=>{
    applicationEditByName(indexEditTask.value,indexNewPriorityTask.value);
    applicationList();
})



