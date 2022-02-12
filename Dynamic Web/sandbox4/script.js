console.log(data);

const url = "https://secondsemester-aa76.restdb.io/rest/superheroes2"

//The API key:
const options = {
    Headers: {
        "x-apikey": "6205137e1b941c73ff397a41",
    },
};

fetch(url, options)
.then((Response) => {
    if (!Response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
})
.then((data) => {
    //we have the data
    console.log(data);
    //handleData(data);
})
.catch((e) => {
    //Woops, something went wrong
    console.error("An error occured", e.message);
});