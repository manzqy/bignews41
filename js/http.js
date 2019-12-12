;(function(w) {
    var baseUrl = 'http://localhost:8080/api/v1';
    var newsUrl = {};
    newsUrl.login = baseUrl + '/admin/user/login'; // 用户登录
    newsUrl.userMsg = baseUrl + '/admin/user/info'; // 获取用户信息
    newsUrl.getUser = baseUrl + '/admin/user/detail'; // 获取用户详情
    newsUrl.editUser = baseUrl + '/admin/user/edit'; // 编辑用户信息
    newsUrl.allArticle = baseUrl + '/admin/category/list'; // 所有文章类别
    newsUrl.searchArticle = baseUrl + '/admin/category/search'; // 根据id查询指定文章类别
    newsUrl.editArticle = baseUrl + '/admin/category/edit'; // 编辑文章类别
    newsUrl.addArticle = baseUrl + '/admin/category/add'; // 新增文章类别
    newsUrl.delteArticle = baseUrl + '/admin/category/delete'; // 删除文章类别
    newsUrl.queryArticle = baseUrl + '/admin/article/query'; // 文章搜索
    newsUrl.delArticle = baseUrl + '/admin/article/delete'; // 删除文章
    newsUrl.idArticle = baseUrl + '/admin/article/search'; // 根据id获取文章信息
    newsUrl.cgArticle = baseUrl + '/admin/article/edit'; // 文章编辑
    newsUrl.pbArticle = baseUrl + '/admin/article/publish'; // 发布文章
    newsUrl.commentSearch = baseUrl + '/admin/comment/search'; // 文章评论搜索
    newsUrl.commentReject = baseUrl + '/admin/comment/reject'; // 评论审核不通过
    newsUrl.commentPass = baseUrl + '/admin/comment/pass'; // 评论审核通过
    newsUrl.commentDel = baseUrl + '/admin/comment/delete'; // 删除评论
    w.newsUrl = newsUrl;
})(window);