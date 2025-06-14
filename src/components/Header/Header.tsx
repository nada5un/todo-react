import "./Header.css";

interface HeaderProps {}

function Header({}: HeaderProps) {
    return (
        <div className="Header">
            <h3>Today is... 🗓️</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    );
}

export default Header;
