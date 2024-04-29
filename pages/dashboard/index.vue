<template>
  <div class="dashboard">
     <h1 class="text-center fw-bold blue mb-3 mt-3">{{ words.statistics }}</h1>
     <div class="container">
       <div class="row mb-3">
         <p class="fw-bold">{{ words.jobs }}</p>
         <div id="chart"></div>
       </div>
       <div class="row mb-3">
         <div class="col-lg-6">
           <p class="fw-bold">{{ words.applied_jobs }}</p>
           <div id="jobs_chart"></div>
         </div>
         <div class="col-lg-6">
           <p class="fw-bold">{{ words.users }}</p>
           <div id="users_chart"></div>
         </div>
       </div>
       <div class="row mb-3">
         <div class="col-lg-6">
           <p class="d-flex align-items-center justify-content-between">
             <span class="fw-bold">{{ words.daily_report }}</span>
             <nuxt-link to="/dashboard/reports">{{ words.show_all }} {{ words.reports }}</nuxt-link>
           </p>
           <div class="reports overflow-auto mx-500">
             <div class="report d-flex align-items-center justify-content-between" v-for="i in 6" :key="i">
               <img src="/images/users/2.webp">
               <div class="content">
                 <span class="fw-bold">Menna Elhosiny</span>
                 <p>
                   <span>applied for onclick as flutter developer</span>
                   <span>14/04/2024</span>
                 </p>
               </div>
             </div>
           </div>
         </div>
         <div class="col-lg-6" >
           <p class="d-flex align-items-center justify-content-between">
             <span class="fw-bold">{{ words.last_jobs }}</span>
             <nuxt-link to="/dashboard/jobs">{{ words.show_all }} {{ words.jobs }}</nuxt-link>
           </p>
           <div class="table-data mx-500 overflow-auto">

              <table class="table table-hover table-bordered table-stripped table-responsive text-center">
                <thead>
                  <tr v-if="words.jobs_table">
                    <td v-for="(n,index) in Object.values(words.jobs_table)" :key="index">{{ n }}</td>
                  </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 8" :key="i">
                      <td>onclick</td>
                      <td>Flutter developer</td>
                      <td>
                        <img :class="'circle related-block position-relative '+(i == 1 ? 'mlr-1':'')"
                             src="/images/users/2.webp" v-for="(i,index) in 5"

                             :key="index">
                        <span class="circle position-relative related-block">25</span>
                      </td>
                      <td>14/4/2024</td>
                      <td>
                        <span class="mrl-half cursor-pointer"><i class="bi bi-pencil-square"></i></span>
                        <span class="red cursor-pointer"><i class="bi bi-trash3"></i></span>
                      </td>
                    </tr>
                </tbody>
              </table>

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
  data(){
    return {
      options:{
        chart: {
          type: 'area',
          height: 400,

        },
        stroke: {
          curve: 'smooth',
        },
        series: [{
          name: 'jobs',
          data: [30,40,35,50,49,60,70,91,125,40,60,80]
        }],
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
          }
        },
        xaxis: {
          categories: null,
        }
      },
      users_chart : {
        series: [
          {
          name: '',
          data: [70, 40, 28, 100, 42, 109, 100]
          },
          {
          name: '',
          data: [11, 32, 45, 202, 34, 52, 41]
          },
        ],
        chart: {
          type: 'area',
          height: 400,
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2023", "2024", "2025","2026","2027","2028","2029"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy'
          },
        },
      },
      jobs_chart_pie:{
        series: [44, 55, 41, 17],
        chart: {
          height: 400,
          type: 'donut',
        },
        labels: [],
        chartOptions: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },

      }
    }
  },
  mounted(){
    // ['Jan','Feb','Marc','Apr','May','Jun','July','Aug','Sep','Oct','Nov','Dec']
    setTimeout(()=>{

      this.options.xaxis.categories = this.words.months;

      this.users_chart.series[0].name = this.words.employees;
      this.users_chart.series[1].name = this.words.companies;

      this.jobs_chart_pie.labels.push(this.words.accepted_request);
      this.jobs_chart_pie.labels.push(this.words.rejected_requests);
      this.jobs_chart_pie.labels.push(this.words.top_best_request);
      this.jobs_chart_pie.labels.push(this.words.not_viewed_requests);
      console.log(this.users_chart.series);
      var chart = new ApexCharts(document.querySelector("#chart"), this.options);
      var users_chart = new ApexCharts(document.querySelector("#users_chart"), this.users_chart);
      var jobs_chart = new ApexCharts(document.querySelector("#jobs_chart"), this.jobs_chart_pie);

      chart.render();
      users_chart.render();
      jobs_chart.render();
    },1500)
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
#chart{

}
table{
  tr{
    td{
      span.related-block{
        background-color: $main_color;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        color: white;

      }
    }
  }
}
</style>
