<template>
  <section>

    <div class="job position-relative">

      <ul v-if="admin == 'yes'" class="dots-action cursor-pointer position-absolute d-inline-block">
        <li class="dots">
          <i class="bi bi-three-dots-vertical gray"></i>
          <ul>
            <li>
              <a href="/jobs/1" target="_blank">
                <span class="gray"><i class="bi bi-eye"></i></span>
                <span class="gray">{{ controls.view }}</span>
              </a>
            </li>
            <li>
              <a href="/jobs/save?id=1" target="_blank">
                <span class="gray"><i class="bi bi-pencil-square"></i></span>
                <span class="gray">{{ controls.edit }}</span>
              </a>
            </li>
            <li>
              <span class="red"><i class="bi bi-trash delete red remove-element"></i></span>
              <span class="gray">{{ controls.delete }}</span>
            </li>
          </ul>
        </li>
      </ul>


      <div class="job-header d-flex justify-content-between align-items-center position-relative">
        <img :src="img">
        <nuxt-link v-if="full_url == undefined && admin != 'yes'"
                   :to="'/jobs/'+id" class="btn btn-outline-primary">{{ show_details }}</nuxt-link>
        <nuxt-link v-else-if="admin != 'yes'"
                   :to="full_url" class="btn btn-outline-primary">{{ show_details }}</nuxt-link>

      </div>
      <div class="job-body">
        <p class="fw-bold mb-1">{{ title }}</p>
        <ul class="d-flex flex-wrap">
          <li class="mrl-1" v-for="(skill,index) in skills" :key="index">{{ skill }}</li>
        </ul>
      </div>
      <div class="job-footer d-flex align-items-center justify-content-between">
        <p class="fw-bold">{{ company_name }}</p>
        <p class="gray">{{ time }}</p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "JobComponent",
  props:['full_url','img','title','skills','company_name','time','show_details','id','admin','controls'],
  mounted() {
    console.log(this.admin);
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";
.job{
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  //box-shadow: 1px 1px 8px 1px #ddd;
  border:1px solid #eee;
  .job-header{
    >ul{
       position: absolute;
       top:10px;
       
    }
  }
  img{
   height: 40px;
   border-radius:6px;
   margin-bottom:10px
  }
  .job-body{
    height: 130px;
    overflow: auto;
    border-bottom: 1px solid #dddddd;
    margin-bottom: 5px;
    ul{
      list-style-type: disc;
      list-style-position: inside;
      li{
        color:$gray;
        &::marker{
          margin: 0px;
        }
      }
    }
  }
  .job-footer{
    p{
      margin-bottom:0
    }
  }
}

</style>
