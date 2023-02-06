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
  constructor(s_kill){
    this.s_kill = s_kill;
  }
}

class Certificate{
  constructor(CField, CAuth, CDate){
    this.CField = CField;
    this.CAuth = CAuth;
    this.CDate = CDate;
  }
}

class Experience{
  constructor(sDate, tDate, cName){
    this.sDate = sDate;
    this.tDate = tDate;
    this.cName = cName;
  }
}