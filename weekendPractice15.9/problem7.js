//An airplane altitude currently is 1000ft and its altitude reduces each second by 10ft. Write a program which will print “Flight arrived” when the airplane altitude reaches 0ft.


let flightHeight = 1000;
while(flightHeight>=0)
{
        flightHeight = flightHeight-10;        
}
console.log("the flight is arrived");
