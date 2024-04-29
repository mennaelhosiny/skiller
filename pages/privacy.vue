<template>
  <div class="notifications current_page">
    <div class="container mt-4 mb-4">
       <div v-if="lang == 'en'">
         <h2 class="mb-4">Privacy</h2>
         <p>
           At Job Definitions, the privacy of our visitors is of utmost importance to us. This Privacy Policy document outlines the types of personal information that is received and collected by Job Definitions and how it is used.<br><br>

           <strong>Information Collection and Use:</strong><br>
           When you visit Job Definitions, we automatically receive and record certain information from your computer and browser, including your IP address, cookie information, and the pages you visit. We use this information to analyze trends, administer the site, track user movements, and gather demographic information for aggregate use. This information is not linked to any personally identifiable information.<br><br>

           <strong>Cookies:</strong><br>
           Job Definitions uses cookies to store information about visitors' preferences, record user-specific information, and customize web page content based on visitors' browser type or other information that the visitor sends via their browser.<br><br>

           <strong>Information Sharing:</strong><br>
           We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share your information with trusted third-party service providers who assist us in operating our website and conducting our business, as long as those parties agree to keep this information confidential.<br><br>

           <strong>Security:</strong><br>
           We take appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.<br><br>
         </p>
       </div>
       <div v-else>
         <h2 class="mb-4">سياسة الخصوصية</h2>
         <p>
           في تعريفات الوظيفة، نحن ملتزمون بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية جمع معلوماتك الشخصية واستخدامها والكشف عنها وحمايتها عند زيارتك لموقعنا الإلكتروني واستخدام خدماتنا. من خلال الوصول إلى تعريفات الوظيفة أو استخدامها، فإنك توافق على الممارسات الموضحة في سياسة الخصوصية هذه.<br><br>

           <strong>المعلومات التي نجمعها:</strong><br>
           قد نقوم بجمع معلومات شخصية، مثل اسمك وعنوان بريدك الإلكتروني والتفاصيل الأخرى ذات الصلة عند تسجيل حساب أو إرسال معلومات عبر موقعنا الإلكتروني. نقوم أيضًا بجمع معلومات غير شخصية، مثل عنوان IP الخاص بك وسلوك التصفح، لتحسين خدماتنا وتحسين تجربة المستخدم الخاصة بك.<br><br>

           <strong>استخدام المعلومات:</strong><br>
           نحن نستخدم المعلومات التي تم جمعها لتوفير خدماتنا وتخصيصها، والرد على الاستفسارات والطلبات، وتحسين وظائف موقعنا، والتواصل معك بشأن التحديثات والمعلومات ذات الصلة. يجوز لنا أيضًا استخدام البيانات المجمعة والمجهولة المصدر لأغراض إحصائية وتحليلية.<br><br>

           <strong>مشاركة المعلومات:</strong><br>
           نحن لا نبيع أو نتاجر أو نؤجر معلوماتك الشخصية لأطراف ثالثة. ومع ذلك، قد نشارك معلوماتك مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل موقعنا وتقديم خدماتنا. يجوز لنا أيضًا الكشف عن معلوماتك عندما يقتضي القانون ذلك أو لحماية حقوقنا أو سلامتنا أو ممتلكاتنا.
           <br><br>

           <strong>أمن البيانات:</strong><br>
           نحن نستخدم إجراءات أمنية متوافقة مع معايير الصناعة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الكشف عنها أو تغييرها أو إتلافها. ومع ذلك، يرجى ملاحظة أنه لا توجد وسيلة نقل عبر الإنترنت أو التخزين الإلكتروني آمنة بنسبة 100%، ولا يمكننا ضمان الأمان المطلق.
<br><br>
           <strong>روابط الطرف الثالث:</strong><br>
           قد يحتوي موقعنا على روابط لمواقع أو خدمات تابعة لجهات خارجية. نحن لسنا مسؤولين عن ممارسات الخصوصية أو المحتوى الخاص بهذه الأطراف الثالثة. نحن نشجعك على مراجعة سياسات الخصوصية لتلك المواقع قبل تقديم أي معلومات شخصية.
           <br><br>

           <strong>تحديثات سياسة الخصوصية:</strong><br>
           نحن نحتفظ بالحق في تحديث أو تعديل سياسة الخصوصية هذه في أي وقت. أي تغييرات ستكون سارية فور نشرها على موقعنا. وتقع على عاتقك مسؤولية مراجعة سياسة الخصوصية بشكل دوري لمعرفة أي تحديثات.
         </p>
       </div>

       <pre v-else></pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'privacy',
  data(){
    return {
      lang:'ar',
    }
  },
  head() {
    return {
      title: 'سياسة الخصوصية | privacy',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'سياسة الخصوصية المتلعقة بالوصف الوظيفي ',
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
