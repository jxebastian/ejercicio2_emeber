import Controller from '@ember/controller';
import {computed, set, get} from '@ember/object';

export default Controller.extend({
  username: computed('user', function(){
    return $('#username').val();
  }),

  password: computed('pass', function(){
    return $('#password').val();
  }),

  actions:{
    login(){
      const user = this.get('username');
      const pass = this.get('password');
      console.log(pass);
      const people = this.get('people.model.people');
      console.log(people);
    }
  }
});
