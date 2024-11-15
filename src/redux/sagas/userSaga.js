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

// Worker saga to handle user update
function* handleUpdateUser(action) {
    try {
        const { data } = yield call('http://localhost:8080/auth/update-user', action.payload); // API call for update
        yield put(updateUser(data.user));
    } catch (error) {
        console.error('User update failed:', error);
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
// Watcher sagas
function* userSaga() {
    yield takeLatest('user/login', handleLogin);
    yield takeLatest('user/updateUser', handleUpdateUser);
    yield takeLatest('user/logout', handleLogoutUser)
}

export default userSaga;
