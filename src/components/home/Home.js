import { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL } from "../../constants/api";
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from "react-bootstrap";

export default function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const url = BASE_URL;

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if(res.ok) {
                    const json = await res.json();
                    console.log(json);
                    setUsers(json);
                } else {
                    setError(error);
                }
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        //Forkortet syntax med axios for fetch
        //axios.get(url)
            //.then((res) => {
                //setUsers(res);
            //})
    }, []);

    const searchUsers = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredUsers = users.filter((user) => {
                return Object.values(user).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredUsers(filteredUsers);
        } else {
            setFilteredUsers(users);
        }
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured</div>;
    }

    return (
        <>
        <Form className="searchbar d-flex">
            <Form.Control
            type="search"
            placeholder="Search"
            className="searchbar__inner"
            aria-label="search"
            onChange={(e) => searchUsers(e.target.value)}
            />
        </Form>
            {searchInput.length > 1 ? (
                filteredUsers.map((user) => {
                    return (

                        <Card key={user.id} className="user-card shadow">
                            <Card.Img className="user-card__image" src={user.avatar_url} />
                            <Card.Body>
                                <Card.Title className="user-card__title">Username: {user.login}</Card.Title>
                                <Link to={`users/${user.login}`}>
                                <Button className="user-card__button" variant='primary'>Details</Button>
                                </Link>
                            </Card.Body>
                        </Card>

                    );
                })
            ) : (
                users.map((user) => {
                    return (
                        
                            <Card key={user.id} className="user-card shadow">
                                <Card.Img className="user-card__image" src={user.avatar_url} />
                                <Card.Body>
                                    <Card.Title className="user-card__title">Username: {user.login}</Card.Title>
                                    <Link to={`users/${user.login}`}>
                                    <Button className="user-card__button" variant='primary'>Details</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        
                    );
            })
        )}
        </>
    )
}

