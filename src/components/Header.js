import Image from "next/image";

function Header() {
    return (
        <header>
            {/* top header  */}
            <div>
                <div>
                    <Image 
                        src="https://images.unsplash.com/photo-1421217336522-861978fdf33a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGd1aXRhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        width={150}
                        height={40}
                    />
                </div>
            </div>

            {/* bottom header */}
            <div>
            </div>
        </header>
    )
}

export default Header;
