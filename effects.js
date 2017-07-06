	
	function getelement(idname)
	{
		return document.getElementById(idname);
	}


		var rotated = false;



	function rotatecal(event)
	{

			deg = rotated ? 0:360;
		    element.style.webkitTransform = 'rotateY('+deg+'deg)'; 
			rotated = !rotated;


			console.log(event.target.id);




	

			if (event.target.id == "nextyear") {
				curyear++;
			}
			else if (event.target.id == "prevyear") {
				curyear--;
			}
			else if (event.target.id=="nextmonth") {

				curmonth++;
				if (curmonth > 12) {
					curmonth = 1;
					curyear++;
				}
			}
			else if (event.target.id=="prevmonth") {
				curmonth--;

				if (curmonth < 1 ) {
					curmonth = 12;
					curyear--;
				}
			}
			else if (event.target.id=="today") {
				curmonth = month;
				curyear = year;
			}

			var newday = new Date(curyear,curmonth, -new Date(curyear, curmonth, 0).getDate()+1).getDay();
			var newlength =	new Date(curyear, curmonth, 0).getDate();

			makecal(newday,newlength)



	}


	var element = getelement("cal");

	
	var todays = new Date();


	var year = todays.getFullYear();
	var date = todays.getDate();
	var month =todays.getMonth() + 1;
	

	var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


	var monthlength = new Date(year, month, 0).getDate();


	


	var curyear = year;
	var curmonth = month; 





	var day = new Date(year,month, -new Date(year, month, 0).getDate()+1).getDay();












	makecal(day,monthlength);


	setInterval(function(){
		var datentime = getelement("present");
			
			var d = new Date();
			datentime.innerHTML = d.toString();;

	},1);




	function callformonth(){




	}




	function makecal( day , nosdays )
	{

			var table = element.getElementsByTagName("table")[0];

			 element.getElementsByTagName("h4")[0].innerHTML = mL[curmonth -1] + ',' + curyear;



			var rowbody = table.getElementsByTagName("tbody")[0];

			var allcells = table.getElementsByTagName("td");


		for (var data  = 0 ; data < 42 ; data++ ){

				var cell = allcells[data];

				cell.innerHTML = " ";

			}



			for (var data  = 0 ; data < nosdays ; data++ ){

				var cell = allcells[data + day];


				cell.innerHTML = data+1;

				if ((date == data + 1) && year == curyear && month == curmonth) {

					cell.style.backgroundColor = "#ff66ff";
					cell.style.borderRadius = "20px"
				}
				else{
					cell.style.backgroundColor = " #ffccff";
					cell.style.borderRadius = "0px"

				}
			}







	}




	var but = getelement("nextyear");

	var but2 = getelement("prevyear");

	var but3 = getelement("today");

	var but4 = getelement("prevmonth");
	 var but5 = getelement("nextmonth");


	but.addEventListener("click",rotatecal);
	but2.addEventListener("click",rotatecal);
	but3.addEventListener("click",rotatecal);
	but4.addEventListener("click",rotatecal);
	but5.addEventListener("click",rotatecal);


