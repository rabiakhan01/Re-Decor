export const loginUser = (currentUser) => ({
    type: 'user/login',
    currentUser: currentUser,
});

export const updateUserInfo = (userInfo) => ({
    type: 'user/updateUser',
    payload: userInfo,
});

export const logout = () => ({
    type: 'user/logout',
})