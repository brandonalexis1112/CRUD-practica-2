<template>  
  <div >
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand href="#">Brandon Alexis</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
        <b-nav-item :to="{name: 'Skills'}" exact>Skills</b-nav-item>
        <b-nav-item :to="{name: 'Resume'}">Resume</b-nav-item>
      </b-navbar-nav>
        </b-collapse>

      </b-container>
      </b-navbar>
    <div id="header">
      <Search v-on:query-change="querySearch"/>
    </div>
    <div id="main-container">
      <h1>Skills</h1>
      <TodoAdd v-on:add-todo="addTodo"/>
      <Todos v-bind:todoslist="copyTodos" @delete-todo="deleteTodo" />
    </div>

  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search';
import Todos from './components/Todos';
import TodoAdd from './components/TodoAdd';

export default {
  name: 'App',
  components: {
     Todos,TodoAdd, Search
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

