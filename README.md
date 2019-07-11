
# Rest api built with typescript, express, webpack, pm2, winston logger, docker with nging proxy and mongoDb

## install
clone the repo and run this commands (feel free to use npm)

```
yarn install
yarn tsoa:gen
docker-compose up or docker-compose up -d
```

## Custom url and certif for https
- add you custom local url to all the places with develop.home.com
- generate certif in ngnix container by running
```
create-ssl-certificate --hostname youDomain --domain com
```
