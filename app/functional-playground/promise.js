let grade = "A+";

let examResults = new Promise(
    function (resolve, reject) {
        // get grade by making a REST Call
        if (grade == "A+")
            resolve("You will get an XBOX");
        else
            reject("Better luck next time");
    }
);

let conductExams = () => {
    examResults
    .then(x => console.log(x)) // captures resolve and logs "You will get an XBOX"
    .catch(x => console.error(x)); // captures rejection and logs "Better luck next time"
};

conductExams();



