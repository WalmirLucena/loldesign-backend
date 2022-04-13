interface IUser extends ILogin{
    username: string,
  }
  
  interface ILogin {
    email: string,
    password: string,
  }
  
  interface IToken {
    username: string,
    email: string
  }
  
  interface IModel extends IToken{
    id: number | undefined;
  }
  
  export { IToken, ILogin, IUser, IModel };
  