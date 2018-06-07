console.log("Using Aiko flavor");
var options = exports.options = require('./options');

exports.parser = require('./parsers/parser');
exports.refiner = require('./refiners/refiner');

exports.Parser = exports.parser.Parser;
exports.Refiner = exports.refiner.Refiner;
exports.Filter = exports.refiner.Filter;

exports.ParsedResult = require('./result').ParsedResult;
exports.ParsedComponents = require('./result').ParsedComponents;

var Chrono = function(option) {

    option = option || exports.options.casualOption();

    this.option = option;
    this.parsers = new Object(option.parsers);
    this.refiners = new Object(option.refiners);
    var rangeParser = new exports.Parser();
    rangeParser.pattern = () => /this week\b|next week\b|this weekend\b|next weekend\b/i
    rangeParser.extract = (t, r, m, o) => {
        if (m[0] == 'this week') {
            let start_date = new Date(r.getTime())
            start_date.setHours(-24*ref.getDay())
            start_date.setHours(7)
            start_date.setMinutes(0)
            let end_date = new Date(r.getTime())
            end_date.setHours(24*(6-end_date.getDay()))
            end_date.setHours(11)
            end_date.setMinutes(59)
            return new chrono.ParsedResult({
                ref: r, index: m.index, text: m[0],
                start: {
                    month: start_date.getMonth() + 1,
                    day: start_date.getDate(),
                    year: start_date.getFullYear(),
                    hour: start_date.getHours() == 0 ? 12 : start_date.getHours() > 12 ? start_date.getHours() - 12 : start_date.getHours(),
                    minute: start_date.getMinutes(),
                    meridiem: start_date.getHours() >= 12 ? 1 : 0
                },
                end: {
                    month: end_date.getMonth() + 1,
                    day: end_date.getDate(),
                    year: end_date.getFullYear(),
                    hour: end_date.getHours() == 0 ? 12 : end_date.getHours() > 12 ? end_date.getHours() - 12 : end_date.getHours(),
                    minute: end_date.getMinutes(),
                    meridiem: end_date.getHours() >= 12 ? 1 : 0
                }
            })
        }
        if (m[0] == 'this weekend') {
            let end_date = new Date(r.getTime())
            end_date.setHours(24*(6-end_date.getDay()))
            end_date.setHours(11)
            end_date.setMinutes(59)
            let start_date = new Date(end_date.getTime())
            start_date.setHours(0)
            start_date.setHours(-24)
            start_date.setMinutes(0)
            return new chrono.ParsedResult({
                ref: r, index: m.index, text: m[0],
                start: {
                    month: start_date.getMonth() + 1,
                    day: start_date.getDate(),
                    year: start_date.getFullYear(),
                    hour: start_date.getHours() == 0 ? 12 : start_date.getHours() > 12 ? start_date.getHours() - 12 : start_date.getHours(),
                    minute: start_date.getMinutes(),
                    meridiem: start_date.getHours() >= 12 ? 1 : 0
                },
                end: {
                    month: end_date.getMonth() + 1,
                    day: end_date.getDate(),
                    year: end_date.getFullYear(),
                    hour: end_date.getHours() == 0 ? 12 : end_date.getHours() > 12 ? end_date.getHours() - 12 : end_date.getHours(),
                    minute: end_date.getMinutes(),
                    meridiem: end_date.getHours() >= 12 ? 1 : 0
                }
            })
        }
        if (m[0] == 'next week') {
            let start_date = new Date(r.getTime())
            start_date.setHours(-24*ref.getDay())
            start_date.setHours(7)
            start_date.setMinutes(0)
            start_date.setHours(24*7)
            let end_date = new Date(r.getTime())
            end_date.setHours(24*(6-end_date.getDay()))
            end_date.setHours(11)
            end_date.setMinutes(59)
            end_date.setHours(24*7)
            return new chrono.ParsedResult({
                ref: r, index: m.index, text: m[0],
                start: {
                    month: start_date.getMonth() + 1,
                    day: start_date.getDate(),
                    year: start_date.getFullYear(),
                    hour: start_date.getHours() == 0 ? 12 : start_date.getHours() > 12 ? start_date.getHours() - 12 : start_date.getHours(),
                    minute: start_date.getMinutes(),
                    meridiem: start_date.getHours() >= 12 ? 1 : 0
                },
                end: {
                    month: end_date.getMonth() + 1,
                    day: end_date.getDate(),
                    year: end_date.getFullYear(),
                    hour: end_date.getHours() == 0 ? 12 : end_date.getHours() > 12 ? end_date.getHours() - 12 : end_date.getHours(),
                    minute: end_date.getMinutes(),
                    meridiem: end_date.getHours() >= 12 ? 1 : 0
                }
            })
        }
        if (m[0] == 'next weekend') {
            let end_date = new Date(r.getTime())
            end_date.setHours(24*(6-end_date.getDay()))
            end_date.setHours(11)
            end_date.setMinutes(59)
            end_date.setHours(24*7)
            let start_date = new Date(end_date.getTime())
            start_date.setHours(0)
            start_date.setHours(-24)
            start_date.setMinutes(0)
            return new chrono.ParsedResult({
                ref: r, index: m.index, text: m[0],
                start: {
                    month: start_date.getMonth() + 1,
                    day: start_date.getDate(),
                    year: start_date.getFullYear(),
                    hour: start_date.getHours() == 0 ? 12 : start_date.getHours() > 12 ? start_date.getHours() - 12 : start_date.getHours(),
                    minute: start_date.getMinutes(),
                    meridiem: start_date.getHours() >= 12 ? 1 : 0
                },
                end: {
                    month: end_date.getMonth() + 1,
                    day: end_date.getDate(),
                    year: end_date.getFullYear(),
                    hour: end_date.getHours() == 0 ? 12 : end_date.getHours() > 12 ? end_date.getHours() - 12 : end_date.getHours(),
                    minute: end_date.getMinutes(),
                    meridiem: end_date.getHours() >= 12 ? 1 : 0
                }
            })
        }
    }
    this.parsers.push(rangeParser);
};


Chrono.prototype.parse = function(text, refDate, opt) {

    refDate = refDate || new Date();
    opt = opt || {};
    opt.forwardDate = opt.forwardDate || opt.forwardDate;
    
    var allResults = [];

    this.parsers.forEach(function (parser) {
        var results = parser.execute(text, refDate, opt);
        allResults = allResults.concat(results);
    });

    allResults.sort(function(a, b) {
        return a.index - b.index;
    });

    this.refiners.forEach(function (refiner) {
        allResults = refiner.refine(text, allResults, opt);
    });
    
    return allResults;
};


Chrono.prototype.parseDate = function(text, refDate, opt) {
    var results = this.parse(text, refDate, opt);
    if (results.length > 0) {
        return results[0].start.date();
    }
    return null;
};

exports.Chrono = Chrono;
exports.strict = new Chrono( options.strictOption() );
exports.casual = new Chrono( options.casualOption() );

exports.en = new Chrono( options.mergeOptions([
    options.en.casual, options.commonPostProcessing]));

exports.en_GB = new Chrono( options.mergeOptions([
    options.en_GB.casual, options.commonPostProcessing]));

exports.de = new Chrono( options.mergeOptions([
    options.de.casual, options.en, options.commonPostProcessing]));

exports.es = new Chrono( options.mergeOptions([
    options.es.casual, options.en, options.commonPostProcessing]));

exports.fr = new Chrono( options.mergeOptions([
    options.fr.casual, options.en, options.commonPostProcessing]));

exports.ja = new Chrono( options.mergeOptions([ 
    options.ja.casual, options.en, options.commonPostProcessing]));


exports.parse = function () {
    return exports.casual.parse.apply(exports.casual, arguments);
};

exports.parseDate = function () {
    return exports.casual.parseDate.apply(exports.casual, arguments);
};




