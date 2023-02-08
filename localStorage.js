//local storage function
function local_storage() {

  //personal info
  let personalDetailsArray = new Array(8);
  personalDetailsArray[0] = document.getElementById('firstName').value;
  personalDetailsArray[1] = document.getElementById('lastName').value;
  personalDetailsArray[2] = document.getElementById('email').value;
  personalDetailsArray[3] = document.getElementById('linkedIn').value;
  personalDetailsArray[4] = document.getElementById('address').value;
  personalDetailsArray[5] = document.getElementById('phone').value;
  personalDetailsArray[6] = document.getElementById('website').value;
  personalDetailsArray[7] = document.getElementById('github').value;

  localStorage.setItem("personalDetailsArray", JSON.stringify(personalDetailsArray));

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

let skillArr = new Array(noOfSkills);
for (let i = 0; i <noOfSkills; i++) {
  skillArr[i] = new Skills("");
}
let skillindex = 0;
Array.from(document.getElementsByClassName("skill-name")).forEach((ele) => {
  skillArr[skillindex].skillName  = ele.value;
  skillindex++;
}); 
localStorage.setItem("skillArr", JSON.stringify(skillArr));


  //experience
  let noOfExperience = document.getElementsByClassName("experience-sdate-class").length;
  let experienceArr = new Array(noOfExperience);

  for (let i = 0; i < noOfExperience; i++) {
    experienceArr[i] = new Experience("", "", "");
  }

  let experienceIndex = 0;
  //start date
  Array.from(document.getElementsByClassName("experience-sdate-class")).forEach((ele) => {
    experienceArr[experienceIndex].startDate = ele.value;
    experienceIndex++;
  });

  experienceIndex=0;
  //till date
  Array.from(document.getElementsByClassName("experience-tdate-class")).forEach((ele) => {
    experienceArr[experienceIndex].tillDate = ele.value;
    experienceIndex++;
  });

  experienceIndex=0;
  //till date
  Array.from(document.getElementsByClassName("company-name")).forEach((ele) => {
    experienceArr[experienceIndex].companyName = ele.value;
    experienceIndex++;
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
    certificateArr[CIndex].certificateDate = ele.value;
    CIndex++;
  });
  CIndex =0;
  Array.from(document.getElementsByClassName('certificate-auth-class')).forEach((ele) => {
    certificateArr[CIndex].certificateAuthority = ele.value;
    CIndex++;
  });
  CIndex =0;
  Array.from(document.getElementsByClassName('certificate-field-class')).forEach((ele) => {
    certificateArr[CIndex].certificateField = ele.value;
    CIndex++;
  });
  localStorage.setItem("certificateArr", JSON.stringify(certificateArr));
}