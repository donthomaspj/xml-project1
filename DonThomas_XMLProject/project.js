// JavaScript source code
function loadXMLDoc() {

    // Create XMLHttpRequest object
    var xmlhttp = new XMLHttpRequest();

    // Once XML document is loaded, process the data
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            display(this);
        }
    }

    // Send a request for the XML data
    xmlhttp.open("GET", "project.xml", true);
    xmlhttp.send();
}

function displayTable() {
    var table = document.getElementById("idTable");
    var timeCount = 700;
    for (var i = 1; i < 14; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);

        timeCount += 100;
        cell1.innerHTML = timeCount;
        //cell2.innerHTML = "NEW CELL2";
    }
}

function display(xml) {
    displayTable();
    // Asign the DOM object to a variable
    var xmlDoc = xml.responseXML;

    // Get the transfers and display them
    var table = document.getElementById("idTable");

    //attributes
    var studentNames = xmlDoc.getElementsByTagName("studentName");
    var name = studentNames[0].getAttribute("name");
    console.log("name " + name);
    //display heading
    var heading = document.getElementById("idHeading");
    heading.innerHTML += " of " + name + " (#";

    var studentIds = xmlDoc.getElementsByTagName("studentId");
    var id = studentIds[0].firstChild.nodeValue;
    console.log(id);
    heading.innerHTML += id + ")";

    //school
    var school = document.getElementById("idSchool");
    var schoolNames = xmlDoc.getElementsByTagName("school");
    var schoolValue = schoolNames[0].getAttribute("schoolName");
    school.innerHTML = "School - " + schoolValue;

    //program
    var program = document.getElementById("idProgram");
    var programs = xmlDoc.getElementsByTagName("program");
    var programValue = programs[0].firstChild.nodeValue;
    program.innerHTML = "Program - " + programValue;

    //term
    var term = document.getElementById("idTerm");
    var terms = xmlDoc.getElementsByTagName("term");
    var termValue = terms[0].firstChild.nodeValue;
    term.innerHTML = "term - " + termValue;


    //monday
    var days = xmlDoc.getElementsByTagName("day1");
    for (j = 0; j < days.length; j++) {

        var hours = days[j].getElementsByTagName("hour");
        for (i = 0; i < hours.length; i++) {

            var classTime = hours[i].getElementsByTagName("startTime")[0].firstChild.nodeValue;
            var courseName = hours[i].getElementsByTagName("course")[0].firstChild.nodeValue;
            var roomNo = hours[i].getElementsByTagName("room")[0].firstChild.nodeValue;

            // Add book to table
            //fn time location
            var rowNo = timeLocation(classTime);

            console.log(rowNo + "df");
            table.rows[rowNo].cells[1].innerHTML = classTime
                + "<br>" + courseName
                + "<br>" + roomNo
                ;
        }
    }

    //tuesday
    var days = xmlDoc.getElementsByTagName("day2");
    for (j = 0; j < days.length; j++) {

        var hours = days[j].getElementsByTagName("hour");
        for (i = 0; i < hours.length; i++) {

            var classTime = hours[i].getElementsByTagName("startTime")[0].firstChild.nodeValue;
            var courseName = hours[i].getElementsByTagName("course")[0].firstChild.nodeValue;
            var roomNo = hours[i].getElementsByTagName("room")[0].firstChild.nodeValue;

            // Add book to table
            //fn time location
            var rowNo = timeLocation(classTime);

            console.log(rowNo + "df");
            table.rows[rowNo].cells[2].innerHTML = classTime
                + "<br>" + courseName
                + "<br>" + roomNo
                ;
        }
    }

    //wedesday
    var days = xmlDoc.getElementsByTagName("day3");
    for (j = 0; j < days.length; j++) {

        var hours = days[j].getElementsByTagName("hour");
        for (i = 0; i < hours.length; i++) {

            var classTime = hours[i].getElementsByTagName("startTime")[0].firstChild.nodeValue;
            var courseName = hours[i].getElementsByTagName("course")[0].firstChild.nodeValue;
            var roomNo = hours[i].getElementsByTagName("room")[0].firstChild.nodeValue;

            // Add book to table
            //fn time location
            var rowNo = timeLocation(classTime);

            console.log(rowNo + "df");
            table.rows[rowNo].cells[3].innerHTML = classTime
                + "<br>" + courseName
                + "<br>" + roomNo
                ;
        }
    }

    //thursday
    var days = xmlDoc.getElementsByTagName("day4");
    for (j = 0; j < days.length; j++) {

        var hours = days[j].getElementsByTagName("hour");
        for (i = 0; i < hours.length; i++) {

            var classTime = hours[i].getElementsByTagName("startTime")[0].firstChild.nodeValue;
            var courseName = hours[i].getElementsByTagName("course")[0].firstChild.nodeValue;
            var roomNo = hours[i].getElementsByTagName("room")[0].firstChild.nodeValue;

            // Add book to table
            //fn time location
            var rowNo = timeLocation(classTime);

            console.log(rowNo + "df");
            table.rows[rowNo].cells[4].innerHTML = classTime
                + "<br>" + courseName
                + "<br>" + roomNo
                ;
        }
    }

    //friday
    var days = xmlDoc.getElementsByTagName("day5");
    for (j = 0; j < days.length; j++) {

        var hours = days[j].getElementsByTagName("hour");
        for (i = 0; i < hours.length; i++) {

            var classTime = hours[i].getElementsByTagName("startTime")[0].firstChild.nodeValue;
            var courseName = hours[i].getElementsByTagName("course")[0].firstChild.nodeValue;
            var roomNo = hours[i].getElementsByTagName("room")[0].firstChild.nodeValue;

            // Add book to table
            //fn time location
            var rowNo = timeLocation(classTime);

            console.log(rowNo + "df");
            table.rows[rowNo].cells[5].innerHTML = classTime
                + "<br>" + courseName
                + "<br>" + roomNo
                ;
        }
    }



    // Assign the table markup to the corresponding element in the web page
    //document.getElementById("idTable").innerHTML += table;
}

function timeLocation(value) {
    if (value == 800) {
        return 1;
    } else if (value == 900) {
        return 2;
    } else if (value == 1000) {
        return 3;
    } else if (value == 1100) {
        return 4;
    } else if (value == 1200) {
        return 5;
    } else if (value == 1300) {
        return 6;
    } else if (value == 1400) {
        return 7;
    } else if (value == 1500) {
        return 8;
    } else if (value == 1600) {
        return 9;
    } else if (value == 1700) {
        return 10;
    } else if (value == 1800) {
        return 11;
    } else if (value == 1900) {
        return 12;
    } else if (value == 2000) {
        return 13;
    }
}