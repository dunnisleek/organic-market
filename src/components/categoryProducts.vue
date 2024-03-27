<template>
  <div>
    <div class="container">
      <div class="tabs">
        <button
          class="btn"
          v-for="(tab, id) in tabs"
          :key="id"
          :class="{ active: activeIndex === id }"
          @click="activeIndex = id"
        >
          {{ tab }}
        </button>
      </div>
    </div>

    <div class="products">
      <div
        v-for="(product,id) in fetchProducts"
        :key="id"
        class="single-products"
      >
        <div class="img-container">
          <img :src="product.image" />
        </div>
        <div class="product-content">
          <h5>{{ product.category }}</h5>
          <h6>{{ product.title }}</h6>
          <p class="price">{{ product.price }}</p>
          <!-- Pass product id to viewDetails method when button is clicked -->
       <router-link :to="`/product/${product.id}`">View Details</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted}  from 'vue';



       const tabs = ref([
                     "Fresh Vegetables",
                     'Stables','Nuts & Seeds','Leafy Greens',
                     'Roots'

])
const activeIndex = ref(0);
const fetchProducts = ref([]);


onMounted(async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    fetchProducts.value = response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});
// const filteredProducts = computed(() => {
//   return fetchProducts.value.filter(product => {
//     // Filter condition: Exclude products with empty or invalid data and ID equal to 0
//     return product && product.id !== undefined && product.id !== null && product.id !== 0;
//   });
// });



</script>

<style scoped>
.tabs {
  text-align: center;
}
.tabs button {
  background: transparent;
  border: none;
  margin-right: 20px;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;
  border-bottom: 1px solid transparent;
}
.tabs button:hover {
  border-bottom: 1px solid red;
}
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2px;
  padding: 50px;
  width: 100%;
  max-width: calc(1440px - 170px);
  margin: auto;
}
.single-products {
  width: calc(
    25% - 20px
  ); /* 25% width for each column with 20px margin between them */
  margin-bottom: 20px;
  box-sizing: border-box;
  background: #f6f6f6;
  border-radius: 10px;
  transition: transform 0.2s ease-in-out; /* Add transition effect */
}
.single-products:hover {
  transform: scale(1.05); /* Scale up the product on hover */
  border: 1px solid #04bd55;
}
/* .img-container{
       width:100%;
       height:100px;
       margin-bottom: 10px;
} */
.img-container {
  width: 100%;
  height: 200px; /* Adjust the height according to your design */
  overflow: hidden; /* Ensure the image doesn't overflow its container */
}
.img-container img {
  width: 100%;
  height: 100%;
  border-radius: 10px 20px 0px 0px;
  object-fit: cover; /* Maintain aspect ratio while covering the container */
}
.product-content {
  text-align: left;
  padding: 30px 25px;
}
.product-content h5 {
  font-size: 12px;
  line-height: 18px;
  color: #3f730a;
  text-transform: uppercase;
  padding-bottom: 20px;
}
.product-content h6 {
  font-size: 16px;
  line-height: 20px;
  color: #202020;

}
.price {
  font-size: 14px;
  line-height: 19px;
  color: #6a6a6a;
  padding: 10px 0px ;
}
a{
  text-decoration: none;
  color:#04bd55;
  /* text-transform: uppercase; */
}
@media screen and (max-width: 575.98px) { 
  .products > div{
    flex: 10 0 calc(50% - 05px); /* Two columns with a gap of 20px */
    /* You can adjust the width and gap as needed */
    margin-right: 20px; /* Adjust the gap between columns */
    margin-bottom: 20px; /* Adjust the gap between rows */
    box-sizing: border-box; 
  }

}
/* @media screen and (max-width:412px) {
  .products > div {
    flex: 20 0 calc(50% - 05px);
    margin-right: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
}
} */
/* less than 390px */
@media screen and (max-width: 390px) { 
  .banner{
    padding:4rem 2rem;
  }
  .products > div{
    flex: 10 0 calc(50% - 05px); /* Two columns with a gap of 20px */
    /* You can adjust the width and gap as needed */
    margin-right: 10px; /* Adjust the gap between columns */
    margin-bottom: 10px; /* Adjust the gap between rows */
    box-sizing: border-box; 
  }
}


  

</style>
