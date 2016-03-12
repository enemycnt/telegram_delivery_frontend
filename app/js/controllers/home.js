function HomeCtrl($resource) {
  'ngInject';

  var vm = this;

  vm.orders = [
    {
      id: 1,
      tel: '+71231235123',
      code: 'asdjhj12hk3',
      products: 'asdjsahdkjashdj, qwewqhjewqjkeh, asdjashd',
      created_at: '2183712893',
      archived: false
    },
    {
      id: 2,
      tel: '+71273821978j',
      code: 'asdosaydowqui',
      products: 'asdjsahdkjashdj, qwewqhjewqjkeh, asdjashd',
      created_at: '2183712893',
      archived: false
    },
  ]
}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
