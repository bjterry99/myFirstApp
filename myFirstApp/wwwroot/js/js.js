$("#btnSend").click(function () {
    //declare variables
    var grade = 0
    var letter

    //check for values between 0 and 1
    if (($("#assign").val() > 100) || ($("#assign").val() < 0) || ($("#assign").val() == '')) {
        
    }
    else if (($("#group").val() > 100) || ($("#group").val() < 0) || ($("#assign").val() == '')) {
        
    }
    else if (($("#quiz").val() > 100) || ($("#quiz").val() < 0) || ($("#assign").val() == '')) {
        
    }
    else if (($("#exam").val() > 100) || ($("#exam").val() < 0) || ($("#assign").val() == '')) {
        
    }
    else if (($("#intex").val() > 100) || ($("#intex").val() < 0) || ($("#assign").val() == '')) {
        
    }
    else {
        //calculate grade
        grade = ((parseInt($("#assign").val()) * .55) + (parseInt($("#group").val()) * .05) + (parseInt($("#quiz").val()) * .1) + (parseInt($("#exam").val()) * .2) + (parseInt($("#intex").val()) * .1))

        //determine grade level
        if (grade >= 90) {
            letter = 'A'
        }
        if (grade < 90 && grade >= 80) {
            letter = 'B'
        }
        if (grade < 80 && grade >= 70) {
            letter = 'C'
        }
        if (grade < 70 && grade >= 60) {
            letter = 'D'
        }
        if (grade < 60) {
            letter = 'F'
        }

        //print
        alert("Your grade is: " + grade + "%\nLetter grade: " + letter);
    }

})