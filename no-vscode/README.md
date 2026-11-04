# filetree-no-vscode

This folder is the only local change in `filetree-px`, a fork of [data-goblin/claude-code-filetree](https://github.com/data-goblin/claude-code-filetree). Everything outside it is upstream's, unchanged, so upstream merges stay clean.

It is a second, separate plugin. It keeps filetree from loading in VS Code: in the extension (`CLAUDE_CODE_ENTRYPOINT=claude-vscode`) and in its integrated terminal (`TERM_PROGRAM=vscode`). Everywhere else, filetree loads as usual.

**Why it is a separate plugin.** A plugin has one hooks module, and a module cannot refuse its own load. So the refusal comes from this plugin's `plugin.register` hook, which judges the plugins loaded after it.

**Order.** In `enabledPlugins`, `filetree-no-vscode` must come before `filetree`.
