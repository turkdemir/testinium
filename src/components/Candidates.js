import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getCandidates } from "../actions/candidates.action";

function Candidates(props) {
  const [state, setstate] = useState([]);
  const [searchValue, setsearchValue] = useState("")
  const { candidateList } = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCandidates());
  }, []);
  
  useEffect(() => {
    const filtered = candidateList.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()));
    const sorted = filtered.sort((a, b) => a.name > b.name ? 1 : -1);
    console.log(sorted)
    setstate(sorted);
  }, [candidateList, searchValue]);

  const handleSearch = (e) => {
    setsearchValue(e.target.value)
  }

  console.log(state);

  return (
    <div className="candidates">
        <input type="text" placeholder="Search..." onChange={handleSearch}/>
      <table id="candidates">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {state &&
            state.map((candidate) => {
              return (
                <tr key={candidate.id}>
                  <td>{candidate.name}</td>
                  <td>{candidate.phone}</td>
                  <td>
                    {" "}
                    <Link className="btn" to={`/candidates/${candidate.id}`}>Detail</Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Candidates;
