//local storage function
function local_storage() {

  //personal info
  const Fname = document.getElementById('f-name').value;
  localStorage.setItem("FName", Fname);
  const LName = document.getElementById('l-name').value;
  localStorage.setItem("LName", LName);
  const email = document.getElementById("email").value;
  localStorage.setItem("email", email);
  const linkedIn = document.getElementById("linkedIn").value;
  localStorage.setItem("linkedIn", linkedIn);
  const address = document.getElementById("address").value;
  localStorage.setItem("address", address);
  const phone = document.getElementById("phone").value;
  localStorage.setItem("phone", phone);
  const website = document.getElementById("website").value;
  localStorage.setItem("website", website);
  const github = document.getElementById("github").value;
  localStorage.setItem("github", github);

  //about me
  const aboutme = document.getElementById("aboutme").value;
  localStorage.setItem("aboutme", aboutme);


  //education

  let noOfEducation = document.getElementsByClassName('college-name-class').length;
  let educationArr = new Array(noOfEducation);

  for (let i = 0; i < noOfEducation; i++) {
    educationArr[i] = new Education("", "", "", "", -1);
  }

  let index = 0;
  Array.from(document.getElementsByClassName('college-name-class')).forEach((ele) => {
    educationArr[index].sName = ele.value;
    index++;
  });

  index = 0;
  //college-degree
  Array.from(document.getElementsByClassName('degree-name-class')).forEach((eley) => {
    educationArr[index].degree = eley.value;
    index++;
  });

  index =0;
  Array.from(document.getElementsByClassName('field-name-class')).forEach((eley) => {
    educationArr[index].fields = eley.value;
    index++;
  });

  index = 0;
  Array.from(document.getElementsByClassName('year-name-class')).forEach((eley) => {
    educationArr[index].passingYear = eley.value;
    index++;
  });

  index = 0;
  Array.from(document.getElementsByClassName('grades-class')).forEach((eley) => {
    educationArr[index].grades = parseInt(eley.value);
    index++;
  });
  localStorage.setItem("educationArr", JSON.stringify(educationArr));


//skills
let noOfSkills = length;

console.log("no Of skills: " +noOfSkills);

let skillArr = new Array(noOfSkills);
for (let i = 0; i <noOfSkills; i++) {
  skillArr[i] = new Skills("");
}
let sIndex = 0;
Array.from(document.getElementsByClassName("skill-name")).forEach((ele) => {
  skillArr[sIndex].s_kill  = ele.value;
  sIndex++;
}); 
localStorage.setItem("skillArr", JSON.stringify(skillArr));


  //experience
  let noOfExperience = document.getElementsByClassName("experience-sdate-class").length;
  let experienceArr = new Array(noOfExperience);

  for (let i = 0; i < noOfExperience; i++) {
    experienceArr[i] = new Experience("", "", "");
  }

  let eIndex = 0;
  //start date
  Array.from(document.getElementsByClassName("experience-sdate-class")).forEach((ele) => {
    experienceArr[eIndex].sDate = ele.value;
    eIndex++;
  });

  eIndex=0;
  //till date
  Array.from(document.getElementsByClassName("experience-tdate-class")).forEach((ele) => {
    experienceArr[eIndex].tDate = ele.value;
    eIndex++;
  });

  eIndex=0;
  //till date
  Array.from(document.getElementsByClassName("company-name")).forEach((ele) => {
    experienceArr[eIndex].cName = ele.value;
    eIndex++;
  });

  localStorage.setItem("experienceArr", JSON.stringify(experienceArr));



  // certificate

  let noOfCertificate = document.getElementsByClassName('certificate-date-class').length;
  let certificateArr = new Array(noOfCertificate); 
  for (let i = 0; i < noOfCertificate; i++) {
    certificateArr[i] = new Certificate("", "", "");
  }

  let CIndex = 0;
  Array.from(document.getElementsByClassName('certificate-date-class')).forEach((ele) => {
    certificateArr[CIndex].CDate = ele.value;
    CIndex++;
  });
  CIndex =0;
  Array.from(document.getElementsByClassName('certificate-auth-class')).forEach((ele) => {
    certificateArr[CIndex].CAuth = ele.value;
    CIndex++;
  });
  CIndex =0;
  Array.from(document.getElementsByClassName('certificate-field-class')).forEach((ele) => {
    certificateArr[CIndex].CField = ele.value;
    CIndex++;
  });
  localStorage.setItem("certificateArr", JSON.stringify(certificateArr));
}