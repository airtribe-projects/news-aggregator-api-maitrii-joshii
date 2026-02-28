const tap = require('tap');
const supertest = require('supertest');
const app = require('../src/app');
const server = supertest(app);

const mockUser = {
    name: 'Clark Kent',
    email: 'clark@superman.com',
    password: 'Krypt()n8'
};

const mockUserPreferences = [
    {
        id: 1,
        userId: 1,
        category: 'sports',
        country: 'us'
    }
]

let token = '';

// Auth tests

tap.test('POST /users/signup', async (t) => { 
    const response = await server.post('/auth/register').send(mockUser);
    t.equal(response.status, 200);
    t.end();
});

tap.test('POST /users/signup with missing email', async (t) => {
    const response = await server.post('/auth/register').send({
        name: mockUser.name,
        password: mockUser.password
    });
    t.equal(response.status, 400);
    t.end();
});

tap.test('POST /users/login', async (t) => { 
    const response = await server.post('/auth/login').send({
        email: mockUser.email,
        password: mockUser.password
    });
    t.equal(response.status, 200);
    t.hasOwnProp(response.body, 'token');
    token = response.body.token;
    t.end();
});

tap.test('POST /users/login with wrong password', async (t) => {
    const response = await server.post('/auth/login').send({
        email: mockUser.email,
        password: 'wrongpassword'
    });
    t.equal(response.status, 401);
    t.end();
});

// Preferences tests

tap.test('POST /user/preferences', async(t) => {
    const response = await server.post('/preferences').set('Authorization', `Bearer ${token}`).send({
        category: 'sports',
        country: 'us'
    });
    t.hasOwnProp(response.body, 'preferences');
    t.same(response.body.preferences, mockUserPreferences[0]);
    t.end();
})

tap.test('GET /users/preferences', async (t) => {
    const response = await server.get('/preferences').set('Authorization', `Bearer ${token}`);
    t.equal(response.status, 200);
    t.hasOwnProp(response.body, 'preferences');
    t.same(response.body.preferences, mockUserPreferences);
    t.end();
});

tap.test('GET /users/preferences without token', async (t) => {
    const response = await server.get('/preferences');
    t.equal(response.status, 401);
    t.end();
});

tap.test('PUT /users/preferences', async (t) => {
    const response = await server.put('/preferences/1').set('Authorization', `Bearer ${token}`).send({
        category: 'general',
        country: 'us'
    });
    t.equal(response.status, 204);
});

// News tests

tap.test('GET /news', async (t) => {
    const response = await server.get('/news').set('Authorization', `Bearer ${token}`);
    t.equal(response.status, 200);
    t.hasOwnProp(response.body, 'news');
    t.end();
});

tap.test('GET /news without token', async (t) => {
    const response = await server.get('/news');
    t.equal(response.status, 401);
    t.end();
});



tap.teardown(() => {
    process.exit(0);
});