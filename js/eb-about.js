$(document).ready(function(){
  //function 함수이름(입력값1,입력값2,...){}
  function skill(id,percent){
    var bar = new ProgressBar.Circle(id, {
      color: '#aaa',
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#333', width: 4 },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }
    
      }
    });
    
    bar.animate(1.0);
  }
  skill("#ae",0.8)
  skill("#pr",0.7)
  skill("#ps",0.6)
  skill("#ai",0.5)
  skill("#c4",0.4)
})
$(document).ready(function(){
  $('.container .interview-video').click(function(){
    $('.modal').addClass("show")
    $('.modal').append(`<div class="item_box">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).data("video")}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>`)
  })
  $('.modal .dim').click(function(){
    $('.modal .item_box').remove()
    $('.modal').removeClass('show')
  })
})
