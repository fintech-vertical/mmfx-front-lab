module.exports = {
  '**/*.(ts|tsx)': () => 'pnpm tsc --noEmit',
  '**/*.(ts|tsx|js)': filenames => [
    `pnpm eslint ${filenames.join(' ')}`,
    `next lint --fix --file ${filenames
      .map((f) => path.relative(process.cwd(), f))
      .join(' --file ')}`,
    `pnpm prettier --write ${filenames.join(' ')}`
  ],
  '**/*.s(c|a)ss': filenames => [
    `pnpm prettier --write ${filenames.join(' ')}`
  ],
  '**/*.(md|json)': filenames => `pnpm prettier --write ${filenames.join(' ')}`
};