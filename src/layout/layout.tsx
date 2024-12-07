function Layout({children}: {children: React.ReactNode}) {
    return (
        <>
            <header>Header</header>
            {children}
            <footer>Footer</footer>
        </>
    )
}

export default Layout;