var empArray = [];
var totalSalary = 0.00;
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
//reset form
salary = empArray.annSalary;
//calculate total Annual Salary of all employees combined

function getSalaries(){
     totalSalary = totalSalary + newEmp.annSalary;
  	document.getElementById('bigMoney').innerHTML=totalSalary;
     console.log(totalSalary + " This one");
}
  // function listEmps
  var listEmps = function(){
    document.getElementById('employeeList').innerHTML="";
    for( i = 0; i < empArray.length; i++ ){

      var line = empArray[i].firstName + " " + empArray[i].lastName + ', Title:'  + empArray[i].empId + ', ' + empArray[i].jobTitle + ', $' + empArray[i].annSalary;
      document.getElementById('employeeList').innerHTML += '<p>' + line + '</p>';

    }
  };
  console.log("Mama says " + salary);
  getSalaries();
//pushes newEmp into the empArray

//call of listEmps function
listEmps();

}








/*for (var i = 0; i < empArray.length; i++) {
  console.log(addEmp(empArray)[i]);
}*/
