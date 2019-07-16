// add solution here
function theBeatlesPlay(musicians,insruments){
          var array=[];
          for (var i =0; i< musicians.length; i++){
          array.push(musicians[i] + ' plays '+ insruments[i]);
          }
          return array;
}

function johnLennonFacts(facts){
          
          var results =[];
          var count = 0;
          while (results.length < facts.length);{

results.push(facts[count] + '!!!');
            count++;
          }
return results;
}