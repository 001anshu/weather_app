const apikey="5e83b2d4f926325338c42771dc96bd5e";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityname=document.querySelector(".serch input");
const serchbtn=document.querySelector(".serch button");
const icon=document.querySelector(".weather-icon");


async function checkupdate(city){
  const response=await fetch(apiurl + city + `&appid=${apikey}`)



  if(response.status===404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
    
  }

  else{
    var data= await response.json();
  // console.log(data);
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
  // document.querySelector(".weather-icon").innerHTML=weather[0].main;

  if(data.weather[0].main=="Clear"){
    icon.src="./images/clear.png";
  }
  else if(data.weather[0].main=="Clouds"){
    icon.src="./images/clouds.png";
  }
  else if(data.weather[0].main=="Drizzle"){
    icon.src="./images/drizzle.png";
  }
  else if(data.weather[0].main=="Mist"){
    icon.src="./images/mist.png";
  }
  else if(data.weather[0].main=="Rain"){
    icon.src="./images/rain.png";
  }
  else if(data.weather[0].main=="Snow"){
    icon.src="./images/snow.png";
  }
  // else icon.src="./images/snow.png";

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";

  }
  // var data= await response.json();
  // // console.log(data);
  // document.querySelector(".city").innerHTML=data.name;
  // document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
  // document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  // document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
  // // document.querySelector(".weather-icon").innerHTML=weather[0].main;

  // if(data.weather[0].main=="Clear"){
  //   icon.src="./images/clear.png";
  // }
  // else if(data.weather[0].main=="Clouds"){
  //   icon.src="./images/clouds.png";
  // }
  // else if(data.weather[0].main=="Drizzle"){
  //   icon.src="./images/drizzle.png";
  // }
  // else if(data.weather[0].main=="Mist"){
  //   icon.src="./images/mist.png";
  // }
  // else if(data.weather[0].main=="Rain"){
  //   icon.src="./images/rain.png";
  // }
  // else if(data.weather[0].main=="Snow"){
  //   icon.src="./images/snow.png";
  // }
  // // else icon.src="./images/snow.png";

  // document.querySelector(".weather").style.display="block";




  

}
serchbtn.addEventListener("click",()=>{
  checkupdate(cityname.value);
})
// checkupdate(new york);