import {describe, it, expect, beforeAll } from "vitest";
import request  from "supertest";
import express from "express";
import app from './index.js';

describe('GET OK', ()=>{
    it('Endpoint deberia responde mensaje OK', async()=>{
        const res = await request (app).get ('/');
        expect(res.status).toBe(200);
        expect(res.body).toBe('OK')
    })
})