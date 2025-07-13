import db from '../models/index.js';

/**
 * @swagger
 * tags:
 *   - name: Courses
 *     description: Course management
 */

/**
 * @swagger
 * /courses:
 *   post:
 *     summary: Create a new course
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description, TeacherId]
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               TeacherId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Course created
 *       401:
 *         description: Access token is required
 *       403:
 *         description: Invalid or expired token
 */
export const createCourse = async (req, res) => {
    try {
        const course = await db.Course.create(req.body);
        res.status(201).json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * @swagger
 * /courses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema: { type: integer, default: 1 }
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema: { type: integer, default: 10 }
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: List of courses
 *       401:
 *         description: Access token is required
 *       403:
 *         description: Invalid or expired token
 */
export const getAllCourses = async (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
<<<<<<< HEAD
    const sort = req.query.sort ? req.query.sort.toUpperCase() : 'ASC';
    const total = await db.Course.count();
    const populate = req.query.populate ? req.query.populate.split(',') : [];

    if (!['ASC', 'DESC'].includes(sort)){
        return res
            .status(400)
            .json({ error: 'Invalid sort value. Use \"asc\"or\"desc\".'});
    }
    const include = [];
    if (populate.includes('teacherID')){
        include.push({model: db.Teacher, as: 'Teacher'});
    }
    if (populate.includes('studentIds')){
        include.push({ model: db.Student, as: 'Students' });
    }
=======
    const total = await db.Course.count();
>>>>>>> 7ac09cf4b3452f388a78f1c7cea41858bd05fea0
    try {
        const total = await db.Course.count();
        const courses = await db.Course.findAll(
            {
                // include: [db.Student, db.Teacher],
                limit: limit, offset: (page - 1) * limit,
                order: [['creatAt', sort]],
                include: include,
            }
        );
        res.json({
<<<<<<< HEAD
            meta: {
                totalItems: total,
                page: page,
                limit: limit,
                totalPages: Math.ceil(total / limit),
            },
=======
            total: total,
            page: page,
>>>>>>> 7ac09cf4b3452f388a78f1c7cea41858bd05fea0
            data: courses,
            totalPages: Math.ceil(total / limit),
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get a course by ID
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * @swagger
 * /courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Course found
 *       404:
 *         description: Not found
 */
export const getCourseById = async (req, res) => {
    try {
        const course = await db.Course.findByPk(req.params.id, { include: [db.Student, db.Teacher] });
        if (!course) return res.status(404).json({ message: 'Not found' });
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * @swagger
 * /courses/{id}:
 *   put:
 *     summary: Update a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { type: object }
 *     responses:
 *       200:
 *         description: Course updated
 */
export const updateCourse = async (req, res) => {
    try {
        const course = await db.Course.findByPk(req.params.id);
        if (!course) return res.status(404).json({ message: 'Not found' });
        await course.update(req.body);
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

/**
 * @swagger
 * /courses/{id}:
 *   delete:
 *     summary: Delete a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Course deleted
 */
export const deleteCourse = async (req, res) => {
    try {
        const course = await db.Course.findByPk(req.params.id);
        if (!course) return res.status(404).json({ message: 'Not found' });
        await course.destroy();
        res.json({ message: 'Deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
