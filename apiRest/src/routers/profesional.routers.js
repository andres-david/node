const { Router } = require("express");
const router = Router();
const profesionalCtrl = require("../controller/profesional.controller");

router.get( "/", profesionalCtrl.getStart );

router.get( "/profesional", profesionalCtrl.getProfesional );

// router.get( "/profesional/:id", profesionalCtrl.getProfesionalParams );

router.post( "/profesional", profesionalCtrl.postProfesional );

router.put( "/profesional", profesionalCtrl.putProfesional );

router.delete( "/profesional", profesionalCtrl.deleteProfesional );


module.exports = router;