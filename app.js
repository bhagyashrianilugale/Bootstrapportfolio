const allLinks = document.querySelectorAll(".tab-links");
const tabs = document.querySelectorAll(".tab-contents");


function openTab(e){
  allLinks.forEach((e)=>{
      e.classList.remove("active");
    });

  tabs.forEach((e)=>{
      e.classList.remove("active");
    });

let tabContent = document.getElementById(e);
tabContent.classList.add("active");
};


    
