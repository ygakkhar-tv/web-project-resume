//valid email function
function valid_email(email) {
  var mailFormat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  if (!mailFormat.test(email)) {
    // alert("Invalid Email");
    focus_func(document.getElementById("email"));
    bool = false;

    //validation statement on page
    let valid_emailId = document.getElementById("emailbox");
    let email_div = document.createElement("div");
    console.log(valid_emailId);

    let template = `
                <p style="color:red; margin-top:-15px; font-size:12px">Enter correct email id</p>
             `;
    email_div.insertAdjacentHTML('beforeend', template)
    valid_emailId.appendChild(email_div);
  }
  else {
    document.getElementById("email").style.border = "1px solid black"
  }
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
  const f_name = document.getElementById("f-name").value;
  var FName = /^[a-zA-Z]+[a-zA-Z]+$/;
  if (!f_name.match(FName) || f_name.length < 4) {
    focus_func(document.getElementById("f-name"));
    bool = false;

    //validation statement on page
    let valid_fName = document.getElementById("fbox");
    let fname_div = document.createElement("div");
    console.log(valid_fName);

    let template = `
                <p style="color:red; margin-top:-15px; font-size:12px">Fill atleast 4 characters in this field</p>
             `;
    fname_div.insertAdjacentHTML('beforeend', template)
    valid_fName.appendChild(fname_div);

  }
  else {
    document.getElementById("f-name").style.border = "1px solid black"
  }

  //valid last name
  const l_name = document.getElementById("l-name").value;
  var LName = /^[a-zA-Z]+[a-zA-Z]+$/;
  if (!l_name.match(LName) || l_name.length < 4) {
    focus_func(document.getElementById("l-name"));
    bool = false;

    //validation statement on page
    let valid_lName = document.getElementById("lbox");
    let lname_div = document.createElement("div");

    let template = `
                <p style="color:red; margin-top:-15px; font-size:12px">Fill atleast 4 characters in this field</p>
             `;
    lname_div.insertAdjacentHTML('beforeend', template)
    valid_lName.appendChild(lname_div);
  }
  else {
    document.getElementById("l-name").style.border = "1px solid black"
  }

  // Validate LinkedIn Profile URL
  const linkedIn = document.getElementById("linkedIn").value;
  var linkedInValue = /^(https?:\/\/)(www\.)?linkedin.com/;
  if (!linkedIn.match(linkedInValue)) {
    focus_func(document.getElementById("linkedIn"));
    bool = false;

    //validation statement on page
    let valid_linkedin = document.getElementById("linkedinbox");
    let linkedin_div = document.createElement("div");

    let template = `
                <p style="color:red; margin-top:-15px; font-size:12px">Fill appropriate linkedin id</p>
             `;
    linkedin_div.insertAdjacentHTML('beforeend', template)
    valid_linkedin.appendChild(linkedin_div);
  }
 
  else {
    document.getElementById("linkedIn").style.border = "1px solid black";
  }
  //github profile validation
  const Github = document.getElementById("github").value;
  var GithubRegxp = /^(https?:\/\/)?github.com/;
  if (!Github.match(GithubRegxp)) {
    focus_func(document.getElementById("github"));
    bool = false;

    //validation statement on page
    let valid_github = document.getElementById("github-box");
    let github_div = document.createElement("div");

    let template = `
                <p style="color:red; margin-top:-15px; font-size:12px">Fill appropriate github id</p>
             `;
    github_div.insertAdjacentHTML('beforeend', template)
    valid_github.appendChild(github_div);
  } 
  
  else {
    document.getElementById("github").style.border = "1px solid black";
  };




//valid email
valid_email(document.getElementById("email").value);

//valid phone
const phone_num = document.getElementById("phone").value;
if (phone_num[0] != 6 && phone_num[0] != 7 && phone_num[0] != 8 && phone_num[0] != 9) {
  focus_func(document.getElementById("phone"));
  bool = false;

   //validation statement on page
   let valid_phone = document.getElementById("phonebox");
   let phone_div = document.createElement("div");
   let template = `
               <p style="color:red; margin-top:-15px; font-size:12px">Phone number should be numeric and its length be 10</p>
            `;
   phone_div.insertAdjacentHTML('beforeend', template)
   valid_phone.appendChild(phone_div);
}
else {
  document.getElementById("phone").style.border = "1px solid black"
}

//valid address
const address = document.getElementById("address");
if (address.value.length <= 0) {
  // alert("Enter vaild address");
  focus_func(address);
  bool = false;

  //validation statement on page
  let valid_address = document.getElementById("address-box");
  let address_div = document.createElement("div");

  let template = `
              <p style="color:red; margin-top:-15px; font-size:12px">Fill the required address field</p>
           `;
  address_div.insertAdjacentHTML('beforeend', template)
  valid_address.appendChild(address_div);
}

else {
  address.style.border = "1px solid black"
}
//valid introduction
if (document.getElementById("aboutme").value.length <= 50) {
  // alert("Length should be greater than 20");
  focus_func(document.getElementById("aboutme"));
  bool = false;

  //validation statement on page
  let valid_about = document.getElementById("about-box");
  let about_div = document.createElement("div");

  let template = `
              <p style="color:red; margin-top:2px; font-size:12px">This field can't be empty  </p>
           `;
  about_div.insertAdjacentHTML('beforeend', template)
  valid_about.appendChild(about_div);
}

else {
  document.getElementById("aboutme").style.border = "1px solid black"
}

//valid education details
const college_name = document.getElementById("college-name");
const clg=/^[a-zA-Z_ ]*$/;
if (!college_name.value.match(clg) || college_name.value.length === 0) {
  focus_func(college_name);
  bool = false;
  
  // //validation statement on page
  // let valid_clgname = document.getElementById("clg-name");
  // let clgname_div = document.createElement("div");
  // let template = `
  //             <span style="color:red; font-size:12px">Only characters are allowed</span>
  //          `;
  // clgname_div.insertAdjacentHTML('beforeend', template)
  // valid_clgname.appendChild(clgname_div);
}
else {
  college_name.style.border = "1px solid black";
}

const degree_name = document.getElementById("degree-name");
if (degree_name.value.length === 0) {
  focus_func(degree_name);
  bool = false;
}
else {
  degree_name.style.border = "1px solid black"
}

const passing_year = document.getElementById("year-name");
if (passing_year.value.length === 0) {
  focus_func(passing_year);
  bool = false;

}
else {
  passing_year.style.border = "1px solid black"
}

const grades = document.getElementById("grades");
if (grades.value.length === 0) {
  focus_func(grades);
  bool = false;
}
else {
  grades.style.border = "1px solid black"
}
};
