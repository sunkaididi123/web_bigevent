$(function() {

    $('#login a').on('click', function() {
        $(this).parent().hide()
        $('#zhuce').show()
    })
    $('#zhuce a').on('click', function() {
        $(this).parent().hide()
        $('#login').show()
    })



    // 从layui身上获取到form对象
    let form = layui.form
        // 通过form.verify函数来自定义校验规则
    form.verify({
        // 自定义pwd的校验规则
        pwd: [/^[\S]{6,12}$/, '密码必须6-12位,且不能出现空格']
    })

    // 监听注册表单的提交行为
    $('#reg').on('submit', function(e) {
            e.preventDefault()
            let data = $(this).serialize()
            $.ajax({
                method: 'POST',
                url: 'http://www.liulongbin.top:3007/api/reguser',
                data: {
                    username: $('#reg [name=username]').val(),
                    password: $('#reg [name=password]').val()
                },
                success: function(res) {
                    if (res.status !== 0) {
                        return alert('注册失败')
                    }
                    // console.log($('#reg [name=password]'));

                    layer.msg('注册成功,请登录');
                    $('#login_re').click()
                }
            })
        })
        // 监听表单登陆事件
    $('#login_1').on('submit', function(e) {
        e.preventDefault()
        let data = $(this).serialize()
        $.ajax({
            method: 'POST',
            url: 'http://www.liulongbin.top:3007/api/login',
            data: data,
            success: function(res) {
                if (res.status !== 0) {
                    return layer.msg('登录失败')
                }
                layer.msg('登录成功')
                    // 将登陆成功得到的token字符串保存到localstorage中
                localStorage.setItem('token', res.token)
                location.href = '/index.html'
            }
        })
    })
})