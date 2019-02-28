<template>
  <div class="hello">
    <h1>{{ info }}</h1>
  </div>
</template>

<script>

export default {
  name: 'mainContainer',
  props: ['info'],
  data() {
    return{
      info_test: 'test'
    }
  }
}


</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
