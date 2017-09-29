
// スタイル: mierune, mierune_mono
var style = "mierune_mono";

// URL設定
var url = "https://tile.mierune.co.jp/" + style + "/{z}/{x}/{y}.png";

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
