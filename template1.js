// personal info
let personInfo = JSON.parse(localStorage.getItem("personalDetailsArray"));
document.getElementById("FName").innerText = personInfo[0];
document.getElementById("LName").innerText = " " + personInfo[1];
document.getElementById("email").innerHTML = `<p id="email"><i class="fa-solid fa-envelope"></i>${personInfo[2]}</p>`;
document.getElementById("address").innerHTML = `<p id="address"><i class="fa-solid fa-location-dot"></i>${personInfo[4]}</p>`;
document.getElementById("github").innerHTML = `<p id="github"><i class="fa-brands fa-github"></i><a href="https://github.com/${personInfo[7]}" target="_blank">${personInfo[7]}</a></p>`;
document.getElementById("linkedIn").innerHTML = `<p id="linkedIn"><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/${personInfo[3]}" target="_blank">${personInfo[3]}</a></p>`;
document.getElementById("phone").innerHTML = `<p id="phone"><i class="fa-solid fa-phone-volume"></i>${personInfo[5]}</p>`;
document.getElementById("website").innerHTML = `<p id="website"><i class="fa-solid fa-globe"></i><a href="${personInfo[6]}" target="_blank">${personInfo[6]}</a.</p>`;

//about me
document.getElementById("aboutme").innerHTML = `<p>${localStorage.getItem(
  "aboutme"
)}</p>`;
localStorage.getItem("data");

//education
let eduData = JSON.parse(localStorage.getItem("educationArr"));
let tempEdu = document.getElementById("education");
for (let i = 0; i < eduData.length; i++) {
  let eduDiv = document.createElement("div");
  eduDiv.className = "eduDiv";
  let templateEdu = `<div class="eduDiv">
    <h5 id="deg" class="deg">${eduData[i].degree}</h5>
    <p>${eduData[i].sName}</p>
    <p>Field of Study(s): ${eduData[i].fields}</p>
    <p>Grades: ${eduData[i].grades}</p>
    <p>Passing Year: ${eduData[i].passingYear}</p>
</div>`;

  eduDiv.insertAdjacentHTML("beforeend", templateEdu);
  tempEdu.appendChild(eduDiv);
}

//skills
let skillsData = JSON.parse(localStorage.getItem("skillArr"));
let tempSkills = document.getElementById("skills");

for (let i = 0; i < skillsData.length; i++) {
  let skillsDiv = document.createElement("div");
  skillsDiv.className = "skills-div";
  let skillsTemplate = `
    <div class="s-div">
    <p class="skills-element">${skillsData[i].skillName}</p
    >
    </div>
    `;
  skillsDiv.insertAdjacentHTML("beforeend", skillsTemplate);
  tempSkills.appendChild(skillsDiv);
}

//experience
let experienceData = JSON.parse(localStorage.getItem("experienceArr"));
let tempExperience = document.getElementById("experience");

if (experienceData[0].startDate != "") {
  for (let i = 0; i < experienceData.length; i++) {
    let experienceDiv = document.createElement("div");
    experienceDiv.className = "exp-div";
    let experienceTemplate = `
        <div class="exp-div">
        <p>${experienceData[i].companyName}</p>
        <p>${experienceData[i].startDate} to ${experienceData[i].tillDate}</p>
        </div>
        `;
    experienceDiv.insertAdjacentHTML("beforeend", experienceTemplate);
    tempExperience.appendChild(experienceDiv);
  }
} else {
  let exp_div = document.getElementById("experience-details");
  exp_div.style.visibility = "hidden";
}

//certificate
let certificateData = JSON.parse(localStorage.getItem("certificateArr"));
let tempCertificate = document.getElementById("certificate");

for (let i = 0; i < certificateData.length; i++) {
  let certificateDiv = document.createElement("div");
  certificateDiv.className = "certificateDiv";
  let certificateTemplate = `
                        <div class="certificateDiv">
                            <h5>${certificateData[i].certificateField}</h5>
                            <p>${certificateData[i].certificateAuthority}</p>
                            <p>${certificateData[i].certificateDate}</p>
                        </div>
    `;
  certificateDiv.insertAdjacentHTML("beforeend", certificateTemplate);
  tempCertificate.appendChild(certificateDiv);
}

document.getElementById("container").style.width = "99%";

var delayInMilliseconds = 1000; //1 second

setTimeout(function () {
  document.getElementById("container").style.height = "99.5vh";
  document.getElementById("toTemplate2Button").style.visibility = "hidden";

  window.print();
}, delayInMilliseconds);

setTimeout(function () {
  document.getElementById("container").style.width = "50%";
  document.getElementById("container").style.height = "auto";
  document.getElementById("name");
  document.getElementById("container").style.boxShadow = "8px 8px 19px black";
  document.getElementById("toTemplate2Button").style.visibility = "visible";
}, delayInMilliseconds);

let template_button2 = document.getElementById("toTemplate2Button");

template_button2.addEventListener("click", () => {
  window.location.href = "template2.html";
});
