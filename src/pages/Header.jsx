
function Header(){
    return (
        <header className="header w-full fixed top-0 right-0 backdrop-blur-sm flex justify-end items-center px-8 h-14 z-10">
            <div className="flex gap-3 md:gap-10 text-base">
                <a href="#" className="">About</a>
                <a href="#">Skills</a>
                <a href="#">Experience</a>
                <a href="#">Projects</a>
            </div>
        </header>
    )
}

export default Header;