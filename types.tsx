/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
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
};

export type Message = {
  id : string,
  content : string,
  createdAt : string,
};

export type ChatRom = {
  id : string,
  users: [User],
  lastMessage: string,
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
