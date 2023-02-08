import './styles.css'

const NavBar = props => {
    return (
        <nav className='container flex flex-row'>
            <div className='logo basis-8/12'>mint</div>
                <ul className='nav-links flex justify-between basis-4/12 items-center text-white'>
                    <li>HOME</li>
                    <li>STACK</li>
                    <li>PRICING</li>
                    <li>EDITOR</li>
                </ul>
        </nav>
    )
}

export default NavBar