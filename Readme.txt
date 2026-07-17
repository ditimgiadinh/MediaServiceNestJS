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

nest start gateway --watch

npm i --save amqplib amqp-connection-manager

npm run start:dev media


Get-ChildItem -Recurse -File | Select-String "dist/apps/meadia"

Remove-Item -Recurse -Force dist

nest build media

npm i @clerk/backend @nestjs/config mongoose @nestjs/mongoose


nslookup -type=SRV _mongodb._tcp.cluster0.iiocoij.mongodb.net

nest g lib rpc

PS D:\antn\Admin\NodeJS\NestJS-Microservices\nestjs-microservices> nest g lib rpc
✔ What prefix would you like to use for the library (default: @app or 'defaultLibraryPrefix' setting value)? @app
CREATE libs/rpc/tsconfig.lib.json (226 bytes)
CREATE libs/rpc/src/index.ts (63 bytes)
CREATE libs/rpc/src/rpc.module.ts (185 bytes)
CREATE libs/rpc/src/rpc.service.spec.ts (457 bytes)
CREATE libs/rpc/src/rpc.service.ts (91 bytes)
UPDATE nest-cli.json (1717 bytes)
UPDATE package.json (2430 bytes)
UPDATE tsconfig.json (805 bytes)
PS D:\antn\Admin\NodeJS\NestJS-Microservices\nestjs-microservices>


npm i class-validator class-transformer


nslookup -type=SRV _mongodb._tcp.cluster0.iiocoij.mongodb.net


----------------------------

PS C:\WINDOWS\system32> $adapter = Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | Select-Object -First 1 -ExpandProperty Name
>> Set-DnsClientServerAddress -InterfaceAlias $adapter -ServerAddresses ("8.8.8.8","8.8.4.4")
>> Clear-DnsClientCache
>> ipconfig /flushdns
>> nslookup -type=SRV _mongodb._tcp.cluster0.iiocoij.mongodb.net

Windows IP Configuration

Successfully flushed the DNS Resolver Cache.
Server:  dynamic-ip-adsl.viettel.vn
Address:  116.97.90.124

Non-authoritative answer:
_mongodb._tcp.cluster0.iiocoij.mongodb.net      SRV service location:
          priority       = 0
          weight         = 0
          port           = 27017
          svr hostname   = ac-0uthziu-shard-00-00.iiocoij.mongodb.net
_mongodb._tcp.cluster0.iiocoij.mongodb.net      SRV service location:
          priority       = 0
          weight         = 0
          port           = 27017
          svr hostname   = ac-0uthziu-shard-00-01.iiocoij.mongodb.net
_mongodb._tcp.cluster0.iiocoij.mongodb.net      SRV service location:
          priority       = 0
          weight         = 0
          port           = 27017
          svr hostname   = ac-0uthziu-shard-00-02.iiocoij.mongodb.net
PS C:\WINDOWS\system32>


PS C:\WINDOWS\system32> Get-NetAdapter | Format-Table Name, Status, InterfaceDescription

Name                               Status       InterfaceDescription
----                               ------       --------------------
vEthernet (WSL (Hyper-V firewall)) Up           Hyper-V Virtual Ethernet Adapter
Bluetooth Network Connection       Disconnected Bluetooth Device (Personal Area Network)
Wi-Fi                              Up           Realtek 8822CE Wireless LAN 802.11ac PCI-E NIC


PS C:\WINDOWS\system32>



PS C:\WINDOWS\system32> Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ServerAddresses ("8.8.8.8","8.8.4.4")
>> Clear-DnsClientCache
>> ipconfig /flushdns
>> nslookup -type=SRV _mongodb._tcp.cluster0.iiocoij.mongodb.net

Windows IP Configuration

Successfully flushed the DNS Resolver Cache.
Server:  dns.google
Address:  8.8.8.8

Non-authoritative answer:
_mongodb._tcp.cluster0.iiocoij.mongodb.net      SRV service location:
          priority       = 0
          weight         = 0
          port           = 27017
          svr hostname   = ac-0uthziu-shard-00-02.iiocoij.mongodb.net
_mongodb._tcp.cluster0.iiocoij.mongodb.net      SRV service location:
          priority       = 0
          weight         = 0
          port           = 27017
          svr hostname   = ac-0uthziu-shard-00-01.iiocoij.mongodb.net
_mongodb._tcp.cluster0.iiocoij.mongodb.net      SRV service location:
          priority       = 0
          weight         = 0
          port           = 27017
          svr hostname   = ac-0uthziu-shard-00-00.iiocoij.mongodb.net
PS C:\WINDOWS\system32>

-------------------------------------------

npm i multer cloudinary