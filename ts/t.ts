interface Todo {
    id:string;
    title:string;
    complete?:boolean;
}

let completed: boolean = true;

let todo:Todo = {title: "Do the Dew", id:"1"};

let completedTodo = {...todo, completed}

console.log(completedTodo);
