const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
    target: 'http://127.0.0.1:5500', // 跨域目标接口
    changeOrigin: true
}))

app.listen(3000);