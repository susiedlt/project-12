$(document).ready(function() {
    let answered = false;

    $('.option').click(function() {
        if (answered) return; 

        const selectedOption = $(this).text();
        const correctAnswer = "Jason Voorhees";

        if (selectedOption === correctAnswer) {
            $('#feedback').text("Correct! 🎉").addClass('correct');
        } else {
            $('#feedback').text("Incorrect. 😔").addClass('incorrect');
        }

        $('.option').not(this).css('pointer-events', 'none');
        answered = true;
    });
});