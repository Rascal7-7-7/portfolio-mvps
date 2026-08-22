---
paths:
  - "**/*.ts"
  - "**/*.tsx"
  - "**/*.js"
  - "**/*.jsx"
---
# TypeScript/JavaScript Hooks

> TypeScript/JavaScript-specific hook notes. There is no common hooks rule any more (its host-security instructions were folded into the global common security rules); this file is standalone.

## PostToolUse Hooks

Configure in `$CLAUDE_CONFIG_DIR/settings.json` (currently `~/.claude-work/settings.json`) or in this project's `.claude/settings.json`. None of the hooks below are registered as of 2026-08-22 — they are recommendations, not current behavior:

- **Prettier**: Auto-format JS/TS files after edit
- **TypeScript check**: Run `tsc` after editing `.ts`/`.tsx` files
- **console.log warning**: Warn about `console.log` in edited files

## Stop Hooks

- **console.log audit**: Check all modified files for `console.log` before session ends
