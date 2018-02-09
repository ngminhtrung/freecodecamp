var URL = require('../models/url.model');
var shortid = require('shortid');

exports.create = function(req, res, next) {
    var url = new URL({
        longURL: req.params.longURL,
        shortID: shortid(req.params.longURL),
        shortendURL: ""
    });

    if (!isURL(req.params.longURL)) {

        res.send(`Sorry, your ${req.params.longURL} is not a valid URL.`);

    } else {

           URL.findOne({'longURL': req.params.longURL})
            .exec(function(err, found_duplicatedURL) {
                if (err) {return next(err);}
                // If duplicated
                if (found_duplicatedURL) {
                    res.send(`Sorry, your URL ${req.params.longURL} exists already.`)
                } else {
                    // Ok, no duplicated. Start saving new url into database
                    url.shortendURL = `http://${req.headers.host}/${url.shortID}`;
                    url.save(function(err) {
                        if (err) {return next(err);}
                        const responseString ={
                            originalURL: url.longURL,
                            shortendURL: url.shortendURL,
                        };
                        // url saved. Return JSON;
                        res.json(responseString);
                    })
                }
            })
    }
}

exports.redirectURL = function(req, res, next) {

    URL.findOne({'shortID': req.params.shortID})
        .exec(function(err, found_shortID) {
            if (err) {return next(err);}

            if (found_shortID) {
                res.redirect(found_shortID.longURL);

            } else {
                res.send("Sorry, cannot find your url because of unknown reason!")
            }

        })

}

function isURL(text) {
    const trimmedText = text.replace(/^\s+|\s+$/g, ""); // trim leading and trailing spaces of a string
    // Reference:  # @imme_emosol (54 chars)
    // http://www.perlmonks.org/?node_id=1138848
    const validUrlRegExp = new RegExp("(https?|ftp)://(-\.)?([^\s/?\.#-]+\.?)+(/[^\s]*)?");

    return validUrlRegExp.test(trimmedText);
  };