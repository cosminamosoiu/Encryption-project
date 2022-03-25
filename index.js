
    
    const characters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V',  'W', 'X', 'Y', 'Z',  '0', '1',  '2', '3', '4', '5', '6', '7',  '8', '9', '.', ',', '?', '!', '', '_', '-', '&', '@', '#', '$', '%', '*', '(', ')', ' '];

    const encryptEvent = document.querySelector('#encryptBtn')
    encryptEvent.addEventListener('click', function(){
        const message = document.querySelector('#insertedMessage').value;
        const key = document.querySelector('#insertedKey').value;
        const encryptedMessage = encryptMessage(message, key);
        document.querySelector('#outputField').innerHTML = encryptedMessage;

    });

    const decryptionEvent = document.querySelector('#decryptionBtn')
    decryptionEvent.addEventListener('click', function(){
        
        const messageToDecript = document.querySelector('#insertedMessage').value;
        const key = document.querySelector('#insertedKey').value;
        const decriptedMessage =  decriptMessage(messageToDecript, key);
        document.querySelector('#outputField').innerHTML = decriptedMessage;

    })

    const clearResultsEvent = document.querySelector('#clearResults')
    clearResultsEvent.addEventListener('click', function(){
        document.querySelector('#insertedMessage').value=''; 
        document.querySelector('#insertedKey').value='';
        document.querySelector('#outputField').innerHTML='';

    })

    const copyDataEvent = document.querySelector('#copyText');
    copyDataEvent.addEventListener('click', function(){
        const getContent = document.querySelector('#outputField').value;
        navigator.clipboard.writeText(getContent);
    })

    function encryptMessage (message, key) {
        let eMessage = '';
        let upMessage = message.toUpperCase().split('');
        let upKey = key.toUpperCase().split('');
        let sumOfIndex = [];
   
        for(let i = 0; i<upMessage.length; i++){
             if(upKey.length === 1){
                    sumOfIndex[i] = characters.indexOf(upMessage[i]) + characters.indexOf(upKey[0]);  
            }else{
                if(i >= upKey.length){
                    sumOfIndex[i]= characters.indexOf(upMessage[i]);
                }else{
                sumOfIndex[i] = characters.indexOf(upMessage[i]) + characters.indexOf(upKey[i]);
                }
            }
        }
    
            for(let j = 0; j<sumOfIndex.length; j++){
                eMessage += characters[sumOfIndex[j]];
            }

    
        return eMessage.toLowerCase();
    }
   

    function decriptMessage (messageToDecript, key){
        let dMessage = '';
        let upMessage = messageToDecript.toUpperCase().split('');
        let upKey = key.toUpperCase().split('');
        let substractOfIndex = [];

        for(let i = 0; i<upMessage.length; i++){
            if(characters.indexOf(upMessage[i]) - characters.indexOf(upKey[i]) < 0){
                return 'The key-message combination is incorrect';
               
            }
            if(upKey.length === 1){
                 substractOfIndex[i] = characters.indexOf(upMessage[i]) - characters.indexOf(upKey[0]);
            }else{
                if(i >= upKey.length){
                 substractOfIndex[i]= characters.indexOf(upMessage[i]);
                }else{
                    substractOfIndex[i] = characters.indexOf(upMessage[i]) - characters.indexOf(upKey[i]);
                 }
        }
    }

        for(let j = 0; j<substractOfIndex.length; j++){
            dMessage += characters[substractOfIndex[j]];
        }

      return dMessage.toLowerCase();
    }

    



