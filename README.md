# Approvals counter

This action counts the approvals of the PR

## How to use

You can check that PR has required amount of approvals like this

```yml
name: 'Has two or more approvals'
description: 'Check that PR has two or more approvals'
outputs:
  approved:
    description: 'If PR has two or more approvals'
    value: ${{steps.approvals.outputs.approvals >= 2}}
runs:
  using: 'composite'
  steps:
    - uses: dayone-jp/approvals@v1
      id: approvals
      env:
        GITHUB_TOKEN: ${{ YOUR_TOKEN_HERE }}

```
