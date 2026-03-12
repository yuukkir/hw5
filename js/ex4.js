const addLink = () => {

   let list = document.getElementById("links");
   let isLink = document.getElementById("is");
   let newLi = document.createElement("li");
   let newA = document.createElement("a");

   newA.href = "https://www.csulb.edu/college-of-business";
   newA.innerText = "College of Business";

   newLi.appendChild(newA);

   list.insertBefore(newLi, isLink);

};

addLink();