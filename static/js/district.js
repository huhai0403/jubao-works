var provinceJson = [{name:'北京市'}, {name:'天津市'}, {name:'河北省'}, {name:'山西省'},  {name:'辽宁省'}, {name:'吉林省'}, {name:'黑龙江省'}, {name:'上海市'}, {name:'江苏省'}, {name:'浙江省'}, {name:'安徽省'}, {name:'福建省'}, {name:'江西省'}, {name:'山东省'}, {name:'河南省'}, {name:'湖北省'}, {name:'湖南省'}, {name:'广东省'}, {name:'广西壮族自治区'}, {name:'海南省'}, {name:'重庆市'}, {name:'四川省'}, {name:'贵州省'}, {name:'云南省'},  {name:'陕西省'},   {name:'宁夏回族自治区'}, {name:'内蒙古自治区'}, {name:'青海省'}, {name:'甘肃省'}, {name:'新疆维吾尔自治区'}];
//{name:'西藏自治区'}, {name:'香港特别行政区'}, {name:'澳门特别行政区'}
function getCity(province, callback) {
    AMap.service(["AMap.DistrictSearch"], function() {
        var options = new AMap.DistrictSearch({
        	level : 'province',  
			extensions : 'base',
			subdistrict : 1    
		});

	    (new AMap.DistrictSearch(options)).search(province, function(status, result){
		    var subDistricts = result.districtList[0].districtList;
			var lastCity = subDistricts[subDistricts.length - 1].name.toString();
			if (lastCity.indexOf("郊县") > 0){
				subDistricts.pop();
			}
			callback(province, subDistricts)
	    })
    });
}

function getDistrict(district, callback) {
    AMap.service(["AMap.DistrictSearch"], function() {
		var options = new AMap.DistrictSearch({
        	level : 'city',  
			extensions : 'base',
			subdistrict : 1    
		});

	    (new AMap.DistrictSearch(options)).search(district, function(status, result){
		    var subDistricts = result.districtList[0].districtList;
			callback(district, subDistricts)
	    });
	});
}

function getDistance(src, dst, callback) {
    AMap.service(["AMap.Driving"], function() {
        (new AMap.Driving()).search(src, dst, function(status, result) {
			if (result.info == "OK") {
				callback(parseInt(result.routes[0].distance/1000))
			}
        });
    });
}
