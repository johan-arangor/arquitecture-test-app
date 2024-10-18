const request = require('supertest');
const app = require('../src/app');

describe('Product API', () => {
    it('should create a new product', async () => {
        const response = await request(app)
            .post('/api/products')
            .send({ name: 'Product A' });
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Product A');
    });

    it('should get all products', async () => {
        const response = await request(app).get('/api/products');
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});