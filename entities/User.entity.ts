import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: 'http://localhost:5000/uploads/pp.jpg' })
  profilePicture: string;

  @Column({ default: 'http://localhost:5000/uploads/cover.jpg' })
  coverPicture: string;

  @Column({ nullable: true })
  friendList?: string;  
}
