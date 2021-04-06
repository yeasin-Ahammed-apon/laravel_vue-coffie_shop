<template>
  <div>      
      <div class="card">
        <div class="card-header "  >
        <img :src="info.image" class="card-img-top"  :alt="info.name">
        </div>
          <div class="card-body">
          <h5 class="card-title">{{info.name}}</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary" @click="add_to_cart(info);cart_refresh()">Add to cart</a>
          </div>
      </div>
  </div>
</template>

<script>
  const axios = require('axios');
export default {
data:function(){
return{
  info:[],
  

  }
},
mounted:function ()    {    
  axios.get('/cake_info/'+this.$route.params.id)  
  .then((response) => {    
    this.info=response.data;  
  })
  .catch(function (error) {
    console.log('this is a fucking error '+error);  
  }) 

},

  methods:{
      add_to_cart: function (data){ 
     var k=JSON.parse(localStorage.getItem('item'));
      if (k=='[]') {                
        localStorage.setItem('item',JSON.stringify(data));        
      } else {
        var lo= k.find(op=>op.id==data.id);
        if (!lo) {        
          k.push(data);
        localStorage.setItem('item',JSON.stringify(k));
        console.log('item local storage has been set');     
        } else {
          console.log('already added');
        
        }       
      }      
      
    // this.total_price_cal();
    // this.apon=JSON.parse(localStorage.getItem('item'));
    // this.apon.length;
    // this.cart=JSON.parse(localStorage.getItem('item'));
     
   },
   cart_refresh:function(){
     var k=JSON.parse(localStorage.getItem('item'));    
     var f=k.length;
     console.log('this console is from home.vue page');
     if(f==null){
       console.log("console loging from home.vue of f-->"+f);
       this.$emit('cart_val', 0);       
     }else{
      console.log("console loging from home.vue of f-->"+f);
       this.$emit('cart_val', f);       
       
     }


   }
  }
  
  



    

}
</script>

<style scoped>

  .card-header {
    width: 50%;
    margin: 0 auto;
    
  }
@media only screen and (max-width:800px) {
  /* For tablets: */
  .card-header {
    width: 90%;
    
  }
}

</style>