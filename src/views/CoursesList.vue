<template>
  <div id="info">
      <ul id="coursesInfo">
        <ul
          v-for="course in courses"
          class="list-group list-group-horizontal-sm"
        >
          <li class="list-group-item">{{ course.courseName }}</li>
          <li class="list-group-item list-group-item-secondary">{{ course.courseDuration }}</li>
          <li class="list-group-item">{{ course.roleName }}</li>
        </ul>
      </ul>
  </div>
</template>

<script>
import axios from "axios";

const path = "/user/courses";
const tokenKey = "token-ingesoft";

export default {
  name: "CoursesList",
  data: function () {
    return {
      courses: []        
    };
  },
  methods: {
    beforeCreate(){
      getCourses()
    },
    getCourses(){
            axios.get(this.$store.state.backURL + path, { params: { access_token: localStorage.getItem( tokenKey )}}).then( (response) => {
              if( response.status !== 200 ){
                alert( "Error en la respuesta del servidor" );
              }else{
                this.courses = response.data;
              }
            } ).catch( error => {
              alert( "Error con la conexión al servidor" );
            } );
      }
    
  },
};
</script>

<style>
#info {
  position: center;
  margin: 1% 0 0 40%;
}
</style>