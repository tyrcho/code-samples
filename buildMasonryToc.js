var findTitle;

$("h1:first").after("<div id='tags' class='masonry'/>");

$("h1:first").after("<div id='toc'/>");

$("h2").each(function (i, h) {
    var a, name;
    name = $(h).text().trim();
    $(h).before("<br style='clear:both;'/><a href='#" + name + "' id='" + name + "'/>");
    a = $(h).prev();
    $(h).detach();
    return $(h).appendTo($(a));
});

findTitle = function (elt) {
    var h2;
    h2 = $(elt).parent().prevAll("a:first()");
    if (h2.text()) {
        return h2;
    } else {
        return findTitle($(elt).parent());
    }
};

$("a:contains('#')").each(function (i, a) {
    var h2, name, title, titleText;
    title = findTitle(a);
    name = a.innerText.replace("#", "");
    if ($("#" + name).length === 0) {
        $("#tags").append("<div id='" + name + "' class='item'><h2><a href='" + this.innerText + "'>" + this.innerText + "</a></h2> <div id='content-" + name + "'class='content-item'/></div>");
    } else {
        $("#" + name);
    }
    titleText = $(title).text();
    h2 = $("#content-" + name);
    return h2.append("<a href='#" + titleText + "'>" + titleText + "</a><br/>");
});

$("#content").children("a").each(function (i, a) {
    var style = i % 2 ? "odd" : "even";
    return $(a).nextUntil("a").addBack().wrapAll("<div class='" + style + "'>");
});


window.setTimeout(function () {
    container = document.querySelector('.masonry');
    msnry = new Masonry(container, {
        itemSelector: '.item'
    });
}, 100);
