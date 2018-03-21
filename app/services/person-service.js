import Service from '@ember/service';

export default Service.extend({
  items: null,

  init() {
    this._super(...arguments);
    if(JSON.parse(localStorage.getItem("people")) == null){
      this.set('items', []);
    }else{
      this.set('items', JSON.parse(localStorage.getItem("people")));
    }
  },

  add(item) {
    this.get('items').pushObject(item);
    localStorage.setItem("people", JSON.stringify(this.get('items')));
  },

  remove(item) {
    this.get('items').removeObject(item);
    localStorage.setItem("people", JSON.stringify(this.get('items')));
  },

  empty() {
    this.get('items').clear();
    localStorage.removeItem("people");
  }
});
