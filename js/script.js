function openNav() {
    document.getElementById("mySidenav").style.width = "32.26%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// $(document).ready(function () {
//     $('#sidenav-item-salon').hover(function () {
//         $('.container').removeClass('container');
//     }, function () {
//         $('container').addClass('container-federation');
//     });
// });

// $('#sidenav-item-salon').hover(function(){
//     $('.container').css("background-image", "url(img/federation-bg.png)");
// });
// $('#sidenav-item-salon').hover(function () {
//   $('.container').addClass('container-federation');
// });

// $("#sidenav-item-salon").click(function(){
//     $(".container").toggleClass("container-federation",false);
// });

$('#sidenav-item-salon').hover(
       function(){ $('.container').addClass('container-federation') },
       function(){ $('.container-federation').removeClass('container') },
       function(){ $('#home-page-main-title').css("display", "none") }
)
