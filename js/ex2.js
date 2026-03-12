function displayText400() {

   let courses = document.getElementsByClassName("400level");

   for (let i = 0; i < courses.length; i++) {
      console.log(courses[i].innerText);
   }

};

displayText400();