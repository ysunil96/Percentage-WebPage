
const value = document.querySelector(".ans");
const but = document.querySelector(".per");
const grade = document.querySelector(".grade");

but.addEventListener("click", function () {
    var marks = Number(document.getElementById("marks").value);
    var totalMarks = Number(document.getElementById("total-marks").value);
    var res = ((marks * 100) / totalMarks);
    let per = res.toFixed(2);
    value.textContent = per;
});

grade.addEventListener("click", function () {

    var marks = Number(document.getElementById("marks").value);
    var totalMarks = Number(document.getElementById("total-marks").value);
    var res = ((marks * 100) / totalMarks);
    let per = res.toFixed(2);
    value.textContent = per;

    
    

    
    if(res < 40 ) {
        value.textContent = "Failed";
    }

    else if(res >=  40 && res < 60 ) {
        value.textContent = " B Grade";
    }

    else if(res > 60 && res < 75) {
        value.textContent = "A Grade";
    }
    else if(res > 75 && res < 100) {
        value.textContent = "A+ Grade";
    }







});
















