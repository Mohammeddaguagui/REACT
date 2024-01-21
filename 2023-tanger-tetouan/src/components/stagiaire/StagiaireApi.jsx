import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StagaireApi() {
  const [api, setApi] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setApi(res.data));
  };

  return (
    <div>
      <div class="table-responsive">
        <table class="table table-primary">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">email</th>
            </tr>
          </thead>
          <tbody>
           
              {api.map(item=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
