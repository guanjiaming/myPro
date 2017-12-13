(function (window) {

    $(function () {
        getTableData();
    });

//下面两个方法：获取后台table数据并添加到dom节点
    function getTableData(callback) {
        var url = '../data/orderData3.json';
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
                if (callback) callback();
            },
            error: function (err) {
                console.log(err);
            }
        })
    }

    function createTr(item) {
        var ratingsType;
        if (item.ratingsType == 1) {
            ratingsType = "glyphicon glyphicon-thumbs-up"
        }else if (item.ratingsType == 3){
            ratingsType = "glyphicon glyphicon-thumbs-down"
        }else{
            ratingsType = ""
        }

        var otr = $('<tr></tr>');
        otr.html(
            '<td class="orderNum">' + item.orderNum + '</td>' +
            '<td>' + item.merchantName + '</td>' +
            '<td>' + item.sendAddress + '</td>' +
            '<td>' + item.senderNamePhone + '</td>' +
            '<td>' + item.recipientAddress + '</td>' +
            '<td>' + item.recipientNamePhone + '</td>' +
            '<td>' + item.productType + '</td>' +
            '<td>' + item.reputation + '</td>' +
            '<td>' + item.weight + '</td>' +
            '<td>' + item.distance + '</td>' +
            '<td>' + item.price + '</td>' +
            '<td>' + item.sendTime + '</td>' +
            '<td>' + item.ordersTime + '</td>' +
            '<td>' + item.sendOrderNum + '</td>' +
            '<td>' + item.courierNamePhone + '</td>' +
            '<td>' + item.removeTime + '</td>' +
            '<td>' + item.orderStatus + '</td>' +
            '<td><i class="'+ ratingsType +'" style="color:#88bbff;font-size: 18px; margin-right: 6px"></i>' + item.ratings + '</td>'
        );

        //插入到dom节点
        $('.tableWrap tbody').append(otr);
    }

})(window);