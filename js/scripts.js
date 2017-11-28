// tooltip functionality
// <script>
//   $(document).ready(function(){
//     $('[data-toggle="tooltip"]').tooltip();
//   });
// </script>

// carousel buttons play and pause seperate
// <script>
//   $(document).ready(function(){
//       $("#mycarousel").carousel( { interval: 2000 } );
//       $("#carouselpause").click(function(){
//           $("#mycarousel").carousel('pause');
//       });
//       $("#carouselplay").click(function(){
//           $("#mycarousel").carousel('cycle');
//       });
//   });
// </script>

// carousel button play and pause in one
  $(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carouselbuttons").click(function(){
      if ($("#carouselbuttons").children("span").hasClass('fa-pause')){
        $("#mycarousel").carousel('pause');
        $("#carouselbuttons").children("span").removeClass('fa-pause');
        $("#carouselbuttons").children("span").addClass('fa-play');
      }
      else if ($("#carouselbuttons").children("span").hasClass('fa-play')){
        $("#mycarousel").carousel('cycle');
        $("#carouselbuttons").children("span").removeClass('fa-play');
        $("#carouselbuttons").children("span").addClass('fa-pause');
      }
    });
  });
