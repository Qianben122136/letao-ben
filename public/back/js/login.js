/**
 * Created by macbook on 2018/8/18.
 */


$("#form").bootstrapValidator({
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  fields:{
    username:{
      validators:{
        //不能为空
        notEmpty:{
          message:"用户名不能为空"
        },
        stringLength:{
          min:2,
          max:6,
          message:"用户名长度必须得是长度2位到6位之间"
        },
        callback:{
          message:"用户名不存在"
        }
      }
    },
    password:{
      validators:{
        notEmpty:{
          message:"密码不能为空"
        },
        stringLength:{
          min: 6,
          max: 10,
          message: "密码长度必须在6位到10位之间"
        },
        callback:{
          message: "密码错误"
        }

      }
    }
  }

})
//点击submit后成功提交后出发的一个bootstrap  内置的一个事件
$("#form").on("success.form.bv",function(e){
  e.preventDefault();
  //阻止浏览器的默认的提交
  $.ajax({
    url:"/employee/employeeLogin",
    type:"post",
    dataType:"json",
    data:$("#form").serialize(),
    success: function(info){
      console.log(info);
      if(info.success){
        location.href='index.html';
      }
      if(info.error === 1001){
        $("#form").data("bootstrapValidator").updateStatus("password","INVALID","callback");
      }
      if(info.error === 1000){
        $("#form").data("bootstrapValidator").updateStatus("username","INVALID","callback");
      }
    }

  })
})
$('[type="reset"]').on('click',function(){
  //console.log($("#form").data("bootstrapValidator"));
  $("#form").data("bootstrapValidator").resetForm();
})








