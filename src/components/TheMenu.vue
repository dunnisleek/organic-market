<template>
    <div class="wrapper">
         <nav>
              <div class="nav-inner">
              <!-- <div class="logo"><a href="/">Organic Farm</a></div> -->
              <!-- <router-link to="/">Home</router-link> -->
              <router-link to="/" class="logo">Organic Farm</router-link>
              <div class="search"><input type="text" placeholder="search.." v-model="searchQuery" @input="emitSearchQuery"></div>
              <div class="acct-btns">
                     <div class="my-acct">
                         <img src="../assets/user.svg"/><span> My Account</span> 
                     </div>
                     <img src="../assets/Wishlist.svg"/>
                     <img src="../assets/Cart.svg"/>
              </div>
       </div>
         </nav>
         <div class="main-menu">
              <ul>
                     <li>Shop All</li>
                     <li>Spices</li>
                     <li>Clearance</li>
                     <li>Spices</li>
                     <li>Dry Fruits</li>
              </ul>
            
       </div>
</div>

<!-- START OF MOBILE MENU -->
<div class="mobile">
       <div>
              <router-link to="/" class="logo">Organic Farm</router-link>
       </div>
       <div @click="show">
              <span class="material-symbols-outlined">
                     menu
              </span></div>
       </div>
      
<nav v-show="display">
    <div class="mobile">
       <span class="material-symbols-outlined" @click="closeMenu" >
       close
       </span>
      </div>


    <div>
       <ul>
                     <li>Shop All</li>
                     <li>Spices</li>
                     <li>Clearance</li>
                     <li>Spices</li>
                     <li>Dry Fruits</li>
              </ul>
    </div>
  </nav>
</template>

<script>


       export default {
              data(){
                     return{
                            display:false,
                            searchQuery:''
                     }
              },
              methods:{
                     show(){
                            this.display = true
                     },
              closeMenu(){
                     this.display = false
              },
              emitSearchQuery() {
      this.$emit('search-query', this.searchQuery);
    },
    
      
},

}

</script>

<style scoped>
.wrapper{
       display: flex;
       flex-direction: column;
}
a{
       font-size:20px;
       font-weight: 600;
       color:#282828;
       text-decoration: none;
       text-transform: uppercase;
       cursor: pointer;
}
nav .nav-inner{
       display: flex;
       justify-content: space-between;
       justify-content: center;
       align-items: center;
       max-width: calc(1440px - 170px);
       width:100%;
       margin: auto;
       gap:10rem;
       padding:10px 0px;
       border-bottom: 1px solid #DED8CF;

}

.search{
       width:30rem;
}
input{
       width:30rem;
       padding:14px;
       border:1px solid #DED8CF;
       border-radius: 12px;
       outline:none;
}
.mobile{
       display:none;
}
.acct-btns{
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
}
.main-menu{
       padding:10px 0px;
       max-width: calc(1440px - 170px);
       width:100%;
       margin:auto;
}
ul{
       list-style-type: none;
       display:flex;
       justify-content: flex-start;
       align-items: center;
       gap:30px;
       width:100%;
       max-width: calc(1440px - 170px);
}

 /* Medium devices (tablets, less than 912px) */
@media screen and (max-width:912px) {
       .wrapper{
              display: none;
       }
       nav .nav-inner{
              gap:0rem;
       }
       input{
              width:25rem;
              margin-left:2rem;
       }
       .material-symbols-outlined {
              font-size:35px;
       }
       .mobile{
       display:flex;
       justify-content: space-between;
       align-items: center;
       padding:1rem 2rem;
       }
       nav{
              background:#226600;
              color:#DED8CF;
              text-align: left;
              width: 70%;
              height:100vh;
              transform: translate(42%);
              overflow: hidden;
              position: absolute;
              top:0;
              z-index: 999;
              transition: transform 0.5s ease-in-out;
       }
       nav ul {
              display:flex;
              flex-direction: column;
       }
       ul li{
              font-size:25px;
           
              text-transform: uppercase;
              cursor:pointer;
       }
       
       
}
@media screen and (max-width: 575.98px) { 
       nav .nav-inner[data-v-ab9cb920] {
    gap: 0rem;
    display: none;
}
 
}
</style>