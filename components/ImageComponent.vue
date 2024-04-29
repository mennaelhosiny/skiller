<template>
  <img :src="$config.url+'/images/'+src">
</template>

<script>
export default {
  name: "ImageComponent",
  props:['src'],
}
</script>

<style scoped>

</style>
