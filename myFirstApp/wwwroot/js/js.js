$("#btnSend").click(function () {
    //declare variables
    var grade = 0
    var letter

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
})