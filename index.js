// Your code here
'use strict'
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
      firstName: firstName,
      familyName: familyName,
      title: title,
      payPerHour: payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    };
  }
  
  function createEmployeeRecords(data) {
    let employees = data.map(createEmployeeRecord);
    return employees;
  }
  function createTimeInEvent (employee, dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    employee.timeInEvents.push({
        type: 'TimeIn',
        date: date,
        hour: parseInt(hour, 10),

    })
    return employee;
  }
function createTimeOutEvent(employee, dateStamp) {
    const [date, hour] = dateStamp.split(" ");
    employee.timeOutEvents.push({
        type: 'TimeOut',
        date: date,
        hour: parseInt(hour, 10),
    })
    return employee;
}
function hoursWorkedOnDate (employee, date) {
  const timeIn = employee.timeInEvents.find((event) => event.date == date)
  const timeOut = employee.timeOutEvents.find((events) => events.date == date)
  return ((timeOut.hour - timeIn.hour)/100)

}
function wagesEarnedOnDate (employee, date) {
  const hours = hoursWorkedOnDate(employee, date);
  const payRate = employee.payPerHour;
  return hours*payRate
}
function allWagesFor(employee) {
  const datesWorked = employee.timeInEvents.map((events) => events.date)
  const wages = datesWorked.reduce((total, date) => {
    return total + wagesEarnedOnDate(employee, date);}, 0)
    return wages
  }

function calculatePayroll (employees) {
  const wages = employees.reduce((totalWages, employee) => 
  {return totalWages + allWagesFor(employee);}, 0)
  return wages
}