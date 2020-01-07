// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { params } = context
    context.data = {
      name: params.file.filename,
      contentType: params.file.mimetype,
      originalName: params.file.originalname,
      url: generateFileUrl(params.file),
      createdBy: params.user.id
    };
    return context;
  };
};

const generateFileUrl = file => {
  let url = file.path.split('/')
  url.shift()
  url = url.reduce((url, path) => {
    return url + '/' + path
  }, '')
  return url
}
