module.exports=[{
  method: 'POST',
  path: '/sport',
  handler: (request, h) => {
      return 'Your favorite sport is: ' + request.payload.sport
  }
}
]
