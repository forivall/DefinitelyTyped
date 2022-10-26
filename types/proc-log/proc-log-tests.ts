let paused = true
const buffer: any[] = []

// this handler will buffer and replay logs only
// after `procLog.resume()` is called
process.on('log', (level, ...args) => {
  if (level === 'resume') {
    buffer.forEach((item) => console.log(...item))
    paused = false
    return
  }

  if (paused) {
    buffer.push([level, ...args])
  } else {
    console.log(level, ...args)
  }
})
