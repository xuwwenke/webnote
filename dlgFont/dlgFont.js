var $dlgFont=(function(){
    var $dlgfont=$(''
        +'<div class="font-main">'
            +'<div class="font-title">'
                +'<p class="font-p">字体</p>'
                +'<span class="font-close">✖</span>'
            +'</div>'
            +'<div class="font-content">'
                +'<div class="font-family">'
                    +'<p>字体(F)</p>'
                    +'<input type="text" class="show"><br>'
                    +'<ul class="ul">'
                        +'<li style="font-family:ADMUI3Lg;font-size: 0.7em;margin-top: 2px;">ADMUI3Lg</li>'
                        +'<li style="font-family:ADMUI3Sm;font-size: 0.7em;margin-top: 2px;">ADMUI3Sm</li>'
                        +'<li style="font-family:Agency FB;font-size: 0.7em;margin-top: 2px;">Agency FB</li>'
                        +'<li style="font-family:Algerian;font-size: 0.7em;margin-top: 2px;">Algerian</li>'
                        +'<li style="font-family:Arial Rounded MT;font-size: 0.7em;margin-top: 2px;">Arial Rounded MT</li>'
                        +'<li style="font-family:Arial Unicode MS;font-size: 0.7em;margin-top: 2px;">Arial Unicode MS</li>'
                        +'<li style="font-family:方正舒体;font-size: 0.7em;margin-top: 2px;">方正舒体</li>'
                        +'<li style="font-family:华文彩云;font-size: 0.7em;margin-top: 2px;">华文彩云</li>'
                        +'<li style="font-family:华文琥珀;font-size: 0.7em;margin-top: 2px;">华文琥珀</li>'
                    +'</ul>'
                +'</div>'
                +'<div class="font-style">'
                    +'<p>字形(Y)</p>'
                    +'<input type="text" class="show">'
                    +'<ul class="ul1">'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">常规</li>'
                        +'<li style="font-style:italic;font-size: 0.8em;margin-top: 2px;">斜体</li>'
                        +'<li style="font-weight: bold;font-size: 0.8em;margin-top: 2px;">粗体</li>'
                        +'<li style="font-style:italic;font-weight:bold;font-size: 0.8em;margin-top: 2px;">粗偏斜体</li>'
                    +'</ul>'
                +'</div>'
                +'<div class="font-size">'
                    +'<p>大小(S)</p>'
                    +'<input type="text" class="show">'
                    +'<ul class="ul2">'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">8</li>'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">9</li>'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">10</li>'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">11</li>'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">12</li>'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">14</li>'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">16</li>'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">18</li>'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">20</li>'
                        +'<li style="font-size: 0.8em;margin-top: 2px;">22</li>'
                    +'</ul>'
                +'</div>'
                +'<fieldset class="exp">'
                    +'<legend class="leg">示例</legend>'
                    +'<div class="exptext" >AaBbYyZz</div>'
                +'</fieldset>'
                +'<div class="last">'
                    +'脚本：<br>'
                    +'<select name="" id="">'
                        +'<option value="西欧语言">西欧语言</option>'
                        +'<option value="中文 GB2312">中文 GB2312</option>'
                    +'</select>'
                +'</div>'
                +'<a href="">显示更多字体</a>'
                +'<input type="button" value="确定" class="font-confirm">'
                +'<input type="button" value="取消" class="font-cancel">'
            +'</div>'
        +'</div>'
    );
    var $cancel=$dlgfont.find('.font-cancel'),
        $exptext=$dlgfont.find('.exptext'),
        $show1=$dlgfont.find('.font-family .show'),
        $show2=$dlgfont.find('.font-style .show'),
        $show3=$dlgfont.find('.font-size .show'),
        $li=$dlgfont.find('.ul li'),
        $li1=$dlgfont.find('.ul1 li'),
        $li2=$dlgfont.find('.ul2 li'),
        $close=$dlgfont.find('.font-close'),
        $confirm=$dlgfont.find('.font-confirm');
    
    var cfg={
        family: '方正舒体',
        style: '常规',
        size: '10',
    }
    function exp(){
        $exptext.css({ 'font-family': cfg.family, 'font-size': cfg.size + 'pt' });
        if(cfg.style === '斜体') {
            $exptext.addClass('italic');
            $exptext.removeClass('weight');
            return;
        }else if(cfg.style === '粗体') {
            $exptext.addClass('weight');
            $exptext.removeClass('italic');
            return;
        }else if(cfg.style === '粗偏斜体') {
            $exptext.addClass('italic');
            $exptext.addClass('weight');
            return;
        }else{
            $exptext.removeClass('weight');
            $exptext.removeClass('italic');
        }
    }
    function selectFamily(){
        $show1.val(cfg.family)
        console.log(cfg.family)
        $show1.select();
        for(var i=0;i<$li.length;i++){
            (function(i){
                $($li[i]).click(function(){
                    $li.attr('class','')
                    $li.eq(i).attr('class','selected');
                    cfg.family=$($li[i]).html();
                    console.log(cfg.family)
                    $show1.val(cfg.family)
                    $show1.select();
                    exp();
                })
            })(i)
        }
    }
    function selectStyle(){
        $show2.val(cfg.style)
        $show2.select();
        for(var i=0;i<$li1.length;i++){
            (function(i){
                $($li1[i]).click(function(){
                    $li1.attr('class','')
                    $li1.eq(i).attr('class','selected');
                    cfg.style=$($li1[i]).html();
                    $show2.val(cfg.style)
                    $show2.select();
                    console.log(cfg.style)
                    exp();
                })
            })(i)
        }
    }
    function selectSize(){
        $show3.val(cfg.size)
        $show3.select();
        for(var i=0;i<$li2.length;i++){
            (function(i){
                $($li2[i]).click(function(){
                    $li2.attr('class','')
                    $li2.eq(i).attr('class','selected');
                    cfg.size=$($li2[i]).html();
                    $show3.val(cfg.size)
                    $show3.select();
                    exp();
                })
            })(i)
        }
    }
    function close(){
        $dlgfont.remove();
    }
    function show(){
        $('body').append($dlgfont);
        selectFamily();
        selectStyle();
        selectSize();
        exp();
        $cancel.click(close)
        $close.click(close)
        $confirm.click(close)
    }

    return {
        show:show
    }
}());