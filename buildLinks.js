// #tags become markdown links in xmp block
$("xmp").contents().each(function () {
    // replace #name with [#name](#name)
    // and #(long name) with [#long name](#long name)
    this.textContent = this.textContent.replace(/#\(([^)]+)\)|#(\w+)/g, '[#$1$2](#$1$2)')
});


// vim replace :
// :%s/\[#\(\w\+\)\](#\1)/#\1/g
