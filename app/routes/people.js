import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {
      people : [
        {
          username: 'cristian',
          password: '12345',
        },
        {
          username: 'lucas',
          password: '123456',
        },
        {
          username: 'mateo',
          password: '1234',
        },
      ],
    };
  },
});
