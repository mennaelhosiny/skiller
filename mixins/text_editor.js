export default{
  mounted(){
    for (let editor of document.querySelectorAll('#__nuxt .editor')) {
      ClassicEditor
        .create(editor, {
          removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'Link',
            'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar',
            'ImageUpload', 'MediaEmbed'],
        })
        .catch(error => {
          console.error(error);
        });

    }
  }
}


