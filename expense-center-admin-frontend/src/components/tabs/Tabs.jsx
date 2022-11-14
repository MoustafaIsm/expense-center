import { useEffect, useState } from 'react';
import { useBannedUsers } from '../../query/users';
import Tab from './Tab';

function Tabs() {
    // TODO: Get banned and not banned users
    // TODO: Add functions to ban and unban users

    const [activeTab, setActiveTab] = useState('not-banned');

    const openBanned = () => {
        setActiveTab('banned');
    }

    const openNotBanned = () => {
        setActiveTab('not-banned');
    }

    const {
        data: bannedUsers,
        isLoading: isLoadingBannedUsers,
        isSuccess: bannedUsersSuccess
    } = useBannedUsers();

    useEffect(() => {
        if (bannedUsersSuccess) {
            console.log(bannedUsers);
        }
    }, [bannedUsersSuccess]);

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
                    activeTab === 'not-banned' ? <Tab type="Not banned" /> : <Tab type="Banned" />
                }
            </div>
        </div>
    )
}

export default Tabs