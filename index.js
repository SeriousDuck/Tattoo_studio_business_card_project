window.onload = () => {
   const uploadFile = document.getElementById('upload__file');
   const uploadBtn = document.getElementById('upload__btn');
   const uploadText = document.getElementById('upload__text');

   uploadBtn.addEventListener('click', () => {
      uploadFile.click();
   });

   uploadFile.addEventListener('change', () => {
      if(uploadFile.value) {
         uploadText.innerText = uploadFile.value.match(/[\/\\]([\w\d\s\а-я.\-(\)]+)$/)[1];
      }
   });
}