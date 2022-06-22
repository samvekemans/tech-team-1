let likes = document.querySelectorAll("section.likes li")
let sect = document.querySelectorAll("section.section")

if (likes) {
    checklist = []

    likes.forEach(like => {
        const id = like.outerText;
        checklist.push(id)
    })

    console.log(checklist)
    console.log(sect)
    sect.forEach(section => {
        console.log()
        const buttonValue = section.children[1].children[0].children[0].value
        const svg = section.children[1].children[0].children[0].children[0]
        const method = checklist.includes(buttonValue)
        if (method == true) {
            svg.style.fill = "#519188"
        }
    })
}