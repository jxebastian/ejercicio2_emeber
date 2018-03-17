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
        $('#msg').text('Usuario inexistente o contraseña incorrecta');
      }else if(pass==get(userV, 'password')){
        $('#msg').text('');

        //la solucion esta acá, luego de loguearse guardar en el servicio solo el username
        this.get('car').add(user);
        this.transitionToRoute('index');
        console.log('Inicio bien');
      }else{
        $('#msg').text('Usuario inexistente o contraseña incorrecta');
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
