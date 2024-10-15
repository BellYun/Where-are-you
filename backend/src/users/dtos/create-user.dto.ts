export class CreateUserDto {
  //사용자를 추가할 때 필요한 정보를 정의
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}