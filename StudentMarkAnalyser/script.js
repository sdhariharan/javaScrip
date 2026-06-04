let n = Number(prompt("Enter No of Students"));

let std_name = [];
let std_mark = [];

for(let i = 0; i < n; i++)
{
    std_name[i] = prompt(`Enter Student ${i + 1} Name`);

    std_mark[i] = Number(
        prompt(`Enter ${std_name[i]}'s Mark`)
    );
}

let total_marks = std_mark.reduce(
    (acc, next) => acc + next,
    0
);

let average = total_marks / n;

let highest_mark = Math.max(...std_mark);

let lowest_mark = Math.min(...std_mark);

let passed = std_mark.filter(mark => mark >= 50);

let failed = std_mark.filter(mark => mark < 50);

let pass_count = passed.length;

let fail_count = failed.length;

let pass_per =
((pass_count / n) * 100).toFixed(2);

let fail_per =
((fail_count / n) * 100).toFixed(2);

let std_above_average =
std_mark.filter(mark => mark >= average);

let std_below_average =
std_mark.filter(mark => mark < average);

document.getElementById("output").innerHTML = `
<h2>Analytics</h2>

<p>Total Students: ${n}</p>

<p>Total Marks: ${total_marks}</p>

<p>Average Mark: ${average.toFixed(2)}</p>

<p>Highest Mark: ${highest_mark}</p>

<p>Lowest Mark: ${lowest_mark}</p>

<p>Passed: ${pass_count}</p>

<p>Failed: ${fail_count}</p>

<p>Pass Percentage: ${pass_per}%</p>

<p>Fail Percentage: ${fail_per}%</p>

<p>Students Above Average: ${std_above_average.length}</p>

<p>Students Below Average: ${std_below_average.length}</p>
`;