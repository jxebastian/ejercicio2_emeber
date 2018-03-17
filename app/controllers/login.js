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
=======
        $('#password').val('');
>>>>>>> f4edbc1b59f76a68b87c4e4cd668c304cbe803ee
        $('#msg1')
        .addClass("alert alert-danger")
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Usuario inexistente o contraseña incorrecta  ');
        $('#msg').append('<hr>');
        $('#username').text(user);
<<<<<<< HEAD
        $('#password').val('');
=======
>>>>>>> f4edbc1b59f76a68b87c4e4cd668c304cbe803ee
      }else if(pass==get(userV, 'password')){
        $('#msg').text('');

        //la solucion esta acá, luego de loguearse guardar en el servicio solo el username
        this.get('car').add(user);
        this.transitionToRoute('index');
      }else{
<<<<<<< HEAD
=======


>>>>>>> f4edbc1b59f76a68b87c4e4cd668c304cbe803ee
        $('#msg1')
        .addClass("alert alert-danger")
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Usuario inexistente o contraseña incorrecta  ');
        $('#msg').append('<hr>');
<<<<<<< HEAD
        $('#password').val('');
=======

>>>>>>> f4edbc1b59f76a68b87c4e4cd668c304cbe803ee
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
