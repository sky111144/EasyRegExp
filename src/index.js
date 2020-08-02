class EasyRegExp {
    constructor () {}

    types = {
        FIRST_DOMAIN: /([a-zA-Z]{2,18})/,
        SECOND_DOMAIN: /^([a-zA-Z0-9])([a-zA-Z0-9]|\-)+([a-zA-Z0-9])$/,
        EMAIL: /^([a-zA-Z0-9])([a-zA-Z0-9]|\_|\-|\.)+([a-zA-Z0-9])$/
    }

    isString (target) {
        return Object.prototype.toString.call(target) === "[object String]";
    }

    isEmail (target) {
        if (this.isString(target)) {
            let partions = target.split("@");

            if (partions.length !== 2) {
                return false;
            }

            let [user, domain] = partions;

            if (domain && domain.length === 0) {
                return false;
            }

            let domains = domain.split(".");

            if (domains.length !== 2) {
                return false;
            }

            let [secondDomain, firstDomain] = domains;

            return this.types.FIRST_DOMAIN.test(firstDomain) && this.types.SECOND_DOMAIN.test(secondDomain) && this.types.EMAIL.test(user);
        } else {
            return false;
        }
    }
}

module.exports = new EasyRegExp();
