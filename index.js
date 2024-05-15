$(function () {
    var make_col = function (base) {
        var arr = [];
        for(var i=0; i<15; i++) {
            arr.push(i);
        }
        var list = [];
        for (var i = 1; i <= 5; i++) {
            // ランダムで値を取得
            var a = parseInt(Math.random() * arr.length);
            list.push(arr[a] + base);
            // 数字を重複させないため、元々のリストから値を削除する
            arr.splice(a, 1);
        }
        return list;
    };

    var make_table = function () {
        // B列、I列...とそれぞれで5つの数字をランダムで取得
        var col_b = make_col(0);
        var col_i = make_col(16);
        var col_n = make_col(31);
        var col_g = make_col(46);
        var col_o = make_col(61);
        
        // 25個分の数字を格納できるtableに取ってきた列の数字を設定
        var list = new Array(25);
        for (var i = 0; i < 5; i++) {
            list[i * 5 + 0] = col_b[i];
            list[i * 5 + 1] = col_i[i];
            list[i * 5 + 2] = col_n[i];
            list[i * 5 + 3] = col_g[i];
            list[i * 5 + 4] = col_o[i];
        }
        // 中心はfreeで固定
        list[12] = 'free';
        return list;
    };
    
    // カード作成関数
    var create_card = function () {
        // 取ってきた数字が入ったtableをhtmlに出力する
        var table = make_table();
        for (var i = 0; i < table.length; i++) {
            $('#bi' + i).text(table[i]);
        }
    };

    // 初期化関数
    var init = function () {
        create_card();
        
        // チェック状態を外す
        $('#bingo td').each(function () {
            $(this).removeClass('check');
        });
    };
    
    // 初期
    init();
    
    // カード作成 ボタンをクリックすると、初期化
    $('#bingo-create').click(function () {
        init();
    });
    
    // 番号をクリックすると、スタイルを変更するクラスをつけ外しできる
    $('#bingo td').click(function (){
        $(this).toggleClass('check');
    });
});