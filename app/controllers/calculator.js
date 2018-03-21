import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    sum(){
      $('#msg99').empty()
      .removeClass("alert alert-success alert-danger");
      $('#msg100').empty();
      const numero1 = parseInt($('#num1').val());
      const numero2 = parseInt($('#num2').val());

      if(numero1 === '' || numero2 === ''){
        $('#msg99')
        .addClass('alert alert-danger')
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Llene todos los campos')

      }
      else{
        if(-1000 > numero1 || numero1 > 1000 || -1000 > numero2 || numero2 > 1000){
          $('#msg99')
          .addClass('alert alert-danger')
          .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Numeros Incorrectos')
         }
         else{
           $('#msg99')

           .addClass("alert alert-success")
           .append('<span class="glyphicon glyphicon-ok"></span>Calculate Succefull');
           $('#msg100').append('<hr>');

           const total = numero1 + numero2 ;


          $("#Total").val(total);
          $('#num1').val('');
          $('#num2').val('');

        }
      }
    },

    sub(){
      $('#msg99').empty()
      .removeClass("alert alert-success alert-danger");
      $('#msg100').empty();
      const numero1 = $('#num1').val();
      const numero2 = $('#num2').val();
      const total = 0 ;
      if(numero1 === '' || numero2 === ''){
        $('#msg99')
        .addClass('alert alert-danger')
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Llene todos los campos')

      }
      else{
        if(-1000 > numero1 || numero1 > 1000 || -1000 > numero2 || numero2 > 1000){
          $('#msg99')
          .addClass('alert alert-danger')
          .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Numeros Incorrectos')
         }
         else{
           $('#msg99')

           .addClass("alert alert-success")
           .append('<span class="glyphicon glyphicon-ok"></span>calculate Succefull');
           $('#msg100').append('<hr>');


          const total = numero1 - numero2 ;


          $('#Total').val(total);
          $('#num1').val('');
          $('#num2').val('');

        }
      }
    }


  }
});
