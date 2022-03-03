<script type="text/javascript">

        function loadProfile(){
            var userID = localStorage.getItem('userID');
            

            if (userID == null) {
                //localStorage.setItem('userID', null);
                
                $('#myModal').modal('show');
                
            }
            else
            {
                window.location="profile.html";
            }
        }   


        function Login(){
             if ($('#username').val()=='' || $('#password').val()=='' ) {
                //localStorage.setItem('userID', null);
                
                alert('Please enter Username or Password!')
            }
            else{
                //$.each(users, function (i) {
                    var c=0;
                    myUser=JSON.parse(users);
                    $.each(myUser, function (i) {
                        if (myUser[i].username==$('#username').val() && myUser[i].password==$('#password').val()) 
                            {
                                localStorage.setItem('userID', myUser[i].username);
                                c=1;
                                window.location.href='profile.html';
                                //break;
                            }
                            
                    });
                    

                    if (c==0) {
                        alert('wrong username and password');
                    } 
                    
            }

        }

var users='\
{\
  "1": {\
    "username": 86380,\
    "password": 49021800160\
  },\
  "2": {\
    "username": 8737,\
    "password": 92053100028\
  }\
}\
';

</script>