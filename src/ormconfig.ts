import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

// const config: ConnectionOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: parseInt(process.env.DB_PORT),
//   username: 'postgres',
//   password: process.env.DATABASE_PASSWORD,
//   database: 'appnout_desa',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true,
//   migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
//   cli: {
//     migrationsDir: './migrations',
//   },
// };

// export = config;

// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('POSTGRES_HOST'),
      port: parseInt(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
      cli: {
        migrationsDir: './migrations',
      },
      migrationsTableName: 'migration',
      keepConnectionAlive: true,
      autoLoadEntities: true,
      ssl: this.isProduction(),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
]);

export { configService };

// import { ConnectionOptions } from 'typeorm';

// const config: ConnectionOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: parseInt(process.env.DB_PORT),
//   username: 'postgres',
//   password: process.env.DB_PASSWORD,
//   database: 'appnout_desa',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true,
//   migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
//   cli: {
//     migrationsDir: './migrations',
//   },
// };

// export = config;

// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// require('dotenv').config();

// class ConfigService {
//   constructor(private env: { [k: string]: string | undefined }) {}

//   private getValue(key: string, throwOnMissing = true): string {
//     const value = this.env[key];
//     if (!value && throwOnMissing) {
//       throw new Error(`config error - missing env.${key}`);
//     }

//     return value;
//   }

//   public ensureValues(keys: string[]) {
//     keys.forEach((k) => this.getValue(k, true));
//     return this;
//   }

//   public getPort() {
//     return this.getValue('PORT', true);
//   }

//   public isProduction() {
//     const mode = this.getValue('MODE', false);
//     return mode != 'DEV';
//   }

//   public getTypeOrmConfig(): TypeOrmModuleOptions {
//     return {
//       type: 'postgres',

//       host: this.getValue('POSTGRES_HOST'),
//       port: parseInt(this.getValue('POSTGRES_PORT')),
//       username: this.getValue('POSTGRES_USER'),
//       password: this.getValue('POSTGRES_PASSWORD'),
//       database: this.getValue('POSTGRES_DATABASE'),

//       entities: ['src/bar/entities/**/*.ts'],

//       migrationsTableName: 'migration',
//       keepConnectionAlive: true,
//       autoLoadEntities: true,
//       synchronize: true,
//       migrations: ['migration/*.js'],
//       cli: {
//         migrationsDir: 'migration',
//       },
//       ssl: this.isProduction(),
//     };
//   }
// }

// const configService = new ConfigService(process.env).ensureValues([
//   'POSTGRES_HOST',
//   'POSTGRES_PORT',
//   'POSTGRES_USER',
//   'POSTGRES_PASSWORD',
//   'POSTGRES_DATABASE',
// ]);

// export { configService };
