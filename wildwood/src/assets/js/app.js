$(document).foundation();
window.sr = ScrollReveal({ reset: true });

var fooReveal = {
  delay    : 200,
  distance : '20px',
  easing   : 'ease-in-out',
  scale    : 1.1,
  duration: 600,
  viewFactor: 0.4
};
sr.reveal('#products .column', fooReveal);

var copyReveal = {
  delay    : 500,
  distance : '10px',
  easing   : 'ease-in-out',
  scale    : 1.1,
  duration: 700,
  viewFactor: 0.1
};
sr.reveal('.callout', fooReveal);

var footerReveal = {
  delay    : 500,
  distance : '10px',
  easing   : 'ease-in-out',
  scale    : 1.1,
  duration: 700,
  viewFactor: 0.1
};
sr.reveal('li', fooReveal);