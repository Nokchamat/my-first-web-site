
    var Links = {
      setColor:function(color){
          // var alist = document.querySelectorAll('a');
          // var i = 0;
          // while(i < alist.length){
          //   alist[i].style.color = color;
          //   i++;
          $('a').css('color',color);
        }
      }

    var Body = {
      setColor:function(color){
        //document.querySelector('Body').style.color = color;
        $('body').css('color', color);
      },
      setBackgroundColor:function(color){
        //document.querySelector('Body').style.backgroundColor = color;
        $('body').css('backgroundColor', color);
      }
    }



    function changeDay(set){
      if(set.value==='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        document.querySelector('.grid ol').style.borderColor='white';
        document.querySelector('h1').style.borderColor='white';
        set.value='day';

        Links.setColor('powderblue');
      }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        document.querySelector('.grid ol').style.borderColor='black';
        document.querySelector('h1').style.borderColor='black';
        set.value='night';

        Links.setColor('blue');
        }
      }
