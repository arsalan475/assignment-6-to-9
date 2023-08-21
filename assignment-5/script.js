var subject1 = prompt('write subject 1 name')
var subject2 = prompt('write subject 2 name')
var subject3 = prompt('write subject 3 name')

var totalMarks = 100;

var obtainMarkS1 = +prompt("Obtained marks in subject 1")
var obtainMarkS2 = +prompt("Obtained marks in subject 2")
var obtainMarkS3 = +prompt("Obtained marks in subject 3")

var totalObtainedMarkd = obtainMarkS1+obtainMarkS2+obtainMarkS3

alert(`
Subject     Total Marks Obtained Marks Percentage

${subject1}       100         ${obtainMarkS1}    ${(obtainMarkS1 * totalMarks) / 100}%

${subject2}       100         ${obtainMarkS2}    ${(obtainMarkS2 * totalMarks) / 100 }%

${subject3}       100         ${obtainMarkS3}    ${(obtainMarkS3 * totalMarks) / 100 }%

               300    ${totalObtainedMarkd}  ${totalObtainedMarkd/300*100 }%


`)