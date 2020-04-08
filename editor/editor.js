var $editor = (function() {
    var $edi = $(''
            + '<div class="editor-main">'
                + '<textarea spellcheck="false"></textarea>'
            + '</div>'
        );
    $('body').append($edi);
    var $textArea = $edi.find('textarea');
    function close(){
        $textArea.click(function(){
            $menubar.hide();
        })
    }
    function show() {
        close();
    }
    return {
        show: show
    };
}());