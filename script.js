var request = new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
   // console.log(data);

    //a) Get all the countries from Asia continent /region using Filter function
        console.log(data.filter((ele)=>ele.region==="Asia"));

    //b) Get all the countries with a population of less than 2 lakhs using Filter function
        console.log(data.filter((ele)=>ele.population<200000));

    //c) Print the following details name, capital, flag using forEach function
        data.forEach((ele)=>console.log(`Country:${ele.name}\nCapital:${ele.capital}\nflag:${ele.flag}`));
    //d) Print the total population of countries using reduce function
        console.log(data.reduce((acc,cv)=>acc+cv.population,0));

    //e) Print the country which uses US Dollars as currency.
         let crr = data.filter((ele)=>ele.currencies[0].name==="United States dollar");
         console.log(crr);
        
}