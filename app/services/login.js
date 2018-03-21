import Service from '@ember/service';

export default Service.extend({
  items: null,

  init() {
    this._super(...arguments);
    if(JSON.parse(localStorage.getItem("user")) == null){
      this.set('items', []);
    }else{
      this.set('items', JSON.parse(localStorage.getItem("user")));
    }

  },

  add(item) {
    this.get('items').pushObject(item);
    localStorage.setItem("user", JSON.stringify(this.get('items')));
  },

  remove(item) {
    this.get('items').removeObject(item);
  },

  empty() {
    this.get('items').clear();
  },

});
