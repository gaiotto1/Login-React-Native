export enum UsersTypes {
  LOAD_REQUEST = '@users/LOAD_USER',
  LOAD_SUCCESS = '@users/LOAD_SUCCESS',
  LOAD_FAILURE = '@users/LOAD_FAILURE',
}

export interface User {
  id: string;
  email: string;
  password: string;
}

export interface UsersState {
  readonly data: User[];
  readonly loading: boolean;
  readonly error: boolean;
}
