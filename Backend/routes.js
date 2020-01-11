//========================================================================================
/*                                                                                      *
 *             Import dependencies and configure express router                         *
 *                                                                                      */
//========================================================================================
const express = require("express"),
  router = express.Router(),
  { celebrate,Segments } = require("celebrate");
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                            Import all the Controllers                                *
 *                                                                                      */
//========================================================================================
let controllerPath = "./Controllers";
const registrationController = require(`${controllerPath}/registration.controller`);
const loginController = require(`${controllerPath}/login.controller`);
const {registerCrime,getCrimeDetails} = require(`${controllerPath}/userCrimeRegistration.controller`)
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                                 Import all the models                                *
 *                                                                                      */
//========================================================================================
let ModelPath = "./Models";
const registrationModel = require(`${ModelPath}/regestration.model`);
const {body} = require(`${ModelPath}/login.model`);
const CrimeRegistrationModel = require(`${ModelPath}/userCrimeRegistration.model`)
//########################################################################################

//========================================================================================
/*                                                                                      *
 *                             Configure all the routes here                            *
 *                                                                                      */
//========================================================================================

router.post("/register", celebrate(registrationModel), registrationController);
router.post("/login", celebrate({[Segments.BODY]:body}), loginController);
router.post('/crime-register',celebrate(CrimeRegistrationModel),registerCrime)
router.get('/crime-register/:id',getCrimeDetails)
//########################################################################################

module.exports = router;
