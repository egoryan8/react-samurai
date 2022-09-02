import profileReducer, {actions, InitialStateType} from './profile-reducer';
import {ProfileType} from "../@types/types";

const state: InitialStateType = {
  postsData: [
    { id: 3, message: 'How are you?', likesCount: 8 },
    { id: 2, message: 'Hello, World', likesCount: 10 },
    { id: 1, message: 'Its my first post!', likesCount: 3 },
  ],
  profile: null as unknown as ProfileType,
  status: '',
  newPostText: '',
};

test('Новый пост должен быть добавлен', () => {
  const newState = profileReducer(state, actions.addPostActionCreator('Тестовый пост'));
  expect(newState.postsData.length).toBe(4);
});
