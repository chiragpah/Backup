const express = require("express")
const UserControl = require("../controllers/user.controller");
const { isAuthenticated, authorizeRoles } = require("../middleware/auth");

const userRouter = express.Router();
const multer = require("multer")
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    console.log("hii");
    cb(null, 'upload/'); // Where to store the uploaded files
  },
  filename: function (req, file, cb) {
    // Customize filename if needed
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage, fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG files and mp4 are allowed!'), false);
    }
  }
})
console.log(UserControl.forgotPassword);
userRouter.post('/registration', UserControl.registrationUser)
userRouter.post('/forgot-password', UserControl.forgotPassword)
userRouter.post('/activate-user', UserControl.activateUser)
userRouter.post('/login', UserControl.loginUser)
userRouter.get('/logout', isAuthenticated, UserControl.logOutUser)
userRouter.get('/me', isAuthenticated, UserControl.getUserInfo)
userRouter.post('/social-Auth', UserControl.socialAuth)
userRouter.put('/update-user-info', isAuthenticated, UserControl.updateUserInfo)
userRouter.put('/update-user-password', isAuthenticated, UserControl.updateUserPassword)
userRouter.put('/update-user-avatar', isAuthenticated, upload.single('avatar'), UserControl.updateProfilePicture)
userRouter.get('/refreshtoken', UserControl.updateAccessToken)
userRouter.get("/get-users", isAuthenticated, authorizeRoles("admin"), UserControl.getAllUsers)

userRouter.put("/update-user", isAuthenticated, authorizeRoles("admin"), UserControl.updateUserRole);

userRouter.delete("/delete-user/:id", isAuthenticated, authorizeRoles("admin"), UserControl.deleteUser);
module.exports = userRouter;