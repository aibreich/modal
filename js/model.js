var model = (function() {
    var _placeholder = function (pageID) {
        $.get(`pages/${pageID}/${pageID}.html`, function(data){
            $("#app").html(data)
        });
    
        
    };
    return {
        placeholder: _placeholder
    };
    })();