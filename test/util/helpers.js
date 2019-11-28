import fs from 'fs'

export function readFileOrEmpty(path) {
  try {
    return fs.readFileSync(path, 'utf-8')
  } catch (e) {
    return ''
  }
}
export function checkForWebpackErrors({ err, stats, done }) {
  if (err) return done(err)
  if (stats.hasErrors()) return done(new Error(stats.toString()))
}
