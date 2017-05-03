createElements()
importJson()
function createElements(){
    
   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js";
   document.getElementsByTagName('head')[0].appendChild(script);

   var link = document.createElement('link');
   link.rel = "stylesheet/less";
   link.type = "text/css";
   link.href = "https://cdn.rawgit.com/sadhanareddy/ren-plan/043c5095/styles.less";
   document.getElementsByTagName('head')[0].appendChild(link);

}

function importJson(){
   var request = new XMLHttpRequest();
   request.open("GET", "https://cdn.rawgit.com/sadhanareddy/ren-plan/b1ea354c/user_data.json", false);
   request.send(null);
   var my_json = JSON.parse(request.responseText);
   less.modifyVars(my_json);
}
