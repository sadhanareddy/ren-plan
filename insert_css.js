createElements()
function createElements(){
    
   var script = document.createElement('script');
   script.type = "text/javascript";
   script.src = "//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js";
   document.getElementsByTagName('head')[0].appendChild(script);

   var link = document.createElement('link');
   link.rel = "stylesheet/less";
   link.type = "text/css";
   link.href = "https://cdn.rawgit.com/sadhanareddy/ren-plan/79237d50/styles.less";
   document.getElementsByTagName('head')[0].appendChild(link);

}
