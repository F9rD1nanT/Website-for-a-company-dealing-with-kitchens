$(document).ready(function(){
   
    let body=$('body');
    body.hide().show(1000);


    let flag = false;
    $('#Uhr').click(function () {
      if(flag){
       $('.menu-element').slideDown();
      }
      else{
       $('.menu-element').slideUp();
      }
      flag = !flag;
      $('#Uhr').css()
    });

    
    let No_Flag = false;
    $('#bottom_number').click(function () {
      if(No_Flag){
       $('.menu-element_number').slideDown();
      }
      else{
       $('.menu-element_number').slideUp();
      }
      No_Flag = !No_Flag;
      $('#bottom_number').css()
    });

    
    let adres = false;
    $('#bottom_adres').click(function () {
      if(adres){
       $('.menu-element_adres').slideDown();
      }
      else{
       $('.menu-element_adres').slideUp();
      }
      adres = !adres;
      $('#bottom_adres').css()
    });
});



