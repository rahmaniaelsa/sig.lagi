var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Semarangkec20_1 = new ol.format.GeoJSON();
var features_Semarangkec20_1 = format_Semarangkec20_1.readFeatures(json_Semarangkec20_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semarangkec20_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semarangkec20_1.addFeatures(features_Semarangkec20_1);var lyr_Semarangkec20_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semarangkec20_1, 
                style: style_Semarangkec20_1,
    title: 'Semarangkec20<br />\
    <img src="styles/legend/Semarangkec20_1_0.png" />  0 - 15 <br />\
    <img src="styles/legend/Semarangkec20_1_1.png" />  15 - 31 <br />\
    <img src="styles/legend/Semarangkec20_1_2.png" />  31 - 45 <br />\
    <img src="styles/legend/Semarangkec20_1_3.png" />  45 - 62 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Semarangkec20_1.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_Semarangkec20_1];
lyr_Semarangkec20_1.set('fieldAliases', {'Kec': 'Kec', 'Kode Pos': 'Kode Pos', 'Penderita': 'Penderita', 'Kematian': 'Kematian', 'J Penduduk': 'J Penduduk', 'RS': 'RS', 'Puskesmas': 'Puskesmas', 'Poliklinik': 'Poliklinik', 'Apotek': 'Apotek', });
lyr_Semarangkec20_1.set('fieldImages', {'Kec': 'TextEdit', 'Kode Pos': 'TextEdit', 'Penderita': 'TextEdit', 'Kematian': 'TextEdit', 'J Penduduk': 'TextEdit', 'RS': 'TextEdit', 'Puskesmas': 'TextEdit', 'Poliklinik': 'TextEdit', 'Apotek': 'TextEdit', });
lyr_Semarangkec20_1.set('fieldLabels', {'Kec': 'inline label', 'Kode Pos': 'inline label', 'Penderita': 'inline label', 'Kematian': 'inline label', 'J Penduduk': 'inline label', 'RS': 'inline label', 'Puskesmas': 'inline label', 'Poliklinik': 'inline label', 'Apotek': 'inline label', });
lyr_Semarangkec20_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});