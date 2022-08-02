// //Найти количество подчинённых у сотрудника (включая его самого)
// //Другими словами: глубину вложенности объекта.
// //У одного сотрудника может быть несколько подчинённых

interface Employee {
    id: number;
    rank: string;
    employees: Employee[];
}

const employee: Employee = {
    rank: "admin",
    id: 1,
    employees: [
        {
            rank: "manager",
            id: 2,
            employees: [
                {
                    rank: "viewer",
                    id: 4,
                    employees: [
                        {
                            rank: 'intershiper',
                            id: 11,
                            employees: []
                        }
                    ],
                },
                {
                    rank: "viewer",
                    id: 5,
                    employees: [],
                },
            ],
        },
        {
            rank: "manager",
            id: 3,
            employees: [],
        },
    ],
};

function findCountEmployees(obj: Employee): number {

    let count = 1;

    (function foo(e) {

        for (let {employees} of e) {
            console.log(employees)
            count++;
            if (employees) {
                foo(employees)
            }
        }

    })(obj.employees)

    return count;
}

console.log(findCountEmployees(employee))