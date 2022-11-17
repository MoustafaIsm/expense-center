import { useState, useEffect } from 'react';
import { useBannedUsers, useNotBannedUsers } from '../../query/users';
import Tab from './Tab';
import { CircularProgress } from '@mui/material';
import { useInView } from 'react-intersection-observer';

function Tabs() {

    const [activeTab, setActiveTab] = useState('not-banned');
    const { ref, inView } = useInView();

    const openBanned = () => {
        setActiveTab('banned');
    }

    const openNotBanned = () => {
        setActiveTab('not-banned');
    }

    const {
        status: bannedStatus,
        data: bannedUsers,
        isFetchingNextPage: bannedIsFetchingNextPage,
        fetchNextPage: bannedFetchNextPage,
        hasNextPage: bannedHasNextPage,
    } = useBannedUsers();

    const {
        status: notBannedStatus,
        data: notBannedUsers,
        isFetchingNextPage: notBannedIsFetchingNextPage,
        fetchNextPage: notBannedFetchNextPage,
        hasNextPage: notBannedHasNextPage,
    } = useNotBannedUsers();

    useEffect(() => {
        if (inView) {
            if (activeTab === 'not-banned') {
                notBannedFetchNextPage();
            } else {
                bannedFetchNextPage();
            }
        }
    }, [bannedFetchNextPage, inView, notBannedFetchNextPage, activeTab])

    return (
        <div className="w-full">
            {/* Tabs */}
            <ul className="w-full flex text-center text-lg border-b border-primary-blue">
                <li className={`w-1/2 py-3 transition-all duration-300 ${activeTab === 'not-banned' ? 'bg-primary-blue text-white underline underline-offset-8' : 'hover:cursor-pointer hover:bg-secondary-blue hover:text-white'}`} onClick={openNotBanned}> Not banned </li>
                <li className={`w-1/2 py-3 transition-all duration-300 ${activeTab !== 'not-banned' ? 'bg-primary-blue text-white underline underline-offset-8' : 'hover:cursor-pointer hover:bg-secondary-blue hover:text-white'}`} onClick={openBanned}> Banned </li>
            </ul>
            {/* Tab Content */}
            <div className='flex flex-col'>
                {
                    activeTab === 'not-banned' ? (
                        notBannedStatus === 'loading' ? (
                            <div className="flex justify-center items-center h-96">
                                <CircularProgress />
                            </div>
                        ) : (
                            <>
                                <Tab type="Not banned" pages={notBannedUsers.pages} />
                                <button
                                    ref={ref}
                                    onClick={() => notBannedFetchNextPage()}
                                    disabled={!notBannedHasNextPage || notBannedIsFetchingNextPage}>
                                    {notBannedIsFetchingNextPage ? <CircularProgress /> : notBannedHasNextPage ? 'Load More' : 'Nothing more to load'}
                                </button>
                            </>
                        )
                    ) : (
                        bannedStatus === 'loading' ? (
                            <div className="flex justify-center items-center h-96">
                                <CircularProgress />
                            </div>
                        ) : (
                            <>
                                <Tab type="Banned" pages={bannedUsers.pages} />
                                <button
                                    ref={ref}
                                    onClick={() => bannedFetchNextPage()}
                                    disabled={!bannedHasNextPage || bannedIsFetchingNextPage}>
                                    {bannedIsFetchingNextPage ? <CircularProgress /> : bannedHasNextPage ? 'Load More' : 'Nothing more to load'}
                                </button>
                            </>

                        )
                    )

                }
            </div>
        </div>
    )
}

export default Tabs