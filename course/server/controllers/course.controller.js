const CourseModel = require("../models/course.model")
const userModel = require("../models/user.model")
const ErrorHandler = require("../utils/ErrorHandler");

const { createCourse, getAllCoursesService, findCoursesByIds } = require("../services/course.service");
const redis = require("../utils/redis")
const mongoose = require("mongoose")
const sendMail = require("../utils/sendMail")
const ejs = require("ejs")
const path = require("path")
const multer = require("multer")
const cloudinary = require("cloudinary")
const notificationModel = require("../models/notification.model");
const Announcement = require('../models/announcement.model');
const { log } = require("console");

const deleteAnnouncementById = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Check if the announcement exists
        const announcement = await Announcement.findById(id);
        if (!announcement) {
            return res.status(404).json({ error: 'Announcement not found' });
        }

        // Delete the announcement from the database
        await announcement.deleteOne();

        return res.status(200).json({ message: 'Announcement deleted successfully' });
    } catch (error) {
        console.error('Error deleting announcement:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getallannoucement = async (req, res, next) => {
    try {
        const announcements = await Announcement.find();
        res.json(announcements);
    } catch (err) {
        console.error('Error fetching announcements:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const uploadAnnouncement = async (req, res, next) => {
    console.log("we have the request as ")
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: 'announcements'
        });

        const newAnnouncement = new Announcement({
            title: req.body.title,
            launchDate: req.body.launchDate,
            description: req.body.description,
            thumbnailUrl: result.secure_url
        });
        console.log("we got the data " + newAnnouncement)

        await newAnnouncement.save();

        return res.status(201).json({ message: 'Announcement created successfully', announcement: newAnnouncement });
    } catch (error) {
        console.error('Error uploading announcement:', error);
        return res.status(500).json({ error: 'Error uploading announcement' });
    }
};



const uploadCourse = async (req, res, next) => {
    try {

        // console.log("in upload", req.body);
        videoArray = [];
        const data = req.body;

        // console.log(req.files);
        const files = req.files;


        for (const file of files) {
            if (file.mimetype.startsWith('image')) {
                const mycloud = await cloudinary.v2.uploader.upload(file.path, {
                    folder: "profile"
                });
                data.thumbnail = {
                    public_id: mycloud.public_id,
                    url: mycloud.secure_url
                }
            }
            // console.log(data.thumbnail);

        }



        if (files) {
            console.log("Hello I am Inside Files");

            console.log("in loop", files);
            let videoIndex = 0; // Initialize video index

            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.mimetype.startsWith('image')) {
                    // Skip image files
                    continue;
                }

                // Process video files
                console.log("in cloud");
                const mycloud = await cloudinary.v2.uploader.upload(file.path, {
                    resource_type: "video",
                    folder: "courses"
                });

                // Ensure courseData is initialized
                if (!data.courseData) {
                    data.courseData = [];
                }

                // Save videoUrl to courseData
                if (videoIndex < data.courseData.length) {
                    // Save video at the specific index
                    data.courseData[videoIndex].videoUrl = {
                        public_id: mycloud.public_id,
                        url: mycloud.secure_url
                    };
                } else {
                    // Save video at the end of the array
                    data.courseData.push({
                        videoUrl: {
                            public_id: mycloud.public_id,
                            url: mycloud.secure_url
                        }
                    });
                }

                // Increment videoIndex for the next video
                videoIndex++;
            }
            // videoUrl:videoArray
            // const user = await userModel.findById(req.user?._id);
            console.log("admin", req.user);

            console.log("Upload success");
            const user = await userModel.findById(req.user?._id);
            const _id = await createCourse(data, user, res, next);
            console.log("thisis id", _id);



        }
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
}

const getCoursesByIds = async (req, res) => {

    const userCourseList = req.user?.courses;
    // console.log(userCourseList);
    // console.log("ewartfewrfwefwe");

    const course = await CourseModel.find();




    const findCoursesByIds = (courseIds, courses) => {
        const matchedCourses = [];

        courseIds.forEach(courseIdObj => {

            const courseId = courseIdObj._id;
            const course = courses.find(courseItem => courseItem._id == courseId)
            if (course) {
                matchedCourses.push(course);
            }
        });

        return matchedCourses;
    };
    const matchedCourses = findCoursesByIds(userCourseList, course);
    console.log(matchedCourses.length);
    res.status(201).json({
        success: true,
        matchedCourses
    });


};

const editCourse = (async (req, res, next) => {
    try {
        const data = req.body;

        if (req.files) {
            // console.log("hii");
            for (const file of req.files) {
                videoIndex = 0
                // await cloudinary.v2.uploader.destroy(course.thumbnail);
                if (file.mimetype.startsWith('image')) {
                    const mycloud = await cloudinary.v2.uploader.upload(file.path, {
                        folder: "courses",
                    })

                    data.thumbnail = {
                        public_id: mycloud.public_id,
                        url: mycloud.secure_url,
                    };

                    console.log(data.thumbnail);
                }
                if (file.mimetype.startsWith('video')) {
                    const indexStart = file.fieldname.indexOf('[') + 1;
                    const indexEnd = file.fieldname.indexOf(']');
                    videoIndex = parseInt(file.fieldname.substring(indexStart, indexEnd));
                    console.log("index", videoIndex);

                    // console.log(file);
                    const mycloud = await cloudinary.v2.uploader.upload(file.path, {
                        resource_type: "video",
                        folder: "courses"
                    });

                    // Ensure courseData is initialized
                    // if (!data.courseData) {
                    //     data.courseData = [];
                    // }


                    if (data.courseData[videoIndex]) {
                        console.log(videoIndex, data.courseData.length);
                        // Save video at the specific index
                        data.courseData[videoIndex].videoUrl = {
                            public_id: mycloud.public_id,
                            url: mycloud.secure_url
                        };
                        // console.log(data.courseData);
                        // }

                    }

                };
            }
            // }
        }
        console.log(data);
        const courseId = req.params.id;
        const course = await CourseModel.findByIdAndUpdate(
            courseId,
            {
                $set: data,
            },
            { new: true }
        );
        await redis.set(courseId, JSON.stringify(course)); // update course in redis
        res.status(201).json({
            success: true,
            course,
        });
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
})
//WITHOUT PURCHASE LOGIC FOR PARTICULAR 
const getSingleCourse = (async (req, res, next) => {
    try {
        const courseId = req.params.id;

        const isCacheExist = await redis.get(courseId);

        if (isCacheExist) {

            const course = JSON.parse(isCacheExist);
            res.status(200).json({
                success: true,
                course,
            });
        }
        else {
            const course = await CourseModel.findById(req.params.id)

            await redis.set(courseId, JSON.stringify(course), "EX", 604800); // 7days

            res.status(200).json({
                success: true,
                course
            });
        }
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
});
//WITHOUT PURCHASE LOGIC 
const getAllCourses = (async (req, res, next) => {
    try {
        const courses = await CourseModel.find().select(
            "-courseData.videoUrl -courseData.suggestion -courseData.question -courseData.links"
        );

        res.status(200).json({
            success: true,
            courses
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
});
// get courses for valid user
const getCourseByUser = (async (req, res, next) => {
    try {
        console.log("In Course");
        const userCourseList = req.user?.courses;
        console.log(req.user.courses);
        const courseId = req.params.id;

        console.log("hi", courseId);
        console.log("hii", userCourseList);

        const courseExists = userCourseList?.find(
            (course) => course._id.toString() === courseId
        );
        console.log(courseExists);

        if (!courseExists) {

            return next(
                new ErrorHandler("You are not eligible to access this course", 404)
            );
        }

        const course = await CourseModel.findById(courseId);

        const content = course?.courseData;
        console.log(content);

        res.status(200).json({
            success: true,
            content,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}
);

//add comment in course
const addComment = (async (req, res, next) => {
    console.log("in try");
    try {
        const { comment, courseId, contentId } = req.body;
        const course = await CourseModel.findById(courseId);

        if (!mongoose.Types.ObjectId.isValid(contentId)) {
            return next(new ErrorHandler("Invalid content id", 400));
        }

        const couseContent = course?.courseData?.find((item) =>
            item._id.equals(contentId)
        );

        if (!couseContent) {
            return next(new ErrorHandler("Invalid content id", 400));
        }
        console.log("validationsuccess");
        // create a new comment object
        const newComment = {
            user: req.user,
            comment,
            commentReplies: [],
        };

        // add this comment to our course content
        couseContent.comments.push(newComment);

        await notificationModel.create({
            user: req.user,
            title: "New Comment Received",
            message: `You have a new Comment in ${couseContent.title}`,
        });

        // save the updated course
        await course?.save();

        res.status(200).json({
            success: true,
            course,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}
);
//add reply to the comment  


const addReply = (async (req, res, next) => {
    try {

        const { reply, courseId, contentId, commentId } = req.body;
        console.log(reply, courseId);
        const course = await CourseModel.findById(courseId);

        if (!mongoose.Types.ObjectId.isValid(contentId)) {
            return next(new ErrorHandler("Invalid content id", 400));
        }

        const couseContent = course?.courseData?.find((item) =>
            item._id.equals(contentId)
        );

        if (!couseContent) {
            return next(new ErrorHandler("Invalid content id", 400));
        }
        //searching comment in array
        const comment = couseContent?.comments?.find((item) =>
            item._id.equals(commentId)
        );

        if (!comment) {
            return next(new ErrorHandler("Invalid comment id", 400));
        }


        // create a new reply object
        const newReply = {
            user: req.user,
            reply,
            //   createdAt: new Date().toISOString(),
            //   updatedAt: new Date().toISOString(),
        };

        // add this reply to our course content
        comment.commentReplies.push(newReply);

        await course?.save();

        if (req.user?._id === comment.user._id) {
            //create a notification
            await notificationModel.create({
                user: req.user,
                title: "New Reply Received",
                message: `You have a new reply in ${couseContent.title}`,
            });

        }


        const data = {
            name: comment.user.name,
            title: couseContent.title,
        };
        console.log(comment.user.email);
        // const html = await ejs.renderFile(path.join(__dirname, "../mails/comment-replay.ejs"), data);

        try {
            // await sendMail({
            //   email: comment.user.email,
            //   subject: "Comment Reply",
            //   template: "comment-reply.",
            //   data,
            //   html
            // });
            res.status(200).json({
                success: true,
                course,
            });
        } catch (error) {

            return next(new ErrorHandler(error.message, 500));

        }
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
});
const getComments = async (req, res, next) => {
    console.log("we are inside the get comments")
    try {
        const { courseId, contentId } = req.query; // Use req.query to get parameters from the query string

        const course = await CourseModel.findById(courseId);


        if (!course) {
            return next(new ErrorHandler('Course not found', 404));
        }

        const content = course.courseData.find((item) => item._id.equals(contentId));

        if (!content) {
            return next(new ErrorHandler('Content not found', 404));
        }

        const comments = content.comments;

        console.log("we are inside the alfjsalfjsfpoj " + comments)
        res.status(200).json({
            success: true,
            comments,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
};

const addReview = (async (req, res, next) => {
    try {
        const userCourseList = req.user?.courses;

        const courseId = req.params.id;

        // check if courseId already exists in userCourseList based on _id
        const courseExists = userCourseList?.some(
            (course) => course._id.toString() === courseId.toString()
        );

        if (!courseExists) {
            return next(
                new ErrorHandler("You are not eligible to access this course", 404)
            );
        }

        const course = await CourseModel.findById(courseId);

        const { comment, rating } = req.body;

        const reviewData = {
            user: req.user,
            rating,
            comment: comment,
        };

        course?.reviews.push(reviewData);

        let avg = 0;

        course?.reviews.forEach((rev) => {
            avg += rev.rating;
        });

        if (course) {
            course.ratings = (avg / course.reviews.length).toFixed(2); // one example we have 2 reviews one is 5 another one is 4 so math working like this = 9 / 2  = 4.5 ratings
        }

        await course?.save();

        await redis.set(courseId, JSON.stringify(course), "EX", 604800); // 7days

        // create notification
        // await NotificationModel.create({
        //   user: req.user?._id,
        //   title: "New Review Received",
        //   message: `${req.user?.name} has given a review in ${course?.name}`,
        // });


        res.status(200).json({
            success: true,
            course
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}
);



const addReplyToReview = (async (req, res, next) => {
    try {
        const { comment, courseId, reviewId } = req.body;

        const course = await CourseModel.findById(courseId);

        if (!course) {
            return next(new ErrorHandler("Course not found", 404));
        }

        const review = course?.reviews?.find(
            (rev) => rev._id.toString() === reviewId
        );

        if (!review) {
            return next(new ErrorHandler("Review not found", 404));
        }

        const replyData = {
            user: req.user,
            comment,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        if (!review.commentReplies) {
            review.commentReplies = [];
        }

        review.commentReplies?.push(replyData);

        await course?.save();

        await redis.set(courseId, JSON.stringify(course), "EX", 604800); // 7days

        res.status(200).json({
            success: true,
            course,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}
);


const getAdminAllCourses = (async (req, res, next) => {
    try {
        getAllCoursesService(res);
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
});

const deleteCourse = (async (req, res, next) => {
    try {
        const { id } = req.params;

        const course = await CourseModel.findById(id);

        if (!course) {
            return next(new ErrorHandler("course not found", 404));
        }

        await course.deleteOne({ id });

        await redis.del(id);

        res.status(200).json({
            success: true,
            message: "course deleted successfully",
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
});





const uploadVideo = (async (req, res, next) => {

    try {
        const file = req.file;
        console.log(file, "fgh");


        if (file) {
            const mycloud = await cloudinary.v2.uploader.upload(file.path, {
                resource_type: "video",
                folder: "avatars"
            });
            file.video = {
                public_id: mycloud.public_id,
                url: mycloud.secure_url
            }
        }
        console.log(file.video);
    }
    catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
})






module.exports = { deleteAnnouncementById, getallannoucement, uploadAnnouncement, getCoursesByIds, getComments, uploadCourse, editCourse, getSingleCourse, getAllCourses, getCourseByUser, addComment, addReply, addReview, getAdminAllCourses, deleteCourse, addReplyToReview, uploadVideo }