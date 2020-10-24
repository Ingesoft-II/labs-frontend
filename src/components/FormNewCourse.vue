<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
        <div id="signUp" class="mt-5">
          <form
            class="border border-primary rounded form-inline"
            @submit="createCourse"
          >
            <h2 class="col-12 text-center text-primary mt-3 mb-5">
              Ingrese Un Nuevo Curso
            </h2>

            <div class="form-group col-12">
              <label class="custom-label col-md-3" for="names"
                >Nombre de Curso</label
              >
              <input
                id="names"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="text"
                placeholder="Nombre de Curso"
                v-model="nameCourse"
                required
              />
            </div>

            <div class="form-group col-12">
              <label class="custom-label col-md-3 display" for="surnames"
                >Duracion</label
              >
              <input
                id="surnames"
                class="form-control col-12 col-sm-10 col-md-7 offset-sm-1"
                type="text"
                placeholder="Duracion"
                v-model="duration"
                required
              />
            </div>
            <div class="col-12 col-sm-5 col-md-4 mb-3">
              <button
                class="col-sm-10 col-md-10 offset-sm-1 offset-md-2 btn btn-primary"
                type="submit"
              >
                Crear Curso
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const path = "/profesor/crear-curso";
export default {
  name: "FormNewCourse",
  data() {
    return {
      roles: [{ id: 1, roleName: "Mi Rol" }],
      nameCourse: "",
      duration: "",
      response: null,
    };
  },
  beforeCreate() {
    const requestPATH = "/mis-roles";
    axios
      .get(
        this.$store.state.backURL + requestPATH
          ? access_token
          : getAuthenticationToken()
      )
      .then((response) => {
        if (response.status !== 200) {
          alert("Error obteniendo sus roles.");
        } else {
          this.roles = this.response.data;
        }
      })
      .catch((error) => {
        alert("Error en la petición");
        console.log(error);
      });
      if(this.roles.roleName==="Profesor"){
          console.log("Listo");
      }else{
          console.log("No Listo");
      }
  },
  methods: {
    createCourse(event) {
      axios
        .post(this.$store.state.backURL + path, {
          nameCourse: this.nameCourse.trim(),
          duration: this.duration.trim(),
        })
        .then((response) => {
          if (response.status !== 201) {
            alert("Error en el almacenamiento del curso");
          } else {
            alert("Curso registrado correctamente");
          }
        })
        .catch((error) => {
          alert("Error en la aplicación");
        });
      return true;
    },
  },
};
</script>

<style>
</style>