// ProfilePage.js
import React from 'react';
import { ProfileCard, AccountSettingsCard, SecuritySettingsCard } from '../../components/ProfilePage';

const ProfilePage = () => {
    return (
        <div className='flex flex-col gap-4 p-8'>
            <ProfileCard />
            <AccountSettingsCard />
            <SecuritySettingsCard />
        </div>
    );
};

export default ProfilePage;
