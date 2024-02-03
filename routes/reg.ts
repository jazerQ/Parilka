const Router1 = require("express");
export const router1 = new Router1();
const router3 = new Router1()
import { CoupleController } from "./controllers/couplecont";
let cc = new CoupleController;
router3.post('/', cc.create)
router3.get('/', cc.getAll)
router3.delete('/',cc.delete)
router3.get('/:word', cc.getOne)
router1.use('/couple',router3)


module.exports = router1