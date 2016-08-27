$(document).foundation();

if (feature.cssTransition == false) {
    $("html").addClass("no-reveals");
} else {
    $("html").addClass("do-reveals");
}
window.sr = ScrollReveal({ reset: true });

    var fooReveal = {
      delay    : 200,
      distance : '20px',
      easing   : 'ease-in-out',
      scale    : 1.1,
      duration: 600,
      viewFactor: 0.4,
      mobile: false,
    };
    sr.reveal('.do-reveals #products .column', fooReveal);

    var copyReveal = {
      delay    : 200,
      distance : '10px',
      easing   : 'ease-in-out',
      scale    : 1.02,
      duration: 300,
      viewFactor: 0.1,
      mobile: false,
    };
    // sr.reveal('.do-reveals .callout', fooReveal);

    var footerReveal = {
      delay    : 200,
      distance : '10px',
      easing   : 'ease-in-out',
      scale    : 1.1,
      duration: 700,
      viewFactor: 0.1,
      mobile: false,
    };
    sr.reveal('footer li', fooReveal);
// function parallax() {
//     var jarallax = new Jarallax();
//     jarallax.addAnimation('.parallaxed', [{progress: '0%', top: '100%'}, {progress: '100%', top: '0%'}]);
// }
// parallax();