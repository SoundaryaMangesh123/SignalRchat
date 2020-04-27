module.exports = function (context, req, messages) {
    context.res.body = messages;
    console.log("type of messafge",typeof messages)
    context.done();
};