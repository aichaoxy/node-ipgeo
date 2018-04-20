node-ipgeo
===========

Geo info retriver for ipv4 address using chinese taobao service.

Inspired by [huacnlee/ip-location](https://github.com/huacnlee/ip-location).

## Goal

Retrieve geo info for ip address via [ip.taobao.com](http://ip.taobao.com) .

## Limit

* The official limit: for every user, qps < 10. [ref](http://ip.taobao.com/restrictions.php)

## Usage

```js

var ipgeo = require('../index');


ipgeo.query('182.138.127.93', (d) => {
    console.log(d.country)      # 中国
    console.log(d.region)       # 四川
    console.log(d.city)         # 成都
});
```
