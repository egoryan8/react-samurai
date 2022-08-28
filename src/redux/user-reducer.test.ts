import usersReducer, {actions, InitialStateType} from "./users-reducer";

let state: InitialStateType;

beforeEach(() => {
    state = {
        users: [
            {
                id: 0,
                name: 'Egoryan 0',
                followed: false,
                photos: {small: 'string', large: 'string2'},
                status: 'status 0'
            },
            {
                id: 1,
                name: 'Egoryan 1',
                followed: false,
                photos: {small: 'string', large: 'string'},
                status: 'status 1'
            },
            {
                id: 2,
                name: 'Egoryan 2',
                followed: true,
                photos: {small: 'string', large: 'string'},
                status: 'status 2'
            },
            {
                id: 3,
                name: 'Egoryan 3',
                followed: true,
                photos: {small: 'string', large: 'string'},
                status: 'status 3'
            },],
        pageSize: 15,
        totalUsers: 0,
        currentPage: 1,
        isFetching: false,
        isFollowing: [],
    }
})


test('Follow Success', () => {

    const newState = usersReducer(state, actions.toggleFollow(1))
    expect(newState.users[0].followed).toBeFalsy();
    expect(newState.users[1].followed).toBeTruthy();
})

test('Unfollow Success', () => {

    const newState = usersReducer(state, actions.toggleFollow(3))
    expect(newState.users[2].followed).toBeTruthy();
    expect(newState.users[3].followed).toBeFalsy();
})