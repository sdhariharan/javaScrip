const prompt = require("prompt-sync")();

let employees = [];

// ADD EMPLOYEE
function addEmployee(
    name,
    emp_id,
    age,
    city,
    state,
    skills,
    salary
)
{
    employees.push({
        Name: name,
        Employee_id: emp_id,
        Age: age,

        Address: {
            city: city,
            state: state
        },

        Skills: skills,
        Salary: salary
    });

    console.log("Employee Added Successfully");
}

// DISPLAY ALL EMPLOYEES
function showEmployees()
{
    if(employees.length === 0)
    {
        console.log("No Employees Found");
        return;
    }

    for(let emp of employees)
    {
        console.log("--------------------");
        console.log(`ID : ${emp.Employee_id}`);
        console.log(`Name : ${emp.Name}`);
    }
}

// DISPLAY FULL DETAILS
function showEmployeeDetails()
{
    if(employees.length === 0)
    {
        console.log("No Employees Found");
        return;
    }

    for(let emp of employees)
    {
        console.log("\n====================");

        console.log(`ID : ${emp.Employee_id}`);
        console.log(`Name : ${emp.Name}`);
        console.log(`Age : ${emp.Age}`);
        console.log(`City : ${emp.Address.city}`);
        console.log(`State : ${emp.Address.state}`);
        console.log(`Skills : ${emp.Skills.join(", ")}`);
        console.log(`Salary : ${emp.Salary}`);

        console.log("====================");
    }
}

// SEARCH EMPLOYEE
function searchEmployee(id)
{
    for(let emp of employees)
    {
        if(emp.Employee_id === id)
        {
            console.log(emp);
            return;
        }
    }

    console.log("Employee Not Found");
}

// DELETE EMPLOYEE
function deleteEmployee(id)
{
    let index =
        employees.findIndex(
            emp => emp.Employee_id === id
        );

    if(index !== -1)
    {
        employees.splice(index,1);

        console.log(
            "Employee Deleted"
        );
    }
    else
    {
        console.log(
            "Employee Not Found"
        );
    }
}

// UPDATE AGE
function updateAge(id,newAge)
{
    for(let emp of employees)
    {
        if(emp.Employee_id === id)
        {
            emp.Age = newAge;
            console.log("Age Updated");
            return;
        }
    }

    console.log("Employee Not Found");
}

// ADD SKILL
function addSkill(id,skill)
{
    for(let emp of employees)
    {
        if(emp.Employee_id === id)
        {
            emp.Skills.push(skill);

            console.log("Skill Added");
            return;
        }
    }

    console.log("Employee Not Found");
}

// REMOVE SKILL
function removeSkill(id,skill)
{
    for(let emp of employees)
    {
        if(emp.Employee_id === id)
        {
            emp.Skills =
                emp.Skills.filter(
                    s => s !== skill
                );

            console.log("Skill Removed");
            return;
        }
    }

    console.log("Employee Not Found");
}

// TOTAL SKILLS LEARNED
function totalSkills()
{
    let count = 0;

    for(let emp of employees)
    {
        count += emp.Skills.length;
    }

    console.log(
        `Total Skills Learned : ${count}`
    );
}

// FILTER BY SALARY
function filterBySalary(minSalary)
{
    let found = false;

    for(let emp of employees)
    {
        if(emp.Salary >= minSalary)
        {
            found = true;

            console.log(
                `${emp.Name} - ${emp.Salary}`
            );
        }
    }

    if(!found)
    {
        console.log("No Employees Found");
    }
}

// SORT BY AGE
function sortByAge()
{
    employees.sort(
        (a,b) => a.Age - b.Age
    );

    console.log(
        "Sorted By Age Successfully"
    );
}

// EMPLOYEE COUNT
function employeeCount()
{
    console.log(
        `Total Employees : ${employees.length}`
    );
}

// MENU
let choice;

do
{
    console.log(`
========= EMPLOYEE MANAGEMENT =========

1. Add Employee
2. Show Employees
3. Show Full Details
4. Search Employee
5. Delete Employee
6. Update Age
7. Add Skill
8. Remove Skill
9. Total Skills Learned
10. Filter By Salary
11. Sort By Age
12. Employee Count
13. Exit

=======================================
`);

    choice =
        Number(
            prompt("Enter Choice : ")
        );

    switch(choice)
    {
        case 1:

            let name =
                prompt("Name : ");

            let id =
                Number(
                    prompt("ID : ")
                );

            let age =
                Number(
                    prompt("Age : ")
                );

            let city =
                prompt("City : ");

            let state =
                prompt("State : ");

            let salary =
                Number(
                    prompt("Salary : ")
                );

            let skills =
                prompt(
                    "Skills (comma separated) : "
                ).split(",");

            addEmployee(
                name,
                id,
                age,
                city,
                state,
                skills,
                salary
            );

            break;

        case 2:

            showEmployees();
            break;

        case 3:

            showEmployeeDetails();
            break;

        case 4:

            searchEmployee(
                Number(
                    prompt("Enter ID : ")
                )
            );

            break;

        case 5:

            deleteEmployee(
                Number(
                    prompt("Enter ID : ")
                )
            );

            break;

        case 6:

            updateAge(
                Number(
                    prompt("Enter ID : ")
                ),

                Number(
                    prompt("New Age : ")
                )
            );

            break;

        case 7:

            addSkill(
                Number(
                    prompt("Enter ID : ")
                ),

                prompt("Skill : ")
            );

            break;

        case 8:

            removeSkill(
                Number(
                    prompt("Enter ID : ")
                ),

                prompt("Skill : ")
            );

            break;

        case 9:

            totalSkills();
            break;

        case 10:

            filterBySalary(
                Number(
                    prompt(
                        "Minimum Salary : "
                    )
                )
            );

            break;

        case 11:

            sortByAge();
            break;

        case 12:

            employeeCount();
            break;

        case 13:

            console.log("Good Bye");
            break;

        default:

            console.log(
                "Invalid Choice"
            );
    }

}
while(choice !== 13);