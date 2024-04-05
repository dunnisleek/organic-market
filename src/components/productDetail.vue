<template>
           <TheMenu/>
  <div class="wrapper">
   
    <div class="image">
      <img :src="product.image"/>
    </div>
    <div class="content">
      <h2 v-if="product"> {{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <h4>#{{ product.price }}</h4>
      <button>Add to Cart</button>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import TheMenu from "./TheMenu.vue";

export default {
  components: {
    TheMenu,
  },
  data() {
    return {
      product: "",
      id: "",
    };
  },

  mounted() {
    this.id = this.$route.params.id;
    axios
      .get(`https://fakestoreapi.com/products/${this.id}`)
      .then((response) => {
        //Ensure response.data is an object
        if (typeof response.data === "object") {
          this.product = response.data;
        } else {
          // Handle the case where response.data is not an object (e.g., a string)
          console.error("Invalid product data:", response.data);
          this.product = null;
        }
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  },
};
</script>

<style scoped>
.wrapper{
       width:100%;
       max-width:calc(1440px - 120px);
       margin:0 auto;
       padding:40px;
       display:flex;
      justify-content: space-evenly;
       flex-wrap: nowrap;
       gap:50px;
    
}
.image img{
       width:500px;
       height:70vh; 
       object-fit: cover;
}
.content{
       width:500px;
}
.content h2{
       font-size:35px;
       line-height: 40px;
     
}
.content p{
       font-size:18px;
       padding:20px 0px;
}
button{
  border:none;
  padding:10px 20px;
  background: green;
  color:#fff;
  border-radius: 5px;
  margin-top:15px;
  text-transform: uppercase;
}
/* Medium devices (tablets, less than 912px) */
@media screen and (max-width:912px) {
  .image img {
    width: 300px;
    height: auto;
}
.content h2{
    font-size: 25px;
    line-height: 25px;
}

}


@media screen and (max-width: 768px) {

  .image img {
    width: 300px;
    height: auto;
}
.content h2{
    font-size: 25px;
    line-height: 25px;
}


}

@media screen and (max-width: 575.98px) {
  .wrapper{
    flex-wrap: wrap;
    padding-bottom:130px;
  }
  .image img {
    width: 300px;
    height: auto;
}
.content h2{
    font-size: 25px;
    line-height: 25px;
}

 }


/* less than 390px */
@media screen and (max-width: 390px) { 
  .wrapper{
    flex-wrap: wrap;
    padding:18px;
    padding-bottom:130px;
    overflow:hidden;
  }
  .image img {
    width: 300px;
    height: auto;
}
.content h2{
    font-size: 25px;
    line-height: 25px;
    padding-right: 30px;
}

}
@media screen and (max-width: 280px) {
  .image img {
    width: 200px;
    height: auto;
}
.content h2{
    font-size: 20px;
    line-height: 25px;
   
}
.content{
  width:200px;
}
.content p{
 font-size: 12px;
}
 }
</style>
