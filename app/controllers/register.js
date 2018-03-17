import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  people: service('person-service'),
  actions: {
    register(){
      const name = $('#name').val();
      const sex = $('#sex').val();
      const salary = $('#salary').val();
      if(name==='' || sex==='' || salary===''){
        $('.msg2')
        .addClass("alert alert-danger")
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Llene todos los campos');
      }else{
        if(!(/^[A-Za-z]+$/.test(name))){
          $('.msg2')
          .addClass("alert alert-danger")
          .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Solo letras');
        }else if(!(/^\d+$/.test(salary))){
          $('.msg2')
          .addClass("alert alert-danger")
          .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Numeros enteros');
        }else{
          const json = {name, sex, salary};
          this.get('people').add(json);
          $('#name').val('');
          $('#sex').val('');
          $('#salary').val('');
          $('.msg2')
          .addClass("alert alert-success")
          .append('<span class="glyphicon glyphicon-ok"></span> Register success');
        }
      }
    },
  },
});
