# ghosting_JS
How to hide JS code from browser console

## What it is
Let's say we want to hide our Javascript code (funcitons, ajax calls and so on) from browser console, so visitors couldn't copy or hack it.

### Usage 
We coud use the "Google Analitics" trick:

1. Load external file, so in page we could see only the script tag with src path.
    
    Doing so, the code is only loaded in browser memory and not in page code.
    
    **Bonus tips**: use attribute onload to remove the tag, so the reference will be totally hided.

2. On page loaded, we will remove this tag, so we can "hide" the source file.

#### Practical example
This is the script tag in the page that will load our js file (note the onload attribute code)  
```<script id="toRemove" type="text/javascript" onload="document.querySelector('#toRemove').remove();" src="/test.js" ></script>```

The code that will fire the hidden script (in the page):  
```<button id="ghostAjax" class="btn btn-md btn-danger">AJAX TEST IN EXTERNAL HIDED FILE</button>```

And this is the example code that will be executed (in the external file):  
```
$(document).ready(function(){
    // AJAX FUNCTION LOADED
    $('#ghostAjax').on('click',function(){
        // AJAX CALL
        $.get("/your-ajax-path", 
        {
            id: 1234,
            value: 0,
        });
    });
});
```
