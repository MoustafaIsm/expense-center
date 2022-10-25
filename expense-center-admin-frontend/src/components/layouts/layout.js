
function Layout({ title, children }) {
    return (
        <div className="p-9 ml-20% w-full">
            <header className="mb-9">
                <p className="bold-text text-2xl">{title}</p>
            </header>
            {/* Page content */}
            <main className="w-full">{children}</main>
        </div>
    )
}

export default Layout