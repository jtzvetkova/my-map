var wms_layers = [];


    var projection_ConsortiumofAncientWorldMappers_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_ConsortiumofAncientWorldMappers_0 = projection_ConsortiumofAncientWorldMappers_0.getExtent();
    var size_ConsortiumofAncientWorldMappers_0 = ol.extent.getWidth(projectionExtent_ConsortiumofAncientWorldMappers_0) / 256;
    var resolutions_ConsortiumofAncientWorldMappers_0 = new Array(14);
    var matrixIds_ConsortiumofAncientWorldMappers_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_ConsortiumofAncientWorldMappers_0[z] = size_ConsortiumofAncientWorldMappers_0 / Math.pow(2, z);
        matrixIds_ConsortiumofAncientWorldMappers_0[z] = z;
    }
    var lyr_ConsortiumofAncientWorldMappers_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                                url: "https://cawm.lib.uiowa.edu/wmts",
                                attributions: ' ',
                                "layer": "tiles",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_ConsortiumofAncientWorldMappers_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_ConsortiumofAncientWorldMappers_0),
                resolutions: resolutions_ConsortiumofAncientWorldMappers_0,
                matrixIds: matrixIds_ConsortiumofAncientWorldMappers_0
              }),
              style: 'default',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: 'Consortium of Ancient World Mappers',
                            opacity: 0.5,
                            
                            
                          });
var format_MKD_water_areas_dcw_1 = new ol.format.GeoJSON();
var features_MKD_water_areas_dcw_1 = format_MKD_water_areas_dcw_1.readFeatures(json_MKD_water_areas_dcw_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MKD_water_areas_dcw_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MKD_water_areas_dcw_1.addFeatures(features_MKD_water_areas_dcw_1);
var lyr_MKD_water_areas_dcw_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MKD_water_areas_dcw_1, 
                style: style_MKD_water_areas_dcw_1,
                popuplayertitle: 'MKD_water_areas_dcw',
                interactive: false,
                title: '<img src="styles/legend/MKD_water_areas_dcw_1.png" /> MKD_water_areas_dcw'
            });
var format_Thrace_rivers_HGIS_2 = new ol.format.GeoJSON();
var features_Thrace_rivers_HGIS_2 = format_Thrace_rivers_HGIS_2.readFeatures(json_Thrace_rivers_HGIS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Thrace_rivers_HGIS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Thrace_rivers_HGIS_2.addFeatures(features_Thrace_rivers_HGIS_2);
var lyr_Thrace_rivers_HGIS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Thrace_rivers_HGIS_2, 
                style: style_Thrace_rivers_HGIS_2,
                popuplayertitle: 'Thrace_rivers_HGIS',
                interactive: true,
                title: '<img src="styles/legend/Thrace_rivers_HGIS_2.png" /> Thrace_rivers_HGIS'
            });
var format_openwater_3 = new ol.format.GeoJSON();
var features_openwater_3 = format_openwater_3.readFeatures(json_openwater_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_openwater_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_openwater_3.addFeatures(features_openwater_3);
var lyr_openwater_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_openwater_3, 
                style: style_openwater_3,
                popuplayertitle: 'openwater',
                interactive: true,
                title: '<img src="styles/legend/openwater_3.png" /> openwater'
            });
var format_UB_features_4 = new ol.format.GeoJSON();
var features_UB_features_4 = format_UB_features_4.readFeatures(json_UB_features_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UB_features_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UB_features_4.addFeatures(features_UB_features_4);
var lyr_UB_features_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UB_features_4, 
                style: style_UB_features_4,
                popuplayertitle: 'UB_features',
                interactive: false,
                title: '<img src="styles/legend/UB_features_4.png" /> UB_features'
            });
var format_UBsites_5 = new ol.format.GeoJSON();
var features_UBsites_5 = format_UBsites_5.readFeatures(json_UBsites_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UBsites_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UBsites_5.addFeatures(features_UBsites_5);
var lyr_UBsites_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UBsites_5, 
                style: style_UBsites_5,
                popuplayertitle: 'UB-sites',
                interactive: true,
    title: 'UB-sites<br />\
    <img src="styles/legend/UBsites_5_0.png" /> y<br />\
    <img src="styles/legend/UBsites_5_1.png" /> <br />' });
var group_TheUnclassicalBalkans = new ol.layer.Group({
                                layers: [lyr_UB_features_4,lyr_UBsites_5,],
                                fold: 'open',
                                title: 'The Unclassical Balkans'});
var group_group1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'group1'});

lyr_ConsortiumofAncientWorldMappers_0.setVisible(true);lyr_MKD_water_areas_dcw_1.setVisible(true);lyr_Thrace_rivers_HGIS_2.setVisible(true);lyr_openwater_3.setVisible(true);lyr_UB_features_4.setVisible(true);lyr_UBsites_5.setVisible(true);
var layersList = [lyr_ConsortiumofAncientWorldMappers_0,lyr_MKD_water_areas_dcw_1,lyr_Thrace_rivers_HGIS_2,lyr_openwater_3,group_TheUnclassicalBalkans];
lyr_MKD_water_areas_dcw_1.set('fieldAliases', {'ISO': 'ISO', 'COUNTRY': 'COUNTRY', 'F_CODE_DES': 'F_CODE_DES', 'HYC_DESCRI': 'HYC_DESCRI', 'NAME': 'NAME', });
lyr_Thrace_rivers_HGIS_2.set('fieldAliases', {'SCALERANK': 'SCALERANK', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Name_BG': 'Name_BG', 'Name_Hist_': 'Name_Hist_', 'Name_Hist1': 'Name_Hist1', 'Name_alter': 'Name_alter', 'Name_BG2': 'Name_BG2', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_openwater_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'f_code': 'f_code', 'f_code_des': 'f_code_des', 'nam': 'nam', 'tile_id': 'tile_id', 'fac_id': 'fac_id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'awmc_id': 'awmc_id', 'title': 'title', 'descriptio': 'descriptio', 'type': 'type', 'maxdate': 'maxdate', 'mindate': 'mindate', 'pid': 'pid', 'awmc_mod': 'awmc_mod', 'creator': 'creator', 'created': 'created', 'notes': 'notes', 'awmc_class': 'awmc_class', 'timeperiod': 'timeperiod', });
lyr_UB_features_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'size': 'size', 'spacing': 'spacing', 'colour': 'colour', 'caps': 'caps', 'buf': 'buf', 'overrun': 'overrun', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_callouts_originx': 'auxiliary_storage_callouts_originx', 'auxiliary_storage_callouts_originy': 'auxiliary_storage_callouts_originy', 'auxiliary_storage_callouts_destinationx': 'auxiliary_storage_callouts_destinationx', 'auxiliary_storage_callouts_destinationy': 'auxiliary_storage_callouts_destinationy', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_UBsites_5.set('fieldAliases', {'Site_Name': 'Site_Name', 'Autors Nam': 'Autors Nam', 'map': 'map', 'Order': 'Order', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_show': 'auxiliary_storage_labeling_show', 'auxiliary_storage_labeling_labelrotation': 'auxiliary_storage_labeling_labelrotation', 'auxiliary_storage_labeling_family': 'auxiliary_storage_labeling_family', 'auxiliary_storage_labeling_fontstyle': 'auxiliary_storage_labeling_fontstyle', 'auxiliary_storage_labeling_size': 'auxiliary_storage_labeling_size', 'auxiliary_storage_labeling_bold': 'auxiliary_storage_labeling_bold', 'auxiliary_storage_labeling_italic': 'auxiliary_storage_labeling_italic', 'auxiliary_storage_labeling_underline': 'auxiliary_storage_labeling_underline', 'auxiliary_storage_labeling_color': 'auxiliary_storage_labeling_color', 'auxiliary_storage_labeling_strikeout': 'auxiliary_storage_labeling_strikeout', 'auxiliary_storage_labeling_multilinealignment': 'auxiliary_storage_labeling_multilinealignment', 'auxiliary_storage_labeling_buffersize': 'auxiliary_storage_labeling_buffersize', 'auxiliary_storage_labeling_buffercolor': 'auxiliary_storage_labeling_buffercolor', 'auxiliary_storage_labeling_bufferdraw': 'auxiliary_storage_labeling_bufferdraw', 'auxiliary_storage_labeling_labeldistance': 'auxiliary_storage_labeling_labeldistance', 'auxiliary_storage_labeling_hali': 'auxiliary_storage_labeling_hali', 'auxiliary_storage_labeling_vali': 'auxiliary_storage_labeling_vali', 'auxiliary_storage_labeling_scalevisibility': 'auxiliary_storage_labeling_scalevisibility', 'auxiliary_storage_labeling_minscale': 'auxiliary_storage_labeling_minscale', 'auxiliary_storage_labeling_maxscale': 'auxiliary_storage_labeling_maxscale', 'auxiliary_storage_labeling_alwaysshow': 'auxiliary_storage_labeling_alwaysshow', 'auxiliary_storage_labeling_calloutdraw': 'auxiliary_storage_labeling_calloutdraw', 'auxiliary_storage_labeling_labelallparts': 'auxiliary_storage_labeling_labelallparts', });
lyr_MKD_water_areas_dcw_1.set('fieldImages', {'ISO': 'TextEdit', 'COUNTRY': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'HYC_DESCRI': 'TextEdit', 'NAME': 'TextEdit', });
lyr_Thrace_rivers_HGIS_2.set('fieldImages', {'SCALERANK': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Name_BG': 'TextEdit', 'Name_Hist_': 'TextEdit', 'Name_Hist1': 'TextEdit', 'Name_alter': 'TextEdit', 'Name_BG2': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_openwater_3.set('fieldImages', {'OBJECTID_1': 'Range', 'f_code': 'TextEdit', 'f_code_des': 'TextEdit', 'nam': 'TextEdit', 'tile_id': 'Range', 'fac_id': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'awmc_id': 'Range', 'title': 'TextEdit', 'descriptio': 'TextEdit', 'type': 'TextEdit', 'maxdate': 'Range', 'mindate': 'Range', 'pid': 'TextEdit', 'awmc_mod': 'Range', 'creator': 'TextEdit', 'created': 'TextEdit', 'notes': 'TextEdit', 'awmc_class': 'Range', 'timeperiod': 'TextEdit', });
lyr_UB_features_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'size': 'Range', 'spacing': 'Range', 'colour': 'Color', 'caps': 'TextEdit', 'buf': 'TextEdit', 'overrun': 'Range', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_callouts_originx': 'TextEdit', 'auxiliary_storage_callouts_originy': 'TextEdit', 'auxiliary_storage_callouts_destinationx': 'TextEdit', 'auxiliary_storage_callouts_destinationy': 'TextEdit', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_UBsites_5.set('fieldImages', {'Site_Name': 'TextEdit', 'Autors Nam': 'TextEdit', 'map': 'TextEdit', 'Order': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_show': 'Hidden', 'auxiliary_storage_labeling_labelrotation': 'Hidden', 'auxiliary_storage_labeling_family': 'Hidden', 'auxiliary_storage_labeling_fontstyle': 'Hidden', 'auxiliary_storage_labeling_size': 'Hidden', 'auxiliary_storage_labeling_bold': 'Hidden', 'auxiliary_storage_labeling_italic': 'Hidden', 'auxiliary_storage_labeling_underline': 'Hidden', 'auxiliary_storage_labeling_color': 'Hidden', 'auxiliary_storage_labeling_strikeout': 'Hidden', 'auxiliary_storage_labeling_multilinealignment': 'Hidden', 'auxiliary_storage_labeling_buffersize': 'Hidden', 'auxiliary_storage_labeling_buffercolor': 'Hidden', 'auxiliary_storage_labeling_bufferdraw': 'Hidden', 'auxiliary_storage_labeling_labeldistance': 'Hidden', 'auxiliary_storage_labeling_hali': 'Hidden', 'auxiliary_storage_labeling_vali': 'Hidden', 'auxiliary_storage_labeling_scalevisibility': 'Hidden', 'auxiliary_storage_labeling_minscale': 'Hidden', 'auxiliary_storage_labeling_maxscale': 'Hidden', 'auxiliary_storage_labeling_alwaysshow': 'Hidden', 'auxiliary_storage_labeling_calloutdraw': 'Hidden', 'auxiliary_storage_labeling_labelallparts': 'Hidden', });
lyr_MKD_water_areas_dcw_1.set('fieldLabels', {'ISO': 'no label', 'COUNTRY': 'no label', 'F_CODE_DES': 'no label', 'HYC_DESCRI': 'no label', 'NAME': 'inline label - always visible', });
lyr_Thrace_rivers_HGIS_2.set('fieldLabels', {'SCALERANK': 'hidden field', 'NAME': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Name_BG': 'hidden field', 'Name_Hist_': 'hidden field', 'Name_Hist1': 'no label', 'Name_alter': 'no label', 'Name_BG2': 'no label', });
lyr_openwater_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'f_code': 'no label', 'f_code_des': 'no label', 'nam': 'no label', 'tile_id': 'no label', 'fac_id': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'awmc_id': 'no label', 'title': 'no label', 'descriptio': 'no label', 'type': 'no label', 'maxdate': 'no label', 'mindate': 'no label', 'pid': 'no label', 'awmc_mod': 'no label', 'creator': 'no label', 'created': 'no label', 'notes': 'no label', 'awmc_class': 'no label', 'timeperiod': 'no label', });
lyr_UB_features_4.set('fieldLabels', {'id': 'hidden field', 'Name': 'inline label - always visible', 'size': 'hidden field', 'spacing': 'hidden field', 'colour': 'hidden field', 'caps': 'hidden field', 'buf': 'hidden field', 'overrun': 'hidden field', 'auxiliary_storage_callouts_originx': 'hidden field', 'auxiliary_storage_callouts_originy': 'hidden field', 'auxiliary_storage_callouts_destinationx': 'hidden field', 'auxiliary_storage_callouts_destinationy': 'hidden field', });
lyr_UBsites_5.set('fieldLabels', {'Site_Name': 'inline label - always visible', 'Autors Nam': 'inline label - visible with data', 'map': 'hidden field', 'Order': 'hidden field', });
lyr_UBsites_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});