"use strict"

var app = require("./app")

app.width =  600
app.height = app.width
app.radius = app.width / 2 - 35

var load = require("./load-data.js")
var viz = require("./viz.js")

app.showMobileWarning()

var q = d3.queue()

q.defer(load.emissionsData)

q.await(function startVisualisation(error) {
  if (error) throw error

  viz.emissionsBudget()
  viz.emissionsLinear()

  app.start()

})
