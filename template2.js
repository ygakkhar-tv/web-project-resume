// personal info
document.getElementById('FName').innerText = localStorage.getItem("FName").toUpperCase();
document.getElementById('LName').innerText = " " + localStorage.getItem("LName").toUpperCase();
document.getElementById("email").innerHTML = `<p id="email"><i class="fa-solid fa-envelope"></i>${localStorage.getItem("email").toUpperCase()}</p>`
document.getElementById("address").innerHTML = `<p id="address"><i class="fa-solid fa-location-dot"></i>${localStorage.getItem("address").toUpperCase()}</p>`;
document.getElementById("github").innerHTML = `<p id="github"><i class="fa-brands fa-github"></i><a href="https://github.com/${localStorage.getItem("github")}" target="_blank">${localStorage.getItem("github").toUpperCase()}</a></p>`;
document.getElementById("linkedIn").innerHTML = `<p id="linkedIn"><i class="fa-brands fa-linkedin"></i><a href="https://www.linkedin.com/in/${localStorage.getItem("linkedIn")}" target="_blank">${localStorage.getItem("linkedIn").toUpperCase()}</a></p>`;
document.getElementById("phone").innerHTML = `<p id="phone"><i class="fa-solid fa-phone-volume"></i>${localStorage.getItem("phone")}</p>`;
document.getElementById("website").innerHTML = `<p id="website"><i class="fa-solid fa-globe"></i><a href="${localStorage.getItem("website")}" target="_blank">${localStorage.getItem("website").toUpperCase()}</a.</p>`;

//about me
document.getElementById("aboutme").innerHTML = `<p>${localStorage.getItem("aboutme")}</p>`;

//education
let eduData = JSON.parse(localStorage.getItem('educationArr'));
console.log(eduData);
let tempEdu = document.getElementById("education-data");
for (let i = 0; i < eduData.length; i++) {
    let eduDiv = document.createElement('div');
    eduDiv.className = 'eduDiv';
    let templateEdu = `
<div class="eduDiv">
    <div class="left-1">
        <p>${eduData[i].passingYear}</p>
    </div>
    <div class="right-1">
        <h5>${eduData[i].degree}</h5>
        <p>${eduData[i].sName}</p>
        <p>${eduData[i].fields}</p>
        <p>${eduData[i].grades}</p>
        <br>
    </div>
</div>
`;

    eduDiv.insertAdjacentHTML('beforeend', templateEdu);
    tempEdu.appendChild(eduDiv);

}

//skills
let skillsData = JSON.parse(localStorage.getItem('skillArr'));
let tempSkills = document.getElementById('skill-data');

for (let i = 0; i < skillsData.length; i++) {
    let skillsDiv = document.createElement('div');
    skillsDiv.className = 'skills-div';
    let skillsTemplate = `
    <div class="s-div">
    <p class="skills-element">${skillsData[i].s_kill}</p>

    </div>
    `;
    skillsDiv.insertAdjacentHTML('beforeend',skillsTemplate);
    tempSkills.appendChild(skillsDiv);
}



//experience
let experienceData = JSON.parse(localStorage.getItem('experienceArr'));
let tempExperience = document.getElementById('experience-data');

if(experienceData[0].sDate != ""){
    for (let i = 0; i < experienceData.length; i++) {
        let experienceDiv = document.createElement('div');
        experienceDiv.className = 'exp-div';
        let experienceTemplate = `
        <div class="exp-div">
            <div class="left-1">
                <p>${experienceData[i].sDate} to ${experienceData[i].tDate}</p>
            </div>
            <div class="right-1">
                <h5>${experienceData[i].cName}</h5>
            </div>
        </div>
        `;
        experienceDiv.insertAdjacentHTML('beforeend',experienceTemplate);
        tempExperience.appendChild(experienceDiv);
    }
}
else{
    let exp_div = document.getElementById('experience-details');
    exp_div.style.visibility = "hidden";
}



//certificate
let certificateData = JSON.parse(localStorage.getItem('certificateArr'));
let tempCertificate = document.getElementById('certificate-data');

for (let i = 0; i < certificateData.length; i++) {
    let certificateDiv = document.createElement('div');
    certificateDiv.className = 'certificateDiv';
    let certificateTemplate = `
                        <div class="certificateDiv">
                            <h5>${certificateData[i].CField}</h5>
                            <p>${certificateData[i].CAuth}</p>
                            <p>${certificateData[i].CDate}</p>
                        </div>
    `;
    certificateDiv.insertAdjacentHTML('beforeend',certificateTemplate);
    tempCertificate.appendChild(certificateDiv);
}
document.getElementById("container").style.width="99%";


var delayInMilliseconds = 1000; //1 second

setTimeout(function() {
    
    window.print();
    }, delayInMilliseconds);

setTimeout(function() {
    document.getElementById("container").style.width="50%";
    document.getElementById("container").style.boxShadow="8px 8px 19px black";

    
}, delayInMilliseconds);
