<template>
  <div class="container">
    <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2 text-center">
      <div v-for="role in roles" :key="role.id">
        <h1>{{ role.roleName }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const requestPATH = '/mis-roles';
import {getAuthenticationToken} from '@/dataStorage'
export default {
  name: "ListRole",
  data() {
    return {
      roles: [{ id: 1, roleName: "My Rol" }],
    };
  },
  beforeCreate() { 
    axios.get(this.$store.state.backURL + requestPATH,{params:{access_token: getAuthenticationToken()}})
    .then(response => {
      if(response.status!==200){
        alert('Error obteniendo sus roles.')
      }else{
        this.roles = this.response.data
      }
    }).catch(error => {
      alert("Error en la petición");
      console.log(error);
    })
  },
};
</script>

<style scoped>
.form-inline .form-group {
  margin-bottom: 1rem;
}
</style>
