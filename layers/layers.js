var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            //'type': 'base',
            'opacity': 0.625000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Corridor5MadhavaramtoSholinganallur_1 = new ol.format.GeoJSON();
var features_Corridor5MadhavaramtoSholinganallur_1 = format_Corridor5MadhavaramtoSholinganallur_1.readFeatures(json_Corridor5MadhavaramtoSholinganallur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridor5MadhavaramtoSholinganallur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridor5MadhavaramtoSholinganallur_1.addFeatures(features_Corridor5MadhavaramtoSholinganallur_1);
var lyr_Corridor5MadhavaramtoSholinganallur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridor5MadhavaramtoSholinganallur_1, 
                style: style_Corridor5MadhavaramtoSholinganallur_1,
                popuplayertitle: "Corridor 5 - (Madhavaram to Sholinganallur)",
                interactive: false,
                title: '<img src="styles/legend/Corridor5MadhavaramtoSholinganallur_1.png" /> Corridor 5 - (Madhavaram to Sholinganallur)'
            });
var format_Corridor4LighthousetoPoonamallee_2 = new ol.format.GeoJSON();
var features_Corridor4LighthousetoPoonamallee_2 = format_Corridor4LighthousetoPoonamallee_2.readFeatures(json_Corridor4LighthousetoPoonamallee_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridor4LighthousetoPoonamallee_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridor4LighthousetoPoonamallee_2.addFeatures(features_Corridor4LighthousetoPoonamallee_2);
var lyr_Corridor4LighthousetoPoonamallee_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridor4LighthousetoPoonamallee_2, 
                style: style_Corridor4LighthousetoPoonamallee_2,
                popuplayertitle: "Corridor 4 - (Lighthouse to Poonamallee)",
                interactive: false,
                title: '<img src="styles/legend/Corridor4LighthousetoPoonamallee_2.png" /> Corridor 4 - (Lighthouse to Poonamallee)'
            });
var format_Corridor3MadhavaramtoSIPCOT_3 = new ol.format.GeoJSON();
var features_Corridor3MadhavaramtoSIPCOT_3 = format_Corridor3MadhavaramtoSIPCOT_3.readFeatures(json_Corridor3MadhavaramtoSIPCOT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridor3MadhavaramtoSIPCOT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridor3MadhavaramtoSIPCOT_3.addFeatures(features_Corridor3MadhavaramtoSIPCOT_3);
var lyr_Corridor3MadhavaramtoSIPCOT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridor3MadhavaramtoSIPCOT_3, 
                style: style_Corridor3MadhavaramtoSIPCOT_3,
                popuplayertitle: "Corridor 3 - (Madhavaram to SIPCOT)",
                interactive: false,
                title: '<img src="styles/legend/Corridor3MadhavaramtoSIPCOT_3.png" /> Corridor 3 - (Madhavaram to SIPCOT)'
            });
var format_C5_Stations_4 = new ol.format.GeoJSON();
var features_C5_Stations_4 = format_C5_Stations_4.readFeatures(json_C5_Stations_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C5_Stations_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C5_Stations_4.addFeatures(features_C5_Stations_4);
var lyr_C5_Stations_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C5_Stations_4, 
                style: style_C5_Stations_4,
                popuplayertitle: "C5_Stations",
                interactive: true,
                title: '<img src="styles/legend/C5_Stations_4.png" /> C5_Stations'
            });
var format_C4_Stations_5 = new ol.format.GeoJSON();
var features_C4_Stations_5 = format_C4_Stations_5.readFeatures(json_C4_Stations_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C4_Stations_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C4_Stations_5.addFeatures(features_C4_Stations_5);
var lyr_C4_Stations_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C4_Stations_5, 
                style: style_C4_Stations_5,
                popuplayertitle: "C4_Stations",
                interactive: true,
                title: '<img src="styles/legend/C4_Stations_5.png" /> C4_Stations'
            });
var format_C3_Stations_6 = new ol.format.GeoJSON();
var features_C3_Stations_6 = format_C3_Stations_6.readFeatures(json_C3_Stations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C3_Stations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C3_Stations_6.addFeatures(features_C3_Stations_6);
var lyr_C3_Stations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C3_Stations_6, 
                style: style_C3_Stations_6,
                popuplayertitle: "C3_Stations",
                interactive: true,
                title: '<img src="styles/legend/C3_Stations_6.png" /> C3_Stations'
            });
var format_ChennaiCentraltoStThomasMountGreenLine_7 = new ol.format.GeoJSON();
var features_ChennaiCentraltoStThomasMountGreenLine_7 = format_ChennaiCentraltoStThomasMountGreenLine_7.readFeatures(json_ChennaiCentraltoStThomasMountGreenLine_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChennaiCentraltoStThomasMountGreenLine_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChennaiCentraltoStThomasMountGreenLine_7.addFeatures(features_ChennaiCentraltoStThomasMountGreenLine_7);
var lyr_ChennaiCentraltoStThomasMountGreenLine_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChennaiCentraltoStThomasMountGreenLine_7, 
                style: style_ChennaiCentraltoStThomasMountGreenLine_7,
                popuplayertitle: "Chennai Central to St.Thomas Mount- Green Line",
                interactive: false,
                title: '<img src="styles/legend/ChennaiCentraltoStThomasMountGreenLine_7.png" /> Chennai Central to St.Thomas Mount- Green Line'
            });
var format_AirporttoWimcoNagarBlueLine_8 = new ol.format.GeoJSON();
var features_AirporttoWimcoNagarBlueLine_8 = format_AirporttoWimcoNagarBlueLine_8.readFeatures(json_AirporttoWimcoNagarBlueLine_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirporttoWimcoNagarBlueLine_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirporttoWimcoNagarBlueLine_8.addFeatures(features_AirporttoWimcoNagarBlueLine_8);
var lyr_AirporttoWimcoNagarBlueLine_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirporttoWimcoNagarBlueLine_8, 
                style: style_AirporttoWimcoNagarBlueLine_8,
                popuplayertitle: "Airport to Wimco Nagar - Blue Line",
                interactive: false,
                title: '<img src="styles/legend/AirporttoWimcoNagarBlueLine_8.png" /> Airport to Wimco Nagar - Blue Line'
            });
var format_GreenLineMetroStations_9 = new ol.format.GeoJSON();
var features_GreenLineMetroStations_9 = format_GreenLineMetroStations_9.readFeatures(json_GreenLineMetroStations_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenLineMetroStations_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenLineMetroStations_9.addFeatures(features_GreenLineMetroStations_9);
var lyr_GreenLineMetroStations_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenLineMetroStations_9, 
                style: style_GreenLineMetroStations_9,
                popuplayertitle: "Green Line Metro Stations",
                interactive: true,
                title: '<img src="styles/legend/GreenLineMetroStations_9.png" /> Green Line Metro Stations'
            });
var format_BlueLineMetroStations_10 = new ol.format.GeoJSON();
var features_BlueLineMetroStations_10 = format_BlueLineMetroStations_10.readFeatures(json_BlueLineMetroStations_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueLineMetroStations_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueLineMetroStations_10.addFeatures(features_BlueLineMetroStations_10);
var lyr_BlueLineMetroStations_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueLineMetroStations_10, 
                style: style_BlueLineMetroStations_10,
                popuplayertitle: "Blue Line Metro Stations",
                interactive: true,
                title: '<img src="styles/legend/BlueLineMetroStations_10.png" /> Blue Line Metro Stations'
            });
var format_OtherMTCRoutes_11 = new ol.format.GeoJSON();
var features_OtherMTCRoutes_11 = format_OtherMTCRoutes_11.readFeatures(json_OtherMTCRoutes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtherMTCRoutes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtherMTCRoutes_11.addFeatures(features_OtherMTCRoutes_11);
var lyr_OtherMTCRoutes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OtherMTCRoutes_11, 
                style: style_OtherMTCRoutes_11,
                popuplayertitle: "Other MTC Routes",
                interactive: true,
                title: '<img src="styles/legend/OtherMTCRoutes_11.png" /> Other MTC Routes'
            });
var format_MTCSmallBusRoutes_12 = new ol.format.GeoJSON();
var features_MTCSmallBusRoutes_12 = format_MTCSmallBusRoutes_12.readFeatures(json_MTCSmallBusRoutes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTCSmallBusRoutes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTCSmallBusRoutes_12.addFeatures(features_MTCSmallBusRoutes_12);
var lyr_MTCSmallBusRoutes_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTCSmallBusRoutes_12, 
                style: style_MTCSmallBusRoutes_12,
                popuplayertitle: "MTC Small Bus Routes",
                interactive: true,
                title: '<img src="styles/legend/MTCSmallBusRoutes_12.png" /> MTC Small Bus Routes'
            });
var format_MTCCMRLFeederRoutes_13 = new ol.format.GeoJSON();
var features_MTCCMRLFeederRoutes_13 = format_MTCCMRLFeederRoutes_13.readFeatures(json_MTCCMRLFeederRoutes_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTCCMRLFeederRoutes_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTCCMRLFeederRoutes_13.addFeatures(features_MTCCMRLFeederRoutes_13);
var lyr_MTCCMRLFeederRoutes_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTCCMRLFeederRoutes_13, 
                style: style_MTCCMRLFeederRoutes_13,
                popuplayertitle: "MTC CMRL Feeder Routes",
                interactive: true,
                title: '<img src="styles/legend/MTCCMRLFeederRoutes_13.png" /> MTC CMRL Feeder Routes'
            });
var format_Busterminus_14 = new ol.format.GeoJSON();
var features_Busterminus_14 = format_Busterminus_14.readFeatures(json_Busterminus_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Busterminus_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Busterminus_14.addFeatures(features_Busterminus_14);
var lyr_Busterminus_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Busterminus_14, 
                style: style_Busterminus_14,
                popuplayertitle: "Bus terminus",
                interactive: true,
                title: '<img src="styles/legend/Busterminus_14.png" /> Bus terminus'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Corridor5MadhavaramtoSholinganallur_1.setVisible(true);lyr_Corridor4LighthousetoPoonamallee_2.setVisible(true);lyr_Corridor3MadhavaramtoSIPCOT_3.setVisible(true);lyr_C5_Stations_4.setVisible(true);lyr_C4_Stations_5.setVisible(true);lyr_C3_Stations_6.setVisible(true);lyr_ChennaiCentraltoStThomasMountGreenLine_7.setVisible(true);lyr_AirporttoWimcoNagarBlueLine_8.setVisible(true);lyr_GreenLineMetroStations_9.setVisible(true);lyr_BlueLineMetroStations_10.setVisible(true);lyr_OtherMTCRoutes_11.setVisible(true);lyr_MTCSmallBusRoutes_12.setVisible(true);lyr_MTCCMRLFeederRoutes_13.setVisible(true);lyr_Busterminus_14.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Corridor5MadhavaramtoSholinganallur_1,lyr_Corridor4LighthousetoPoonamallee_2,lyr_Corridor3MadhavaramtoSIPCOT_3,lyr_C5_Stations_4,lyr_C4_Stations_5,lyr_C3_Stations_6,lyr_ChennaiCentraltoStThomasMountGreenLine_7,lyr_AirporttoWimcoNagarBlueLine_8,lyr_GreenLineMetroStations_9,lyr_BlueLineMetroStations_10,lyr_OtherMTCRoutes_11,lyr_MTCSmallBusRoutes_12,lyr_MTCCMRLFeederRoutes_13,lyr_Busterminus_14];
lyr_Corridor5MadhavaramtoSholinganallur_1.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Corridor4LighthousetoPoonamallee_2.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Corridor3MadhavaramtoSIPCOT_3.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_C5_Stations_4.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_C4_Stations_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_C3_Stations_6.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_ChennaiCentraltoStThomasMountGreenLine_7.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_AirporttoWimcoNagarBlueLine_8.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'Shape_Leng': 'Shape_Leng', });
lyr_GreenLineMetroStations_9.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'Ridership_': 'Ridership_', });
lyr_BlueLineMetroStations_10.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'Ridership_': 'Ridership_', });
lyr_OtherMTCRoutes_11.set('fieldAliases', {'route_name': 'route_name', 'source': 'source', 'destinatio': 'destinatio', });
lyr_MTCSmallBusRoutes_12.set('fieldAliases', {'route_name': 'route_name', 'source': 'source', 'destinatio': 'destinatio', });
lyr_MTCCMRLFeederRoutes_13.set('fieldAliases', {'route_name': 'route_name', 'source': 'source', 'destinatio': 'destinatio', });
lyr_Busterminus_14.set('fieldAliases', {'Name of th': 'Name of th', 'Ownership': 'Ownership', });
lyr_Corridor5MadhavaramtoSholinganallur_1.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Corridor4LighthousetoPoonamallee_2.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Corridor3MadhavaramtoSIPCOT_3.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_C5_Stations_4.set('fieldImages', {'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_C4_Stations_5.set('fieldImages', {'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_C3_Stations_6.set('fieldImages', {'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_ChennaiCentraltoStThomasMountGreenLine_7.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_AirporttoWimcoNagarBlueLine_8.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_GreenLineMetroStations_9.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'Ridership_': 'TextEdit', });
lyr_BlueLineMetroStations_10.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'Ridership_': 'TextEdit', });
lyr_OtherMTCRoutes_11.set('fieldImages', {'route_name': 'TextEdit', 'source': 'TextEdit', 'destinatio': 'TextEdit', });
lyr_MTCSmallBusRoutes_12.set('fieldImages', {'route_name': 'TextEdit', 'source': 'TextEdit', 'destinatio': 'TextEdit', });
lyr_MTCCMRLFeederRoutes_13.set('fieldImages', {'route_name': 'TextEdit', 'source': 'TextEdit', 'destinatio': 'TextEdit', });
lyr_Busterminus_14.set('fieldImages', {'Name of th': 'TextEdit', 'Ownership': 'TextEdit', });
lyr_Corridor5MadhavaramtoSholinganallur_1.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Corridor4LighthousetoPoonamallee_2.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Corridor3MadhavaramtoSIPCOT_3.set('fieldLabels', {'Name': 'hidden field', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_C5_Stations_4.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'HasLabel': 'hidden field', 'LabelID': 'hidden field', });
lyr_C4_Stations_5.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'HasLabel': 'hidden field', 'LabelID': 'hidden field', });
lyr_C3_Stations_6.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'HasLabel': 'hidden field', 'LabelID': 'hidden field', });
lyr_ChennaiCentraltoStThomasMountGreenLine_7.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_AirporttoWimcoNagarBlueLine_8.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'Shape_Leng': 'no label', });
lyr_GreenLineMetroStations_9.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'Ridership_': 'hidden field', });
lyr_BlueLineMetroStations_10.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'Ridership_': 'hidden field', });
lyr_OtherMTCRoutes_11.set('fieldLabels', {'route_name': 'inline label - always visible', 'source': 'inline label - always visible', 'destinatio': 'inline label - always visible', });
lyr_MTCSmallBusRoutes_12.set('fieldLabels', {'route_name': 'inline label - always visible', 'source': 'inline label - always visible', 'destinatio': 'inline label - always visible', });
lyr_MTCCMRLFeederRoutes_13.set('fieldLabels', {'route_name': 'inline label - always visible', 'source': 'inline label - always visible', 'destinatio': 'inline label - always visible', });
lyr_Busterminus_14.set('fieldLabels', {'Name of th': 'inline label - always visible', 'Ownership': 'inline label - always visible', });
lyr_Busterminus_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});