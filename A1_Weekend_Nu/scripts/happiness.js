var empArray = [];
var totalSalary = 0;
var newEmp = {};
var salary = 0;
// function addEmp takes input from form fields and  creates the newEmp object
function addEmp() {
    var firstName =document.getElementById("firstName").value;
    var lastName =document.getElementById("lastName").value;
    var empId =document.getElementById("empId").value;
    var jobTitle =document.getElementById('jobTitle').value;
    var annSalary =document.getElementById('annSalary').value;
console.log(firstName + " " + lastName + " " + empId + " " + jobTitle + " " + annSalary + ": ");
//employee object
  newEmp = {
    'firstName':firstName,
    'lastName': lastName,
    'empId': empId,
    'jobTitle': jobTitle,
    'annSalary':annSalary
  };

empArray.push(newEmp);
//calculate total Annual Salary of all employees combined

var getSalaries = function(){
     totalSalary = totalSalary + Number(newEmp.annSalary);
  	document.getElementById('bigMoney').innerHTML= totalSalary;
     console.log(totalSalary + " getSalaries works");
};  //end of getSalaries

  // function listEmps - appends to  employeeList
  var listEmps = function(){
    document.getElementById('employeeList').innerHTML="";
    for( i = 0; i < empArray.length; i++ ){
      salary = empArray[i].annSalary;
      console.log("Mama says list Emps works! " + salary);
      var line = 'Name: ' + empArray[i].firstName + " " + empArray[i].lastName + ", " + 'Title:'  + empArray[i].jobTitle + ", " + 'Id Number: ' + empArray[i].empId + ", " + 'Annual Salary: $' + empArray[i].annSalary;
      document.getElementById('employeeList').innerHTML += '<p>' + line + '</p>';
    }
  };//end of listEmps function
var monthlySalary = 0;
  //calculates monthly cost - appends to monthlySalaryTotal
  var getMonthly = function(){
    monthlySalary = totalSalary/12;
    monthlySalary = Math.round((monthlySalary + 0.00001)*100) / 100;
    console.log("MonthlySalary is: " + monthlySalary);
    document.getElementById('monthlySalaryTotal').innerHTML = monthlySalary;
    return monthlySalary;
  };
getSalaries();
listEmps();
getMonthly();

  }



//end of addEmp
