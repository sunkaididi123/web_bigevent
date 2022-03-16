// 每次调用$.ajax的时候会先调用这个函数
// 在这个函数能拿到给ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    console.log(options.url);
    options.url = 'http://'
})