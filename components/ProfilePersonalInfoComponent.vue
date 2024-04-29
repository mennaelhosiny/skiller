<template>
  <div class="personal_info_profile">
    <div class="info">
      <div class="bk">
        <div>
          <img src="/images/users/1.webp">
          <button class="btn btn-primary" data-bs-toggle="modal"
                  data-bs-target="#update_personal_data">{{ edit_info }}</button>
        </div>
      </div>
      <div class="row p-3">
        <div class="col-lg-6">
          <p class="d-flex align-items-center">
            <span class="mrl-half"><i class="bi bi-person-circle"></i></span>
            <span>Sara ahmed</span>
          </p>
        </div>
        <div class="col-lg-6">
          <p class="d-flex align-items-center end">
            <span><i class="bi bi-briefcase"></i></span>
            <span>Full stack enginner</span>
          </p>
        </div>
        <div class="col-lg-6">
          <p class="d-flex align-items-center">
            <span class="mrl-half"><i class="bi bi-info"></i></span>
            <span>Open for new opportunity</span>
          </p>
        </div>
        <div class="col-lg-6">
          <p class="d-flex align-items-center end">
            <span><i class="bi bi-geo-alt"></i></span>
            <span>Cairo , 4th street</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfilePersonalInfoComponent",
  props:['edit_info'],
}
</script>

<style scoped>

</style>
