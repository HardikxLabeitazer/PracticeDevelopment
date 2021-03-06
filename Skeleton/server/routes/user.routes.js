// import express from 'express'
// import { Router } from 'express'
// import userCtrl from '../controller/user.controller'
// import authCtrl from '../controller/auth.controller';

// const router = express.Router()

// router.route('/api/users')
// .get(userCtrl.list)
// .post(userCtrl.create)

// // router.route('/api/users/:userId')
// // .get(userCtrl.read)
// // .put(userCtrl.update)
// // .delete(userCtrl.remove)

// router.route('/api/users/:userId')
// .get(authCtrl.requireSignin,userCtrl.read)
// .put(authCtrl.requireSignin,authCtrl.hasAuthorization,userCtrl.update)
// .delete(authCtrl.requireSignin,authCtrl.hasAuthorization,userCtrl.remove)
// router.param('userId',userCtrl.userByID)



// export default router
import express from 'express'
import userCtrl from '../controller/user.controller'
import authCtrl from '../controller/auth.controller'

const router = express.Router()

router.route('/api/users')
  .get(userCtrl.list)
  .post(userCtrl.create)

router.route('/api/users/name')
         .get(userCtrl.listname)
             



router.route('/api/users/:userId')
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove)

router.param('userId', userCtrl.userByID)

export default router
