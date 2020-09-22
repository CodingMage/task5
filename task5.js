let data = {
    'alfred': {
        age: 47,
        years: 20,
        performance: 7,
        salary: 10000
    },
    'john': {
        age: 55,
        years: 26,
        performance: 10,
        salary: 14000
    },
    'joshua': {
        age: 60,
        years: 35,
        performance: 9,
        salary: 20000
    },
    'daniel': {
        age: 30,
        years: 5,
        performance: 7,
        salary: 10500
    },
    'jamie': {
        age: 40,
        years: 14,
        performance: 6,
        salary: 13000
    }
}

function companyRaiseData(data) {
    let salaries = []
    let raise15 = []
    let total = 0
    let totalb4 = 0


    let x;
    for (x in data) {
        if (data[x].age > 30 && data[x].age < 50) {

            let perentageRaise = ((data[x].years / 10) * data[x].performance)
            let calcBonus = perentageRaise / 100 * data[x].salary
            let NewSalary = Math.floor(data[x].salary + calcBonus + 100)
            total += NewSalary
            totalb4 += data[x].salary

            let salary = {
                [x]: NewSalary
            }
            salaries.push(salary)

        } else if (data[x].age > 50) {
            let perentageRaise = ((data[x].years / 10) * data[x].performance)
            let calcBonus = perentageRaise / 100 * data[x].salary
            let NewSalary = data[x].salary + calcBonus + 200
            total += NewSalary
            totalb4 += data[x].salary




            let salary = {
                [x]: NewSalary
            }
            salaries.push(salary)


        } else {
            let perentageRaise = ((data[x].years / 10) * data[x].performance)
            let calcBonus = perentageRaise / 100 * data[x].salary
            let NewSalary = data[x].salary + calcBonus
            total += NewSalary
            totalb4 += data[x].salary





            let salary = {
                [x]: NewSalary
            }
            salaries.push(salary)

        }

    }

    for (x in data) {
        let perentageRaise = ((data[x].years / 10) * data[x].performance)
        if (perentageRaise > 15) {
            raise15.push(x)
        }

    }

    let overallPayoutIncrease = Math.floor(total - totalb4)
    // console.log(salaries);
    // console.log(raise15);
    // console.log(overallPayoutIncrease);

    return {
        salaries,
        raise15,
        overallPayoutIncrease
    }

}



console.log(companyRaiseData(data));