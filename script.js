// let anchors = document.querySelectorAll('.link')
let indexanchors = document.querySelectorAll(".link")
let pagecontent = document.querySelectorAll(".pagecontent")
indexanchors.forEach((anchor) => {
    anchor.addEventListener("click", () => {
        pagecontent.forEach((page) => {
            page.style.animation = null;
            page.classList.add("fadeout");
        })
        setTimeout(() => {window.location.href = anchor.getAttribute("href")}, 1000);
    })
    
})
/*
anchor.addEventListener("click", () => {
    pagecontent.style.animation = null;
    portfolio.classList.add("fadeout");
    setTimeout(() => {window.location.href = "index.html"}, 2000);
})
*/