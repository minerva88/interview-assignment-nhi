import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

export default function GetUserRepos() {

    const [repos, setRepos] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { username } = useParams();

    const url = BASE_URL + '/' + username + '/repos';
    
    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (res.ok) {
                    const json = await res.json();
                    console.log(json);
                    setRepos(json);
                } else {
                    setError('User does not have any public repos!');
                }
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured</div>;
    }

    return (
        <>
            {repos.map(function (repo) {
                
                return (
                    
                        <Card key={repo.id} className="repo-card shadow">
                            <Card.Body>
                                <Card.Title className="repo-card__title">Repository name: {repo.name}</Card.Title>
                                <Card.Text className="repo-card__info">Language: {repo.language}</Card.Text>
                                <Card.Link href={repo.url}>Link to repository</Card.Link>
                            </Card.Body>
                        </Card>
                    
                );

                
            })}
        </>
    )
}