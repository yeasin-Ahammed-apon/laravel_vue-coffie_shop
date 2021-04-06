<template>
  <div>
          <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown button
              </button>
            <!-- extra dropdown for easy  -->
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">                 
                          <router-link to="/cake" class="dropdown-item">cake</router-link>
                          <router-link to="/info/fixed data is used" class="dropdown-item">cake info</router-link>          
                          <router-link to="/location" class="dropdown-item">location</router-link>
                          <router-link to="/done" class="dropdown-item">done</router-link>
                          <!-- erorr link is not for show -->
                        </div>
            <!-- navbar -->
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                      <!-- home page link with logo  -->
                          <router-link to="/" class="navbar-brand">logo</router-link>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span class="navbar-toggler-icon"></span>
                            </button>
                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                              <!-- home page link  -->
                              <li class="nav-item active">                 
                                <router-link to="/" class="nav-link">Home</router-link>
                              </li>
                              <!-- item collection link with drop down             -->
                              <li class="nav-item dropdown active">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Collection
                                </a>
                                <!-- link in dropdwon  -->
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="#">New Coffie</a>
                                  <a class="dropdown-item" href="#">Populer Coffie </a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                              </li> 
                              <!-- about page link -->
                              <li class="nav-item active">                  
                                <router-link to="/about" class="nav-link">About</router-link>
                              </li> 
                              <!-- contact page link  -->
                              <li class="nav-item active">
                                <router-link to="/contact" class="nav-link">Contact</router-link>
                              </li>            
                            </ul>
                          <!-- right side of the navbar -->
                          <!-- cart link -->
                            <ul class="navbar-nav">
                            <li class="nav-item active">                  
                                <router-link to="/cart" class="nav-link">Cart {{cart_quntity}}</router-link>
                            </li> 
                            </ul>
                            <!-- from for searching item -->
                            <form class="form-inline my-2 my-lg-0">
                              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                          </div>
                    </nav>          
            <!-- floating button that go to cart page  -->
            <router-link to="/cart" id="container-floating" class="shadow p-3">                   
                      cart
                      <br>
                      {{cart_quntity}}     
            </router-link>
      </div>    
    <router-view v-on:cart_val='ref_cart($event)' ></router-view>                                    
    <footerr></footerr>   
  </div>
</template>

<script>

import Footerr from './pages/parts/footer';
export default {
  
  data:function(){
    return{
      cart_quntity:0,
    }
  },
  mounted:function(){  
      
  //tring to get spacific local storage
  var k=localStorage.getItem('item');
  // if not exists then set it
  if (k==null) {
    this.cart_quntity=0;
    console.log("if k is null cart_quantity is going to be 0 so we have "+ this.cart_quntity)
    localStorage.setItem('item','[]');   
  // if exists then countine    
  }
  else if(k==[]){
        console.log("if k is [] cart_quantity is going to be 0 so we have "+ this.cart_quntity)

     this.cart_quntity=0;
  }
   else {
    console.log('good to go'); 
    k =JSON.parse(localStorage.getItem('item')) ;   
  console.log("if k is not null cart_quantity is going to be 0 so we have "+ this.cart_quntity)
   var f= k.length
    this.cart_quntity=f;
  }
  // this.total_price_cal();
  // // then update other thing in the page
  // this.cart=JSON.parse(localStorage.getItem('item')) || null;
  
  
  // // requesting for data through axios
  // axios.get('/all_data')
  // .then((response) => this.list=response.data)
  // .catch(function (error) {
  //   console.log(error);
  // });
},
  methods:{
    ref_cart:function(updated_data){
      this.cart_quntity=updated_data;
    }

  },
  
components:{
  
  Footerr
},

}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}

</style>
<style scoped>
  #container-floating{
    padding-left: 5px;
    padding-right: 5px;
    color: rgb(82, 84, 85);
    font-size: 20px;
    background: rgb(93, 215, 252);
    position: fixed;
    width: 70px;
    height: 90px;
    border-radius: 15px;
    opacity: 0.9;
    top:50%;  
    right: 10px;
    z-index: 50px;
    z-index: 100;
    text-align:center;
  }
</style>