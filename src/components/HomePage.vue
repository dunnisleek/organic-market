<template>
       <TheMenu/>
       <TheBanner/>
       <categoryGrid/>
       <categoryProducts/>
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
        }
      }
      </script>
      
      <style>
     
      
      </style>
      