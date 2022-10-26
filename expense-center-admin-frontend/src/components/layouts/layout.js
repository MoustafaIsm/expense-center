
function Layout({ title, hasButton, buttonText, buttonEvent, children }) {
    return (
        <div className="p-9 ml-20% w-full">
            <header className="mb-9 flex justify-between items-center">
                <p className="bold-text text-2xl">{title}</p>
                {
                    hasButton ?
                        <button className="bg-primary-green text-lg text-white uppercase bold-text hover:cursor-pointer hover:bg-secondary-green py-2 px-4 rounded-xl transition-all duration-300" onClick={buttonEvent}>
                            {buttonText}
                        </button>
                        :
                        <></>
                }
            </header>
            {/* Page content */}
            <main className="w-full">{children}</main>
        </div>
    )
}

Layout.defaultProps = {
    hasButton: false,
    buttonText: '',
    buttonEvent: null
}

export default Layout