
// 「Standard, Premium, Global Scale」プラン 認証キー
var apikey = "xxxxxxxxxx";

// スタイル: normal, gray, bright, blue, warm, MIERUNE
var style = "normal";

// URL設定
var url = "https://tile.cdn.mierune.co.jp/styles/" + style + "/{z}/{x}/{y}.png" + "?key=" + apikey;

// MIERUNE地図 読み込み
var m_map = new L.tileLayer(url, {
    attribution: "Maptiles by <a href='http://mierune.co.jp/' target='_blank'>MIERUNE</a>, under CC BY. Data by <a href='http://osm.org/copyright' target='_blank'>OpenStreetMap</a> contributors, under ODbL."
});

// 地図画面表示
var map = L.map('map', {
    center: [35.681, 139.767],
    zoom: 11,
    zoomControl: true,
    layers: [m_map]
});

// マーカー設定
var Map_Point = L.marker(
    [35.681, 139.767]
).addTo(map);

// ポップアップ設定
var comment = '東京駅だよ!!';
Map_Point.bindPopup(comment).openPopup();
