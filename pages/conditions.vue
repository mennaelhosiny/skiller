<template>
  <div class="notifications current_page">
    <div class="container mt-4 mb-4">
      <div v-if="lang == 'en'">
        <h2 class="mb-4">User Conditions:</h2>
        <p>
          When using Job Definitions, you agree to the following user conditions:
        </p>
        <ol>
          <li>You will use the website solely for personal and non-commercial purposes.</li>
          <li>You will not copy, reproduce, modify, or distribute any content from the website without prior written consent.</li>
          <li>You will not engage in any activity that may disrupt or interfere with the proper functioning of the website.</li>
          <li>You will not attempt to gain unauthorized access to any part of the website or its systems.</li>
          <li>You will not use the website to transmit any harmful or malicious content, including viruses or malware.</li>
          <li>You will not use the website to engage in any illegal or unethical activities.</li>
        </ol>
      </div>
      <div v-else>
        <h2 class="mb-4">سياسة المستخدم</h2>
        <p>
          عند استخدام تعريفات الوظيفة، فإنك توافق على شروط المستخدم التالية:
        </p>
        <ol>
          <li>سوف تستخدم الموقع فقط للأغراض الشخصية وغير التجارية.</li>
          <li>لا يجوز لك نسخ أو إعادة إنتاج أو تعديل أو توزيع أي محتوى من الموقع دون موافقة كتابية مسبقة.</li>
          <li>لن تشارك في أي نشاط قد يعطل أو يتعارض مع الأداء السليم للموقع.</li>
          <li>لن تحاول الوصول غير المصرح به إلى أي جزء من الموقع أو أنظمته.</li>
          <li>لن تستخدم الموقع لنقل أي محتوى ضار أو ضار، بما في ذلك الفيروسات أو البرامج الضارة.</li>
          <li>لن تستخدم الموقع للمشاركة في أي أنشطة غير قانونية أو غير أخلاقية.</li>
        </ol>
      </div>

      <pre v-else></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conditions',
  data(){
    return {
      lang:'ar',
    }
  },
  head() {
    return {
      title: 'الشروط | conditions',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: ' الشروط المتعلقة بموقع الوصف الوظيفي',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'user conditions , الشروط',
        }
      ],

    }
  },

  mounted() {
    if(localStorage.hasOwnProperty('lang') && localStorage.lang == 'en'){
      this.lang = 'en';
    }
  }
}
</script>

<style lang="scss">
@import "~style/variables";

</style>
