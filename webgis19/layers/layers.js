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
        });var format_Semarangkec19_1 = new ol.format.GeoJSON();
var features_Semarangkec19_1 = format_Semarangkec19_1.readFeatures(json_Semarangkec19_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Semarangkec19_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Semarangkec19_1.addFeatures(features_Semarangkec19_1);var lyr_Semarangkec19_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Semarangkec19_1, 
                style: style_Semarangkec19_1,
    title: 'Semarangkec19<br />\
    <img src="styles/legend/Semarangkec19_1_0.png" />  0.0000 - 24.4000 <br />\
    <img src="styles/legend/Semarangkec19_1_1.png" />  24.4000 - 48.8000 <br />\
    <img src="styles/legend/Semarangkec19_1_2.png" />  48.8000 - 73.2000 <br />\
    <img src="styles/legend/Semarangkec19_1_3.png" />  73.2000 - 97.6000 <br />\
    <img src="styles/legend/Semarangkec19_1_4.png" />  97.6000 - 122.0000 <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_Semarangkec19_1.setVisible(true);
var layersList = [baseLayer,lyr_OSMStandard_0,lyr_Semarangkec19_1];
lyr_Semarangkec19_1.set('fieldAliases', {'Kec': 'Kec', 'Kode Pos': 'Kode Pos', 'Penderita': 'Penderita', 'Kematian': 'Kematian', 'J Penduduk': 'J Penduduk', 'RS': 'RS', 'Puskesmas': 'Puskesmas', 'Poliklinik': 'Poliklinik', 'Apotek': 'Apotek', });
lyr_Semarangkec19_1.set('fieldImages', {'Kec': 'TextEdit', 'Kode Pos': 'TextEdit', 'Penderita': 'TextEdit', 'Kematian': 'TextEdit', 'J Penduduk': 'TextEdit', 'RS': 'TextEdit', 'Puskesmas': 'TextEdit', 'Poliklinik': 'TextEdit', 'Apotek': 'TextEdit', });
lyr_Semarangkec19_1.set('fieldLabels', {'Kec': 'inline label', 'Kode Pos': 'inline label', 'Penderita': 'inline label', 'Kematian': 'inline label', 'J Penduduk': 'inline label', 'RS': 'inline label', 'Puskesmas': 'inline label', 'Poliklinik': 'inline label', 'Apotek': 'inline label', });
lyr_Semarangkec19_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});