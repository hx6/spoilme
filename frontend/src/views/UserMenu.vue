<template>
  <div class="container box">
    <h3>Welcome</h3>
    <button class="waves-effect waves-light btn-large"
     onclick="location.href='/list'">
     Go to the list
    </button>
    <div class="separator"></div>
    <!-- añadir amigos input por correo 
    lista de amigos-->
    <form action="GET" class="row">
      <div class="input-field col s5">
        <input type="text" class="input-field colleft-align"/>
        <label for="friendEmail ">Got some friends? Enter your their email!</label>
        <button class="waves-effect waves-light btn left-align">Add!</button>      
      </div>
      <div class="input-field ">
         
      </div>
      <div class="row">
        <p>Friends</p>
        <div class="chip">
          <img src="../../public/logo-fb.png" alt="Contact Person" />
          John Doe
        </div>
        <div class="chip">
          <img src="../../public/logo-fb.png" alt="Contact Person" />
          Jane Doe
        </div>
        <div class="chip">
          <img src="../../public/logo-fb.png" alt="Contact Person" />
          Dog Doe
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userServer: "https://presentlists.herokuapp.com/api/v1/user"
    };
  }
};
</script>

