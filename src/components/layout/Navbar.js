import { Navbar } from "react-bootstrap";

export default function Header() {

    return (
        <>
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand href='/'>Github Users</Navbar.Brand>
        </Navbar>
        </>
    );
}