
// var crime_data = [];

    
var crime_data = [
    {id:1,location:"ikorodu north",crimetype:"theft",},
    {id:2,location:"ikorodu central",crimetype:"assault"},
    {id:3,location:"igbogbo",crimetype:"robbery"},
    {id:4,location:"ikorodu north",crimetype:"vandalism"},
    {id:5,location:"ikorodu central",crimetype:"burglary"},
    {id:6,location:"igbogbo",crimetype:"theft"},
    {id:7,location:"ikorodu north",crimetype:"assault"},
    {id:8,location:"ikorodu central",crimetype:"robbery"},
    {id:9,location:"igbogbo",crimetype:"vandalism"},
    {id:10,location:"ikorodu north",crimetype:"burglary"},
    {id:11,location:"ikorodu central",crimetype:"theft"},
    {id:12,location:"igbogbo",crimetype:"assault"},
    {id:13,location:"ikorodu north",crimetype:"robbery"},
    {id:14,location:"ikorodu central",crimetype:"vandalism"},
    {id:15,location:"igbogbo",crimetype:"burglary"},
    {id:16,location:"ikorodu north",crimetype:"theft"},
    {id:17,location:"ikorodu central",crimetype:"assault"},
    {id:18,location:"igbogbo",crimetype:"robbery"},
    {id:19,location:"ikorodu north",crimetype:"vandalism"},
    {id:20,location:"ikorodu central",crimetype:"burglary"},
]

function calc_crime_rate(){

    var location = document.getElementById("location");
    var crime_type = document.getElementById("crime-type");
    var value = crime_type.options[crime_type.selectedIndex].value;
    var locat = location.options[location.selectedIndex].value;
    var count = 0;
    var crime_input = document.getElementById("crime_rate");
    var crime_rate = 0;
    const population = 1093000;

    for(x = 0; x< crime_data.length;x++){
        if(crime_data[x].location == locat && crime_data[x].crimetype == value){
            count ++;
        }; 
    };
    
    crime_rate = (count / population) * 100000;
    crime_input.value = crime_rate;
}
