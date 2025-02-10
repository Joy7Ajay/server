const Data_url = "";

//callbacks
function fetchData(callback){
    fetch(Data_url)
    .then(response =>{
        if (!response.ok) {
            throw new Error ('');
        }
        return response.json();
    })
    .then(data=>callback(null,data))
    .catch(error=>callback(error,null));

}

//promises