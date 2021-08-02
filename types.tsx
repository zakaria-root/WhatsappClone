/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  ChatRom : undefined;
  NotFound: undefined;
  contacts : undefined;
  login: undefined; 
  register: undefined;
};

export type MainTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Camera: undefined;
  Status: undefined;
  Chats: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type User = {
  id : string,
  name: string,
  imageUri: string,
  status: string,

};

export type Message = {
  id : string,
  content : string,
  createdAt : string,
  user :User,
};

export type ChatRom = {
  id : string,
  users: User[],
  lastMessage: string,
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type IsLogedIn = {
  isLogedIn:boolean;
}
