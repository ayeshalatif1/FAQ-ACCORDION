document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll('.question');

    questions.forEach((question, index) => {
        question.addEventListener("keydown", (event) => {
            const plus = question.querySelector('.plus');
            const minus = question.querySelector('.minus');
            const answer = question.nextElementSibling;

            if (event.key === "Enter") {
                if (answer.style.display === "block") {
                    answer.style.display = "none";
                    plus.style.display = "block";
                    minus.style.display = "none";
                } else {
                    answer.style.display = "block";
                    plus.style.display = "none";
                    minus.style.display = "block";
                }
                questions.forEach((q) => {
                    if (q !== question) {
                        const otherAnswer = q.nextElementSibling;
                        const otherPlusIcon = q.querySelector('.plus');
                        const otherMinusIcon = q.querySelector('.minus');

                        otherAnswer.style.display = "none";
                        otherPlusIcon.style.display = "block";
                        otherMinusIcon.style.display = "none";
                    }
                });
            }
        });
        question.addEventListener("keydown", (event) => {
            if (event.key === "ArrowDown") {
                if (index < questions.length - 1) {
                    questions[index + 1].focus();
                }
                else {
                    questions[0].focus();
                }
            }

            else if (event.key === "ArrowUp") {
                if (index > 0) {
                    questions[index - 1].focus();
                }
                else {
                    questions[questions.length - 1].focus();
                }

            }
        });
    });


    questions.forEach(question => {
        question.addEventListener("click", () => {
            const plus = question.querySelector('.plus');
            const minus = question.querySelector('.minus');
            const answer = question.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
                plus.style.display = "block";
                minus.style.display = "none";
            }
            else {
                answer.style.display = "block";
                plus.style.display = "none";
                minus.style.display = "block";
            }

            questions.forEach(q => {
                if (q !== question) {
                    const otherAnswer = q.nextElementSibling;
                    const otherPlusIcon = q.querySelector('.plus');
                    const otherMinusIcon = q.querySelector('.minus');

                    otherAnswer.style.display = "none";
                    otherPlusIcon.style.display = "block";
                    otherMinusIcon.style.display = "none";
                }
            });
        });
    });






















});


