const faqButton =
document.querySelector(".faq_button");

const faqText =
document.querySelector(".faq_text");

faqButton.addEventListener(
    "click",
    () => {

        faqText.classList.toggle(
            "show"
        );

    }
);
