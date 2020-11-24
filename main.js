let validResPerm
let timeInGermany
let workingTime
let currentlyWorking

let resPerm

/* Working Permit */

alert(`Hello and welcome to our Visa application system`)

let fName = prompt(`Please state your name`)

let residencyPermit = prompt(
`Please choose from one of the following paramaters
(1) I have a working permit
(2) I have a Blue card
(3) I am an assylum seeker
(4) I am married to a German citizen`
)

/* Working permit */

/* if (residencyPermit == 1) { 
    if (validResPerm == "yes") {
        livingInGermany = prompt(`Have you been living in Germany for more than 5 years`)
        if (livingInGermany == "yes") {
            if workingInGermany = prompt(`Have you been working in Germany fo rmore than 5 years`)

        } else {
            "Bye felicia"
        }
    } else {
        "Bye Felicia"
    }
    
}
if () {
    
} 

if (condition) {
    
}
else {
    
} */


if (residencyPermit == 1) { alert(`Great! Let's guide you through the application for PR with a Blue card`)
    let perm =  prompt("Do you have a valid residency Permit?")
    if (perm == "yes") { alert("great, you may progress")
        
    } else {
        "Unfortunately a Valid residency is a necessity to apply for Permanewnt residency"
    }

    let yearsInGermnay = prompt("have you lived in germany for more than 23 months")
    if (yearsInGermnay == "yes") { alert("great-you may proceed")
        
    } else { alert("sorry, you cannot proceed")
        
    }

    let threeYearsWorking = prompt("have you worked in Germany for 3 years?")
    if (threeYearsWorking == "yes") { alert("great, only two questions to go ")
        
    } else { alert("Sorry, In order to apply for PR applicants must be able to provide an employment record for the last 3 years")
        
    }

    let germanLevel = prompt("Have you completed a course in B1 German")
    if (germanLevel == "yes") { alert("Congratualtions, You are eligable to apply for German Permanent Residency")
        
    } else {
        alert("Unfortunately, B1 German Is a requirement of this proceeeding")
    }
}

if (residencyPermit == 2 ) {alert(`Great! Let's guide you through the application for PR with a working permit `)
    let perm =  prompt("Do you have a valid residency Permit?")
    if (perm == "yes") { alert("great, you may progress")
        
    } else {
        "Unfortunately a Valid residency is a necessity to apply for Permanent residency"
    }

    let livingInGermany = prompt("Have you lived in Germnay for more than 5 years?")
    if (livingInGermany == "yes") { alert("You may proceed, please click yes to continue")
        
    } else {
        alert("Unfortunately you must be a full time resident for 5 years beforre you can apply for German PR")
    }

    let workingInGermany = prompt("Have you worked in Germnay for at lest 3 years")
    if (workingInGermany == "yes") { alert("You may proceed, Please click yes to continue")
        
    } else { alert("Unfortunately you need to be able to provide proofe of employment over a 3 year period, to apply for Permant residency inb Germnay")
        
}
}

if (residencyPermit == 4) { alert("Great, let's guide you through the Permanant Residency application for married couples")
    let timeMarried = prompt("Have you been Married for more than 3 years")
    if (timeMarried == "yes") { alert("You may proceed, Please click yes to continue")
        
    } else { alert("Unfortunately, it is a requrement that couples must be Married for more than 3 years before applying for Permanent residency in Germany")
        
    }

    let germanLevel = prompt("Have you completed a course in B1 German")
    if (germanLevel == "yes") { alert("Congratualtions, You are eligable to apply for German Permanent Residency")
        
    } else {
        alert("Unfortunately, B1 German Is a requirement of this proceeeding")
    }

    alert("congratulations, You are eligible to apply for Permant residency in Germany")
}


if (residencyPermit == 3) { alert("Great, Let's guide you through the Permanent residency application for assylum seekers")
    let germanLevel = prompt("Have you completed a course in B1 German")

    let coveringMeans = prompt("Are you currently able to pay for 70% of your own costs through employment?")

    let livingInGermany = prompt("Have you lived in Germnay for more than 5 years?")

    if (germanLevel == "yes" , coveringMeans == "yes" , livingInGermany == "yes") { alert("congratulations, based of these criteria you may apply for Permanent REsidency in Germany")
        
    } else { alert("Unfortunatley, one or more of these criteria are a must to apppy for Permant Residency in Germnay "); let continueQuestion = prompt("Would you like to try again");
    if (continueQuestion == "yes") { alert("Thats great, here are some more questions")
        
    }
    let germanLevel = prompt("Have you completed a course in B1 German")

    let coveringMeans = prompt("Are you currently able to pay for 70% of your own costs through employment?")

    let livingInGermany = prompt("Have you lived in Germnay for more than 5 years?")

    if (germanLevel == "yes", coveringMeans == "yes" , livingInGermany == "yes") { alert(`COngratulationns ${fName} , you can apply for German Permanent Residnecy`)
        
    } else { alert("")
        
    }
    }
}