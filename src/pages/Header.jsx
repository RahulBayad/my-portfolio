
function Header(){
    return (
        <header className="header flex justify-end items-center px-4 border-b border-gray-600 h-14">
            <div className="flex gap-3 md:gap-6">
                <a href="#" className="">About</a>
                <a href="#">Skills</a>
                <a href="#">Experience</a>
                <a href="#">Projects</a>
            </div>
        </header>
    )
}

export default Header;