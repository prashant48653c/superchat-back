
import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { User } from '../models/User.model'
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'entities/User.entity';
import { Repository } from 'typeorm';

const mockUser = [{
  id: 1,
  username: 'piku',
  fullName: 'piku pi',
  coverPicture: 'sdf',
  description: 'New user',
  friendList: null

},
{
  id: 2,
  username: 'tiku',
  fullName: 'piku pi',
  coverPicture: 'sdf',
  description: 'New user',
  friendList: null

},
{
  id: 3,
  username: 'Tappu',
  fullName: 'piku pi',
  coverPicture: 'sdf',
  description: 'New user',
  friendList: null

},

]
@Resolver()
export class UserResolver {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  @Query((returns) => [User])
  async getUser() {
    const users = await this.userRepository.find();
    return users;
  }


  @Query(returns => User, { nullable: true })
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    
    const user = await this.userRepository.findOne({ where: { id } });
    return user; 
  }

  @Mutation((returns) => User)
  async signUp(

    @Args('fullName') fullName: string,
    @Args('password',  ) password: string,
    @Args('email',  ) email: string,



  ) {
    const newUser = this.userRepository.create({
      username: 'talku',
      email,
      password,  
      fullName,
      description: 'New user',
      profilePicture: 'http://localhost:5000/uploads/pp.jpg',
      coverPicture: 'http://localhost:5000/uploads/cover.jpg',
      friendList: '', 
    });
   
   await this.userRepository.save(newUser)
    return newUser;
  }




}
