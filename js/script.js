// const milestonesData= JSON.parse(data).data;

// function loadMilestones(){
// const milestones=document.querySelector(".milestones");

// milestones.innerHTML=`${ milestonesData.map(function(milestone1){
//   return `<div class="milestone border-b">
//   <div class="flex">
//     <div class="checkbox"><input type="checkbox" /></div>
//     <div>
//       <p>
//       ${milestone1.name}
//         <span> <i class="fas fa-chevron-down"></i> </span>
//       </p>
//     </div>
//   </div>
//   <div class="hidden_panel">
//     <div class="module border-b">
//       <p>Module Name</p>
//     </div>
//   </div>
// </div>`
// }).join("")}`
// }
// loadMilestones();


// const milestonesData= JSON.parse(data).data;
// function loadMilestones(){

//   const milestones=document.querySelector('.milestones');
//   milestones.innerHTML= `${milestonesData.map(function(hasan){
//     return `<div class="milestone border-b">
//     <div class="flex">
//       <div class="checkbox"><input type="checkbox" /></div>
//       <div>
//         <p>
//          ${hasan.name}
//           <span> <i class="fas fa-chevron-down"></i> </span>
//         </p>
//       </div>
//     </div>
//     <div class="hidden_panel">
//       <div class="module border-b">
//         <p>Module Name</p>
//       </div>
//     </div>
//   </div>`
//   }).join("")} `
// }

// loadMilestones()

const milestonesData=JSON.parse(data).data;

function milestone(){
  const milestones=document.querySelector(".milestones");
  milestones.innerHTML=`${(milestonesData.map(function(hasan){
   return `<div class="milestone border-b">
   <div class="flex">
     <div class="checkbox"><input type="checkbox" /></div>
     <div onclick="openMilstone(this, ${hasan._id})">
        <p>
        ${hasan.name}
          <span> <i class="fas fa-chevron-down"></i> </span>
        </p>
     </div>
   </div>
   <div class="hidden_panel">
     ${hasan.modules.map(function(hussain){
  return `<div class="module border-b">
  <p> ${hussain.name}</p>
</div>`
     })};
   </div>
 </div>`;
  })).join("")}`
}
function openMilstone(milestoneElement, id){
  const currentPanel=milestoneElement.parentNode.nextElementSibling;
  const active=document.querySelector(".active");
  if(active && !milestoneElement.classList.contains("active")){
    active.classList.remove('active');
  }
 milestoneElement.classList.toggle("active");



 const showPanel=document.querySelector(".show");
 if( !currentPanel.classList.contains("show") && showPanel)
   showPanel.classList.remove("show");


  currentPanel.classList.toggle("show");

  showMilstone(id);
}

function showMilstone(id){
 const milestoneImage= document.querySelector(".milestoneImage");
 const name= document.querySelector(".title");
 const details= document.querySelector(".details");


 milestoneImage.style.opacity="0";
 milestoneImage.src= milestonesData[id].image;
 name.innerText= milestonesData[id].name;
 details.innerText= milestonesData[id].description;

}


const milestoneImage=document.querySelector(".milestoneImage");
milestoneImage.onload= function(){

   this.style.opacity="1";
}
milestone();



