var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_SuburbanandMRTSNetwork_1 = new ol.format.GeoJSON();
var features_SuburbanandMRTSNetwork_1 = format_SuburbanandMRTSNetwork_1.readFeatures(json_SuburbanandMRTSNetwork_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuburbanandMRTSNetwork_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuburbanandMRTSNetwork_1.addFeatures(features_SuburbanandMRTSNetwork_1);
var lyr_SuburbanandMRTSNetwork_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuburbanandMRTSNetwork_1, 
                style: style_SuburbanandMRTSNetwork_1,
                popuplayertitle: "Suburban and MRTS Network",
                interactive: false,
                title: '<img src="styles/legend/SuburbanandMRTSNetwork_1.png" /> Suburban and MRTS Network'
            });
var format_SuburbanStations_2 = new ol.format.GeoJSON();
var features_SuburbanStations_2 = format_SuburbanStations_2.readFeatures(json_SuburbanStations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuburbanStations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuburbanStations_2.addFeatures(features_SuburbanStations_2);
var lyr_SuburbanStations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuburbanStations_2, 
                style: style_SuburbanStations_2,
                popuplayertitle: "Suburban Stations",
                interactive: true,
                title: '<img src="styles/legend/SuburbanStations_2.png" /> Suburban Stations'
            });
var format_Corridor5MadhavaramtoSholinganallur_3 = new ol.format.GeoJSON();
var features_Corridor5MadhavaramtoSholinganallur_3 = format_Corridor5MadhavaramtoSholinganallur_3.readFeatures(json_Corridor5MadhavaramtoSholinganallur_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridor5MadhavaramtoSholinganallur_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridor5MadhavaramtoSholinganallur_3.addFeatures(features_Corridor5MadhavaramtoSholinganallur_3);
var lyr_Corridor5MadhavaramtoSholinganallur_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridor5MadhavaramtoSholinganallur_3, 
                style: style_Corridor5MadhavaramtoSholinganallur_3,
                popuplayertitle: "Corridor 5 - (Madhavaram to Sholinganallur)",
                interactive: false,
                title: '<img src="styles/legend/Corridor5MadhavaramtoSholinganallur_3.png" /> Corridor 5 - (Madhavaram to Sholinganallur)'
            });
var format_Corridor4LighthousetoPoonamallee_4 = new ol.format.GeoJSON();
var features_Corridor4LighthousetoPoonamallee_4 = format_Corridor4LighthousetoPoonamallee_4.readFeatures(json_Corridor4LighthousetoPoonamallee_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridor4LighthousetoPoonamallee_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridor4LighthousetoPoonamallee_4.addFeatures(features_Corridor4LighthousetoPoonamallee_4);
var lyr_Corridor4LighthousetoPoonamallee_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridor4LighthousetoPoonamallee_4, 
                style: style_Corridor4LighthousetoPoonamallee_4,
                popuplayertitle: "Corridor 4 - (Lighthouse to Poonamallee)",
                interactive: false,
                title: '<img src="styles/legend/Corridor4LighthousetoPoonamallee_4.png" /> Corridor 4 - (Lighthouse to Poonamallee)'
            });
var format_Corridor3MadhavaramtoSIPCOT_5 = new ol.format.GeoJSON();
var features_Corridor3MadhavaramtoSIPCOT_5 = format_Corridor3MadhavaramtoSIPCOT_5.readFeatures(json_Corridor3MadhavaramtoSIPCOT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corridor3MadhavaramtoSIPCOT_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corridor3MadhavaramtoSIPCOT_5.addFeatures(features_Corridor3MadhavaramtoSIPCOT_5);
var lyr_Corridor3MadhavaramtoSIPCOT_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Corridor3MadhavaramtoSIPCOT_5, 
                style: style_Corridor3MadhavaramtoSIPCOT_5,
                popuplayertitle: "Corridor 3 - (Madhavaram to SIPCOT)",
                interactive: false,
                title: '<img src="styles/legend/Corridor3MadhavaramtoSIPCOT_5.png" /> Corridor 3 - (Madhavaram to SIPCOT)'
            });
var format_C5_Stations_6 = new ol.format.GeoJSON();
var features_C5_Stations_6 = format_C5_Stations_6.readFeatures(json_C5_Stations_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C5_Stations_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C5_Stations_6.addFeatures(features_C5_Stations_6);
var lyr_C5_Stations_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C5_Stations_6, 
                style: style_C5_Stations_6,
                popuplayertitle: "C5_Stations",
                interactive: true,
                title: '<img src="styles/legend/C5_Stations_6.png" /> C5_Stations'
            });
var format_C4_Stations_7 = new ol.format.GeoJSON();
var features_C4_Stations_7 = format_C4_Stations_7.readFeatures(json_C4_Stations_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C4_Stations_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C4_Stations_7.addFeatures(features_C4_Stations_7);
var lyr_C4_Stations_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C4_Stations_7, 
                style: style_C4_Stations_7,
                popuplayertitle: "C4_Stations",
                interactive: true,
                title: '<img src="styles/legend/C4_Stations_7.png" /> C4_Stations'
            });
var format_C3_Stations_8 = new ol.format.GeoJSON();
var features_C3_Stations_8 = format_C3_Stations_8.readFeatures(json_C3_Stations_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_C3_Stations_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C3_Stations_8.addFeatures(features_C3_Stations_8);
var lyr_C3_Stations_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C3_Stations_8, 
                style: style_C3_Stations_8,
                popuplayertitle: "C3_Stations",
                interactive: true,
                title: '<img src="styles/legend/C3_Stations_8.png" /> C3_Stations'
            });
var format_ChennaiCentraltoStThomasMountGreenLine_9 = new ol.format.GeoJSON();
var features_ChennaiCentraltoStThomasMountGreenLine_9 = format_ChennaiCentraltoStThomasMountGreenLine_9.readFeatures(json_ChennaiCentraltoStThomasMountGreenLine_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChennaiCentraltoStThomasMountGreenLine_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChennaiCentraltoStThomasMountGreenLine_9.addFeatures(features_ChennaiCentraltoStThomasMountGreenLine_9);
var lyr_ChennaiCentraltoStThomasMountGreenLine_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChennaiCentraltoStThomasMountGreenLine_9, 
                style: style_ChennaiCentraltoStThomasMountGreenLine_9,
                popuplayertitle: "Chennai Central to St.Thomas Mount- Green Line",
                interactive: false,
                title: '<img src="styles/legend/ChennaiCentraltoStThomasMountGreenLine_9.png" /> Chennai Central to St.Thomas Mount- Green Line'
            });
var format_AirporttoWimcoNagarBlueLine_10 = new ol.format.GeoJSON();
var features_AirporttoWimcoNagarBlueLine_10 = format_AirporttoWimcoNagarBlueLine_10.readFeatures(json_AirporttoWimcoNagarBlueLine_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AirporttoWimcoNagarBlueLine_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AirporttoWimcoNagarBlueLine_10.addFeatures(features_AirporttoWimcoNagarBlueLine_10);
var lyr_AirporttoWimcoNagarBlueLine_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AirporttoWimcoNagarBlueLine_10, 
                style: style_AirporttoWimcoNagarBlueLine_10,
                popuplayertitle: "Airport to Wimco Nagar - Blue Line",
                interactive: false,
                title: '<img src="styles/legend/AirporttoWimcoNagarBlueLine_10.png" /> Airport to Wimco Nagar - Blue Line'
            });
var format_GreenLineMetroStations_11 = new ol.format.GeoJSON();
var features_GreenLineMetroStations_11 = format_GreenLineMetroStations_11.readFeatures(json_GreenLineMetroStations_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GreenLineMetroStations_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GreenLineMetroStations_11.addFeatures(features_GreenLineMetroStations_11);
var lyr_GreenLineMetroStations_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GreenLineMetroStations_11, 
                style: style_GreenLineMetroStations_11,
                popuplayertitle: "Green Line Metro Stations",
                interactive: true,
                title: '<img src="styles/legend/GreenLineMetroStations_11.png" /> Green Line Metro Stations'
            });
var format_BlueLineMetroStations_12 = new ol.format.GeoJSON();
var features_BlueLineMetroStations_12 = format_BlueLineMetroStations_12.readFeatures(json_BlueLineMetroStations_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlueLineMetroStations_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlueLineMetroStations_12.addFeatures(features_BlueLineMetroStations_12);
var lyr_BlueLineMetroStations_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BlueLineMetroStations_12, 
                style: style_BlueLineMetroStations_12,
                popuplayertitle: "Blue Line Metro Stations",
                interactive: true,
                title: '<img src="styles/legend/BlueLineMetroStations_12.png" /> Blue Line Metro Stations'
            });
var format_OtherMTCRoutes_13 = new ol.format.GeoJSON();
var features_OtherMTCRoutes_13 = format_OtherMTCRoutes_13.readFeatures(json_OtherMTCRoutes_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OtherMTCRoutes_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OtherMTCRoutes_13.addFeatures(features_OtherMTCRoutes_13);
var lyr_OtherMTCRoutes_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OtherMTCRoutes_13, 
                style: style_OtherMTCRoutes_13,
                popuplayertitle: "Other MTC Routes",
                interactive: true,
                title: '<img src="styles/legend/OtherMTCRoutes_13.png" /> Other MTC Routes'
            });
var format_MTCSmallBusRoutes_14 = new ol.format.GeoJSON();
var features_MTCSmallBusRoutes_14 = format_MTCSmallBusRoutes_14.readFeatures(json_MTCSmallBusRoutes_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTCSmallBusRoutes_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTCSmallBusRoutes_14.addFeatures(features_MTCSmallBusRoutes_14);
var lyr_MTCSmallBusRoutes_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTCSmallBusRoutes_14, 
                style: style_MTCSmallBusRoutes_14,
                popuplayertitle: "MTC Small Bus Routes",
                interactive: true,
                title: '<img src="styles/legend/MTCSmallBusRoutes_14.png" /> MTC Small Bus Routes'
            });
var format_MTCCMRLFeederRoutes_15 = new ol.format.GeoJSON();
var features_MTCCMRLFeederRoutes_15 = format_MTCCMRLFeederRoutes_15.readFeatures(json_MTCCMRLFeederRoutes_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MTCCMRLFeederRoutes_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MTCCMRLFeederRoutes_15.addFeatures(features_MTCCMRLFeederRoutes_15);
var lyr_MTCCMRLFeederRoutes_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MTCCMRLFeederRoutes_15, 
                style: style_MTCCMRLFeederRoutes_15,
                popuplayertitle: "MTC CMRL Feeder Routes",
                interactive: true,
                title: '<img src="styles/legend/MTCCMRLFeederRoutes_15.png" /> MTC CMRL Feeder Routes'
            });
var format_Busterminus_16 = new ol.format.GeoJSON();
var features_Busterminus_16 = format_Busterminus_16.readFeatures(json_Busterminus_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Busterminus_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Busterminus_16.addFeatures(features_Busterminus_16);
var lyr_Busterminus_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Busterminus_16, 
                style: style_Busterminus_16,
                popuplayertitle: "Bus terminus",
                interactive: true,
                title: '<img src="styles/legend/Busterminus_16.png" /> Bus terminus'
            });

lyr_Basemap_0.setVisible(true);lyr_SuburbanandMRTSNetwork_1.setVisible(true);lyr_SuburbanStations_2.setVisible(true);lyr_Corridor5MadhavaramtoSholinganallur_3.setVisible(true);lyr_Corridor4LighthousetoPoonamallee_4.setVisible(true);lyr_Corridor3MadhavaramtoSIPCOT_5.setVisible(true);lyr_C5_Stations_6.setVisible(true);lyr_C4_Stations_7.setVisible(true);lyr_C3_Stations_8.setVisible(true);lyr_ChennaiCentraltoStThomasMountGreenLine_9.setVisible(true);lyr_AirporttoWimcoNagarBlueLine_10.setVisible(true);lyr_GreenLineMetroStations_11.setVisible(true);lyr_BlueLineMetroStations_12.setVisible(true);lyr_OtherMTCRoutes_13.setVisible(true);lyr_MTCSmallBusRoutes_14.setVisible(true);lyr_MTCCMRLFeederRoutes_15.setVisible(true);lyr_Busterminus_16.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_SuburbanandMRTSNetwork_1,lyr_SuburbanStations_2,lyr_Corridor5MadhavaramtoSholinganallur_3,lyr_Corridor4LighthousetoPoonamallee_4,lyr_Corridor3MadhavaramtoSIPCOT_5,lyr_C5_Stations_6,lyr_C4_Stations_7,lyr_C3_Stations_8,lyr_ChennaiCentraltoStThomasMountGreenLine_9,lyr_AirporttoWimcoNagarBlueLine_10,lyr_GreenLineMetroStations_11,lyr_BlueLineMetroStations_12,lyr_OtherMTCRoutes_13,lyr_MTCSmallBusRoutes_14,lyr_MTCCMRLFeederRoutes_15,lyr_Busterminus_16];
lyr_SuburbanandMRTSNetwork_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'Shape_Leng': 'Shape_Leng', });
lyr_SuburbanStations_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Descriptio': 'Descriptio', });
lyr_Corridor5MadhavaramtoSholinganallur_3.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Corridor4LighthousetoPoonamallee_4.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_Corridor3MadhavaramtoSIPCOT_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_C5_Stations_6.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_C4_Stations_7.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_C3_Stations_8.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_ChennaiCentraltoStThomasMountGreenLine_9.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_AirporttoWimcoNagarBlueLine_10.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'Shape_Leng': 'Shape_Leng', });
lyr_GreenLineMetroStations_11.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'Ridership_': 'Ridership_', });
lyr_BlueLineMetroStations_12.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'Ridership_': 'Ridership_', });
lyr_OtherMTCRoutes_13.set('fieldAliases', {'route_name': 'route_name', 'source': 'source', 'destinatio': 'destinatio', });
lyr_MTCSmallBusRoutes_14.set('fieldAliases', {'route_name': 'route_name', 'source': 'source', 'destinatio': 'destinatio', });
lyr_MTCCMRLFeederRoutes_15.set('fieldAliases', {'route_name': 'route_name', 'source': 'source', 'destinatio': 'destinatio', });
lyr_Busterminus_16.set('fieldAliases', {'Name of th': 'Name of th', 'Ownership': 'Ownership', });
lyr_SuburbanandMRTSNetwork_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_SuburbanStations_2.set('fieldImages', {'fid': 'Range', 'Name': 'TextEdit', 'Descriptio': 'TextEdit', });
lyr_Corridor5MadhavaramtoSholinganallur_3.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Corridor4LighthousetoPoonamallee_4.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Corridor3MadhavaramtoSIPCOT_5.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_C5_Stations_6.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_C4_Stations_7.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_C3_Stations_8.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_ChennaiCentraltoStThomasMountGreenLine_9.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_AirporttoWimcoNagarBlueLine_10.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_GreenLineMetroStations_11.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'Ridership_': 'TextEdit', });
lyr_BlueLineMetroStations_12.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'Ridership_': 'TextEdit', });
lyr_OtherMTCRoutes_13.set('fieldImages', {'route_name': 'TextEdit', 'source': 'TextEdit', 'destinatio': 'TextEdit', });
lyr_MTCSmallBusRoutes_14.set('fieldImages', {'route_name': 'TextEdit', 'source': 'TextEdit', 'destinatio': 'TextEdit', });
lyr_MTCCMRLFeederRoutes_15.set('fieldImages', {'route_name': 'TextEdit', 'source': 'TextEdit', 'destinatio': 'TextEdit', });
lyr_Busterminus_16.set('fieldImages', {'Name of th': 'TextEdit', 'Ownership': 'TextEdit', });
lyr_SuburbanandMRTSNetwork_1.set('fieldLabels', {'OBJECTID': 'no label', 'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'Shape_Leng': 'no label', });
lyr_SuburbanStations_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'inline label - always visible', 'Descriptio': 'hidden field', });
lyr_Corridor5MadhavaramtoSholinganallur_3.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Corridor4LighthousetoPoonamallee_4.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_Corridor3MadhavaramtoSIPCOT_5.set('fieldLabels', {'Name': 'hidden field', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_C5_Stations_6.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'HasLabel': 'hidden field', 'LabelID': 'hidden field', });
lyr_C4_Stations_7.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'HasLabel': 'hidden field', 'LabelID': 'hidden field', });
lyr_C3_Stations_8.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'hidden field', 'Snippet': 'hidden field', 'PopupInfo': 'hidden field', 'HasLabel': 'hidden field', 'LabelID': 'hidden field', });
lyr_ChennaiCentraltoStThomasMountGreenLine_9.set('fieldLabels', {'Name': 'hidden field', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'AltMode': 'hidden field', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_AirporttoWimcoNagarBlueLine_10.set('fieldLabels', {'Name': 'hidden field', 'FolderPath': 'hidden field', 'Shape_Leng': 'hidden field', });
lyr_GreenLineMetroStations_11.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'Ridership_': 'hidden field', });
lyr_BlueLineMetroStations_12.set('fieldLabels', {'Name': 'inline label - always visible', 'FolderPath': 'hidden field', 'SymbolID': 'hidden field', 'Ridership_': 'hidden field', });
lyr_OtherMTCRoutes_13.set('fieldLabels', {'route_name': 'inline label - always visible', 'source': 'inline label - always visible', 'destinatio': 'inline label - always visible', });
lyr_MTCSmallBusRoutes_14.set('fieldLabels', {'route_name': 'inline label - always visible', 'source': 'inline label - always visible', 'destinatio': 'inline label - always visible', });
lyr_MTCCMRLFeederRoutes_15.set('fieldLabels', {'route_name': 'inline label - always visible', 'source': 'inline label - always visible', 'destinatio': 'inline label - always visible', });
lyr_Busterminus_16.set('fieldLabels', {'Name of th': 'inline label - always visible', 'Ownership': 'inline label - always visible', });
lyr_Busterminus_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});