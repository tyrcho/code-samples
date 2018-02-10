// #tags in xmp block
$("xmp").contents().each (function() {
    this.textContent = this.textContent.replace(/#(\w*)/g, '[#$1](#$1)')
});

// vim replace :
// :%s/\[#\(\w\+\)\](#\1)/#\1/g
