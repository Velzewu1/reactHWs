import React, {useState, useEffect} from 'react'; 

function DataFetcher(){
    const [fetchData, setFetchData] = useState("nothing");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFetchData(data)
            })
            .catch((error) => {
                console.log(error)
            });
      }, []);

    return (
      <>
        <p>{fetchData}</p>
      </>
    )
  }
export default DataFetcher;