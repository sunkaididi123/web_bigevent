$(function() {



    getUser()
        // 获取用户基本信息
    function getUser() {
        $.ajax({
            method: 'GET',
            url: 'http://www.liulongbin.top:3007/my/userinfo',
            Headers: {
                Authorization: localStorage.getItem('token') || ''
            },
            success: function(res) {
                if (res.status !== 0) {
                    layer.msg('获取用户信息失败')
                    return location.href = '/login.html'

                }
                layer.msg('获取用户信息成功')
                renderAvatar(res.data)

                // 渲染用户头像


            }


        })

    }

    $('#out').on('click', function() {
        // 提示用户是否确认退出
        layer.confirm('is not?', { icon: 3, title: '提示' }, function(index) {
            //do something

            layer.close(index)
        })
    })
})

// 渲染用户头像
function renderAvatar(user) {
    let name = user.nickname || user.username
    $('#welocom').html(`欢迎 ${name}`)
    if (user.user_pic !== null) {
        // 有用户头像
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide()
    } else {
        // 没有用户头像
        let write = name[0].toUppercase()
        $('.text-avatar').html(write).show()
        $('.layui-nav-img').hide()
    }

}