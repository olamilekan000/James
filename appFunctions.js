const IAS1 = require('./standards/IASs/IAS1/IAS1');//for ias-1
const IAS2 = require('./standards/IASs/IAS2/IAS2');//for ias-2
const IAS7 = require('./standards/IASs/IAS7/IAS7');//for ias-7
const IAS8 = require('./standards/IASs/IAS8/IAS8');//for ias-8
const IAS10 = require('./standards/IASs/IAS10/IAS10');//for ias-10
const IAS11 = require('./standards/IASs/IAS11/IAS11');//for ias-11
const IAS12 = require('./standards/IASs/IAS12/IAS12');//for ias-12
const IAS16 = require('./standards/IASs/IAS16/IAS16');//for ias-16
const IAS18 = require('./standards/IASs/IAS18/IAS18');//for ias-18
const IAS19 = require('./standards/IASs/IAS19/IAS19');//for ias-19
const IAS20 = require('./standards/IASs/IAS20/IAS20');//for ias-20
const IAS21 = require('./standards/IASs/IAS21/IAS21');//for ias-20
const IAS23 = require('./standards/IASs/IAS23/IAS23');//for ias-20
const IAS24 = require('./standards/IASs/IAS24/IAS24');//for ias-20

module.exports = (req, res) => {
	//individual standards
	IAS1(req, res);
	IAS2(req, res); 
	IAS7(req, res);
	IAS8(req, res);
	IAS10(req, res);
	IAS11(req, res);
	IAS12(req, res);
	IAS16(req, res);
	IAS18(req, res);
	IAS19(req, res);
	IAS20(req, res);
	IAS21(req, res);
	IAS23(req, res);
	IAS24(req, res);
	
}