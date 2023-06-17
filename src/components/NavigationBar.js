import { Navbar, Container, Nav } from "react-bootstrap"
// import logoImage from "../assets/img/logo.png"
import { useEffect } from "react";

const NavigationBar = () => {

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('.navbarrr');

            if (window.pageYOffset > 100) {
                nav.classList.add('navbarwarna', 'shadow');
            } else {
                nav.classList.remove('navbarwarna', 'shadow');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" bg="transparant" variant="dark" fixed="top" className="navbarrr">
            <Container>
                <Navbar.Brand href="#home" className="logo">
                    {/* <img
                        alt=""
                        src={logoImage}
                        width="25"
                        height="25"
                        className="d-inline-block align-center"
                    /> */}
                    Elisitor Biosaka
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav navbarScroll" />
                <Navbar.Collapse id="responsive-navbar-nav navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    />
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}
// var nav = document.querySelector('nav');
// window.addEventListener('scroll', function () {
//     if (window.pageYOffset > 100) {
//         nav.classList.add('bg-dark', 'shadow');
//         console.log('berhasil')
//     } else {
//         nav.classList.remove('bg-dark', 'shadow');
//     }
// });

export default NavigationBar