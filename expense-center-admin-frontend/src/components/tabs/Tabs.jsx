import { useState } from 'react';
import { useBannedUsers, useNotBannedUsers } from '../../query/users';
import Tab from './Tab';

function Tabs() {

    const [activeTab, setActiveTab] = useState('not-banned');

    const openBanned = () => {
        setActiveTab('banned');
    }

    const openNotBanned = () => {
        setActiveTab('not-banned');
    }

    const {
        data: bannedUsers,
        isSuccess: bannedUsersSuccess
    } = useBannedUsers();

    const {
        data: notBannedUsers,
        isSuccess: notBannedUsersSuccess
    } = useNotBannedUsers(false);

    return (
        <div className="w-full">
            {/* Tabs */}
            <ul className="w-full flex text-center text-lg border-b border-primary-blue">
                <li className={`w-1/2 py-3 transition-all duration-300 ${activeTab === 'not-banned' ? 'bg-primary-blue text-white underline underline-offset-8' : 'hover:cursor-pointer hover:bg-secondary-blue hover:text-white'}`} onClick={openNotBanned}> Not banned </li>
                <li className={`w-1/2 py-3 transition-all duration-300 ${activeTab !== 'not-banned' ? 'bg-primary-blue text-white underline underline-offset-8' : 'hover:cursor-pointer hover:bg-secondary-blue hover:text-white'}`} onClick={openBanned}> Banned </li>
            </ul>
            {/* Tab Content */}
            <div>
                {
                    activeTab === 'not-banned'
                        ?
                        <Tab type="Not banned" users={notBannedUsersSuccess ? notBannedUsers : []} />
                        :
                        <Tab type="Banned" users={bannedUsersSuccess ? bannedUsers : []} />
                }
            </div>
        </div>
    )
}

export default Tabs