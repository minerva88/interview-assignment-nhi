import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

export default function GetUserDetails() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    let navigate = useNavigate();

    const { username } = useParams();
    
    if (!username) {
        navigate.push('/');
    }

    const url = BASE_URL + '/' + username;

    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await fetch(url);

                if (res.ok) {
                    const json = await res.json();
                    console.log(json);
                    setUser(json);
                } else {
                    setError('An error occured');
                }
            } catch (error) {
                setError(error.toString());
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    },
    [url]
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>An error occured</div>;
    }

    return (
        <div className="user-details">
            <h3 className="user-details__username">Details for Github user {user.login}</h3>
            <img src={user.avatar_url} className="user-details__image"/>
            <h4 className="user-details__info">Blog: {user.blog}</h4>
            <h4 className="user-details__info">Followers: {user.followers}</h4>
            <h4 className="user-details__info">Company: {user.company}</h4>
        </div>
    );
}