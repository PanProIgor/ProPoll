document.addEventListener("DOMContentLoaded", function () {
    const modals = document.querySelectorAll(".modal");

    // Закрытие по крестику
    modals.forEach(modal => {
        const closeBtn = modal.querySelector(".close");
        if (closeBtn) {
            closeBtn.onclick = function () {
                modal.style.display = "none";
            };
        }
    });

    // Закрытие при клике вне окна
    window.onclick = function (event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    };
});


// document.addEventListener("DOMContentLoaded", function () {
//     const successModal = document.getElementById("successModal");
//     const errorModal = document.getElementById("errorModal");
//     const closeSuccess = document.getElementById("closeSuccessBtn");
//     const closeError = document.getElementById("closeErrorBtn");

//     if (closeSuccess) {
//         closeSuccess.onclick = function () {
//             successModal.style.display = "none";
//         };
//     }
//     if (closeError) {
//         closeError.onclick = function () {
//             errorModal.style.display = "none";
//         };
//     }

//     window.onclick = function (event) {
//         if (event.target === successModal) {
//             successModal.style.display = "none";
//         }
//         if (event.target === errorModal) {
//             errorModal.style.display = "none";
//         }
//     };
// });




// document.addEventListener("DOMContentLoaded", function () {
//     const modal = document.getElementById("myModal");
//     const closeBtn = document.getElementById("closeModalBtn");

//     if (closeBtn) {
//         closeBtn.onclick = function () {
//             modal.style.display = "none";
//         };
//     }

//     window.onclick = function (event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//         }
//     };
// });

