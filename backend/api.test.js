import { describe,it,expect,beforeAll } from "vitest";
import request from 'supertest';
import app from '../backend/index.js';

describe('GET OK',()=>{
    it('Endpoint deberia responder mensaje ok', async()=>{
        const res = await request(app).get('/productos');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(2)

        const producto = res.body[0]
        expect(producto).toHaveProperty('nombre')
    })
})