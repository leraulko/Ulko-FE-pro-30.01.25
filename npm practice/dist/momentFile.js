"use strict";

var myBirthDate = moment("06/11/2001").format("MMM Do YYYY");
var birthDateText = document.createElement('p');
birthDateText.innerHTML = "<p>I was born on ".concat(myBirthDate, "</p>");
document.querySelector('.container2').prepend(birthDateText);
document.querySelector('#convertBtn').addEventListener('click', function () {
  var dateRegExp = /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  var inputData = document.querySelector('#birthDateInput').value.trim();
  var userResult = document.querySelector('.converted');
  userResult.innerHTML = '';
  if (!dateRegExp.test(inputData)) {
    userResult.innerHTML = "\n            <div class=\"alert alert-danger\" role=\"alert\">\n                Wrong format!\n            </div>\n        ";
    return;
  }
  var converted = moment(inputData).format('YYYY-MM-DD');
  userResult.innerHTML = "\n        <div class=\"alert alert-success\" role=\"alert\">\n            Converted birth date: <strong>".concat(converted, "</strong>\n        </div>\n    ");
});