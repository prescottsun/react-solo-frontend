import React, { useState, useEffect } from "react";
import { loadData } from "../utils/loadData";

const TestAPI = () => {
  const [state, setState] = useState([]);

  const callAPI = async () => {
    const response = await loadData("http://localhost:9000/testAPI");
    setState(response);
  };

  useEffect(() => {
    callAPI();
  }, []);
  console.log("state: ", state);
  return (
    // <p>{state.value}</p>
    <ul>
      {state.map(test => {
        return (
          <li key={test.id}>
            var_val: {test.var_val}<br />
            var_val2: {test.var_val2}<br />
            int_val: {test.int_val}
            {/* {test.value} */}
          </li>
        );
      })}
    </ul>
  );
};

export default TestAPI;
