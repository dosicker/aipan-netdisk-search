const fs = require("fs");
const path = require("path");

const app = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'));

module.exports = {
  apps: [
    {
      name: app.name,
      script: '.output/server/index.mjs',
      log_date_format: 'YYYY-MM-DD HH:mm:ss', // 指定日志文件的时间格式
      autorestart: true, // 在系统异常或崩溃下自动重启
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      env_test: {
        NODE_ENV: 'test',
        PORT: 3000
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
}