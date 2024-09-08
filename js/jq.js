 function oddeven() {
     let num1 = document.getElementById("num").value;
     let entered_number  = num1% 2;

        if(entered_number == 0){
          alert(` You Enterd ${num1}  That It Is an Even Number. `);

        }

        else{
            alert(`You Enterd ${num1}  That It Is an Odd Number.`);
        }
}


