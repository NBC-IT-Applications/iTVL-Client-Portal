        var url= "https://internal.nbcapps.com.na:7700/api/";
        function loadProfile(){
            var user = sessionStorage.getItem('user');
            

            if (user == null) {
                //localStorage.setItem('userID', null);
                
                $('#myModal').modal('show');
                
            }
            else
            {
                window.location="profile.html";
            }
        }   


        function Login(){

            username=$('#username').val();
            password= $('#password').val();

            var userdata= new Object();
            userdata.user=username;
            userdata.password=password;

             if (username=='' || password=='' ) {
                //localStorage.setItem('userID', null);
                
                alert('Please enter Username or Password!')
            }
            else{
                var settings = {
                "async": true,
                "crossDomain": true,
                "url": url+"portal",
                "data": userdata,
                "type": "POST"
                }

                $.ajax(settings).done(function (users) {
                  //alert(users)
                //console.log(users);

                if (users !=9) {
                    $.each(users, function (i) {
                        if (sessionStorage["user"] !==null) {
                            sessionStorage.setItem('user', JSON.stringify(users));   
                            window.location.href='profile.html';

                            //console.log(sessionStorage.getItem('user'));
                        } else {
                            //window.location.href='profile.html';

                            console.log(2);
                        }  
                    });    
                } else {
                    alert('wrong username and password');
                }

            });
        }

    }



    //This is for Profile.html

    function Logout(){

        sessionStorage.clear();
        window.location.href='index.html';
      }

    function loadProfile() {
      //console.log(sessionStorage.getItem('user'));
        if (sessionStorage['user']==null) {
            window.location="index.html";
        } else {
            var user = JSON.parse(sessionStorage.getItem('user'));
            //console.log(JSON.parse(userString));
            processCustomer(user); 
        }

      };
          function processCustomer(myUser) {

                          //$.each(myUser, function (i) {
                            $('#invoiceBtn').html('<a class="btn btn-success" onclick="getInvoice()">Download</a></div>');
                            
                                  data='<td width="20%"><i>'+myUser[0].firstname+'</i></td>';
                                  data +='<td width="25%">'+myUser[0].surname+'</td>';
                                  data +='<td width="10%">'+myUser[0].account_number+'</td>';
                                  data +='<td width="25%">'+myUser[0].id_number+'</td>';
                                  data +='<td width="10%">'+myUser[0].dob+'</td> ';

                                  $('#Identification').html(data);
                                  
                                  data='<td width="20%">'+myUser[0].catergory+'</td>';
                                  data +='<td width="25%">'+myUser[0].gender+'</td>';
                                  data +='<td width="10%">'+myUser[0].region+'</td>';
                                  data +='<td width="25%">'+myUser[0].town+'</td>';
                                  data +='<td width="10%">'+myUser[0].surburb+'</td>';

                                  $('#Groups').html(data);

                                  data='<td width="20%">'+myUser[0].cell+'</td>';
                                  data +='<td width="25%">'+myUser[0].email+'</td>';
                                  data +='<td width="25%"></td>';
                                  data +='<td width="25%">'+myUser[0].residential_address+'</td>';

                                  $('#Contacts').html(data);

                                  data='<td width="20%">'+myUser[0].postal_type+'</td>';
                                  data +='<td width="25%">'+myUser[0].post_box+'</td>';
                                  data +='<td>'+myUser[0].nampost_office+'</td>';

                                  $('#Postal').html(data);

                                  data= '<td>'+myUser[1].InvoiceNo+'</td>';
data += '<td>'+myUser[1].Period+'</td>';
                                  data += '<td>'+myUser[1].InvoiceAmount+'</td>';
data += '<td>'+myUser[1].Penalty+'</td>';
data += '<td>'+myUser[1].InvoiceBalance+'</td>';

$('#Invoices').html(data);
                          
                          //});
            } 
        
      function contactus(){
          name=$('#name').val();
          email= $('#email').val();
          phone= $('#phone').val();
          message= $('#message').val();

          if (name=='' || email=='' || phone=='' || message=='' ) {

              alert('Please complete the fields to proceed!')
          }
          else{
              var user = JSON.parse(sessionStorage.getItem('user'));

              var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://www.nbcapps.cloud:7700/api/portal?u="+user[0].account_number+"&p="+user[0].id_number+"&key=0&name="+name+"&to="+email+"&from="+email+"&message="+message+"&phone="+phone,
              "method": "POST"
              }
              
              $.ajax(settings).done(function (response) {
                if (response==1) {
                  alert("Email sent");
                  location.reload();
                } else {
                  alert("Oops..sorry please retry again!");
                }                  
          });
        }
      }


function LoadInvoice(){
var user = JSON.parse(sessionStorage.getItem('user'));
users= user[0];
invoice= user[1];
if (sessionStorage["user"] !==null) {
                                                                var idnoaccno= "ID No: " + users['id_number'] ;
								idnoaccno+= "<br>Acc No: " +users['account_number'] +"<br><br>Invoice No:"+invoice["InvoiceNo"];
                                                                idnoaccno+= "<br>Created On: "+invoice["Date"];
								$("#idno").html(idnoaccno);
								
								var customer= users['firstname']+" ";  
								customer+= users['surname']+"<br>";  
								customer+= users['postal_type']+" "+users['post_box'] +"<br>"+users['nampost_office'] +"<br>";
								customer+= "Tel: "+users['cell']+"<br>";							
								customer+= "Email: "+users['email'];
								//console.log(customer)
								$('#customerDetails').html(customer); 
								

$('#period').text(invoice['Period']+" "+invoice['InvoiceType']);  
		$('#fee').text(invoice['InvoiceAmount']);  
		$('#penalty').text(invoice['Penalty']);  
$('#periodtitle').text(invoice['Period']);  
		$('#total').text(invoice['InvoiceBalance']); 
		  
}
     
} 


function generatePDF() {
        // Choose the element that our invoice is rendered in.
        const element = document.getElementById("invoice");
        // Choose the element and save the PDF for our user.
        html2pdf()
          .from(element)
          .save();
		

      }


function InvoiceBack(){
   window.location.href='profile.html';
}

function getInvoice(){
   window.location.href='invoice.html';
}
	  