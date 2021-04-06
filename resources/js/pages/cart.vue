<template>
  <div class="cart_list_style">
    <ul class="list-unstyled" v-for="carts in cart_get_all" :key="carts.id">
      <li class="media shadow p-3 mb-5 bg-white rounded">
       <img :src="carts.image" class="mr-3" width="100px" :alt="carts.name+'.jpg'">
          <div class="media-body">
            <h5 class="mt-0 mb-1">{{carts.name}}</h5>            
          </div>
          <button type="button" class="btn btn-primary">-</button>
          <span class="cart_list_quantity_style border" >{{carts.quantity}}</span>
          <button type="button" class="btn btn-primary">+</button>
          <button type="button" class="btn btn-danger">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
 data:()=>{
   return{
     
     cart_get_all:[],
   }
 },
 mounted:function(){
  // get items
  //tring to get spacific local storage
  var k=localStorage.getItem('item');
  // if not exists then set it
  if (k==null) {
    localStorage.setItem('item','[]');        
  // if exists then countine    
  } else {
    console.log('good to go');
  }
  // this.total_price_cal();
  // then update other thing in the page
  this.cart_get_all=JSON.parse(localStorage.getItem('item')) || null;
  this.cart_get_all.reverse();
 },
 methods:{   

     // change quntity
     //delete item

 }

}
</script>

<style scoped>
.cart_list_style{
  margin-top:10px;
  margin-left: 10%;
  margin-right: 10%;

}
.cart_list_quantity_style{
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom:12px;
  border: 1px black;
}
.btn-danger{
  margin-left: 50px;
}

</style>