// using IF...ELSE to determine the subjects Bolatito will offer as an Arts Students

let classGroup = "Arts";
let subjects = "English, Mathematics, ";

if (classGroup === "Science") {
  subjects += "Physics, Chemistry, Biology, Technical Drawing";
} else if (classGroup === "Social Science") {
  subjects += "Accounting, Commerce, Marketing, Geography";
} else if (classGroup === "Arts") {
  subjects += "Government, Economics, Literature, History";
} 

console.log(subjects);

// OUTPUT: English, Mathematics, Government, Economics, Literature, History.

let num = 17;
let pwr = 1;

while (pwr <= num) {
  pwr *= 2;
}

if (pwr/2 - num < num - pwr/4) {
  pwr /= 2;
}

console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);

// OUTPUT: The number 16 is the power of 2 nearest to 17