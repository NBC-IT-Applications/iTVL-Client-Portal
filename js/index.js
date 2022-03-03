var my_url='http://192.168.1.75:7000/';




function auth () {
	$.ajax({
        type:'POST',
        dataType: 'jsonp',
        data: {place_type_id: 1 },        
        url:my_url+'AuthUser',
		success: function(response){
            if (response.) {

            } else 
            {
            	alert('Login Failed, Please retry or contact NBC TVL Administrator!')
            }
        }).fail(function(msg){
            console.log(msg);
        });		
}