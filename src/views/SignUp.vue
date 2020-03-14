<template>
<div class="sign-up">
  <p>¡vamos a crear una cuenta nueva!</p>
  <input type="text" v-model="email" placeholder="Email"><br>
  <input type="password" v-model="password" placeholder="Password"><br>
  <button @click="signUp">Sign Up</button>
  <span>o regresa al <router-link to="/login"> inicio de sesión </router-link></span>
</div>
</template>

<script>

  import firebase from 'firebase';

  export default{
    name: 'signUp',
    data() {
      return {
        email: '',
        password:''
      }
    },
    methods: {
      signUp: function () {
        firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then(function (user){
            alert('¡Se ha creado la cuenta!')
          },
          function (err){
            alert('No se creo la cuenta ' + err.message)
          }
        );
      }
    }
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
