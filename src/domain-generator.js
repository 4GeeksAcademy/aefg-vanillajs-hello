window.onload = function() {
    //write your code here
    console.log("Hello Rigo from the console!");
  };
  
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  
  let domainGenerator = function  () {
   
   let website= [];
   
    for (i=0;i<pronoun.lenght;i++) {
      for (j=0;j<adj.lenght;j++) {
        for (k=0;k<noun.lenght;k++) {
    website.push(pronoun[i]+adj[j]+noun[k]);
   
  
    
        }
      }
    }
    console.log (website);
  }
  domainGenerator();
  