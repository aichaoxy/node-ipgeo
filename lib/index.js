const http = require('http');
module.exports = {
    query: function (ip, callback) {
        if(!/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ip)) {
            throw new Error(`Not a valid ip to query`);
        }
        const options = {
            hostname: 'ip.taobao.com',
            port: 80,
            path: `/service/getIpInfo.php?ip=${ip}`,
        };
        http.request(options, (response) => {
            var str = '';

            //another chunk of data has been recieved, so append it to `str`
            response.on('data', function (chunk) {
                str += chunk;
            });

            //the whole response has been recieved, so we just print it out here
            response.on('end', function () {
                try {
                    const obj = JSON.parse(str);
                    if(obj.code !== 0) {
                        throw new Error(`Wrong Request Result: ${str}`);
                    }
                    if (callback) {
                        callback(JSON.parse(str).data);
                    }
                } catch(e) {
                    throw new Error(`Result is not a JSON object: ${str}`);
                }
            });
        }).end();
    },
};