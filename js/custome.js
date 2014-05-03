/*这里是will-light 主题的定制 js
* author: [@foru17]( http://twitter.com/foru17)
*
*/

/*设定一些常用的参数*/
var _siteDomain=  'luolei.org' || window.location.host;

/*迁移多说Wordpress评论到Ghost
* 尼玛这遇到坑啊，还要自己写插件处理这个评论的迁移
    */
    var  duoshuoTrans= window.location.pathname;
    $('.ds-thread').attr('data-url','http://blog.luolei.org'+duoshuoTrans);
    //document.getElementsByClassName('ds-thread').setAttribute('data-url','http://luolei.org'+duoshuoTrans);


/*图片延迟加载*/


/*模拟键盘上下滚动*/
document.onkeydown = checkKey;

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '74') {
        $('html,body').stop();
        $('html,body').animate({
            scrollTop: $(window).stop().scrollTop() + 200
        },'fast')
    }
    else if (e.keyCode == '75') {
        $('html,body').stop();
        $('html,body').animate({
            scrollTop: $(window).stop().scrollTop() - 200
        },'fast')
    }

}

function cleanMask(){
 $('.post-header-mask').css('opacity','0');
}

$('.post-cover-info').hover(function(){
    console.log('清楚遮罩');
    cleanMask();
})

/*顶部遮罩效果*/



var visualContainerWidh=$(window).width();
var contentWidth=$('.post-content').width();

/*检查图片原始高度*/
function checkImg(img){
    var img_real_width,
        img_real_height,
        isMarkWrap=false;//只有作者标记wrap class才会全宽显示
        if($(img).hasClass('wrap') == true){
            isMarkWrap = true;
            console.log('wrap标记');
        }else{
            console.log('不满足wrap');
            return;
        }

        $('<img/>').attr('src',$(img).attr('src')).load(function(){
            img_real_width=this.width;
            img_real_height=this.height;
            /*处理inner中的图片*/

            if(isMarkWrap == true && visualContainerWidh>800 && img_real_width>900 && img_real_width > contentWidth){
                $(img).css({
                    'width':visualContainerWidh,
                    'margin-left':-(visualContainerWidh-contentWidth)/2,
                    'max-width':visualContainerWidh
                });
                $(img).addClass('imgWrapOut');
            }
        })

}



/*若文章没有图片，则在首页显示文字摘要*/
$('.post-image p').each(function(){
    var _this=$(this);
    if(_this.html() == ''){
       _this.closest('.post-excerpt').children('.excerpt-word').show();
    }
})


$('.single-post-inner img').each(function(){
    var _img=$(this);
    if((_img.attr('alt')=='wrap') == true ){
        _img.addClass('wrap');
    }
     checkImg(_img);
});



/*处理iframe宽度*/
$('.single-post-inner iframe, .single-post-inner frame, .single-post-inner video ').each(function(){
    /*获得原始的width，调整适应比例*/
    var _this=$(this);
    var originalWidth=_this.attr('width'),
        originalHeight=_this.attr('height'),
        isMarkWrap=false;

        scaleRatio=originalWidth / originalHeight;//获得长宽比

    if(_this.hasClass('wrap') && visualContainerWidh>800){
        _this.css({
                    'width':visualContainerWidh,
                    'margin-left':-(visualContainerWidh-contentWidth)/2,
                    'max-width':visualContainerWidh,
                    'height':visualContainerWidh / scaleRatio
        });
    }
});


    /*判断cover-image插件*/

    if($('.single-post-inner img').length>0){
        /*如果文章存在图片，首先判断是否有自定义 cover-image*/
        if($('.single-post-inner img[alt="cover-image"]').length>0){
            /*如果有自定义cover，则使用这张*/
            mainImage=$('img[alt="cover-image"]:first');//默认选择第一张 cover-image
            mainImageSource = mainImage.attr('src');
            $('.site-head').css('background-image','url('+mainImageSource+')');
            mainImage.remove();
        }else{
            $('.single-post-inner img:first').attr('alt','cover-image');
            var firstImgWidth=$('.single-post-inner img:first').width();
            console.log(firstImgWidth);
            /*如果没有自定义 cover-image，使用第一章图片*/
                $('.single-post-inner img:first').attr('alt','cover-image');
                mainImage=$('img[alt="cover-image"]');
                mainImageSource = mainImage.attr('src');
                $('.site-head').css('background-image','url('+mainImageSource+')');
                mainImage.remove();

        }

    }else{
        /*如果没有图片，则使用默认的*/

    }

    /*首页最多只显示一张图片
     * Display only one image in each post's excerpt
    */
    if($('body').is('.home-template'||'.archive-template')){
        $('.post-in-list').each(function(){
          $(this).find('img:gt(0)').css('display','none');
          $(this).find('pre').css('display','none');
        })
    }



/*首页显示简介*/

$('.post-excerpt .post-title').each(function(){

    $(this).hover(function(){
        console.log('出现');
        var _this=$(this);
        // _this.removeClass('hidden');
        // targetExcerpet=_this.closest('.post-excerpt').children('.excerpt-word');
        //targetExcerpet.show();//.addClass('animated fadeIn');
    },function(){
        console.log('消失');
        var _this=$(this);
        // targetExcerpet=_this.closest('.post-excerpt').children('.excerpt-word');
        // targetExcerpet.removeClass('fadeInDown').addClass('fadeOutUp').hide();
    })

})



$(window).resize(function() {
    /*重新修改文章图片大小*/
    visualContainerWidh=$(window).width();
    // contentWidth=$('.post-content').width();
    $('.single-post-inner img').each(function(){
        var _img=$(this);
         checkImg(_img);
    })
});


/*顶部向下滚动*/


/*如果没有tag，则默认隐藏*/
$('.post-meta .post-tags').each(function(){
    var _this=$(this);
    if(_this.children().length == 0){
        _this.addClass('hidden');
    }
})

// $(document).bind('scroll', fader);

/*给文章中的url添加iconfont方便识别*/
function urlIconlize(url){
    var domain,
        _output;
    var iconMap={/*索引 可在这里添加匹配规则*/
        'twitter':'icon-twitter',
        'qzone':'icon-qzone',
        'weibo':'icon-weibo',
        'facebook':'icon-facebook',
        'github':'icon-github',
        'douban':'icon-douban',
        'google':'icon-google',
        'luolei':'icon-luolei',
        'dribble':'icon-dribble'

    }

    for(var name in iconMap){
        if(typeof iconMap[name] !== 'function'){
            var MapKey=name;
            if(url.indexOf(MapKey)>=0){
                domain=MapKey;
                _output=iconMap[MapKey];
            }
        }
    }

    return _output;
}

/*判断是否是站内连接*/

function isSiteDomain(url){

}


/*增加搜索功能*/

var searchField = $(".search-form-input").ghostHunter({
    results   : ".quick-search",
    onKeyUp         : true,
    result_template : "<a  class='searchResult' href='{{link}}'>{{title}}</a>",
    info_template   : "<h4>找到{{amount}}篇相关的文章</h4>",
    rss            : "/rss",
    //displaySearchInfo   : false,
    zeroResultsInfo     : false
});

$('.search-form-input').focus(function(){
    $('.search-bar-result').css({'visibility':'visible','opacity':'1'});
});

$('.search-form-input').blur(function(){
    $('.search-bar-result').css({'visibility':'hidden','opacity':'0'});
});


/*窗口重新变化的时候*/


/*Document Ready*/
$(document).ready(function(){

    /*给博客文章地址url添加ico识别*/
    $('.single-post-inner p a:not(:has(img))').each(function(i){
        var _src=$(this).attr('href');
        var tmp=document.createElement('a');
        tmp.href=_src;
        _selfDomain=tmp.hostname;
        urlIconlize(_selfDomain);
        console.log(_selfDomain);
        //$(this).append(urlIconlize(_selfDomain));
        $(this).prepend('<i class="iconfont '+urlIconlize(_selfDomain)+'"></i>');
        var _selfColor=$(this).find('i').css('color'),
            _originalColor=$(this).css('color');


        /*鼠标悬浮时*/
        $(this).hover(function(){
            $(this).css('color',_selfColor);
            $(this).addClass('animated pulse');
        },function(){
            $(this).css('color',_originalColor);
            $(this).removeClass('animated pulse');
        });

    })


/*添加一些元素动画*/
$('.post-cover-info').addClass('animated fadeInDownBig');

$('.post-template').ready(function(){
    console.log('文章页面加载完毕');
    //cleanMask();
    //$('.post-header-mask').delay(9000).css('opacity','0');
})


/*顶部图片视觉滚差*/
 $(window).stellar();

    /*返回顶部*/
    var STR_TO_TOP='我要飞到最高';
    var coverHeight=$(window).height();//获得图片高度
        $('.cover-slide-more').click(function(){
            $('html,body').animate({scrollTop:coverHeight},500);
            return false;
        })
        $('.cover-slide-more').hover(function(){
            cleanMask();
            $(this).addClass('hoverLight');
            $('.post-cover-info').addClass('animated fadeOutUp');
            $('.cover-slide-more h4').show().addClass('animated fadeInDown');
        },function(){
            console.log('重现');
            $(this).removeClass('hoverLight');
            $('.post-cover-info').removeClass('fadeOutUp');
            $('.post-cover-info').addClass('fadeInDown');
            $('.cover-slide-more h4').hide();
        });

    $(function(){
     var button = $('<a href="#" id="to-top" title="' + STR_TO_TOP + '">↑</a>').appendTo('body');
     $(window).scroll(function(){
            if($(window).scrollTop()>$(window).height()) button.fadeIn(500);
            else button.fadeOut(500);
     });

     button.click(function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:coverHeight-100
        },1000,function(){
            window.location.hash='#';
        });
        console.log('我跳');
     })
    })

})

