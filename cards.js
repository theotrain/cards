// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// });

// let cards = document.querySelectorAll('.card');
// cards.forEach((card) => card.addEventListener( 'click', function() {
//   card.classList.toggle('is-flipped');
// }));
// let $cards = $('.card');
// $('.card').each(function() {
//   $(this).draggable({ stack: ".card"  });
// });
// $('.test').draggable();
// $('#c1').draggable();

$(".card")
    .draggable({ stack: ".card"  })
    .click(function(){
          if ( $(this).is('.ui-draggable-dragging') ) {
                return;
          }
          // click action here
          $(this).toggleClass('is-flipped');
    });

// $('.card').animate(
//   { deg: 10 },
//   {
//     duration: 1000,
//     step: function(now) {
//       $(this).css({ transform: 'rotate(' + now + 'deg)' });
//       // translateX(10px) rotate(10deg) translateY(5px);
//     }
//   }
// );
// $('.card').animate(
//   { left: 100, top: 199 },
//   {
//     duration: 1000,
//     step: function(now) {
//       $(this).css({ transform: 'translateX(' + now + 'px) translateY(' + now + 'px)' });
//       // translateX(10px) rotate(10deg) translateY(5px);
//     }
//   }
// );

// $( ".card" ).animate({
//   rotation: 12,
//   left: "+=50",
//   top: "toggle"
// }, 5000, function() {
//   // Animation complete.
// });
let cardTotal = 5
let cardNum = 1

// $( ".c1" ).animate({
//   left: "+=200",
//   top: "+=30",
//   // easing: "easeOutQuint"
// }, 2000, "easeOutQuint", function() {
//   // Animation complete.
// });

function deal() {
  $( ".c" + cardNum ).animate({
    left: "+=1100",
    top: "-=300",
    // easing: "easeOutQuint"
  }, 500, "easeOutQuint", function() {
    // Animation complete.
  }.bind(this));
  cardNum += 1
  if (cardNum > cardTotal) {
    clearInterval(dealInterval)
  }
}

// deal(1);
let dealInterval = setInterval(deal, 300)