import type { Register } from 'claude-code'

export const register: Register = on => {
  on('plugin.register', async ($, e, next) => {
    if (e.name !== 'filetree') return next(e)
    const inExtension = (await $.env.get('CLAUDE_CODE_ENTRYPOINT')) === 'claude-vscode'
    const inTerminal = (await $.env.get('TERM_PROGRAM')) === 'vscode'
    return inExtension || inTerminal ? { refuse: 'filetree is off in VS Code' } : next(e)
  })
}
