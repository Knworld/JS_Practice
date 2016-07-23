var row = 6, col = 7;
Date.prototype.daysInMonth = function(){
    var d = new Date(this.getFullYear(), this.getMonth()+1, 0);    
    return d.getDate();
}

//alert(Date.daysInMonth(2016, 1));


function drawTable(row, col){
    var calTab = document.createElement('div');
    calTab.id = 'calTable';
    document.body.appendChild(calTab);
    
    for(var i=0; i<row; i++){
        for(var j=0; j<col; j++){
            var calBox = document.createElement('div');
          
            calBox.className = 'calBox ' + i + j;
            document.getElementById('calTable').appendChild(calBox);
        }
        var br = document.createElement('div');
        br.className = 'br';
        document.getElementById('calTable').appendChild(br);
    }
    document.getElementsByTagName('body').innerHTML = '</div>'
    
}

function fillDate(year, month){
    var d = new Date(year, month);
    var days = d.daysInMonth(2016,1);
    var firstDay = d.getDay();
    var dayCount = 1;
    
    for(var i=0; i<row; i++){
        
        (i==0) ? j=firstDay: j=0;
        for(j; j<col; j++){
            var dayNum = document.createElement('p');
            dayNum.className = 'dayNum';
            dayNum.innerHTML = dayCount;
            document.getElementsByClassName('calBox ' + i + j)[0].appendChild(dayNum);
            dayCount++;
            if(dayCount>days) return;
            
        }
        
    }
    
}

drawTable(row,col);

fillDate(2016, 2);
