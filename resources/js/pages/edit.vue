<template>
  <div class="home_list_div_style">
   <form @submit.prevent="add_list()">
      <!-- name input  -->
      <div class="form-group">
        Name :<input type="text" class="form-control" >    
      </div>
      <!-- email input -->
      <div class="form-group">
        Email :<input type="text" class="form-control" >
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
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" >
        <label class="form-check-label" for="inlineRadio1">Male</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"  >
        <label class="form-check-label" for="inlineRadio2">Female</label>
      </div>
      <!-- choose Skill  -->
      <br><br>
      Skill  
      <br><br>  
       <div class="form-check form-check-inline">
        <input class="form-check-input"  type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1" >
        <label class="form-check-label" for="inlineRadio1">Laravel</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input"  type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Codeogniter</label>
      </div>
      <br>
      <div class="form-check form-check-inline">
        <input class="form-check-input"  type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">Ajax</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input"  type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Vue js</label>
      </div>    
      <br>
      <div class="form-check form-check-inline">
        <input class="form-check-input"  type="checkbox" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">Mysql</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input"  type="checkbox" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">Api</label>
      </div>     
      <br>  <br>         
      <button type="submit" class="btn btn-primary" >Update</button>
    </form>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home_list_div_style{
  padding-top: 5%;
  padding-left: 10%;
  padding-right: 10%;
}
</style>