import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';
import { inject as service} from '@ember/service';

export default Controller.extend({
  //car: service('login'),

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
  actions:{
    login(){
      const user = $('#username').val();
      const pass = $('#password').val();
      const people = this.get('users');
      const userV = people.findBy('username',user);
      if(userV==undefined){
        $('#msg').text('Usuario inexistente o contraseña incorrecta');
      }else if(pass==get(userV, 'password')){
        console.log('Inicio bien');
        $('#msg').text('');
      }else{
        $('#msg').text('Usuario inexistente o contraseña incorrecta');
      }
    },
    remove(item) {
      this.get('car').remove(item);
    },
    add(item) {
      this.get('car').add(item);
    },
  }
});
