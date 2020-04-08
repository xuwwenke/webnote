var $menubar=(function(){
    var $menu=$(
    '<div class="menubar-main">'
        +'<ul class="ul">'
            +'<li class="first">'
                +'<p>文件(F)</p>'
                +'<ul class="file">'
                    +'<li><span class="filep">新建(N)</span><span class="ctrln">Ctrl+N</span></li>'
                    +'<li><span class="filep">打开(O)...</span><span class="ctrlo">Ctrl+O</span></li>'
                    +'<li><span class="filep">保存(S)</span><span class="ctrln">Ctrl+S</span></li>'
                    +'<li><span class="filep">另存为(A)...</span></li>'
                    +'<hr>'
                    +'<li><span class="filep">页面设置(U)...</span></li>'
                    +'<li><span class="filep">打印(P)...</span><span class="ctrlo">Ctrl+P</span></li>'
                    +'<hr>'
                    +'<li><span class="filep">退出(X)</span></li>'
                +'</ul>'
            +'</li>'
            +'<li class="second">'
                +'<p>编辑(E)</p>'
                +'<ul class="bianji">'
                    +'<li><span class="filep">撤销(U)</span><span class="ctrlu">Ctrl+Z</span></li>'
                    +'<hr>'
                    +'<li><span class="filep">剪切(T)</span><span class="ctrlu">Ctrl+X</span></li>'
                    +'<li><span class="filep">复制(C)</span><span class="ctrlu">Ctrl+C</span></li>'
                    +'<li><span class="filep">粘贴(P)</span><span class="ctrlu">Ctrl+V</span></li>'
                    +'<li><span class="filep">删除(L)</span><span class="ctrll">Del</span></li>'
                    +'<hr>'
                    +'<li><span class="filep">使用Bing搜索...</span><span class="ctrlb">Ctrl+E</span></li>'
                    +'<li><span class="filep">查找(F)...</span><span class="ctrlf">Ctrl+F</span></li>'
                    +'<li><span class="filep">查找下一个(N)</span><span class="ctrlon">F3</span></li>'
                    +'<li><span class="filep">替换(R)...</span><span class="ctrlf">Ctrl+H</span></li>'
                    +'<li><span class="filep">转到(G)...</span><span class="ctrlf">Ctrl+G</span></li>'
                    +'<hr>'
                    +'<li><span class="filep">全选(A)</span><span class="ctrlu">Ctrl+A</span></li>'
                    +'<li><span class="filep">时间/日期(D)</span><span class="ctrld">F5</span></li>'
                +'</ul>'
                +'</li>'
            +'<li class="third">'
                +'<p>格式(O)</p>'
                +'<ul class="geshi">'
                    +'<li><span class="filep">自动换行(W)</span></li>'
                    +'<li class="ziti"><span class="filep">字体(F)...</span></li>'
                +'</ul>'
            +'</li>'
            +'<li class="fourth">'
                +'<p>查看(V)</p>'
                +'<ul class="look">'
                    +'<li><span class="filep">状态栏(s)</span></li>'
                +'</ul>'
            +'</li>'
            +'<li class="fifth">'
                +'<p>帮助(H)</p>'
                +'<ul class="help">'
                    +'<li><span class="filep">查看帮助(H)</span></li>'
                    +'<li class="about"><span class="filep">关于记事本(A)</span></li>'
                +' </ul>'
            +'</li>'
        +'</ul>'
    +'</div>'
    )
    var $first=$menu.find('.first'),
        $second=$menu.find('.second'),
        $third=$menu.find('.third'),
        $fourth=$menu.find('.fourth'),
        $fifth=$menu.find('.fifth'),
        $file=$menu.find('.file'),
        $bianji=$menu.find('.bianji'),
        $geshi=$menu.find('.geshi'),
        $look=$menu.find('.look'),
        $help=$menu.find('.help'),
        $ul=$menu.find('.ul>li'),
        $ziti=$menu.find('.ziti'),
        $about=$menu.find('.about'),
        isDisplay=false;
    function change(){
        $first.click(function(){
            if(!isDisplay){
                $file.css({display:'inline-block'})
                isDisplay=!isDisplay;
            }else{
                $file.css({display:'none'})
                isDisplay=!isDisplay;
            }
        })
        $second.click(function(){
            if(!isDisplay){
                $bianji.css({display:'inline-block'})
                isDisplay=!isDisplay;
            }else{
                $bianji.css({display:'none'})
                isDisplay=!isDisplay;
            }
        })
        $third.click(function(){
            if(!isDisplay){
                $geshi.css({display:'inline-block'})
                isDisplay=!isDisplay;
            }else{
                $geshi.css({display:'none'})
                isDisplay=!isDisplay;
            }
        })
        $fourth.click(function(){
            if(!isDisplay){
                $look.css({display:'inline-block'})
                isDisplay=!isDisplay;
            }else{
                $look.css({display:'none'})
                isDisplay=!isDisplay;
            }
        })
        $fifth.click(function(){
            if(!isDisplay){
                $help.css({display:'inline-block'})
                isDisplay=!isDisplay;
            }else{
                $help.css({display:'none'})
                isDisplay=!isDisplay;
            }
        })

        $first.hover(function(){
            if(isDisplay){
                $file.css({display:'inline-block'})
                $bianji.css({display:'none'})
                $geshi.css({display:'none'})
                $look.css({display:'none'})
                $help.css({display:'none'})
            }
        })
        $second.hover(function(){
            if(isDisplay){
                $file.css({display:'none'})
                $bianji.css({display:'inline-block'})
                $geshi.css({display:'none'})
                $look.css({display:'none'})
                $help.css({display:'none'})
            }
            
        })
        $third.hover(function(){
            if(isDisplay){
                $file.css({display:'none'})
                $bianji.css({display:'none'})
                $geshi.css({display:'inline-block'})
                $look.css({display:'none'})
                $help.css({display:'none'})
            }
        })
        $fourth.hover(function(){
            if(isDisplay){
                $file.css({display:'none'})
                $bianji.css({display:'none'})
                $geshi.css({display:'none'})
                $look.css({display:'inline-block'})
                $help.css({display:'none'})
            }
        })
        $fifth.hover(function(){
            if(isDisplay){
                $file.css({display:'none'})
                $bianji.css({display:'none'})
                $geshi.css({display:'none'})
                $look.css({display:'none'})
                $help.css({display:'inline-block'})
            }
        })
        $ziti.click(function(){
            $dlgFont.show();
        })
    }
    function hide(){
        isDisplay=false;
        $file.css({display:'none'})
        $bianji.css({display:'none'})
        $geshi.css({display:'none'})
        $look.css({display:'none'})
        $help.css({display:'none'})
    }
    function show(){
        $('body').append($menu)
        change();
    }
    return {
        show:show,
        hide:hide
    }
}())