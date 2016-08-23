var mapObj, district, polygons = [], citycode;
var citySelect = document.getElementById('city');
var districtSelect = document.getElementById('district');

mapObj = new AMap.Map('mapContainer', {
	resizeEnable: true,
	center: [116.30946, 39.937629],
	zoom: 3
});

var provinceList = ['北京市', '天津市', '河北省', '山西省', '内蒙古自治区', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西壮族自治区', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏自治区', '陕西省', '甘肃省', '青海省', '宁夏回族自治区', '新疆维吾尔自治区', '台灣', '香港特别行政区', '澳门特别行政区'];
var provinceSelect = document.getElementById('province');
provinceSelect.add(new Option(''));
for (var i = 0, l = provinceList.length,option; i < l; i++) {
	option=new Option(provinceList[i]);
	option.setAttribute("value","province")
	provinceSelect.add(option);
}

//行政区划查询
var opts = {
	subdistrict: 1,   //返回下一级行政区
	extensions: 'all',  //返回行政区边界坐标组等具体信息
	level: 'city'  //查询行政级别为 市
};
//实例化DistrictSearch
district = new AMap.DistrictSearch(opts);//注意：需要使用插件同步下发功能才能这样直接使用


function getData(e) {
	var dList = e.districtList;
	for (var m = 0, ml = dList.length; m < ml; m++) {
		var data = e.districtList[m].level;
		var bounds = e.districtList[m].boundaries;
		//只绘制 区, 且 本级别行政区划是上一级区划的下级行政区
		if (data == "district" && dList[m].citycode === citycode) {
			if (bounds) {
				for (var i = 0, l = bounds.length; i < l; i++) {
					//生成行政区划polygon
					var polygon = new AMap.Polygon({
						map: mapObj,
						strokeWeight: 1,
						strokeColor: '#CC66CC',
						fillColor: '#CCF3FF',
						fillOpacity: 0.7,
						path: bounds[i]
					});
					polygons.push(polygon);
				}
				mapObj.setFitView();//地图自适应
			}
		}

		var list = e.districtList || [],
				subList = [], level, nextLevel;
		if (list.length >= 1) {
			subList = list[0].districtList;
			level = list[0].level;
		}

		//清空下一级别的下拉列表
		if (level === 'province') {
			nextLevel = 'city';
			citySelect.innerHTML = '';
			districtSelect.innerHTML = '';
		} else if (level === 'city') {
			nextLevel = 'district';
			districtSelect.innerHTML = '';
		} 

		if (subList) {
			var contentSub =new Option('');
			for (var i = 0, l = subList.length; i < l; i++) {
				var name = subList[i].name;
				var levelSub = subList[i].level;
				var cityCode = subList[i].citycode;
				if(i==0){
					document.querySelector('#' + levelSub).add(contentSub);
				}
				contentSub=new Option(name);
				contentSub.setAttribute("value", levelSub + '|' + cityCode);
				document.querySelector('#' + levelSub).add(contentSub);
			}
		}
	}
}

function search(obj) {
	//清除地图上所有覆盖物
	for (var i = 0, l = polygons.length; i < l; i++) {
		polygons[i].setMap(null);
	}

	var option = obj[obj.options.selectedIndex];
	var arrTemp = option.value.split('|');
	var level = arrTemp[0];//行政级别
	citycode = arrTemp[1];// 城市编码
	var keyword = option.text; //关键字
	district.setLevel(level); //行政区级别
	//行政区查询
	district.search(keyword, function(status, result) {
		getData(result);
	});
}