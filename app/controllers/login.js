import Controller from '@ember/controller';
import { computed, set, get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({

  users : [
        {
          username:'cristian',
          password: '1234',
        },
        {
          username:'lucas',
          password: '12345',
        },
        {
          username:'johan',
          password: '123',
        },
      ],

  car: service('login'),

  actions:{
    login(){
      const user = $('#username').val();
      const pass = $('#password').val();
      const people = this.get('users');
      const userV = people.findBy('username',user);
      if(userV==undefined){
<<<<<<< HEAD
        $('#msg').text('Usuario inexistente o contraseña incorrecta');
        $('#password').val('');
=======
        $('#msg1')
        .addClass("alert alert-danger")
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Usuario inexistente o contraseña incorrecta  ');
        $('#msg').append('<hr>');
        $('#username').text(user);
>>>>>>> ad648cddbc5116d4d0e935496953fa5264acdc93
      }else if(pass==get(userV, 'password')){
        $('#msg').text('');

        //la solucion esta acá, luego de loguearse guardar en el servicio solo el username
        this.get('car').add(user);
        console.log(this.get('car').size());
        this.transitionToRoute('index');
      }else{
<<<<<<< HEAD
        $('#msg').text('Usuario inexistente o contraseña incorrecta');
        $('#password').val('');
=======
        $('#msg1')
        .addClass("alert alert-danger")
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Usuario inexistente o contraseña incorrecta  ');
        $('#msg').append('<hr>');
>>>>>>> ad648cddbc5116d4d0e935496953fa5264acdc93
      }
    },

    remove(item) {
      this.get('car').remove(item);
    },
    add(item){
      this.get('car').add(item);
    },
  },
});
