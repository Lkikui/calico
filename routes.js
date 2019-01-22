export default app => {
  app.get('/api/events', (req, res) => {
    res.send({
      events: [
        {
          title: 'go to costco',
          details: 'get chicken',
          time: new Date('2019-01-22 10:00:00'),
        },
      ],
    })
  })

  app.post('/api/event', (req, res) => {
    res.send(
      `I received your POST request. This is what you sent me: ${JSON.stringify(
        req.body.newEvent
      )}`
    )
  })
}
