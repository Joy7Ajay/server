const Data_url = "";

//callbacks
function fetchDataCallback(callback){
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
function fetchDatapromise(){
    return fetch(Data_url)
    .then(response=> {
        if(!response.ok){
            throw new Error('')
        }
        return response.json();
    })
    .catch(error=>{
        console.error("Error fetching data(promise):",error);
        throw error; //this will be used if need to handle it outside.
    });
}

//async/await
async function fetchDataasync(){
    
} 