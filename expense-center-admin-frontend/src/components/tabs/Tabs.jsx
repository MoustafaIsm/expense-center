import { useState } from 'react';
import Tab from './Tab';

function Tabs() {

    const [activeTab, setActiveTab] = useState('not-banned');

    return (
        <div className="w-full">
            {/* Tabs */}
            <ul className="w-full flex text-center text-lg border-b border-primary-blue">
                <li className={`w-1/2 py-3 ${activeTab === 'not-banned' ? 'bg-primary-blue text-white underline underline-offset-8' : ''}`}> Not banned </li>
                <li className={`w-1/2 py-3 ${activeTab !== 'not-banned' ? 'bg-primary-blue text-white underline underline-offset-8' : ''}`}> Banned </li>
            </ul>
            {/* Tab Content */}
            <div>
                {
                    activeTab === 'not-banned' ? <Tab text="Not banned" /> : <Tab text="Banned" />
                }
            </div>
        </div>
    )
}

export default Tabs