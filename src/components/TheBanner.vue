<template>
       <div class="banner">
              <div class="text-box">
                     <h1><span>Fresh</span> flavours delivered to your door, always.</h1>
                     <p>Get fresh groceries online without stepping out to make delicious food with the freshest ingredients.</p>
                     <button>Shop All</button>
              </div>
              <div class="image">
                     <img src="../assets/Subtract.png"/>
              </div>
         
       </div>
</template>

<script>
       export default {
              
       }
</script>

<style scoped>
.banner{
       display:flex;
       width:100%;
       max-width: calc(1440px - 170px);
       margin:auto;
       justify-content: center;
}
.text-box{
       display: flex;
       flex-direction: column;
       justify-content: center;
}
.text-box h1{
       font-size:60px;
       line-height:65px;
       max-width:110%;
       width:110%;
       z-index:88;
}
.text-box p{
       font-size:18px;
       line-height: 22px;
       padding:20px 0px;
       max-width: 490px;
}
.text-box span{
  color:#04BD55;
}
.text-box button{
       background: #04BD55;
       width:150px;
       max-width: 150px;
       border:none;
       padding:10px;
       color:#fff;
       font-size:18px;
       border-radius: 12px;
}
@media screen and (min-width:993px) and (max-width:1024px){
       .image img{
              width:400px;
       }
}
 /* Medium devices (tablets, less than 912px) */
@media screen and (max-width:912px) {
       .banner{
              padding:0 2rem;
       }
       .text-box h1{
              font-size:30px;
              line-height: 32px;
       }
       .image img{
              width:400px;
       }

}


/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) { 

}
@media screen and (max-width: 575.98px) { 
       .banner{
              padding:8rem 2rem;
       }
       .text-box h1 {
    font-size: 45px;
    line-height: 50px;
      }
       .image img{
              display:none;
       }
}


@media screen and (max-width:390px) {
       .banner{
       padding:5rem 2rem;
}
       
}
</style>