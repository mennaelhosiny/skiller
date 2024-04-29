export default{
  name:'copy_content',
  methods:{
    search_jobs(form1,form2){
      var combinedData = new FormData();


      // Get data from form 1
      var formData1 = new FormData(form1);
      for (var pair of formData1.entries()) {
        console.log(pair);
        combinedData.append(pair[0], pair[1]);
      }

      // Get data from form 2
      var formData2 = new FormData(form2);
      for (var pair of formData2.entries()) {
        console.log(pair);
        combinedData.append(pair[0], pair[1]);
      }
      return combinedData;

    }
  }
}


