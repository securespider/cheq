# cheq

## Packages 📦

- [App](./packages/app) - Next.js 14, with App router
- [Hardhat](./packages/hardhat/) - Hardhat projects
- [Foundry](./packages/foundry/) - Foundry projects

Choose the framework to use, "hardhat" or "foundry", eliminating the one we will not use.

1- Delete the folder of the framework that will not be used:
./packages/hardhat/ or ./packages/foundry/

2- Go to "packages/app/wagmi.config.ts" and remove the plugin that will not be used.

```ts
hardhat({
    project: '../hardhat',
    deployments: {
    Message: {
        11155111: '0xcc5a0d6268d70811edad77799f2168afe6382e89',
    },
    },
}),
foundry({
    project: '../foundry',
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
