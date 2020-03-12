<template>
  <div class="login">
    <h3>Sign In</h3>
    <input type="text" placeholder="Email"><br>
    <input type="password" placeholder="Password"><br>
    <button @click="login">Conexión</button>
    <p>¿No tienes cuenta? <router-link to="/sign-up"> Crea una </router-link> </p>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'login',
    data () {
      return {};
    },
    methods: {
      login: function() {
        this.$router.replace('home');
      }
    }
  }
</script>

<style scoped> /* "scoped" attribute limit CSS to this component only*/
  .login{
    margin-top: 40px;
  }
  input{
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  button{
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p{
    margin-top: 40px;
    font-size: 13px;
  }
  p a{
    text-decoriation: underline;
    cursor: pointer;
  }
</style>
