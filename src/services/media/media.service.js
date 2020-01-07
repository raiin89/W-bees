// Initializes the `media` service on path `/media`
const { Media } = require('./media.class');
const multer = require('multer')
const createModel = require('../../models/media.model');
const hooks = require('./media.hooks');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname ) //Appending extension
  }
})


const multipartMiddleware = multer({ storage: storage })

module.exports = function (app) {
  const options = {
    name: 'file',
    Model: createModel(app),
    // paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/media',
    multipartMiddleware.single('file'),
    function(req,res,next){
      req.feathers.file = req.file;
      next();
    },
    new Media(options, app)
  );

  // Get our initialized service so that we can register hooks
  const service = app.service('media');

  service.hooks(hooks);
};
