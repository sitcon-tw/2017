function mapMarkerLayer(name, imgSrc, pos) {
	var icon = new ol.Feature({
		name: name,
		geometry: new ol.geom.Point( ol.proj.fromLonLat(pos) ),
	})
	var iconStyle = new ol.style.Style({
		image: new ol.style.Icon({
			scale: .5,
			anchor: [0.5, 1],
			anchorXUnits: 'fraction',
			anchorYUnits: 'fraction',
			src: imgSrc,
		})
	})
	return new ol.layer.Vector({
		source: new ol.source.Vector({ features: [icon] }),
		style: iconStyle,
	})
}

export default function() {
	const iconMain = mapMarkerLayer('main', './images/stone-sm.png', [121.6116, 25.0410])
	const iconBus = mapMarkerLayer('bus', './images/bus.png', [121.6166, 25.0433])
	const osmMap = new ol.Map({
		target: 'map-container',
		interactions: ol.interaction.defaults({mouseWheelZoom:false}),
		layers: [
			new ol.layer.Tile({
				source: new ol.source.OSM(),
				opacity: 0.6
			}),
			iconMain,
			iconBus
		],
		view: new ol.View({
			center: ol.proj.fromLonLat([121.6116, 25.0410]),
			zoom: 15
		})
	})
}
