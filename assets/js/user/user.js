$(function() {
    let form = layui.form
    form.verify({
        nickname: function(value) {
            if (value.length > 6) {
                return '昵称长度必须在1-6个之间'
            }
        }
    })
    getinit()
    $('#btnRest').on('click', function(e) {
            e.preventDefault()

            getinit()
        })
        // 监听表单的提交时间
    $('.layui-form').on('submit', function(e) {
        e.preventDefault()
        $.ajax({
            method: 'POST',
            url: '/my/userinfo',
            data: $(this).serialize(),
            success: function(res) {
                if (res.status !== 0) {
                    return layer.meg('更新用户失败')
                }
                layer.msg('更新用户成功')
                window.parent.getuserinfo()
            }

        })
    })
})

// 初始化用户的基本信息


function getinit() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        success: function(res) {
            if (res.status !== 0) {
                return layer.msg('获取用户信息失败')
            }
            // 快速给表单赋值
            form.val("fromUserInfo", res.data)

        }
    })
}


// 重置表单数据