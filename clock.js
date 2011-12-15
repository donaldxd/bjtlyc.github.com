function startTime()
{
var today=new Date()
var y=today.getFullYear()
var m=today.getMonth()+1
var d=today.getDate()
var h=today.getHours()
var M=today.getMinutes()
var s=today.getSeconds()
d=countyear(y,m,d)
M=checkTime(M)
s=checkTime(s)
document.getElementById('txt').innerHTML=d+":"+h+":"+M+":"+s
t=setTimeout('startTime()',500)
}

function checkTime(i)
{
if (i<10)
{  
   i="0"+i
}
return i
}

function countyear(y,m,d)
{
var day=-49
var month=new Array(0,31,30,31,30,31,30,31,31,30,31,30,31)
var i

for (i=2009;i<y;i++)
{
   if((i%400==0) || ((i%100!=0) && (i%4==0)))
        day=day+366
   else
        day=day+365
}
for (i=1;i<m;i++)
   day=day+month[i]
if((y%400!=0) && !((y%100!=0) && (y%4==0))&& m>2)
   day=day-1+d
else if(m==2)
   day=day+d   
return day
}

function showtime()
   {alert("2012年12月23日14点于苏州")   }

