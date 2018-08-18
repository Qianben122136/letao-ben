/**
 * Created by macbook on 2018/8/18.
 */

$(function(){


  $(document).ajaxStart(function(){
    NProgress.start();
  })
  $(document).ajaxStop(function(){
    setTimeout(function(){
      NProgress.done();
    },500)
  })
//页面点击滑动效果
  $("#head-l").on('click',function(){
    $('.aside-header').stop().toggleClass('sun-le');
    $(".in-body").stop().toggleClass('sun-le');
    $(".in-header").stop().toggleClass('sun-le');
  })
  $("#category-list").on('click',function(){
    $('.category').stop().slideToggle();

  })


//登录拦截
  if(location.href.indexOf("login.html") < 0){
    $.ajax({
      url:"/employee/checkRootLogin",
      type:"get",
      dataType:"json",
      success:function(info){
        if(info.error === 400){
          location.href = "login.html";
        }
      }
    })
  }

//弹出模态框
  $("#head-r").on("click",function(){
    $("#logoutModal").modal('show');
  })

  //退出系统发送请求
  $("#Modalout").on("click",function(){
    $.ajax({
      url:"/employee/employeeLogout",
      type:"get",
      dataType:"json",
      success:function(info){
        console.log(info);
        if(info.success){
          location.href = "login.html";
        }
      }
    })
  })


})