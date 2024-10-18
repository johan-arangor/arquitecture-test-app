const request = require('supertest');
const app = require('../src/app');

describe('User  API', () => {
    it('should create a new user', async () => {
        const response = await request(app)
            .post('/api/users')
            .send({ name: 'John Doe' });
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('John Doe');
    });

    it('should get all users', async () => {
        const response = await request(app).get('/api/users');
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});