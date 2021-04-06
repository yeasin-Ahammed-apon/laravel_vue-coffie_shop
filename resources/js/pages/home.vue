<template>
  <div class="home_list_div_style">
    <ul class="list-unstyled" v-for="datas in list" :key="datas.id">
      <li class="media shadow p-3">
        
        <img :src="datas.image" width="200px" height="150px" class="mr-3 p-3" :alt='datas.name'>
        <div class="media-body">
          <h5 class="mt-0 mb-1">{{datas.name}} </h5>
          price: <h4 class="text-success">$ {{datas.price}}</h4>
          <br>
        <router-link :to="{path:'/info/'+datas.id}" class="btn btn-primary">cake info</router-link>
        <button @click="add_to_cart(datas);cart_refresh()" type="button" class="btn btn-warning">Add to cart</button>
        </div>
      </li>  
    </ul>
  </div>
</template>







<script>
const axios = require('axios');
export default {
  props:{
    name:'apon',
  },
  data:function (){
    return{
      list:null,
      apon:[],
    }
  },
  mounted:function(){    
    axios.get('/all_data')
          .then((response)=> {               
            this.list=response.data;  
            
          })
          .catch(function (error) {            
            console.log(error);
          })
            
  }, methods:{
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
  },
  

}
</script>

<style scoped>
/* .home_list_div_style{
  margin-left: 10%;
  margin-right: 10%;

} */

</style>

