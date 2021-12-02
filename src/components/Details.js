import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { getCandidates } from "../actions/candidates.action";

function Details(props) {
    const [state, setstate] = useState([]);
    const { candidateList } = useSelector((store) => store);
    let params = useParams();

    useEffect(() => {
    const filtered = candidateList.find(item=>item.id == params.id)
      setstate(filtered);
    }, [candidateList]);
  

    console.log(params)
    return (
        <div className="details">
            <div className="card">
                <h1>Candidate Card</h1><hr></hr>
            <h2><small>Name : </small>{state?.name} </h2>
            <h2><small>Username : </small>{state?.username} </h2>
            <p><small>Email : </small>{state?.email} </p>
            <p><small>Phone : </small>{state?.phone} </p>
            <p><small>Website : </small>{state?.website} </p>
            <p><small>Company : </small>{state?.company?.name} </p>
            </div>
        </div>
    )
}

export default Details
