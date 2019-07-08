<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link href="https://fonts.googleapis.com/css?family=Exo&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- Interface File Processor Style -->
    <link rel="stylesheet" href="InterfaceFileProcessor.css">
    <title> Benefit Interface File Editor </title>
    <!-- Style-->
    <style>
      h1 {
        color: black;
        font-family: 'Exo', sans-serif;
        font-size: 100%;
        }
      p {
        color: black;
        font-family: 'Exo', sans-serif;
        font-size: 100%;
        }
    </style>
  </head>
  <body>
    <!-- Jumbotron header -->
    <div style="background-color:steelblue;"class="jumbotron">
        <h1 style="color:aliceblue;" class="display-3">Welcome to the Benefit File Interface Editor</h1>
        <p style="color:aliceblue;" class="lead">Read, edit, mockup, or save a Benefit File Interface.</p>
    </div>
    <!-- Upload -->
    <div class="input-group mb-3">
      <div class="custom-file">
        <input type="file" class="custom-file-input" id="inputGroupFile02">
        <label class="custom-file-label" for="inputGroupFile02">Upload benefit file</label>
      </div>
      <div class="input-group-append">
        <span class="input-group-text" id="inputGroupFile02">Upload</span>
      </div>
    </div>
    <!-- Navigation Tabs -->
    <ul style="list-style-type:none;" class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" data-toggle="tab" href="#EditFile">Edit File</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-toggle="tab" href="#Spreadsheet">Spreadsheet</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#Legend">Legend</a>
        </li>
    </ul>
    <!-- Edit File Tab -->
    <div id="myTabContent" class="tab-content">
    <div class="tab-pane fade show active" id="EditFile">
        <p> Edit the contents of the file here </p>
        <form>
            <ul>
                <li class="form-group">
                    <label style= "font-family: 'Exo', sans-serif;" for="RecordType">Enter Record Type</label>
                    <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <label class="input-group-text" for="inputGroupSelect01">Options</label>
                            </div>
                            <select class="custom-select" id="RecordType">
                              <option selected>Choose...</option>
                              <option value="1">HD</option>
                            </select>
                          </div>      
                </li>              
                <li class="form-group">
                    <label style= "font-family: 'Exo', sans-serif;" for="TransactionType">Enter Transaction Type</label>
                    <div class="input-group mb-3">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="TransactionType">CA</span>
                            </div>
                            <input type="text" class="form-control" id="TransactionPrefix" placeholder="Counry Code" maxlength="2">
                            <select class="custom-select" id="RecordType">
                                    <option selected>Select...</option>
                                    <option value="1">FSBE</option>
                                    <option value="1">CSBE</option>
                                    <option value="1">FSMO</option>
                                    <option value="1">CSMO</option>
                                  </select>
                        </div>                        
                </li>
                <li class="form-group">
                    <label style= "font-family: 'Exo', sans-serif;" for="Date">Select Date</label>
                    <form>
                            <input type="date" name="Date">
                        </form> 
                </li>
                <li class="form-group">
                    <label style= "font-family: 'Exo', sans-serif;" for="Time">Enter Time</label>
                    <input id="settime" type="time" step="1"
       min="0:00" max="24:00" required>
                </li>
                <li class="form-group">
                    <label style= "font-family: 'Exo', sans-serif;" for="ControlNumber">Enter Control Number</label>
                    <input class="form-control" id="ControlNumber" maxlength="6" placeholder="------">
                </li>
                <li class="form-group">
                    <label style= "font-family: 'Exo', sans-serif;" for="CountyCode"> Enter County Code</label>
                    <input class="form-control" id="CountyCode" maxlength="2" placeholder="--">
                </li>
                <li class="form-group">
                    <label style= "font-family: 'Exo', sans-serif;" for="ProfileNumber">Enter Profile Number</label>
                    <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            </div>
                            <select class="custom-select" id="ProfileType">
                                    <option selected>Select...</option>
                                    <option value="0600100">Food</option>
                                    <option value="0600200">Cash</option>
                                  </select>
                            <input type="text" class="form-control" id="ProfilePrefix" placeholder="Counry Code" maxlength="2">
                        </div>  
                </li>
                <li class="form-group">
                    <label style= "font-family: 'Exo', sans-serif;" for="ResponseCode">Enter Response Code</label>
                    <input class="form-control" id="RepsonseCode" maxlength="4" placeholder="0000">
                </li>
            </ul>
        </form>
        <div class="mx-auto" style="width: 200px;">
                <button type="button" class="btn btn-outline-primary">Submit File</button>
        </div>
      </div>  
    <!-- Spreadsheet Tab -->    
    <div class="tab-pane fade" id="Spreadsheet">
        <p id= "Table">View all the files here</p>
    <!-- Xml Parser?? I'm working on it -->      
        <script>
            var parser, xmlDoc;
            var text = "<title>inputGroupFile02</title>" +

            parser = new DOMParser();
            xmlDoc = parser.parseFromString(text,"text/xml");
            
            document.getElementById("inputGroupFile02").innerHTML =
            xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
        </script>
    <!-- Display Table -->     
        <table style= "font-family: 'Exo', sans-serif;" class="table table-striped"> 
            <thead>
              <tr>
                <th scope="col"> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
                <th scope="col"> </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">#</th>
                <td>
                    <script>
                                var text, parser, xmlDoc;
                    
                                text = "<File><Info>" +
                                "<title>inputGroupFile02</title>" +
                                "<Info></File>";
                    
                                parser = new DOMParser();
                                xmlDoc = parser.parseFromString(text,"text/xml");
                    
                                document.getElementById("demo").innerHTML =
                                xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                    
                </td>
                <td>
                    <script>
                                var text, parser, xmlDoc;
                    
                                text = "<File><Info>" +
                                "<title>inputGroupFile02</title>" +
                                "<Info></File>";
                    
                                parser = new DOMParser();
                                xmlDoc = parser.parseFromString(text,"text/xml");
                    
                                document.getElementById("demo").innerHTML =
                                xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                               
                </td>
                <td>
                    <script>
                                var text, parser, xmlDoc;
                    
                                text = "<File><Info>" +
                                "<title>inputGroupFile02</title>" +
                                "<Info></File>";
                    
                                parser = new DOMParser();
                                xmlDoc = parser.parseFromString(text,"text/xml");
                    
                                document.getElementById("demo").innerHTML =
                                xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                var text, parser, xmlDoc;
                    
                                text = "<File><Info>" +
                                "<title>inputGroupFile02</title>" +
                                "<Info></File>";
                    
                                parser = new DOMParser();
                                xmlDoc = parser.parseFromString(text,"text/xml");
                    
                                document.getElementById("demo").innerHTML =
                                xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                var text, parser, xmlDoc;
                    
                                text = "<File><Info>" +
                                "<title>inputGroupFile02</title>" +
                                "<Info></File>";
                    
                                parser = new DOMParser();
                                xmlDoc = parser.parseFromString(text,"text/xml");
                    
                                document.getElementById("demo").innerHTML =
                                xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                var text, parser, xmlDoc;
                    
                                text = "<File><Info>" +
                                "<title>inputGroupFile02</title>" +
                                "<Info></File>";
                    
                                parser = new DOMParser();
                                xmlDoc = parser.parseFromString(text,"text/xml");
                    
                                document.getElementById("demo").innerHTML =
                                xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                var text, parser, xmlDoc;
                    
                                text = "<File><Info>" +
                                "<title>inputGroupFile02</title>" +
                                "<Info></File>";
                    
                                parser = new DOMParser();
                                xmlDoc = parser.parseFromString(text,"text/xml");
                    
                                document.getElementById("demo").innerHTML =
                                xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                var text, parser, xmlDoc;
                    
                                text = "<File><Info>" +
                                "<title>inputGroupFile02</title>" +
                                "<Info></File>";
                    
                                parser = new DOMParser();
                                xmlDoc = parser.parseFromString(text,"text/xml");
                    
                                document.getElementById("demo").innerHTML =
                                xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
              </tr>
              <tr>
                <th scope="row">Record Type</th>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                    
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                               
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
              </tr>
              <tr>
                <th scope="row">Transaction Type</th>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                    
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                               
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
              </tr>
              <tr>
                <th scope="row">Date</th>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                    
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                               
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
              </tr>
              <tr>
                <th scope="row">Time</th>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                    
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                               
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
              </tr>
              <tr>
                <th scope="row">Control Number</th>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                    
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                               
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
              </tr>
               <tr>
                <th scope="row">Country Code</th>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                    
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                               
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
              </tr>
              <tr>
                <th scope="row">Profile Number</th>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                    
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                               
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
              </tr>
              <tr>
                <th scope="row">Response Code</th>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                    
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>                               
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
                <td>
                    <script>
                                    var text, parser, xmlDoc;
                        
                                    text = "<File><Info>" +
                                    "<title>inputGroupFile02</title>" +
                                    "<Info></File>";
                        
                                    parser = new DOMParser();
                                    xmlDoc = parser.parseFromString(text,"text/xml");
                        
                                    document.getElementById("demo").innerHTML =
                                    xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                    </script>           
                </td>
              </tr>
            </tbody>
          </table>
        
          <p id="demo"></p>


          <script>
              var text, parser, xmlDoc;
  
              text = "<bookstore><book>" +
              "<title>inputGroupFile02</title>" +
              "<author>Giada De Laurentiis</author>" +
              "<year>2005</year>" +
              "</book></bookstore>";
  
              parser = new DOMParser();
              xmlDoc = parser.parseFromString(text,"text/xml");
  
              document.getElementById("demo").innerHTML =
              xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue;
          </script>
    </div>
    <!-- Legend Tab -->    
    <div class="tab-pane fade" id="Legend">
            <table style= "font-family: 'Exo', sans-serif;" class="table table-sm">
                    <thead>
                     <tr>
                        <th scope="col">Acronym</th>
                        <th scope="col">Term</th>
                        <th scope="col">Definition</th>

                      </tr>
                    </thead>
                    <tbody>
                     <tr>
                        <th scope="row">HD</th>
                        <td>Haines Directory</td>
                        <td>A reverse directory software program used by WFP&I.</td>
                     </tr>
                     <tr>
                     <tr>
                        <th scope="row">CSBE</th>
                        <td>Monthly cash</td>
                        <td> ... </td>
                     </tr>
                     <tr>
                        <th scope="row">CSMO</th>
                        <td>Monthly cash</td>
                        <td> ... </td>
                     </tr>
                        <th scope="row">FSBE</th>
                        <td>Daily food</td>
                        <td>A public assistance program established to improve the nutrition of people in low-income households by increasing their food-buying power so they are able to purchase the amount of food their household needs. See also: SNAP and CalFresh</td>
                     </tr>
                     <tr>
                        <th scope="row">FSMO</th>
                        <td>Monthly food</td>
                        <td>A public assistance program established to improve the nutrition of people in low-income households by increasing their food-buying power so they are able to purchase the amount of food their household needs. See also: SNAP and CalFresh </td>
                     </tr>
                     <tr>
                            <th scope="row">Profile Number</th>
                            <td>Food</td>
                            <td>0600100XX </td>
                     </tr>
                     <tr>
                      <th scope="row">Profile Number</th>
                            <td>Cash</td>
                            <td>0600200XX </td>
                    </tr>
                    </tbody>
                  </table>
    </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </body>
</html>