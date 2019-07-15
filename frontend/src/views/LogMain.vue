<template>
  <div class="container">
    <h1 class="black-text">My presents list</h1>
     <h5>You have to be registered to have access</h5>
    <div class="row btn-group mainBack m6">           
      <div class="row m6">
      <button 
      onclick="location.href='/login'" 
      class="waves-effect waves-light btn-large">
      <i class="material-icons left">
        person
        </i>
        Login
        </button>
        </div>
        <div class="row m6">
      <button class="waves-effect waves-light btn-large "
      onclick="location.href='/register'"
      ><i class="material-icons left">
        person_add
        </i>
        Register
        </button>
        </div>
    </div>

  </div>

</template>

<script>
export default {
  
}
</script>

<style>
.s-btn {
  color: #2c3e50
}
</style>

