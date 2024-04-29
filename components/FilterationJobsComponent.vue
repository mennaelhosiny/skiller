<template>

  <form>
    <div class="row align-items-center">
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="form-group input-icon flex-wrap">
          <label>{{ words.country }}</label>
          <span><i class="bi bi-arrow-down-short"></i></span>
          <select class="form-control" name="country_id">
            <option>{{ words.select_best_choice }}</option>
            <option value="1" v-for="i in 10">Egypt</option>
          </select>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="form-group input-icon flex-wrap">
          <label>{{ words.city }}</label>
          <span><i class="bi bi-arrow-down-short"></i></span>
          <select class="form-control" name="country_id">
            <option>{{ words.select_best_choice }}</option>
            <option value="1" v-for="i in 10">Cairo</option>
          </select>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="form-group input-icon flex-wrap">
          <label class="w-100">{{ words.work_field }}</label>
          <span><i class="bi bi-arrow-down-short"></i></span>
          <select class="form-control" name="country_id">
            <option>{{ words.select_best_choice }}</option>
            <option value="1" v-for="i in 5">Programming</option>
            <option value="1" v-for="i in 5">Teaching</option>
          </select>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="form-group input-icon flex-wrap">
          <label class="w-100">{{ words.job_title }}</label>
          <span><i class="bi bi-briefcase"></i></span>
          <input class="form-control" name="job_title">
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="form-group input-icon flex-wrap">
          <label class="w-100">{{ words.job_type }}</label>
          <span><i class="bi bi-arrow-down-short"></i></span>
          <select class="form-control" name="country_id">
            <option>{{ words.select_best_choice }}</option>
            <option value="1">Full time</option>
            <option value="1">Part time</option>
            <option value="1">Remotely</option>
          </select>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-2">
        <div class="form-group input-icon flex-wrap">
          <label class="w-100">{{ words.experience_type }}</label>
          <span><i class="bi bi-arrow-down-short"></i></span>
          <select class="form-control" name="country_id">
            <option>{{ words.select_best_choice }}</option>
            <option value="1">Team leader</option>
            <option value="1">Senior</option>
            <option value="1">Junior</option>
          </select>
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-2">
        <div class="form-group">
          <label class="w-100">{{ words.start_date_posting }}</label>
          <input type="date" name="start_date" class="form-control">
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mb-2">
        <div class="form-group">
          <label class="w-100">{{ words.end_date_posting }}</label>
          <input type="date" name="end_date" class="form-control">
        </div>
      </div>

      <div class="col-lg-3 col-md-6 mb-2 mt-2">
        <input type="submit" class="btn btn-primary w-100" :value="words.filter">
      </div>
    </div>
  </form>

</template>

<script>
export default {
  name: "FilterationJobsComponent",
  props:['words'],
}
</script>

<style scoped>

</style>
