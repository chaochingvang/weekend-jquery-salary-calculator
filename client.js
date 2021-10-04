console.log('js');
$(jqLoaded);

let employeeList = [];
let totalMonthly = 0;


function jqLoaded() {
    $(`#submitButton`).on(`click`, addEmployee);
    $(`#tableOutput`).on(`click`, `#deleteButton`, deleteEmployee);
    displayOnDOM();
}

function addEmployee() {
    console.log('in addEmployee fx');
    let employee = {
        firstName: $(`#firstNameInput`).val(),
        lastName: $(`#lastNameInput`).val(),
        id: $(`#idInput`).val(),
        title: $(`#titleInput`).val(),
        annualSalary: $(`#annualSalaryInput`).val()
    }
    // console.log(employee);
    employeeList.push(employee);

    displayOnDOM();

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
    $(this).closest(`tr`).remove();
}



function displayOnDOM() {
    $(`#tableOutput`).empty();

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