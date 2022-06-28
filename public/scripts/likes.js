let likes = document.querySelectorAll("section.likes li");
let sect = document.querySelectorAll("section.section");
const svgtje = document.querySelector("svg.heart");
let btn = document.querySelector("button.btnHeart");
const frm = document.querySelector("form.heart");


if (likes) {
    checklist = [];

    likes.forEach(like => {
        const id = like.outerText;
        checklist.push(id);
    })

    console.log(checklist)
    console.log(sect)
    if (sect) {
        sect.forEach(section => {
            console.log()
            const form = section.children[1].children[0];
            const but = section.children[1].children[0].children[0];
            const buttonValue = section.children[1].children[0].children[0].value;
            const svg = section.children[1].children[0].children[0].children[0];
            const method = checklist.includes(buttonValue);
            if (method == true) {
                svg.style.fill = "#519188";
                form.action = "/" + "likes";
                but.name = "remove";
            }
        })
    }
    if (svgtje) {
        let value = btn.value;
        const method = checklist.includes(value)
        if (method == true) {
            svgtje.style.fill = "#519188";
            btn.name = "remove";
            frm.action = "/" + "likes";
        }
    }


}