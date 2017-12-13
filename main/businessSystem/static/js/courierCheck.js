(function (window) {
    $(function () {
        /*渲染数据列表*/
        getTableData(function () {

            /*编辑操作功能---通过、拒绝*/
            $('.agree').click(function () {
                //获取ID
                var id = $(this).parent().siblings('.Id').text();
                console.log(id);
            });
            $('.refuse').click(function () {
                //获取ID
                var id = $(this).parent().siblings('.Id').text();
                console.log(id);
            })

        });


    });

    function getTableData(callback) {
        var url = '../data/courier.json';
        $.ajax({
            type: "GET",
            url: url,
            success: function (res) {
                var datalist = res.data.list;
                //清空上次的内容
                $('.tableWrap tbody').html('');
                //获取到数组对象
                $.each(datalist, function (index, ele) {
                    //将数据添加界面
                    createTr(ele);
                });
                //请求成功之后要执行的点击操作
                if(callback) callback();
            },
            error: function (err) {
                console.log(err);
            },
        })
    }

    function createTr(ele) {
        var otr = $('<tr></tr>');
        otr.html(
            '<td class="Id">'+ ele.ID +'</td>' +
            '<td>'+ ele.iphone +'</td>' +
            '<td>'+ ele.name +'</td>' +
            '<td>'+ ele.sex +'</td>' +
            '<td>' + '<img class="headPhoto" src="'+ ele.head +'" alt="头像">' + '</td>' +
            '<td>'+ ele.area +'</td>' +
            '<td>'+ ele.reputation +'</td>'+
            '<td>'+ ele.finishOrderNum +'</td>'+
            '<td>'+ ele.rating1 +'</td>'+
            '<td>'+ ele.rating2 +'</td>'+
            '<td>'+ ele.applyForTime +'</td>'+
            '<td><button type="button" class="agree btn btn-success btn-xs">通过</button><button type="button" class="refuse btn btn-danger btn-xs">拒绝</button></td>'
        );

        //插入到dom节点
        $('.tableWrap tbody').append(otr);
    }
})(window);