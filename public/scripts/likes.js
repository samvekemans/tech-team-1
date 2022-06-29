const likes = document.querySelectorAll('section.likes li');
const sect = document.querySelectorAll('section.section');
const svgtje = document.querySelector('svg.heart');
const btn = document.querySelector('button.btnHeart');
const frm = document.querySelector('form.heart');

if (likes) {
  checklist = [];

  likes.forEach((like) => {
    const id = like.outerText;
    checklist.push(id);
  });

  if (sect) {
    sect.forEach((section) => {
      const form = section.children[1].children[0];
      const but = section.children[1].children[0].children[0];
      const buttonValue = section.children[1].children[0].children[0].value;
      const svg = section.children[1].children[0].children[0].children[0];
      const method = checklist.includes(buttonValue);
      if (method == true) {
        // svg.classList.add("jsLike")
        svg.style.fill = '#519188';
        form.action = '/' + 'likes';
        but.name = 'remove';
      }
    });
  }
  if (svgtje) {
    const { value } = btn;
    const method = checklist.includes(value);
    if (method == true) {
      // svgtje.classList.add("jsLike")
      svgtje.style.fill = '#519188';
      btn.name = 'remove';
      frm.action = '/' + 'likes';
    }
  }
}
