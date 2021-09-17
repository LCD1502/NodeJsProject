const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')

class CourseController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', {course: mongooseToObject(course)})
                console.log(req.params.slug)
                console.log(course)
            })
            .catch(next)
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create')
    }

    // [POST]] /courses/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`
        const newCourse = new Course(formData)
        newCourse.save()
            .then(() => {
                res.redirect('/')
            })
            .catch(err => {

            })
    }

    // [GET] /courses/edit/:id
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course =>  res.render('courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(err => next(err))

    }

    // [PUT] /courses/:id
    // req.params.id = :id in url
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(err => next(err))
    }
}

module.exports = new CourseController();
