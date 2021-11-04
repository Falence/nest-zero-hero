"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config = require("config");
const dbConfig = config.get('db');
exports.typeOrmConfig = {
    type: process.env.RDS_HOSTNAME || dbConfig.type,
    host: process.env.RDS_HOST || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.password,
    password: process.env.RDS_PASSWORD || dbConfig.username,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize,
};
//# sourceMappingURL=typeorm.config.js.map