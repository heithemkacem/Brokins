const express = require('express')
const path = require('path');
const router = express.Router()
const {
    signUp,
    signIn,
    verifEmail,
    verifiedPage,
    requestResetPassword,
    resetPassword,

} = require('../controllers/userController')
const { changePassword } = require('../controllers/changePassword')
const {getUser} = require('../controllers/getUser')
const {getContract} = require('../controllers/getContract')
const { sendContact } = require('../controllers/sendContact')
const { sendReclamation } = require('../controllers/sendReclamation')
const { updateUser } = require('../controllers/updateUser')
const multer = require('multer');
const { getAllFiles, downloadIt } = require('../controllers/uploadDocuments');
const { getContractNumbers } = require('../controllers/getContractNumbers');
const { getDevis } = require('../controllers/getDevis');
const { getComparatif } = require('../controllers/getComparatif');
const { getDevisNumbers } = require('../controllers/getDevisNumbers');
const { getComparatifNumber } = require('../controllers/getComparatifNumber');



router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/verify/:userId/:uniqueString', verifEmail)
router.get('/verified', verifiedPage)
router.post('/requestPasswordReset', requestResetPassword)
router.post('/resetPassword', resetPassword)
    /* router.post('/updateData/:id', updateProfile) */ // TOOO DDOOOOOO YARHAM WELDIK CHOUFELNA HALL M3AHA HEDHI 
router.post('/changePassword/:id', changePassword)
router.get('/user/:id', getUser)
router.get('/contract/:id', getContract)
router.get('/contractdevis/:id', getDevis)
router.get('/contractcomparatif/:id', getComparatif)
router.get('/contract/:id', getContract)
router.get('/contractnumber/:id', getContractNumbers)
router.get('/devisnumber/:id', getDevisNumbers)
router.get('/comparatifnumber/:id', getComparatifNumber)
router.put('/updateUser/:id', updateUser)
router.post('/sendContact', sendContact)
router.post('/sendReclamation', sendReclamation)

// HANDLING FILE UPLOAD

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, cb) {
            cb(null, './files');
        },
        filename(req, file, cb) {
            cb(null, `${new Date().getTime()}_${file.originalname}`);
        }
    }),
    limits: {
        fileSize: 1000000 // max file size 1MB = 1000000 bytes
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
            return cb(
                new Error(
                    'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
                )
            );
        }
        cb(undefined, true); // continue with upload
    }
});

router.post('/upload', upload.single('file'), async(req, res) => {
        try {
            const { title, description } = req.body;
            const { path, mimetype } = req.file;
            const file = new File({
                title,
                description,
                file_path: path,
                file_mimetype: mimetype
            });
            await file.save();
            res.send('file uploaded successfully.');
        } catch (error) {
            res.status(400).send('Error while uploading file. Try again later.');
        }
    },
    (error, req, res, next) => {
        if (error) {
            res.status(500).send(error.message);
        }
    }
);

router.get('/getAllFiles', getAllFiles)
router.get('download/:id', downloadIt)





module.exports = router