<template>
  <div class="notifications current_page">
    <div class="container mt-4 mb-4">
      <div v-if="lang == 'en'">
        <h2 class="mb-4">Terms of Service</h2>
        <p>

          By using Job Definitions, you agree to comply with and be bound by the following Terms of Service. If you disagree with any part of these terms, please refrain from using our website.<br><br>

          <strong>Access to the Website:</strong><br>
          Access to Job Definitions is provided on a temporary basis, and we reserve the right to withdraw or amend the services we provide without prior notice. We will not be liable if, for any reason, our website is unavailable at any time or for any period.<br><br>

          <strong>Intellectual Property:</strong><br>
          The content on Job Definitions, including text, graphics, logos, and images, is protected by intellectual property laws and is the property of Job Definitions or its licensors. You may not reproduce, modify, distribute, or republish any content without our prior written consent.<br><br>

          <strong>User Conduct:</strong><br>
          You agree to use Job Definitions only for lawful purposes and in a manner that does not infringe upon the rights of others. You must not engage in any conduct that could disable, damage, or impair the functionality of our website or interfere with other users' access.<br><br>

          <strong>User Contributions:</strong><br>
          You may have the opportunity to contribute content to Job Definitions, including job descriptions, tasks, and other relevant information. By submitting user contributions, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, publish, and distribute the content.<br><br>

          <strong>Limitation of Liability:</strong><br>
          To the fullest extent permitted by law, Job Definitions and its affiliates shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our website or services.


        </p>
      </div>
      <div v-else>
        <h2 class="mb-4">شروط الخدمة:</h2>
        <p>
          باستخدام تعريفات الوظيفة، فإنك توافق على الالتزام بشروط الخدمة التالية والالتزام بها. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى الامتناع عن استخدام موقعنا.<br><br>

          <strong>الوصول إلى الموقع:</strong><br>
          يتم توفير الوصول إلى تعريفات الوظيفة على أساس مؤقت، ونحن نحتفظ بالحق في سحب أو تعديل الخدمات التي نقدمها دون إشعار مسبق. لن نكون مسؤولين إذا كان موقعنا غير متاح لأي سبب من الأسباب في أي وقت أو لأي فترة.<br><br>

          <strong>الملكية الفكرية:</strong><br>
          المحتوى الموجود في Job Definitions، بما في ذلك النصوص والرسومات والشعارات والصور، محمي بموجب قوانين الملكية الفكرية وهو ملك لشركة Job Definitions أو الجهات المرخصة لها. لا يجوز لك إعادة إنتاج أو تعديل أو توزيع أو إعادة نشر أي محتوى دون الحصول على موافقة كتابية مسبقة منا.<br><br>

          <strong>سلوك المستخدم:</strong><br>
          أنت توافق على استخدام تعريفات الوظيفة فقط للأغراض القانونية وبطريقة لا تنتهك حقوق الآخرين. يجب عليك عدم الانخراط في أي سلوك قد يؤدي إلى تعطيل أو إتلاف أو إضعاف وظائف موقعنا أو التدخل في وصول المستخدمين الآخرين.
          <br><br>

          <strong>مساهمات المستخدم:</strong><br>
          قد تتاح لك الفرصة للمساهمة بالمحتوى في تعريفات الوظيفة، بما في ذلك الأوصاف الوظيفية والمهام والمعلومات الأخرى ذات الصلة. من خلال تقديم مساهمات المستخدم، فإنك تمنحنا ترخيصًا غير حصري وعالميًا وخاليًا من حقوق الملكية لاستخدام المحتوى وإعادة إنتاجه وتعديله ونشره وتوزيعه.          <br><br>
          <strong>تحديد المسؤولية:</strong><br>
          إلى أقصى حد يسمح به القانون، لن تتحمل شركة Job Definitions والشركات التابعة لها المسؤولية عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية تنشأ عن أو ترتبط بأي شكل من الأشكال باستخدامك لموقعنا الإلكتروني أو خدماتنا.
          <br><br>


        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'terms',
  data(){
    return {
      lang:'ar',
    }
  },
  head() {
    return {
      title: 'الاحكام | Terms',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'الاحكام المتلعقة بالوصف الوظيفي ',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'privacy ,  jd , JD , jd definitions',
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
