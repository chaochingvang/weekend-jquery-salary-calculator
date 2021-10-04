console.log('js');
$(jqLoaded);

let employeeList = [];
let totalMonthly = 0;


function jqLoaded() {
    $(`#submitButton`).on(`click`, addEmployee);
    //$(document).on(`click`, `#deleteButton`, deleteEmployee) will search for in whole document
    $(`#tableOutput`).on(`click`, `#deleteButton`, deleteEmployee);
    displayOnDOM();
}


function addEmployee() {
    console.log('in addEmployee fx');

    //Taking in inputs and adding in the inputs as an employee object
    let employee = {
        firstName: $(`#firstNameInput`).val(),
        lastName: $(`#lastNameInput`).val(),
        id: $(`#idInput`).val(),
        title: $(`#titleInput`).val(),
        annualSalary: $(`#annualSalaryInput`).val()
    }
    // console.log(employee);

    //Putting the employee info into our list of employee array
    employeeList.push(employee);

    displayOnDOM();

    //emptying the input values on the DOM
    employee = {
        firstName: $(`#firstNameInput`).val(``),
        lastName: $(`#lastNameInput`).val(``),
        id: $(`#idInput`).val(``),
        title: $(`#titleInput`).val(``),
        annualSalary: $(`#annualSalaryInput`).val(``)
    }

    // calcTotalMonthly();
    // console.log(employeeList);
}

function deleteEmployee() {
    // console.log($(this).parent().val());
    // console.log($(this).closest(`tr`).val());

    //removes the row when delete button is clicked on that row
    $(this).closest(`tr`).remove();
}



function displayOnDOM() {
    $(`#tableOutput`).empty();


    //loop through employeeList array and append it to the DOM
    for (let employee of employeeList) {
        let employeeRowOutput = $(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.id}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
                <td><button id="deleteButton">Delete</button></td>
            </tr>
        `);

        $(`#tableOutput`).append(employeeRowOutput);
    }


    //Emptying total monthly calc and updating it with new info
    $(`#totalMonthly`).empty();
    calcTotalMonthly();

    if (totalMonthly > 20000) {
        $(`#totalMonthly`).addClass(`redBackground`)
    }
    $(`#totalMonthly`).append(`${totalMonthly}`);
}

function calcTotalMonthly() {
    totalMonthly = 0;
    for (let employee of employeeList) {
        totalMonthly += employee.annualSalary / 12;
    }
    console.log(totalMonthly);
}