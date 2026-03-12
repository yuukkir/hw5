function changeParagraphs() {

   let paragraphs = document.getElementsByTagName("p");

   for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.fontWeight = "bold";
      paragraphs[i].style.backgroundColor = "yellow";
   }

};

changeParagraphs();