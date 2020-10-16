<template>
  <div id="info">
    <h3>{{user.role}}</h3>
  <ul class="list-group" id="coursesInfo">
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item">{{ course.courseName }}</li>
      <li class="list-group-item">{{ course.courseDuration }}</li>
    </ul>
    <ul class="list-group list-group-horizontal">
      <li class="list-group-item">{{ course.courseName }}</li>
      <li class="list-group-item">{{ course.courseDuration }}</li>
    </ul>
  </ul>
  </div>
</template>

<script>
export default {
  name: "CoursesList",
  data: function () {
    return {
      user: {
        role: "Estudiante",
      },
      course: {
        courseName: "Ingenieria de Software II",
        courseDuration: 123456789,
      },
    };
  },
};
</script>

<style>
h3{
  position: center;
  margin: 2% 0 0 45%; 
}

#coursesInfo{
  position: center;
  margin: 1% 0 0 40%;
}
</style>