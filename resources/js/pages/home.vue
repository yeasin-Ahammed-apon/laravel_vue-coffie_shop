<template>
  <div class="home_list_div_style">
    <form @submit.prevent="add_list">
      <!-- name input  -->
      <div class="form-group">
        Name :<input type="text" class="form-control" v-model="person_name">    
      </div>
      <!-- email input -->
      <div class="form-group">
        Email :<input type="text" class="form-control" v-model="email">
      </div>
      <!-- image input -->
      <div class="form-group">
        image <input type="file" class="form-control-file" id="exampleFormControlFile1">  
      </div>
      <br>
      <!-- choose gender  -->
      Gender 
      <br><br>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" v-model="gender1">
        <label class="form-check-label" for="inlineRadio1">Male</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"  v-model="gender2">
        <label class="form-check-label" for="inlineRadio2">Female</label>
      </div>
      <!-- choose Skill  -->
      <br><br>
      Skill  
      <br><br>  
       <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="skill1" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1" >
        <label class="form-check-label" for="inlineRadio1">Laravel</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="skill2" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Codeogniter</label>
      </div>
      <br>
      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="skill3" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">Ajax</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="skill4" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Vue js</label>
      </div>    
      <br>
      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="skill5" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">Mysql</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" v-model="skill6" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Api</label>
      </div>     
      <br>  <br>         
      <button type="submit" class="btn btn-primary" >Submit</button>
    </form>

<hr>
<!-- list of data -->

<h4>List of data</h4>
<table class="table table-bordered"> 
   <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Image</th>
      <th scope="col">Gender</th>
      <th scope="col">Skill</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody v-for="data in data" :key="data.id">    
    <tr>      
      <td>{{data.name}}</td>
      <td>{{data.email}}</td>
      <td>{{data.image}}</td>
      <td>{{data.gender}}</td>
      <td>{{data.skill}}</td>
      <td>
        <router-link to="/edit" type="button" class="btn btn-primary">edit</router-link>
        
        <button type="button" class="btn btn-danger" @click="delete_list(data.id)">Delete</button>
      </td>
    </tr>            
  </tbody>
</table>




  </div>
</template>
<script>
const axios = require('axios');
export default {
   data: function () {
    
    return {
      data : [],
      person_name : [],
      email: [],
      image:[],
      gender1:[],
      gender2:[],
      skill1:[],
      skill2:[],
      skill3:[],
      skill4:[],
      skill5:[],
      skill6:[],

    }

   },
   mounted: function () {
    axios.get('/list')
  .then((response)=> {
    // handle success
    this.data = response.data;
    console.log(this.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  },
  methods:{
        // add a list
    add_list: function(e){
      axios.post('/add_list', {
        person_name,
        email,
        image,
        gender,
        skill:skill1+skill2+skill3+skill4+skill5+skill6
        })
        console.log(person_name,email,image,gender,skill)
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
      }
      );
    },
    // update  a list
    update_list(id){
      axios.post('/update/'+id, {
        person_name,
        email,
        image,
        gender,
        skill
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
      }
      );
    },
    // delete a list
    delete_list(id){
      axios.delete('/delete/'+id)
      .then((response)=> {
        // handle success        
        console.log('deleted');
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
      
      
    },

    
  }

}
</script>

<style scoped>
.home_list_div_style{
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>
