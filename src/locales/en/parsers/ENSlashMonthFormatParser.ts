import {Parser, ParsingContext} from "../../../chrono";
import {ParsingComponents} from "../../../results";

const PATTERN = new RegExp('(?<=^|[^\\d/]\\s+|[^\\w\\s])' +
    '([0-9]|0[1-9]|1[012])/([0-9]{4})' +
    '(?=[^\\d/]|$)', 'i');

const MONTH_GROUP = 1;
const YEAR_GROUP = 2;

/**
 * Month/Year date format with slash "/" (also "-" and ".") between numbers
 * - 11/05
 * - 06/2005
 */
export default class ENSlashMonthFormatParser implements Parser {

    pattern(): RegExp {
        return PATTERN;
    }

    extract(context: ParsingContext, match: RegExpMatchArray): ParsingComponents {

        const year = parseInt(match[YEAR_GROUP]);
        const month = parseInt(match[MONTH_GROUP]);

        return context.createParsingComponents()
            .imply('day', 1)
            .assign('month', month)
            .assign('year', year)
    }
}
