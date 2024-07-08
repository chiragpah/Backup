const express = require("express")
const { getCoursesByIds, getComments, uploadCourse, editCourse, getSingleCourse, getAllCourses, getCourseByUser, addComment, addReply, addReview, getAdminAllCourses, addReplyToReview, deleteCourse, uploadVideo } = require("../controllers/course.controller");
const { isAuthenticated, authorizeRoles } = require("../middleware/auth");
const courseRouter = express.Router();
const multer = require("multer")

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    // console.log("hii");
    cb(null, 'upload/'); // Where to store the uploaded files
  },
  filename: function (req, file, cb) {
    // Customize filename if needed
    cb(null, file.originalname);
  }
});

// Init upload
const upload = multer({
  storage: storage, fileFilter: function (req, file, cb) {
    if (file.mimetype.startsWith('image/jpeg') || file.mimetype.startsWith('video/mp4')) {
      cb(null, true);
    } else {
      cb(new Error('Only JPEG files and mp4 are allowed!'), false);
    }
  }
})



console.log(isAuthenticated);
courseRouter.post("/create-course", isAuthenticated, authorizeRoles("admin"), upload.any(), uploadCourse);
courseRouter.patch("/edit-course/:id", isAuthenticated, authorizeRoles("admin"), upload.any(), editCourse);
courseRouter.get("/get-course/:id", getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
// courseRouter.get('/courses/ids', getCoursesByIds);
courseRouter.get("/get-admin-courses", getAdminAllCourses)

courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseByUser);
courseRouter.put("/add-comment", isAuthenticated, addComment);
courseRouter.put("/add-reply", isAuthenticated, addReply);
courseRouter.put("/add-review/:id", isAuthenticated, addReview);
// courseRouter.put()
courseRouter.put("/add-reply-review", isAuthenticated, authorizeRoles("admin"), addReplyToReview);
courseRouter.get("/get-comments", getComments);
courseRouter.delete("/delete-course/:id", isAuthenticated, authorizeRoles("admin"), deleteCourse);
courseRouter.post("/upload-video", upload.single('video'), uploadVideo)
courseRouter.get('/user-course', isAuthenticated, getCoursesByIds)
module.exports = courseRouter