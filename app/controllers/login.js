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
        {
          username:'luis',
          password: 'lu56',
        },
        {
          username:'alejandro',
          password: 'alejo46',
        },
      ],

  sesion: service('login'),

  actions:{
    login(){
      $('#msg1').empty()
      .removeClass("alert alert-success alert-danger");
      $('#msg').empty();
      const user = $('#username').val();
      const pass = $('#password').val();
      const people = this.get('users');
      const userV = people.findBy('username',user);
      if(userV==undefined){
        $('#msg1').empty();
        $('#msg').empty();
        $('#msg1')
        .addClass("alert alert-danger")
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Usuario inexistente o contraseña incorrecta  ');
        $('#msg').append('<hr>');
        $('#username').text(user);
        $('#password').val('');
      }else if(pass==get(userV, 'password')){

        //la solucion esta acá, luego de loguearse guardar en el servicio solo el username
        this.get('sesion').add(user);
        this.transitionToRoute('index');
      }else{
        $('#msg1')
        .addClass("alert alert-danger")
        .append('<span class="glyphicon glyphicon-exclamation-sign"></span> Usuario inexistente o contraseña incorrecta  ');
        $('#msg').append('<hr>');
        $('#password').val('');
      }
    },
  },
});
