<template>
  <div class="dashboard">
    <h1 class="text-center fw-bold blue mb-3 mt-3">{{ words.reports }}</h1>
    <div class="container">
      <div class="filters mb-5">
        <div class="row">
          <div class="col" v-for="(c,index) in ['start_date','end_date']" :key="index">
            <div class="form-group position-relative input-icon flex-wrap mb-2">
              <label>{{ words[c] }}</label>
              <input type="date" :name="c" class="form-control">
            </div>
          </div>
          <div class="col">
            <div class="form-group position-relative input-icon flex-wrap mb-2">
              <input type="submit" class="w-100 btn btn-primary position-relative mt-4 top-6" :value="words.filter">
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-lg-6 mb-2"  v-for="i in 6" :key="i">
          <div class="reports overflow-auto mx-500">
            <div class="report d-flex align-items-center justify-content-between">
              <img src="/images/users/2.webp">
              <div class="content">
                <span class="fw-bold">menna </span>
                <p>
                  <span>applied for onclick as flutter developer</span>
                  <span>12/20/2022</span>
                </p>
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
