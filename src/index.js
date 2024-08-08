module.exports = function toReadable (number) {
     const n3 = number % 10;
     const n2 = (number % 100 - n3) / 10;
     const n1 = Math.floor(number / 100);
     const str1 = (n) => {
        switch(n) {
            case 1:
                return 'one';
            case 2:
                return 'two';
            case 3:
                return 'three';
            case 4:
                return 'four';
            case 5:
                return 'five';
            case 6:
                return 'six';
            case 7:
                return 'seven';
            case 8:
                return 'eight';
            case 9:
                return 'nine';
            case 0:
                return '';                    
        }
     } 
     const str2 = (n) => {
        switch(n) {
            case 1:
                return 'eleven';
            case 2:
                return 'twelve';
            case 3:
                return 'thirteen';
            case 4:
                return 'fourteen';
            case 5:
                return 'fifteen';
            case 6:
                return 'sixteen';
            case 7:
                return 'seventeen';
            case 8:
                return 'eighteen';
            case 9:
                return 'nineteen';
            case 0:
                return 'ten';                    
        }
     } 
     const str3 = (n) => {
        switch(n) {
            case 2:
                return 'twenty';
            case 3:
                return 'thirty';
            case 4:
                return 'forty';
            case 5:
                return 'fifty';
            case 6:
                return 'sixty';
            case 7:
                return 'seventy';
            case 8:
                return 'eighty';
            case 9:
                return 'ninety';
            case 0:
                return '';                    
        }
     }
     const firstPart = n1 !== 0 ? `${str1(n1)} hundred` : ''; 
     if (n2 === 0){
        return (n1 ===0 && n3 === 0) ? 'zero' : `${firstPart} ${str1(n3)}`.trim();
     }else {
        return n2 !== 1 ? `${firstPart} ${str3(n2)} ${str1(n3)}`.trim() : `${firstPart} ${str2(n3)}`.trim();
     }
     

}
