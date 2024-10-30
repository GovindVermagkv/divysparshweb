<template>
<HeaderMain />
  <router-view/>
</template>

<script>
import HeaderMain from './components/HeaderMain'
export default{
  components:{
    HeaderMain
  }
}

</script>

<style scoped>
#app {
  font-family: "Work Sans", sans-serif !important;
 
  /* text-align: center; */
  /* color: #2c3e50; */
}


</style>
