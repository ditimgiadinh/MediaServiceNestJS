https://www.youtube.com/watch?v=lENNmjT0nyI

npm i -g @nestjs/cli


D:\antn\Admin\NodeJS\NestJS-Microservices>nest new nestjs-microservices
✨  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use?
> npm
  yarn
  pnpm

↑↓ navigate • ↵ select


PS D:\antn\Admin\NodeJS\NestJS-Microservices\nestjs-microservices> nest g app gateway

PS D:\antn\Admin\NodeJS\NestJS-Microservices\nestjs-microservices> nest g app catalog

PS D:\antn\Admin\NodeJS\NestJS-Microservices\nestjs-microservices> nest g app meadia


npm i --save @nestjs/microservices

nest start catalog --watch

nest start media --watch

nest start search --watch

npm i --save amqplib amqp-connection-manager

npm run start:dev media


Get-ChildItem -Recurse -File | Select-String "dist/apps/meadia"

Remove-Item -Recurse -Force dist

nest build media