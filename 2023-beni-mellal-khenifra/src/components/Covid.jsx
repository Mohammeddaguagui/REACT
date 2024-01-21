import {useEffect, useState} from "react";
export default function Covid() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
            .then(response => response.json())
            .then(response => setData(response))
    }, []);

    return (
        <ul>
            {data?.map((e, key) => {
                return <li key={key}>{e.country} - {e.active}</li>
            })}
        </ul>
    );
}
