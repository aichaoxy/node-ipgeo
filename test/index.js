var ipgeo = require('../index');

describe('IPGeo', function() {
    describe('#query', function() {
        it('Should return an object about the detail geo information.', function() {
            ipgeo.query('182.138.127.93', (d) => {
                if(!((!!a) && (a.constructor === Object))) {
                    throw new Error('Not returning an object');
                }
            })
        })
    })
});