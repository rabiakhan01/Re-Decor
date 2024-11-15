import { call, put, takeLatest } from 'redux-saga/effects';
import { setCurrentUser, updateUser } from '../slices/userSlice';
import { setAuthToken } from '../https';

// Worker saga to handle login
function* handleLogin(data) {
    try {
        yield put(setCurrentUser(data?.currentUser))
        setAuthToken(data?.currentUser?.accessToken)
    } catch (error) {
        console.error('Login failed:', error);
    }
}

function* handleLogoutUser() {
    try {
        yield put(setCurrentUser({}))
        setAuthToken('')
    } catch (error) {
        console.log('logout Failed', error)
    }
}

function* handleUpdateUser(data) {
    try {
        yield put(setCurrentUser(data?.payload))
    } catch (error) {
        console.error('Failed to update user:', error);
    }
}
// Watcher sagas
function* userSaga() {
    yield takeLatest('user/login', handleLogin);
    yield takeLatest('user/updateUser', handleUpdateUser);
    yield takeLatest('user/logout', handleLogoutUser);
    yield takeLatest('user/updateUser', handleUpdateUser)
}

export default userSaga;
