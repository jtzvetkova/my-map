var size = 0;
var placement = 'point';

var style_Thrace_rivers_HGIS_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "10.4px \'Segoe UI\', sans-serif";
    var labelFill = "#6498d2";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.44999999999999996;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("NAME") !== null && resolution > 0 && resolution < 0) {
        labelText = String(feature.get("NAME"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(100,152,210,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
