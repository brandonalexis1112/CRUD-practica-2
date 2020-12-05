<template>
  <div id="app">
    <div id="nav">
     <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-container>
         <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-navbar-brand href="#">Brandon Alexis</b-navbar-brand>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
        <b-nav-item :to="{name: 'Home'}" exact>Home</b-nav-item>
        <b-nav-item :to="{name: 'About'}">About</b-nav-item>
      </b-navbar-nav>
        </b-collapse>
      </b-container>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>


