<template>
  <div class="dashboard">
    <div class="notifications current_page">
      <div class="container mt-4 mb-4">
        <div class="outer">
          <div class="notification unread d-flex align-items-center" >
            <nuxt-link tag="img" src="/images/users/1.webp" to="#" class="mrl-1 cursor-pointer"></nuxt-link>
            <div class="max-width">
              <nuxt-link to="#" class="d-flex align-items-center justify-content-between">
                <span class="black fw-bold">Ahmed ali see your profile</span>
                <span class="dot-unread"></span>
              </nuxt-link>
              <ul class="d-flex mb-2 mt-1">
                <li class="gray mrl-1">21M ago</li>
                <li class="gray">full stack developer</li>
              </ul>
              <div class="tags d-flex">
                <p class="mrl-1">working at onclick</p>
                <p class="mrl-1">zagazig city</p>
                <p class="mrl-1">team leader</p>
              </div>
            </div>
          </div>
          <div class="notification d-flex align-items-center" v-for="i in 8" :key="i">
            <nuxt-link tag="img" src="/images/companies/1.png" to="#" class="mrl-1 cursor-pointer"></nuxt-link>
            <div class="max-width">
              <nuxt-link to="#" class="d-block">
                <span class="black fw-bold">onclick published new job that match your profile skills</span>
              </nuxt-link>
              <ul class="d-flex mb-2 mt-1">
                <li class="gray mrl-1">21M ago</li>
                <li class="gray">Social media</li>
              </ul>
              <div class="tags d-flex">
                <p class="mrl-1">Front end</p>
                <p class="mrl-1">vue js</p>
                <p class="mrl-1">Api</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import WordsLang from "../../mixins/WordsLang";
import Vue from "vue";
export default {
  name: "index",
  layout:"admin",
  mixins:[WordsLang],
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";

</style>
