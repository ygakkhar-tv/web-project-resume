//valid email function
function valid_email(email) {
  var mailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!mailFormat.test(email)) {
    focus_func(document.getElementById("email"));
    isButtonVisible = false;
    document.getElementById("email").style.border = "1px solid red";
    document.getElementById("email-para").style.visibility = "visible";

  } 
  document.getElementById("email").addEventListener('change', ()=>{
    document.getElementById("email").style.border = "1px solid black";
    document.getElementById("email-para").style.visibility = "hidden";
  })

}

//generate button

//focus function
function focus_func(elem) {
  elem.style.border = "2px solid red";
  elem.focus();
}

//validation function
function validations() {
  //valid first name
  const f_name = document.getElementById("firstName");
  var FName = /^[a-zA-Z]+[a-zA-Z]+$/;
  if (!f_name.value.match(FName) || f_name.value.length < 4) {
    document.getElementById("fname-para").style.visibility = "visible";
    document.getElementById("firstName").style.border = "1px solid red";
  } 
  f_name.addEventListener('change', ()=>{
    document.getElementById("firstName").style.border = "1px solid black";
    document.getElementById("fname-para").style.visibility = "hidden";
  })
 

  //valid last name
  const l_name = document.getElementById("lastName");
  var LName = /^[a-zA-Z]+[a-zA-Z]+$/;
  if (!l_name.value.match(LName) || l_name.value.length < 4) {
    focus_func(document.getElementById("lastName"));
    isButtonVisible = false;
    document.getElementById("lastName").style.border = "1px solid red";
    document.getElementById("lname-para").style.visibility = "visible";
  }
  l_name.addEventListener('change', ()=>{
    document.getElementById("lastName").style.border = "1px solid black";
    document.getElementById("lname-para").style.visibility = "hidden";
})

  // Validate LinkedIn Profile URL
  const linkedIn = document.getElementById("linkedIn");
  if (linkedIn.value === "") {
    focus_func(document.getElementById("linkedIn"));
    document.getElementById("linkedIn").style.border = "1px solid red";
    document.getElementById("linkedin-para").style.visibility = "visible";
  } 
  linkedIn.addEventListener('change', ()=> {
    document.getElementById("linkedIn").style.border = "1px solid black";
    document.getElementById("linkedin-para").style.visibility = "hidden";
  })

  //github profile validation
  const Github = document.getElementById("github");
  if (Github.value === "") {
    focus_func(document.getElementById("github"));
    isButtonVisible = false;
    document.getElementById("github").style.border = "1px solid red";
    document.getElementById("github-para").style.visibility = "visible";
  
  } 
  Github.addEventListener('change',() => {
    document.getElementById("github").style.border = "1px solid black";
    document.getElementById("github-para").style.visibility = "hidden";
  })

  //valid email
  valid_email(document.getElementById("email").value);

  //valid phone
  const phone_num_value = document.getElementById("phone").value;
  const phone_num = document.getElementById("phone");
  if (
    phone_num_value[0] != 6 &&
    phone_num_value[0] != 7 &&
    phone_num_value[0] != 8 &&
    phone_num_value[0] != 9
  ) {
    focus_func(document.getElementById("phone"));
    isButtonVisible = false;
    document.getElementById("phone").style.border = "1px solid red";
    document.getElementById("phone-para").style.visibility = "visible";

  } 
  phone_num.addEventListener('change', ()=> {
    document.getElementById("phone").style.border = "1px solid black";
    document.getElementById("phone-para").style.visibility = "hidden";
  })

  //valid address
  const address = document.getElementById("address");
  if (address.value.length <= 0) {
    focus_func(address);
    isButtonVisible = false;
    address.style.border = "1px solid red";
    document.getElementById("address_para").style.visibility = "visible";

  } 
  address.addEventListener('change', ()=>{
    address.style.border = "1px solid black";
    document.getElementById("address_para").style.visibility = "hidden";
  })

  //valid introduction
  if (document.getElementById("aboutme").value.length <= 50 || document.getElementById("aboutme").value.length > 500) {
    focus_func(document.getElementById("aboutme"));
    isButtonVisible = false;
    document.getElementById("aboutme").style.border = "1px solid red";
    document.getElementById("about-para").style.visibility = "visible";
  } 
  document.getElementById("aboutme").addEventListener('change', ()=>{
    document.getElementById("aboutme").style.border = "1px solid black";
    document.getElementById("about-para").style.visibility = "hidden";
  })

  //valid education details
  const college_name = document.getElementById("college-name");
  const clg = /^[a-zA-Z_ ]*$/;
  if (!college_name.value.match(clg) || college_name.value.length === 0) {
    focus_func(college_name);
    isButtonVisible = false;
  } else {
    college_name.style.border = "1px solid black";
  }

  const degree_name = document.getElementById("degree-name");
  if (degree_name.value.length === 0) {
    focus_func(degree_name);
    isButtonVisible = false;
  } else {
    degree_name.style.border = "1px solid black";
  }

  const passing_year = document.getElementById("year-name");
  if (passing_year.value.length === 0) {
    focus_func(passing_year);
    isButtonVisible = false;
  } else {
    passing_year.style.border = "1px solid black";
  }

  const grades = document.getElementById("grades");
  if (grades.value.length === 0) {
    focus_func(grades);
    isButtonVisible = false;
  } else {
    grades.style.border = "1px solid black";
  }
}
