<template>
<div class="sign-up">
  <p>¡vamos a crear una cuenta nueva!</p>
  <input type="text" placeholder="Email"><br>
  <input type="password" placeholder="Password"><br>
  <button>Sign Up</button>
  <span>o regresa al <router-link to="/login"> inicio de sesión </router-link></span>
</div>
</template>

<script>
  export default{
    name: 'signUp',
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
.signUp{
  margin-top: 40px;
}
input{
  margin: 10px 0;
  width: 10%;
  cursor: pointer;
}
button{
  margin-top: 10px;
  width: 10%;
  cursor: pointer;
}
span{
  display: block;
  margin-top: 20px;
  font-size: 11px;
}
</style>
