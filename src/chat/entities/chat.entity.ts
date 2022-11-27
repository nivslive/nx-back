import { Message } from 'src/message/entities/message.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'chat' })
export class Chat {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'text' })
  room: string;

  @Column({ nullable: true, type: 'text' })
  slug: string;

  @OneToOne(() => User)
  leader: User;

  @ManyToOne(() => User, (user: User) => user.room)
  users: User;

  @ManyToOne(() => Message)
  @JoinColumn()
  messages: Message;
}
