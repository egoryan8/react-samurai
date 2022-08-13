import profileReducer, { addPostActionCreator } from './profile-reducer';

const state = {
  postsData: [
    { id: 3, message: 'How are you?', likesCount: 8 },
    { id: 2, message: 'Hello, World', likesCount: 10 },
    { id: 1, message: 'Its my first post!', likesCount: 3 },
  ],
};

test('Новый пост должен быть добавлен', () => {
  const newState = profileReducer(state, addPostActionCreator('Тестовый пост'));
  expect(newState.postsData.length).toBe(4);
});
