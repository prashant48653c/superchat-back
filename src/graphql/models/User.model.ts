//! schema means object types in graphql
//! @InputTYpe can be used for data creation and @ObjectType to define return type
import { Field, Int, ObjectType } from "@nestjs/graphql";


@ObjectType()

export class User{
@Field(type => Int)
    id:number;


@Field()
username:string;

@Field()
email:string;

@Field()
password:string;

@Field()
fullName:string;

@Field()
description:string;

@Field({defaultValue:'http:localhost:5000/uploads/pp.jpg'})
profilePicture:string;

@Field({defaultValue:'http:localhost:5000/uploads/cover.jpg'})
coverPicture:string;

@Field({ nullable: true })
friendList?: string;  
}   