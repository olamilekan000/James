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
const IAS26 = require('./standards/IASs/IAS26/IAS26');//for ias-20
const IAS27 = require('./standards/IASs/IAS27/IAS27');//for ias-20
const IAS28 = require('./standards/IASs/IAS28/IAS28');//for ias-20
const IAS29 = require('./standards/IASs/IAS29/IAS29');//for ias-20
const IAS32 = require('./standards/IASs/IAS32/IAS32');//for ias-20
const IAS33 = require('./standards/IASs/IAS33/IAS33');//for ias-20
const IAS34 = require('./standards/IASs/IAS34/IAS34');//for ias-20
const IAS36 = require('./standards/IASs/IAS36/IAS36');//for ias-20
const IAS37 = require('./standards/IASs/IAS37/IAS37');//for ias-20
const IAS38 = require('./standards/IASs/IAS38/IAS38');//for ias-20
const IAS40 = require('./standards/IASs/IAS40/IAS40');//for ias-20
const IAS41 = require('./standards/IASs/IAS41/IAS41');//for ias-20

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
	IAS26(req, res);
	IAS27(req, res);
	IAS28(req, res);
	IAS29(req, res);
	IAS32(req, res);
	IAS33(req, res);
	IAS34(req, res);
	IAS36(req, res);
	IAS37(req, res);
	IAS38(req, res);
	IAS40(req, res);
	IAS41(req, res);
}