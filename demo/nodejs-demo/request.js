// 执行 GET 请求

const https = require('https')

const getOptions = {
  hostname: '127.0.0.1',
  port: 3001,
  path: '/todos',
  method: 'GET'
}

const getReq = https.request(getOptions, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

getReq.on('error', error => {
  console.error(error)
})

getReq.end()


const postData = JSON.stringify({
  todo: '做点事情'
})

const postOptions = {
  hostname: '127.0.0.1',
  port: 3001,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': postData.length
  }
}

const postReq = https.request(postOptions, res => {
  console.log(`状态码: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

postReq.on('error', error => {
  console.error(error)
})

postReq.write(postData)
postReq.end()

