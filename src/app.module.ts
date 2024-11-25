import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserResolver } from './graphql/resolvers/user.resolver';
import { UserEntity } from 'entities/User.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),   // Registered the ENV for all modules
     TypeOrmModule.forRoot({                 // Database connection object

     host:'localhost',
      port:3306,
      type:'mysql',
      username:'root',
      database:'test',
      entities:[UserEntity],
      synchronize:true,  //! Remove this line in Production Mode
      password:process.env.PASSWORD,
      logging: true,  
      }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true
    }),

    TypeOrmModule.forFeature([UserEntity]), 
  ],
  controllers: [],
  providers: [UserResolver]
})
export class AppModule { }
