function validate() {
    document.getElementById('email').addEventListener('change',change);
    
    function change(){
        let input =  document.getElementById('email').value;
        console.log(validateEmail(input))

        function validateEmail(input){
            return String(input)
              .toLowerCase()
              .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              );
        }

        if (validateEmail(input) == null){
            document.getElementById('email').className = 'error';
        }else{
            document.getElementById('email').className = '';
        }
    }
}
