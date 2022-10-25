
function layout({ title, children }) {
    return (
        <div className="p-9">
            <header>
                <p className="bold-text text-3xl">{title}</p>
            </header>
            <main>{children}</main>
        </div>
    )
}

export default layout