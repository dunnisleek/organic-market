<template>
       <div class="banner">
              <div class="container">
              <div class="green-section">
                     <span>Flat Deal</span>
                     <h2>Buy Fresh Fruits & vegetables</h2>
                     <p>Starting at only ₦2,500</p>
                     <button>Shop now</button>
                     <img src="../assets/image 21.png"/>
              </div>
              <div class="yellow-section">
                     <h2>Buy Top Quality Easy Meals</h2>
                     <button>Shop now</button>
                     <img src="../assets/image 21.png" width="140"/>
              </div>
              <div class="two-section">
                     <div class="blue-category sameCate">
                            <h2>Lentils & beans</h2>
                         <button>Shop now</button>
                         <div>
                            <img src="../assets/nuts.png"/>
                         </div>
                    
                     </div>

                     <div class="blue-cat sameCate">
                            <h2>Clearance Item</h2>
                            <p>Special Offers</p>
                     <button>Shop now</button>
                     <div>
                            <img src="../assets/New-Project.jpg.png"/>
                         </div>
                     </div>
              </div>
              </div>
       </div>
</template>

<script>
       export default {
              
       }
</script>

<style scoped>
.banner{
       width:100%;
       max-width: calc(1440px - 170px);
       margin:auto;
       padding:6rem 0rem;
}

.container{
       display:grid;
       grid-template-columns: 1fr 1fr 1fr;
       gap:13px;
}

/* Green Section styling */
.green-section{
       background: #013A25;
       color:#fff;
       height:auto;
       border-radius: 12px;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       /* align-content: center; */
       /* justify-content: ; */
       padding:2rem;
}
.green-section span{
       background: #FEF4D9;
       color:#E78C04;
       border-radius: 17px;
       font-size: 12px;
       padding:5px;
}
.green-section h2{
       font-size:44px;
       line-height: 48px;
}
.green-section img{
       position: relative;
       top:125px;
       right:0;
       left:32px;
    
}
.green-section button{
       background:#04BD55;
       color:#fff;
       border:none;
       padding:10px;
       margin-top:10px;
       border-radius: 10px;
}
/* yellow-section */
.yellow-section{
       background: #FCEBCC;
       /* height:477px; */
       height:auto;
       border-radius: 12px;
       display: flex;
       flex-direction: column;
       align-items: flex-start;
       /* align-content: center; */
       justify-content: flex-start;
       padding: 02rem 2rem;
      
}
.yellow-section h2{
       font-size:40px;
       line-height: 48px;
}
.yellow-section button{
       background:#fff;
       color:#04BD55;
       border:none;
       padding:10px;
       margin-top:10px;
       border-radius: 10px;
}
.two-section{
   display:flex;
   flex-direction: column;
   gap:1rem;
   position: relative;
}
.two-section img:first-of-type{
       position: relative;
       right:0;
       top:35px;          
}
.two-section button{
       border:none;
       background:#fff;
       padding:10px;
       border-radius: 5px;
       margin-top:5px;
}
.blue-category{
       padding: 02rem 2rem;
}
.blue-category img{
       
       margin-top:60px;
       left:47%;
}
.sameCate{
       background: #E9F2EB;
       border-radius: 12px;
       height: auto;
       /* padding: 02rem 2rem; */
       
}
.sameCate h2{
       font-size: 28px;
       line-height: 30px;
}
.blue-cat{
       padding: 02rem 2rem;
}
.blue-cat img{
       width:100%;
}
 /* Medium devices (tablets, less than 912px) */
@media screen and (max-width:912px) {
       .container{
              grid-template-columns: 1fr 1fr;
              padding:2rem;
       }
       .green-section img{
              top:0;
       }
}
@media screen and (max-width: 768px) {
    
    .banner {
        grid-template-columns: repeat(2, minmax(0, 1fr)); /* Equal width columns */
    }
    .container{
       display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    gap: 20px;
    padding: 2rem;
    }

    .two-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    .green-section h2, .yellow-section h2{
       font-size:30px;
       line-height: 33px;
    }
    .blue-category img{
    left: 37%;
}
.blue-cat img{
       top:130px !important;
}
}

 /* X-Small devices (portrait phones, less than 576px) */
@media screen and (max-width: 575.98px) { 
    
       .banner {
      grid-template-columns: 1fr;
 }
 .green-section h2, .yellow-section h2 {
    padding: 15px 0px;
}
.blue-category img {
    left: 15%;
}
}

/* less than 390px */
@media screen and (max-width: 390px) { 
.banner{
       padding:0rem;
}
 
  .two-section{
       grid-template-columns: 1fr;

  }
  .green-section{
       padding: 10px;
  }
  .green-section img{
       position: relative;
       top:0px;
       right:0;
       left:0px;
       width:300px;
  }
  .blue-cat img {
    top: 30px !important;;
}

}

@media screen and (max-width: 414px) {
     
       .green-section img{
              left:0;
              width:80%;
       }
       .two-section {
        display: flex;
    }
    .blue-cat img{
    top:20px !important;
    }   
  
}
</style>