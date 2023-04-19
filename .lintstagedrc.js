const path = require('path')

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

const buildPrettierCommand = filenames =>
  `pnpm prettier --write ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, buildPrettierCommand],
  '**/*.s(c|a)ss': [buildPrettierCommand],
  '**/*.(md|json)': [buildPrettierCommand],
}
