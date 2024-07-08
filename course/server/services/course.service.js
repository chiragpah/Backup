const CourseModel = require("../models/course.model")
const redis = require("../utils/redis")
const userModel = require("../models/user.model")
const createCourse = (async (data, user, res) => {
  const course = await CourseModel.create(data);

  console.log(course);
  if (user) {
    console.log("this is user", user);
    user.courses.push(course._id);
    await redis.set(user._id, JSON.stringify(user));
    await user?.save();
    res.status(201).json({
      success: true,
      course
    })
  } else {
    console.error("User not found or not a valid instance");
  }


  return course._id;
})



const getAllCoursesService = async (res) => {
  const courses = await CourseModel.find().sort({ createdAt: -1 });

  res.status(201).json({
    success: true,
    courses,
  });
};

const findCoursesByIds = async (courseIds) => {
  try {
    const courses = await CourseModel.find({ '_id': { $in: courseIds } });
    return courses;
  } catch (error) {
    throw error;
  }
};

module.exports = { createCourse, getAllCoursesService, findCoursesByIds }