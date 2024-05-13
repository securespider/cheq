# cheq

## Packages 📦

- [App](./packages/app) - Next.js 14, with App router
- [Hardhat](./packages/hardhat/) - Hardhat projects

```ts
hardhat({
    project: '../hardhat',
    deployments: {
    Message: {
        11155111: '0xcc5a0d6268d70811edad77799f2168afe6382e89',
    },
    },
}),
```

## Development 🛠️

```bash
npm run dev
# or
yarn dev
```
If there is an error in opening localhost, ensure that the environment is being set up on your system. (.env) found from CHEQ > packages > app > .env
