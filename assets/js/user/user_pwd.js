$(function() {
    let form = layui.form
    form.verify({
        pwd: [
            /^[\S]{6,12}$/, '密码必须6到12位,且不能出现空格'
        ],
        samePwd: function(val) {
            let oldval = $('[name=oldPwd]').val()
            if (val === oldval) {
                return '原密码和新密码不能相同'
            }
        },
        rePwd: function(val) {
            if (val !== $('[name=pwd]').val()) {
                return '两次密码不同'
            }
        }
    })

    $('.layui-btn').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('更新密码失败')
                }
                layer.msg('更新密码成功')
                    // 重置表单
                $('.layui-form')[0].reset()
            }
        })
    })
})