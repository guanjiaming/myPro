var hrefArr;

var tree;

$(function () {

    getTree(function () {
        $('#tree').treeview({
            data: tree,         // 数据源
            enableLinks: true,
            // highlightSelected: true,    //是否高亮选中
            onNodeChecked: function (event, data) {
                // alert(data.nodeId);
            },
            onNodeSelected: function (event, data) {
                // alert(data.nodeId);
                console.log(data);
            }
        });
    })
});


function getTree(callback) {
    $.ajax({
        type: "Post",
        url: "../data/treeData.json",
        dataType: "json",
        success: function (result) {
            // console.log(result);
            tree = result.tree;

            if (callback) callback();
            // console.log(tree);
        },
        error: function () {
            alert("树形结构加载失败！")
        }
    });
}


//  结构说明
var treeTest = [
    {
        "text": "商家管理",
        "state": {
            "expanded": false
        },
        "nodes": [      // 包含子节点
            {
                "text": "发单",              // 菜单名称
                "href": "sendOrder.html",   // 相对路径
                "state": {
                    "selected": true       // 默认选中
                }
            },
            {
                "text": "订单管理",
                "href": "ordering.html"
            },
            {
                "text": "配送员管理",
                "href": "courierContract.html"
            },
            {
                "text": "个人账户",
                "href": "merchantMe.html"
            }
        ]
    }
];