        var contador = 0
         while(contador < 100){
            if(contador % 3 == 0){
                console.log(contador,'ping')
            }else if(contador % 5 == 0){
                connsole.log(contador,'pong')
            }else if(contador % 3 == 0 && contador % 5 == 0){
                console.log(contador,'ping-pong')
            }
            
         }