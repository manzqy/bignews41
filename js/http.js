;(function(w) {
    var baseUrl = 'http://localhost:8080/api/v1';
    var newsUrl = {};
    newsUrl.login = baseUrl + '/admin/user/login'; // 用户登录
    newsUrl.userMsg = baseUrl + '/admin/user/info'; // 获取用户信息
    w.newsUrl = newsUrl;
})(window);