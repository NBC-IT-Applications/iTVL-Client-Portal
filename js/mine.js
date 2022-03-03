    <script type="text/javascript">


        function Logout(){

            localStorage.clear();
            window.location.href='index.html';
        }



      $(document).ready(function() {
            var userID = localStorage.getItem('userID');
            processCustomer(userID);

        });
            function processCustomer(account_number) {

                            myUser=JSON.parse(customer);

                            

                            $.each(myUser, function (i) {

                                console.log(myUser[i].account_number);

                                if (myUser[i].account_number==account_number){
                                    data='<td>'+myUser[i].firstname+'</td>';
                                    data +='<td>'+myUser[i].surname+'</td>';
                                    data +='<td>'+myUser[i].account_number+'</td>';
                                    data +='<td>'+myUser[i].id_number+'</td>';
                                    data +='<td>'+myUser[i].dob+'</td>';

                                    $('#Identification').html(data);
                                    
                                    data='<td>'+myUser[i].category+'</td>';
                                    data +='<td>'+myUser[i].gender+'</td>';
                                    data +='<td>'+myUser[i].region+'</td>';
                                    data +='<td>'+myUser[i].town+'</td>';
                                    data +='<td>'+myUser[i].surburb+'</td>';

                                    $('#Groups').html(data);

                                    data='<td>'+myUser[i].contactno_home+'</td>';
                                    data +='<td>'+myUser[i].email+'</td>';
                                    data +='<td></td>';
                                    data +='<td>'+myUser[i].residential_address+'</td>';

                                    $('#Contacts').html(data);

                                    data='<td>'+myUser[i].postal_type+'</td>';
                                    data +='<td>'+myUser[i].post_box+'</td>';
                                    data +='<td>'+myUser[i].nampost_office+'</td>';

                                    $('#Postal').html(data);

                                    $('#invoice_id').html(myUser[i].invoice);
                                    
                                }
                            
                            });
              } 
        
        
        var customer='{ \
            "0": {\
                "title": "Mrs.",\
                "firstname": "Petronela Maria",\
                "surname": "Muller",\
                "old_account_number": "86380",\
                "account_number": "86380",\
                "id_number": "49021800160",\
                "dob": "1949-02-18",\
                "contactno_home": "0811241030",\
                "post_box": "20973",\
                "email": "86380@nbc-customers.na",\
                "residential_address": "Erf 85",\
                "town": "Windhoek",\
                "surburb": "Olympia",\
                "date": "2017-05-24T09:36:44.497",\
                "category": "Pensioner",\
                "no_of_tvs": "2",\
                "namibian": "Namibian",\
                "gender": "Female",\
                "preferred_communication": "Mobile",\
                "region": "Khomas",\
                "old_date_of_birth": "21/09/1949",\
                "pobox_town": "Windhoek",\
                "postal_type": "P. O. Box",\
                "balance": "0.00",\
                "nampost_office": "Windhoek Central (Head office)",\
                "status": "Active",\
                "invoice": "10000045"\
            }\
            ,\
            "1": {\
                "title": "Mrs.",\
                "firstname": "Josef",\
                "surname": "Kasera",\
                "old_account_number": "8737",\
                "account_number": "8737",\
                "id_number": "92053100028",\
                "dob": "1949-02-18",\
                "contactno_home": "0811241030",\
                "post_box": "20973",\
                "email": "86380@nbc-customers.na",\
                "residential_address": "Erf 85",\
                "town": "Windhoek",\
                "surburb": "Olympia",\
                "date": "2017-05-24T09:36:44.497",\
                "category": "Household",\
                "no_of_tvs": "2",\
                "namibian": "Namibian",\
                "gender": "Female",\
                "preferred_communication": "Mobile",\
                "region": "Khomas",\
                "old_date_of_birth": "21/09/1949",\
                "pobox_town": "Windhoek",\
                "postal_type": "P. O. Box",\
                "balance": "0.00",\
                "nampost_office": "Windhoek Central (Head office)",\
                "status": "Active",\
                "invoice": "10000248"\
            }\
        }';
    </script>