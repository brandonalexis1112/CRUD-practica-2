<template>
    <div class="todo" :class="{completed: todo.completed}">
        <div class="todo-body" >
             <b-row >
        <b-col cols="12" md="6" lg="8">
            <input type="checkbox" 
            :checked="todo.completed? 'checked':''"
            v-on:change="checkTodo">
            {{todo.title}}
            </b-col></b-row>
        </div>
        
        <div class="todo-actions">
            <b-row >
            <b-col cols="12" md="6" lg="8">
            <button  @click="$emit('delete-todo', todo.id)">Eliminar</button>
            </b-col></b-row>
        </div>
    </div>
</template>

<script>
export default {
        name: 'TodoItem',
        props:['todo'],
        methods: {
            checkTodo(){
                this.todo.completed = !this.todo.completed;
            }
        },
    
}
</script>

<style scoped>
    .todo{
        border-bottom: solid 1px #ccc;
        padding: 10px;
    }

    .todo:not(.completed):hover{
    background-color: #eee;
    }

    .completed{
        color: #ccc;
        text-decoration: line-through;
    }
    .completed .todo-body{
        text-decoration: line-through;
        
    } 
    .todo-body, .todo-actions{
        display:  inline-block;
        vertical-align: top;
    }
    .todo-body{
        width: 85%;
    }
    .todo-actions{
        padding: 0 10px;
        width: 10%;
    }
    button{
        border: none;
        border-radius: 10px;
        padding: 10px;
        background-color: #2c3e50;
        color: whitesmoke;
    }
    button:hover{
        background-color: #da2020;
        color: white;
    }
</style>