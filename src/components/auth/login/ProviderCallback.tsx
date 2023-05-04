import backendApi, { ApiResponse } from "../../../axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ProviderCallback: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [user, setUser] = useState(null);
    const location = useLocation();

    // On page load, we take "search" parameters
    // and proxy them to /api/auth/callback on our Laravel API
    useEffect(() => {
        backendApi
            .get(`auth/callback${location.search}`)
            .then((response: any) => {
                return response.json();
            })
            .then((data: any) => {
                setLoading(false);
                setData(data);
            });
    }, []);

    // Helper method to fetch User data for authenticated user
    // Watch out for "Authorization" header that is added to this call
    function fetchUserData() {
        backendApi
            .get(`user`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    // Authorization: "Bearer " + data.token,
                },
            })
            .then((response: any) => {
                return response.json();
            })
            .then((data: any) => {
                setUser(data);
            });
    }

    if (loading) {
        return <DisplayLoading />;
    } else {
        if (user != null) {
            return <DisplayData data={user} />;
        } else {
            return (
                <div>
                    <DisplayData data={data} />
                    <div style={{ marginTop: 10 }}>
                        <button onClick={fetchUserData}>Fetch User</button>
                    </div>
                </div>
            );
        }
    }
};

function DisplayLoading() {
    return <div>Loading....</div>;
}

function DisplayData(data: any) {
    return (
        <div>
            <samp>{JSON.stringify(data, null, 2)}</samp>
        </div>
    );
}

export default ProviderCallback;
