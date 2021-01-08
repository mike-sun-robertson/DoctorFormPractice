import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        var variFlag = [false, false, false, false, false, false];

       
        let nameValue, birthDateValue, healthNumValue, addressValue, phoneValue, essayValue, doctorValue;
            const submitInfo = (e) => {
                if (e) e.preventDefault();
                const valueTemp = nameValue.value;
                console.log(valueTemp, '------valueSubmit');
        };
        function checkform() {
            //var f = document.forms["theform"].elements;
            var cansubmit = true;

            for (var i = 0; i < 6; i++) {
                if (variFlag[i] == false) {
                    //alert("false");
                    cansubmit = false;
                    break;
                }
            }

            if (cansubmit) {
                //alert("tt");
                document.getElementById('submitbutton').removeAttribute("disabled");
            } else {
                document.getElementById('submitbutton').setAttribute("disabled", "true");
                //alert("ff");
            }
            //document.getElementById("msg").innerHTML = "<h1>checkform</h1>";
            //document.getElementById("msg").innerHTML = "<h1>ddd</h1>";
            //document.getElementById('submitbutton').removeAttribute("disabled");
            //qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
        }
           
            function valiChange(event) {
                if (event.target.value.length > 0 && event.target.value.length <= 50) {
                    document.getElementById("nameMSG")
                        .innerHTML = "OK";
                    //alert(variFlag[0]);

                    variFlag[0] = true;
                    //document.getElementById("msg").innerHTML = "<h1>ddde</h1>";
                    checkform();

                } else {
                    document.getElementById("nameMSG")
                        .innerHTML = "<div style='color: red'>Must be 50 characters or less, total</div>";
                    variFlag[0] = false;
                    nameValue.value = event.target.value;
                    checkform();
                }

                
                console.log(event.target.value,"now");
                
                // <label>Input info</label><input onChange={valiChange} ref={input => inputValue = input}  />
        }
        function birthDateChange(event) {
            if (event.target.value.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/)){
                document.getElementById("birthDateMSG")
                    .innerHTML = "OK";
                variFlag[1] = true;
                checkform();
            }
            else {
                document.getElementById("birthDateMSG")
                    .innerHTML = "<div style='color: red'>Date format must be yyyy-mm-dd</div>";
                variFlag[1] = false;
                checkform();
            }
        }
        function healthNumChange(event) {
            //alert(!isNaN(event.target.value));
            if (event.target.value.length==15 && !isNaN( event.target.value)) {
                document.getElementById("healthNumMSG")
                    .innerHTML = "OK";
                variFlag[2] = true;
                checkform();
            }
            else {
                document.getElementById("healthNumMSG")
                    .innerHTML = "<div style='color: red'>Must be 6 numbers Reg + 9 numbers personal ID, total</div>";
                variFlag[2] = false;
                checkform();
            }
        }
        function addressChange(event) {
            if (event.target.value.length > 0 && event.target.value.length <= 250) {
                document.getElementById("addressMSG")
                    .innerHTML = "OK";
                variFlag[3] = true;
                checkform();
            }
            else {
                document.getElementById("addressMSG")
                    .innerHTML = "<div style='color: red'>Must be 250 characters or less, total</div>";
                variFlag[3] = false;
                checkform();
            }
        }
        function phoneChange(event) {
            var regexp = new RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
            if (regexp.test(event.target.value)) {
                document.getElementById("phoneMSG")
                    .innerHTML = "OK";
                variFlag[4] = true;
                checkform();
            }
            else {
                document.getElementById("phoneMSG")
                    .innerHTML = "<div style='color: red'>Must be (xxx) xxx-xxxx</div>";
                variFlag[4] = false;
                checkform();
            }
        }
        function essayChange(event) {
            
            if (event.target.value.length >= 1000 && event.target.value.length <= 2000) {
                document.getElementById("essayMSG")
                    .innerHTML = "OK";
                variFlag[5] = true;
                checkform();
            }
            else {
                document.getElementById("essayMSG")
                    .innerHTML = "<div style='color: red'>The essay must be at least 1000 characters long but no longer than 2000 characters.</div>";
                variFlag[5] = false;
                checkform();
            }
        }
            return (
                <div>
                    <h1>New Patients Intake Form</h1>
                    <form>
                        <table>
                            <tr>
                                <td>
                                    <label>Full Name:</label></td>
                                <td><input onChange={valiChange} ref={input => nameValue = input} /></td>
                                <td><div id="nameMSG"></div></td>
                            </tr>
                            <tr><td><label>Birthday:</label></td><td><input onChange={birthDateChange} ref={input => birthDateValue = input} /></td><td><div id="birthDateMSG"></div></td></tr>
                            <tr><td><label>Health Number:</label></td><td><input onChange={healthNumChange} ref={input => healthNumValue = input} /> </td><td><div id="healthNumMSG"></div></td></tr >
                            <tr><td><label>Address:</label></td><td><input onChange={addressChange} ref={input => addressValue = input} /></td ><td><div id="addressMSG"></div></td></tr >
                            <tr><td><label>Phone Number:</label></td><td><input onChange={phoneChange} ref={input => phoneValue = input} /></td ><td><div id="phoneMSG"></div></td></tr >
                            <tr><td><label>Doctor Name:</label></td><td><input  ref={input => doctorValue = input} /></td ><td><div id="doctorMSG"> </div></td></tr >
                        </table>
                        <label>Essay:</label> <label id="essayMSG"></label><br /><textarea onChange={essayChange} ref={input => essayValue = input}></textarea><br />
                        <button id="submitbutton"  disabled type="button" onClick={submitInfo}>submit</button>

                    </form>
                    
                </div>
            );
     
    }
}