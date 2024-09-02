getcontent(null, "current");
function getcontent(evt, content) {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    var tablinks = document.getElementsByClassName("tablink");

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }


    document.getElementById(content).style.display = "block";
    if(evt){
      evt.currentTarget.className += " active";  
    }
    
}
function myMap(lat,lng) {
    var mapProp= {
      center:new google.maps.LatLng(lat,lng),
      zoom:15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

function searcharea(){
    var location=document.getElementById("txtlocation").value;

    fetch(`https://api.weatherapi.com/v1/current.json?key=edfa7945f1a74d22bf4115257242908&q=${location}`)
        .then(res=> res.json())
        .then(data =>{
            myMap(data.location.lat,data.location.lon)
            document.getElementById("location").innerHTML=data.location.name;
            document.getElementById("tempreture").innerHTML=data.current.temp_c+" C";
            document.getElementById("cloud-img").innerHTML =`<img src="${data.current.condition.icon}" alt="" width="100px">`
            document.getElementById("condition").innerHTML =data.current.condition.text;
            document.getElementById("wind").innerHTML =data.current.wind_kph+" Kph";
            document.getElementById("wind-dir").innerHTML=data.current.wind_degree;
            document.getElementById("humidity").innerHTML=data.current.humidity;
        });
    
}


    