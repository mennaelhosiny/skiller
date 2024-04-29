<template>
  <div class="fixed-dots">
    <ul>
      <span class="d-block m-auto text-center position-relative cursor-pointer"
            style="top:-5px"><i  @click="removeBox" class="bi bi-x-lg red"></i></span>
      <li  v-for="(i,index) in dots"
          :key="index"
          :to="i"
          :class="index == 0 ? 'active':''">
        <span></span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DotsScrollComponent",
  props:['dots'],
  methods:{
    removeBox:function (){
       event.target.parentElement.parentElement.parentElement.remove();
    }
  }
}
</script>

<style scoped>

</style>
