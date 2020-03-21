const request = require('supertest');
const app = require('../index');

describe('GET /', ()=>{
    it('should return hey world',(done)=>{
        request(app).get('/').expect('hey world', done);
    });
});
