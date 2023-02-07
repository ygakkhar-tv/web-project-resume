//education class
class Education{
  constructor(sName, degree, fields, passingYear, grades){
    this.sName = sName;
    this.degree = degree;
    this.fields = fields;
    this.passingYear = passingYear;
    this.grades = grades;
  }
}

class Skills{
  constructor(skillName){
    this.skillName = skillName;
  }
}

class Certificate{
  constructor(certificateField, certificateAuthority, certificateDate){
    this.certificateField = certificateField;
    this.certificateAuthority = certificateAuthority;
    this.certificateDate = certificateDate;
  }
}

class Experience{
  constructor(startDate, tillDate, companyName){
    this.startDate = startDate;
    this.tillDate = tillDate;
    this.companyName = companyName;
  }
}