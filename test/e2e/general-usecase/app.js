var initElasticApm = require('../../..').init
// import init as initElasticApm from '../../..'
var createApmBase = require('../e2e')
var elasticApm = createApmBase({
  debug: true,
  serviceName: 'apm-agent-js-base-test-e2e-general-usecase',
  serviceVersion: '0.0.1'
})

elasticApm.setInitialPageLoadName('general-usecase-initial-page-load')

elasticApm.setUserContext({usertest: 'usertest',id: 'userId',username: 'username',email: 'email'})
elasticApm.setCustomContext({testContext: 'testContext'})
elasticApm.setTags({'testTagKey': 'testTagValue'})

function generateError () {
  throw new Error('timeout test error')
}

setTimeout(function () {
  generateError()
}, 100)

generateError.tmp = 'tmp'

var appEl = document.getElementById('app')
var testEl = document.createElement('h2')
testEl.setAttribute('id', 'test-element')
testEl.innerHTML = 'Passed'
appEl.appendChild(testEl)
