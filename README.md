# Approvals counter

This action counts amount of approvals of the PR

## How to use 

You can check that PR has required amount of approvals like this

```yml
name: 'Approvals'
description: 'Check that PR has 2 approvals'
outputs:
  approved:
    description: 'If PR has 2 approvals'
    value: ${{steps.approvals.outputs.approvals >= 2}}
runs:
  using: 'composite'
  steps:
    - uses: dayone-jp/approvals@main
      id: approvals
      env:
        GITHUB_TOKEN: "token"
```
