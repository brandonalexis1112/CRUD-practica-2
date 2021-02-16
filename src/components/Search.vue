<template>
    <b-row><b-col >
        <h3>Search Skills </h3>
        
        <input type="text"  placeholder="search in here " v-model="query" v-on:input="$emit('query-change',query)">
        </b-col></b-row>
</template>

<script>
export default {
    name: 'Search',
    data(){
        return{
            query:''
        }
    }
}
</script>

<style scoped>
#search-container{
    width: 600px;
    margin: 0 auto;
    background-color:  #42b983;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    
    
}
input{
    padding: 10px;
    width: 90%;
    outline:none;
    background-color:   #2c3e50 ;
}
h3{
    padding: 0 15px;
  
    
}

</style>>
    
