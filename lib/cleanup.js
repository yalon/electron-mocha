const fs = require('fs-extra')
// Wait some amount of time to try to ensure Electron has fully quit.
setTimeout(removeTmpdir, 1000)

function removeTmpdir () {
  const tmpdir = process.argv[2]
  fs.removeSync(tmpdir)
  // Electron builds with disabled ELECTRON_RUN_AS_NODE needs to explicitly exit.
  process.exit(0)
}
