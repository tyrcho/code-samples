// #tags become markdown links in xmp block

function buildLinks(content) {
    return content.replace(/#\(([^)]+)\)|#(\w+)/g, '[#$1$2](#$1$2)');
        // replace #name with [#name](#name)
        // and #(long name) with [#long name](#long name)
}

// vim replace :
// :%s/\[#\(\w\+\)\](#\1)/#\1/g
