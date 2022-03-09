import { observable, action, computed } from 'mobx'

class Store {
    @observable likesCount = 12

    @observable todoList = [];

    @action updateCount() {
        this.likesCount++;
    }

    @action addTodo(todo) {
        this.todoList.push({
            id: this.todoList.length + 1,
            task: todo,
            isDone: false,
        });
        console.log(this.todoList);
    }

    @action removeTodos() {
        const temp_todos = ""
        this.todoList.replace(temp_todos);        
    }

    @action removeFinishedTasks() {
        this.todoList.filter()
    }

    @computed get tasksCount(){
        return this.todoList.length;
    }

}

const storeInstance = new Store()

export default storeInstance;