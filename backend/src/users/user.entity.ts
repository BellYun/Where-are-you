import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

@Entity()
@Unique(["email"])
@Unique(["phoneNumber"])
@Unique(["googleId"])

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  password: string;//비밀번호는 아이디 비번이 있는 경우에만 활용

  @Column({ nullable: true })
  googleId: string;// 구글 로그인을 활용하는 경우

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}