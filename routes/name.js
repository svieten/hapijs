module.exports = [
    { method: 'GET',
      path: '/name',
      handler: (request, h) => {
          return "My name is Sean"
      }
  }
];
