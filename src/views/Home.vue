<template>
  
  <div id="header" class="mt-5">
    
      <Search v-on:query-change="querySearch"/>
      
      <div id="main-container">
        <b-row>
        <b-col><h1>Skills(CRUD)</h1></b-col>
        </b-row>
      <TodoAdd v-on:add-todo="addTodo"/>
      <Todos v-bind:todoslist="copyTodos" @delete-todo="deleteTodo" />
    </div>
    </div>
  

   

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Search from '../components/Search';
import Todos from '../components/Todos';
import TodoAdd from '../components/TodoAdd';

export default {
  name: 'Home',
  components: {
    
  Todos,TodoAdd,Search

  },
    methods: {
      deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id != id);
      this.copyTodos = [...this.todos]
    },
    
    addTodo(todo){
      this.todos.push(todo);
      this.copyTodos = [...this.todos];
    },
    querySearch(query){
      if(query.trim() == ''){
        this.copyTodos = [...this.todos];
      }else{
        const temp = this.todos.filter(todo =>{
          return todo.title.includes(query)
        });
        this.copyTodos = [...temp];
      }

    }
  },
      
  data(){
    return {
      todos: [
        {
          id:0,
          title: 'Vue',
          completed: false
        },
          {
          id:1,
          title: 'JavaScript',
          completed: true
        },
          {
          id:2,
          title: 'Html',
          completed: false
        },
          {
          id:3,
          title: 'Css',
          completed: true
        }

      ],
      copyTodos: []
    }
  },
  
  created() {
    this.copyTodos = [...this.todos];
  }
 
    
    }
 

</script>
