import { describe, expect, it } from 'vitest'
import { replace } from '../src/utils'

/** @case-police-ignore */

describe('should', () => {
  it('works', () => {
    expect(replace(`
Github GitHub github GITHUB
vscode VScode VS Code VSCODE
`, '')).toMatchInlineSnapshot(`
  "
  GitHub GitHub github GITHUB
  vscode VS Code VS Code VSCODE
  "
`)
  })
})
