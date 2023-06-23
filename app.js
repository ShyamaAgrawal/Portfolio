const icon = document.querySelector(".hamIcon");
const uls = document.querySelector(".links");
const crossIcon = document.querySelector(".crossIcon");
// icon.addEventListener('click', () => {
//     uls.classList.add("clk");
// });
icon.addEventListener('click', () => {
    uls.classList.add("clk");
    icon.classList.toggle("disable");
    crossIcon.classList.toggle("disable");
});
crossIcon.addEventListener('click', () => {
    uls.classList.remove("clk");
    icon.classList.toggle("disable");
    crossIcon.classList.toggle("disable");
})