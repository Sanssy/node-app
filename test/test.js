const request = require('supertest');
const app = require('../index');

describe('GET /', ()=>{
    it('should return hello world',(done)=>{
        request(app).get('/').expect('hey world', done);
    });
});
