//education add and clear button 
//add button
let educationCount = 10000;
let education_btn = document.getElementById("add-education");
let education_block = document.getElementById("education-data-1");

education_btn.addEventListener("click", () => {
  let educationDiv = document.createElement("div");
  educationCount++;

  let educationTemplate = `
  <input type="text"id="college-name" class="college-name-class" placeholder="enter name here" required  />
  <input type="text" id="degree-name" class="degree-name-class" placeholder="enter degree/diploma" required />
  <input type="text" id="field-name" class="field-name-class" />
  <input type="date" id="year-name" class="year-name-class" />
  <input type="text" id="grades" class="grades-class" placeholder="enter your grade" required />
  <button id="${educationCount}" onclick="removeEducation(this)">Clear</button>
   `;
  educationDiv.id = `education-data-${educationCount}`;
  educationDiv.className = 'flex-div';
  educationDiv.insertAdjacentHTML('beforeend', educationTemplate);
  education_block.appendChild(educationDiv);
});
console.log(`eduction-count: ${educationCount}`);
//clear button
document.getElementById("10000").style.display = "none";
function removeEducation(button) {
  console.log("button :" + button.id);
  if (button.id !== 10000) {
    let num3 = button.id;
    let row3 = document.getElementById('education-data-' + num3);
    row3.remove();
    console.log(button.id);
  }
}


//skills add and clear button 
let length=1;
let skill_count = 1001;
let skill_btn = document.getElementById("add_skills");
let skill_block = document.getElementById("skills-data-1");

skill_btn.addEventListener('click', ()=>{
  let skill_div = document.createElement('div');
  skill_count = skill_count +1;
  let skillTemplate = `
  <input type="text" id="skill-name" class="skill-name" placeholder="Add skill here">
  <button id="${skill_count}" onclick="removeSkill(this)">Clear</button>
  `
  skill_div.id =`skill-data-${skill_count}`;
  skill_div.insertAdjacentHTML('beforeend', skillTemplate);
  skill_block.appendChild(skill_div);
  length++;
})

// document.getElementById("1001").style.display = "none";
function removeSkill(button){
  if(button.id != 1001){
  let num2 = button.id;
  let row2 = document.getElementById('skill-data-'+ num2);
  row2.remove();
  }
}

//experience add and clear button 
//add button
let flag = 100;
let experience_btn = document.getElementById("add_experience");
let experience_block = document.getElementById("experience-data-1");

experience_btn.addEventListener("click", () => {
  let experienceDiv = document.createElement("div");
  flag = flag + 1;
  let experienceTemplate = `
    <input type="month" name="experience_start_date" id="experience_start_date" class="experience-sdate-class"/>
    <input type="month" name="experience_till_date" id="experience_till_date" class="experience-tdate-class"/>
    <input type="text" name="company name" id="company_name" class="company-name" placeholder="Enter company name"/>
    <button id="${flag}" onclick="removeExperience(this)">Clear</button>
    `;
  experienceDiv.id = `experience-data-${flag}`;
  experienceDiv.insertAdjacentHTML('beforeend', experienceTemplate);
  experience_block.appendChild(experienceDiv);

})

//clear button
document.getElementById("100").style.display = "none";
function removeExperience(button) {
  if (button.id !== 100) {
    let num = button.id;
    let row = document.getElementById('experience-data-' + num);
    row.remove();
  }
}

//certification add and clear button 
let count = 1;
let certificate_btn = document.getElementById("add_certificate");
let certificate_block = document.getElementById("certificate-data-1");

certificate_btn.addEventListener("click", () => {
  let certificate_Div = document.createElement("div");
  count = count + 1;
  let certificateTemplate = `
        <input type="date" name="Certification_date" id="Certification_date" class="certificate-date-class"/>
        <input type="text" name="Certification_feild" id="Certification_feild" class="certificate-field-class"/>
        <input type="text" name="Certification_authority" id="Certification_authority" class="certificate-auth-class"/>
        <button id="${count}" onclick="removeCertificate(this)">Clear</button>`;
  certificate_Div.id = `certificate-data-${count}`;
  certificate_Div.insertAdjacentHTML('beforeend', certificateTemplate);
  certificate_block.appendChild(certificate_Div);
})

document.getElementById("1").style.display = "none";
function removeCertificate(button) {
  if (button.id != 1) {
    let num = button.id;
    let row = document.getElementById('certificate-data-' + num);
    row.remove();
  }
}


//template button
let selected = 0;
let template_btn1 = document.getElementById("t1");
template_btn1.addEventListener("click",() => {
  selected=1;
  template_btn1.style.backgroundColor = "black";
  template_btn2.style.backgroundColor = "buttonface";
});
let template_btn2 = document.getElementById("t2");
template_btn2.addEventListener('click',() => {
  selected=2;
  template_btn1.style.backgroundColor = "buttonface";
  template_btn2.style.backgroundColor = "black";
});

//generate button
let isButtonVisible=true;



let generate_btn = document.getElementById("generate-btn");
generate_btn.addEventListener("click", () => {
  isButtonVisible=true;
  validations();
  if(isButtonVisible===true){
    local_storage();
  if(selected==1)
  goto_temp1();
  else if(selected==2)
  goto_temp2();
  else
  alert("select any one template!");
  }
});


function goto_temp1(){
  window.location.href="template1.html";
}
function goto_temp2(){
  window.location.href="template2.html";
}
