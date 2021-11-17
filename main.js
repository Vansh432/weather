console.log("weather making");
const weather=
{
    key:"cbd1c0fa8181c5dbeb9fc41580c4c51c",
    url:'https://api.openweathermap.org/data/2.5/weather'
}

let search=document.getElementById('search-box');

search.addEventListener('keypress',(event)=>{
    
  if(event.keyCode==13){
      
      showcity(search.value);
  }
});
function showcity(city){
    fetch(`${weather.url}?q=${city}&appid=${weather.key}`).then(function(response){
        return response.json();
       }).then(filldata);
}

let contaneir=document.getElementById('contaneir');
console.log(contaneir);
function filldata(data){
    console.log(data);
    let city=document.getElementById('city-name');
    city.innerHTML=`${data.name},${data.sys.country}`
    let temp=document.getElementById('num');
    console.log(temp);
    temp.innerHTML=`${convert(data.main.temp)}`;
    let type=document.getElementById('type');
    type.innerHTML=`${data.weather[0].main}`;
  
    if(data.weather[0].main=="Clear"){
        console.log(type.textContent);
        contaneir.style.backgroundImage="url(https://images.pexels.com/photos/695657/pexels-photo-695657.jpeg?cs=srgb&dl=pexels-johann-piber-695657.jpg&fm=jpg)";
    }
    if(data.weather[0].main=="Clouds"){
        console.log(type.textContent);
        contaneir.style.backgroundImage="url(https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?cs=srgb&dl=pexels-pixabay-158163.jpg&fm=jpg)";
    }
    if(data.weather[0].main=="Rain"){
        console.log(type.textContent);
        contaneir.style.backgroundImage="url(https://www.pexels.com/photo/water-on-glass-396547/)";
    }
    let min=document.getElementById('min');
    min.innerHTML=`${Math.floor(data.main.temp_min-273.15)}`;
    let max=document.getElementById('max');

    max.innerHTML=`${Math.ceil(data.main.temp_max-273.15)}&#8451`;
    let dateformate=document.getElementById('dateformate');
    let todaydate=new Date();
    let date=showdate(todaydate);
     dateformate.innerHTML=date;
}
function convert(val){
    let v=Math.round(val-273.25);
    return v;
}
function  showdate(todaydate){
    const days=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
    const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let year=todaydate.getFullYear();
    let date=todaydate.getDate();
    let day=days[todaydate.getDay()];
    let month=months[todaydate.getMonth()];

    return `${day} ${date} ${month} ${year}`;
}

let d=new Date();
console.log();
let newdate=showdate(d);
let dateformate=document.getElementById('dateformate');
dateformate.innerHTML=newdate;

let 