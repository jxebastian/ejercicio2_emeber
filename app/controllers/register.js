import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  people: service('person-service'),
  actions: {
    register(){
      $('#msg1').empty()
      .removeClass("alert alert-success alert-danger");
      $('#msg').empty();
      const name = $('#name').val();
      const sex = $('#sex').val();
      const salary = $('#salary').val();
      if(name==='' || sex==='' || salary===''){
        $('#msg1')

        .addClass("alert alert-danger")
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Llene todos los campos');
        $('#msg').append('<hr>');
      }else{
        if(!(/^[A-Za-z]+$/.test(name))){
          $('#msg1')
          .addClass("alert alert-danger")
          .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Solo letras');
          $('#msg').append('<hr>');
        }else if(!(/^\d+$/.test(salary))){
          $('#msg1')
          .addClass("alert alert-danger")
          .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Numeros enteros');
          $('#msg').append('<hr>');
        }else{
          const json = {name, sex, salary};
          this.get('people').add(json);
          $('#name').val('');
          $('#sex').val('');
          $('#salary').val('');
          $('#msg1')
          .addClass("alert alert-success")
          .append('<span class="glyphicon glyphicon-ok"></span> Register success');
          $('#msg').append('<hr>');
        }
      }
    },
  },
});
