const Course = require('../models/Course')
const {multipleMongooseToObject} = require('../../util/mongoose')
class MeController {

    // [GET] /stored/courses
    storedCourses(req, res, next) {
        //select all Course Model from db
        Course.find({})
            .then((courses) => {
                res.render('me/storedCourses', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch((err) => next(err))
    }

    // [GET] /bin/courses
    deletedCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/deletedCourses', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch((err) => next(err))
    }
}

module.exports = new MeController();
