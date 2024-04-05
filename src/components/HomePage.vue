<template>
       <TheMenu @search-query="updateQuery"/>
       <TheBanner/>
       <categoryGrid/>
       <categoryProducts  :query="query"/>
      </template>
      
      <script>
      
      
      import TheMenu from './TheMenu.vue'; 
      import TheBanner from "./TheBanner.vue";
      import categoryGrid from "./categoryGrid.vue";
      import categoryProducts from "./categoryProducts.vue"
      
      export default {
      
        components: {
          TheMenu, TheBanner,categoryGrid,
          categoryProducts
        },
        data(){
          return{
            query:''
          }
        },
        methods:{
          updateQuery(query) {
      this.query = query;
    }
        }
      }      
      </script>
      
      <style>
     
      
      </style>
      