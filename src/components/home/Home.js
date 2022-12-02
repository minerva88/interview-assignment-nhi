import { BASE_URL } from '../../constants/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function Home() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured</div>;
    }

    return (
        <>
            {users.map(function (user) {
                
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

                
            })}
        </>
    )

}